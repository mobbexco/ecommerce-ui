import FeaturedInstallmentDetails from "./FeaturedInstallmentDetails";
import { PaymentSource, FeaturedInstallment } from "./Interfaces";
import { getFeaturedInstallments, getCustomFeaturedInstallment } from "./functions";
import spinner from "./img/ring-spinner.svg";

export default function FeaturedInstallments({
  sources,
  error,
  uids,
}: {
  sources?: PaymentSource[];
  error: Error;
  uids?: string[];
}) {
  
  if (error){
    return console.log("error", error),
    (
      <span className="error-mssg">
        Ocurrió un error obteniendo los planes de financiación
        <br />
        Por favor, comuníquese con soporte
      </span>
    );
  }
    
    if (sources?.length) {
      const bestInstallments: FeaturedInstallment[] = 
        !uids?.length ?
        getFeaturedInstallments(sources) :
        getCustomFeaturedInstallment(uids, sources);

      return (
        <>
          {bestInstallments.slice(0, 3).map((installment: FeaturedInstallment) => (
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
