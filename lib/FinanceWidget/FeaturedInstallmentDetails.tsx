import { formatCurrency } from "./functions";
import { FeaturedInstallment } from "./Interfaces";

export default function FeaturedInstallmentDetails({
  installment,
  theme,
}: {
  installment: FeaturedInstallment;
  theme?: "light" | "dark";
}) {
  return (
    <div className="financeWidget-featuredInstallmentDetails">
      <span>
        Hasta <strong>{installment.count}</strong>
      </span>
      {installment.count > 1 ? " cuotas " : " pago "}
      <span
        className={`${
          theme === "light"
            ? ""
            : "financeWidget-featuredInstallmentDetails.dark"
        } discount`}
      >
        {installment.percentage < 1
          ? installment.percentage < 0
            ? "con descuento"
            : "sin interés"
          : ""}
      </span>
      {" de "}
      <strong>{formatCurrency(installment.amount)}</strong>
      <span className="mbbx-cards-container">
        {installment.sources.map((ref: string) => (
          <span className="card-logo-span" key={ref}>
            <img
              src={`https://res.mobbex.com/images/sources/original/${ref}.png`}
              alt="Card logo"
              className="card-logo"
            />
          </span>
        ))}
      </span>
    </div>
  );
}
