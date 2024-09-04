import { textStylizer } from '../functions';

export default function BestInstallmentDetails({ installment }: any) {
  const [boldNumber, coloredText] = textStylizer(installment.installments);

  return (
    <div className="mb-4">
      <p>
        {boldNumber} {coloredText} de{' '}
        <strong>${installment.installmentValue}</strong>
        {installment.img.map((image: string, index: number) => (
          <span>
            <img
              key={index}
              src={image}
              alt="Card logo"
              className="inline-block bg-mobbexWhite rounded ml-2 p-1 w-10 h-8 object-contain"
            />
          </span>
        ))}
      </p>
    </div>
  );
}
