import { IFeaturedCheckbox } from "./interface";

export default function FeaturedCheckbox({
  referenceTo,
  planChecked,
}: IFeaturedCheckbox) {
  console.log(referenceTo);
  return (
    <div className="mobbex-pc-featured-checkbox-container">
      <label className={`mobbex-pc-featured-checkbox-label ${planChecked ? " " : "mobbex-pc-featured-checkbox-label-disabled"}`}>
        <span className="mobbex-pc-featured-separation-line">|</span>
        <input
          className="mobbex-pc-featured-checkbox"
          type="checkbox"
          disabled={!planChecked}
        />
        <svg
          className={`rounded-star ${planChecked ? " " : "rounded-star-disabled"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13 15"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.4992 12.0223L9.37901 13.6752C9.93975 13.9966 10.5945 13.4768 10.4876 12.7954L9.93759 9.29367L12.2682 6.81516C12.7219 6.33216 12.4721 5.49083 11.8445 5.39125L8.62513 4.88003L7.18558 1.6927C6.90557 1.07249 6.09497 1.07249 5.81496 1.6927L4.3747 4.88003L1.15528 5.39125C0.528488 5.49083 0.277913 6.33216 0.731676 6.81516L3.06223 9.29367L2.51226 12.7954C2.40528 13.4768 3.06008 13.9974 3.62082 13.6752L6.50063 12.0223H6.4992Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Destacar
      </label>
    </div>
  );
}
