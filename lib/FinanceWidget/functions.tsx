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

export function getFeaturedInstallments(sources: PaymentSource[]) {
  const featuredIntallments: FeaturedInstallment[] = [];

  try {
    if (!sources.length) return featuredIntallments;

    //Get all installments list
    const installmentList: Installment[] = sources
      .map((source) => source?.installments?.list || [])
      .flat();

    //Return if empty
    if (!installmentList.length) return featuredIntallments;

    //Get only 2 featured installments
    for (let i = 0; i < 2; i++) {
      let best: any = { totals: { financial: { percentage: 10000 } } };

      //Get best installment
      (installmentList ?? []).map((inst) => {
        const iPerc = inst?.totals?.financial?.percentage,
          currPerc = best?.totals?.financial?.percentage;

        if (
          iPerc < currPerc ||
          (iPerc == currPerc && inst?.count > best.count)
        ) {
          best = { ...inst };
        }
      });

      //Get sources references for best installment
      const instalmentSources = sources
        .filter(
          (item) =>
            item.installments?.list &&
            item.installments.list.some(
              (installment) => installment.uid === best.uid
            )
        )
        .map((item) => item.source.reference);

      // Add featured installment to list
      featuredIntallments.push({
        amount: Number(best.totals.installment.amount),
        count: Number(best.count),
        percentage: Number(best.totals.financial.percentage),
        sources: instalmentSources,
        uid: best.uid,
      });

      //Delete best installment from installment list
      installmentList.map((installment, i) => {
        if (installment.uid == best.uid) installmentList.splice(i, 1);
      });
    }
  } catch (e) {
    console.log(e);
  }

  return featuredIntallments;
}
