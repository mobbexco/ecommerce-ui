import FeaturedInstallmentDetails from "./FeaturedInstallmentDetails";
import { FeaturedInstallment } from "./Interfaces";

export default function FeaturedInstallments({
  bestInstallments,
  theme,
}: {
  bestInstallments: FeaturedInstallment[];
  theme?: 'light' | 'dark';
}) {
  return (
    <div className={`${theme === "light" ? "" : "text-white"} grid justify-center items-center font-sans text-left w-auto px-6"`}>
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
