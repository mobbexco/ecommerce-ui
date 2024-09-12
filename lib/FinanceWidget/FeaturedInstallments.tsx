import FeaturedInstallmentDetails from './FeaturedInstallmentDetails';

export default function FeaturedInstallments({
  bestInstallments,
}: FeaturedInstallmentsProps) {
  return (
    <div className="grid justify-center items-center font-sans text-left dark:text-white w-auto px-6">
      {bestInstallments.map(({ installment }: InstallmentDetailsProps) => (
        <FeaturedInstallmentDetails installment={installment} />
      ))}
    </div>
  );
}

interface FeaturedInstallmentsProps {
  bestInstallments: Array<{
    installment: {
      installments: string;
      installmentValue: number | string;
      img: string[];
    };
  }>;
}

interface InstallmentDetailsProps {
  installment: {
    installments: string;
    installmentValue: number | string;
    img: string[];
  };
}
