import { stylizeText } from './functions';

export default function FeaturedInstallmentDetails( {installment} : InstallmentDetailsProps) {
  const [boldNumber, coloredText] = stylizeText(installment.installments);

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

interface InstallmentDetailsProps {
  installment: {
    installments: string;
    installmentValue: number | string;
    img: string[];
  };
}