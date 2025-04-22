import { FeaturedInstallment, PaymentSource } from "./Interfaces";
import { Installment } from "./Interfaces";

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
 * Gets featured installments references
 * 
 * @param sources 
 * @returns sorted installments 
 */
export function getFeaturedInstallments(sources: PaymentSource[]) {
  const featuredIntallments: FeaturedInstallment[] = [];
  const processedInstallments = new Set();

  try {
    if (!sources.length) return featuredIntallments;

    const installmentList: Installment[] = sources
      .map((source) => source?.installments?.list || [])
      .flat();

    if (!installmentList.length) return featuredIntallments;

    const groupedInstallments = installmentList.reduce((acc: any[], inst) => {
      const key = `${inst.count}-${inst.totals.financial.percentage}-${inst.totals.installment.amount}`;
      
      if (!processedInstallments.has(key)) {
        const similarInstallments = installmentList.filter(item => 
          item.count === inst.count &&
          item.totals.financial.percentage === inst.totals.financial.percentage &&
          item.totals.installment.amount === inst.totals.installment.amount
        );

        if (similarInstallments.length > 0) {
          // Gets all similar installments references
          const installmentSources = sources
            .filter(source =>
              source.installments?.list &&
              source.installments.list.some(installment => 
                similarInstallments.some(similar => 
                  similar.uid === installment.uid
                )
              )
            )
            .map(source => source.source.reference);

          acc.push({
            amount: Number(inst.totals.installment.amount),
            count: Number(inst.count),
            percentage: Number(inst.totals.financial.percentage),
            sources: installmentSources,
            uid: inst.uid
          });

          processedInstallments.add(key);
        }
      }
      return acc;
    }, []);

    const sortedInstallments = groupedInstallments.sort((a, b) => {
      if (a.percentage !== b.percentage) {
        return a.percentage - b.percentage;
      }
      return b.count - a.count;
    });

    // Gets two best installments
    return sortedInstallments.slice(0, 2);

  } catch (e) {
    console.log(e);
    return featuredIntallments;
  }
}