import FeaturedInstallmentDetails from "./FeaturedInstallmentDetails";
import { PaymentSource, FeaturedInstallment } from "./Interfaces";
import { getFeaturedInstallments } from "./functions";
import spinner from "./img/ring-spinner.svg";

export default function FeaturedInstallments({
  sources,
  error,
}: {
  sources?: PaymentSource[];
  error: Error;
}) {
  
  if (error)
    return (
      <span className="error-mssg">
        Ocurrió un error obteniendo los planes de financiación
        <br />
        Por favor, comuníquese con soporte
      </span>
    );
    
    if (sources?.length) {
      const bestInstallments: FeaturedInstallment[] =
        getFeaturedInstallments(sources);

      return (
        <>
          {bestInstallments.map((installment: FeaturedInstallment) => (
            <FeaturedInstallmentDetails
              installment={installment}
              key={installment.uid}
            />
          ))}
        </>
      );
    }

  return <img className="spinner" src={spinner} alt="spinner" />;
}
