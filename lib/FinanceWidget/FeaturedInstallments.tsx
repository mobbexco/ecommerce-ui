import FeaturedInstallmentDetails from "./FeaturedInstallmentDetails";
import { FeaturedInstallment } from "./Interfaces";

export default function FeaturedInstallments({
  bestInstallments,
}: {
  bestInstallments: FeaturedInstallment[];
}) {
  return (
    <div className="grid justify-center items-center font-sans text-left dark:text-white w-auto px-6">
      {bestInstallments.map((installment: FeaturedInstallment) => (
        <FeaturedInstallmentDetails
          installment={installment}
          key={installment.uid}
        />
      ))}
    </div>
  );
}
