import { FeaturedInstallment } from "./Interfaces";

export default function FeaturedInstallmentDetails({
  installment,
  theme,
}: {
  installment: FeaturedInstallment;
  theme: "light" | "dark";
}) {
  return (
    <div className="mb-4">
      <p>
        <span>
          <strong>{installment.count}</strong>
        </span>
        {installment.count > 1 ? " cuotas " : " pago "}
        <span className={`${theme === "light" ? "" : "bg-mobbexGrey-Dark"} text-mobbexGreen-light`}>
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
              className="inline-block rounded-[0.70rem] ml-2 w-10 h-8 object-contain"
            />
          </span>
        ))}
      </p>
    </div>
  );
}
