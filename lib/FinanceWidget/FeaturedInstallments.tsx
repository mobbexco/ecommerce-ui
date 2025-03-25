import FeaturedInstallmentDetails from "./FeaturedInstallmentDetails";
import { FeaturedInstallment } from "./Interfaces";

export default function FeaturedInstallments({
  bestInstallments,
  theme,
}: {
  bestInstallments: FeaturedInstallment[];
  theme: 'light' | 'dark';
}) {
  return (
    <div className="financeWidget-featuredInstallments">
      {bestInstallments.map((installment: FeaturedInstallment) => (
        <FeaturedInstallmentDetails
          installment={installment}
          theme={theme}
          key={installment.uid}
        />
      ))}
    </div>
  );
}
