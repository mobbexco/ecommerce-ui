import FeaturedInstallmentDetails from "./FeaturedInstallmentDetails";
import { FeaturedInstallment } from "./Interfaces";

export default function FeaturedInstallments({
  bestInstallments
}: {
  bestInstallments: FeaturedInstallment[];
}) {
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
