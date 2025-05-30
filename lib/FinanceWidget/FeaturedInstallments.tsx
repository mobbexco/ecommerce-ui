import FeaturedInstallmentDetails from "./FeaturedInstallmentDetails";
import { PaymentSource, FeaturedInstallment } from "./Interfaces";
import { getFeaturedInstallments } from "./functions";

export default function FeaturedInstallments({
  sources
}: { sources: PaymentSource[] }){

  const bestInstallments: FeaturedInstallment[] = getFeaturedInstallments(sources);

  return (
    <div className="financeWidget-featuredInstallments">
      {bestInstallments.map((installment: FeaturedInstallment) => (
        <FeaturedInstallmentDetails
          installment={installment}
          key={installment.uid}
        />
      ))}
    </div>
  );
}
