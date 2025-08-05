import { FeaturedInstallment, PaymentSource } from "./Interfaces";
import { Installment } from "./Interfaces";

const currencyFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS'
})

/**
 * Formats a number to a currency string
 */
export function formatCurrency(value: number): string {
  return currencyFormatter.format(value);
}

/**
 * Formats tags accumulating them in a new object
 */
export function formatTags(tags: any) {
  if (!tags || tags.length < 1) {
    return {};
  }
  const formattedTags = tags.reduce((OTags: any, tag: any) => {
    OTags[tag.label] = tag.value;
    console.log("formatTags OTags", OTags);
    return OTags;
  }, {});

  return formattedTags;
}

  /**
   * Gets the best installment options from available payment sources
   *
   * @param paymentSources - Array of payment sources to analyze
   * @returns Sorted array of best installment options (max 2)
   */
  export function getFeaturedInstallments(
    paymentSources: PaymentSource[]
  ): FeaturedInstallment[] {

    if (!hasAvailableInstallments(paymentSources))
      return [];

    const allInstallments = getAllInstallmentsFromSources(paymentSources);

    if (allInstallments.length === 0)
      return [];

    const uniqueInstallments = getUniqueInstallmentsGrouped(
      allInstallments,
      paymentSources
    );

    const sortedInstallments = sortInstallmentsByBestOption(uniqueInstallments);

    return getBestInstallments(sortedInstallments, 2);
  }

  /**
   * Checks if any payment source has installments available
   */
  function hasAvailableInstallments(sources: PaymentSource[]): boolean {
    return (
      sources.length > 0 &&
      sources.some(
        (source : PaymentSource) =>
          source.installments?.enabled && Array.isArray(source.installments?.list) && source.installments.list.length > 0
      )
    );
  }

  /**
   * Extracts all installments from all payment sources
   */
  function getAllInstallmentsFromSources(
    sources: PaymentSource[]
  ): Installment[] {

    // maps filtering available installments and uses flat to simplify the resulting array
    const allInstallments = sources
      .map((source) => source.installments?.list || [])
      .flat();

    return allInstallments;
  }

  /**
   * Groups identical installments and gets their and payment sources
   * 
   * @return FeaturedInstallment[]
   */
  function getUniqueInstallmentsGrouped(
    installments: Installment[],
    sources: PaymentSource[]
  ): FeaturedInstallment[] {

    const processedInstallments = new Set<string>(); // Set() structures data allowing only unique values.
    const result: FeaturedInstallment[] = [];

    for (const installment of installments) {
      const installmentKey = createInstallmentKey(installment);

      if (!processedInstallments.has(installmentKey)) {
        const similarInstallments = findSimilarInstallments(
          installment,
          installments
        );
        
        const installmentSources = findSourcesForInstallments(
          similarInstallments,
          sources
        );

        result.push(createFeaturedInstallment(installment, installmentSources));
        processedInstallments.add(installmentKey);
      }
    }

    return result;
  }

  /**
   * Creates a unique key for an installment based on its characteristics
   * Its used to group and find similar installments
   */
  function createInstallmentKey(installment: Installment): string {
    return `${installment.count}-${installment.totals.financial.percentage}-${installment.totals.installment.amount}`;
  }

  /**
   * Finds all installments with identical characteristics
   */
  function findSimilarInstallments(
    target: Installment,
    allInstallments: Installment[]
  ): Installment[] {
    return allInstallments.filter(
      (installment) =>
        installment.count === target.count &&
        installment.totals.financial.percentage === target.totals.financial.percentage &&
        installment.totals.installment.amount === target.totals.installment.amount
    );
  }

  /**
   * Finds all payment sources that offer the given installments
   */
  function findSourcesForInstallments(
    installments: Installment[],
    sources: PaymentSource[]
  ): string[] {
    const installmentUids = new Set(installments.map((i) => i.uid));

    return sources
      .filter((source) =>
        source.installments?.list?.some((installment) =>
          installmentUids.has(installment.uid)
        )
      )
      .map((source) => source.source.reference);
  }

  /**
   * Creates a FeaturedInstallment object from base installment data
   * a string or array of string can be passed
   */
  function createFeaturedInstallment(
    installment: Installment,
    sources: string | string[]
  ): FeaturedInstallment {
    const source = Array.isArray(sources) ? sources : [sources];

    return {
      amount: Number(installment.totals.installment.amount),
      count: Number(installment.count),
      percentage: Number(installment.totals.financial.percentage),
      sources: source,
      uid: installment.uid,
    };
  }

  /**
   * Sorts installments by best financial option (lower percentage then more installments)
   */
  function sortInstallmentsByBestOption(
    installments: FeaturedInstallment[]
  ): FeaturedInstallment[] {

    const installmentsCopy = [...installments];

    installmentsCopy.sort((a, b) => {
      const percentageDifference = a.percentage - b.percentage;
      if (percentageDifference !== 0)
        return percentageDifference;

      const countDifference = b.count - a.count;

      return countDifference;
    });

    return installmentsCopy;
  }

  /**
   * Returns the top installment options
   */
  function getBestInstallments(
    installments: FeaturedInstallment[],
    quantity : number
  ): FeaturedInstallment[] {
    return installments.slice(0, quantity);
  }

  export async function fetcher(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error en la petición');
    }
    return response.json();
  };

/**
 * Search for installments that match with given uids
 * 
 * @param uids uids to get
 * @param sources sources where uids will be searched
 * 
 * @return FeaturedInstallment[] formated installment with reference included
 */
export function getCustomFeaturedInstallment(
  uids: string[],
  sources: PaymentSource[]
): FeaturedInstallment[] {
  if (!Array.isArray(uids) || uids.length === 0 || !Array.isArray(sources))
    return [];

  const customFeaturedInstallments : Installment[] = sources.flatMap(
    source => getCustomInstallmentsFromSource(uids, source)
  );

  if (customFeaturedInstallments.length == 0)
    console.log("Error : Los IDs ingresados no coinciden con los disponibles. Verifica que se hallan ingresado correctamente");

  if (uids.length != customFeaturedInstallments.length)
    console.log('Error : Uno o mas ID ingresados no coinciden con los disponibles. Verifica que se hallan ingresado correctamente');

  const groupedInstallments = getUniqueInstallmentsGrouped(
    customFeaturedInstallments,
    sources
  );

  return groupedInstallments;
}

/**
 * Retrieve formated installments that match with given uids
 * 
 * @param uids
 * @param source
 * 
 * @return Installment[]
 */
function getCustomInstallmentsFromSource(
  uids: string[],
  source: PaymentSource
): Installment[] {
  let installmentsList = Array.isArray(source.installments?.list)
    ? source.installments.list
    : [];

  const customFeaturedInstallment : Installment[] = installmentsList.filter(
    installment => uids.includes(installment.uid)
  );

  return customFeaturedInstallment;
}