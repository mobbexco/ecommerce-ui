import BestInstallmentDetails from './BestInstallmentDetails';

export default function BestInstallments({ bestInstallmentsData }: any) {
  console.log('bestInstallments', bestInstallmentsData);
  return (
    <div className="grid justify-center items-center font-sans text-left dark:text-white w-auto px-6">
      {bestInstallmentsData.map((installment: any, index: any) => (
        <BestInstallmentDetails key={index} installment={installment} />
      ))}
    </div>
  );
}
