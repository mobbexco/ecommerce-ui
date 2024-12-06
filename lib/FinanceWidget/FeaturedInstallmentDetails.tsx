import { FeaturedInstallment } from "./Interfaces";

export default function FeaturedInstallmentDetails({
  installment,
}: {
  installment: FeaturedInstallment;
}) {
  return (
    <div className="mb-4">
      <p>
        <span>
          <strong>{installment.count}</strong>
        </span>
        {installment.count > 1 ? " cuotas " : " pago "}
        <span className="text-mobbexGreen-light dark:text-mobbexGreen-dark">
          {installment.percentage < 1
            ? installment.percentage < 0
              ? "con descuento"
              : "sin interés"
            : ""}
        </span>
        {" de "}
        <strong>${installment.amount}</strong>
        {":"}
        {installment.sources.map((ref: string) => (
          <span key={ref}>
            <img
              src={`https://res.mobbex.com/images/sources/original/${ref}.png`}
              alt="Card logo"
              className="inline-block bg-mobbexWhite rounded ml-2 p-1 w-10 h-8 object-contain"
            />
          </span>
        ))}
      </p>
    </div>
  );
}
