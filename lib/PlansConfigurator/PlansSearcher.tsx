export default function PlansSearcher(installments: string[] | null) {
  //logica para renderizar sources
  return (
    <div className="mobbex-pc-config-search-input">
      <span className="mobbex-pc-config-input-title">Seleccionar planes</span>
      <div className="mobbex-pc-config-input-container">
        <input
          className="mobbex-pc-config-input"
          name="select-plans"
          id="select-plans"
          autoComplete="on"
          placeholder="Buscar"
        />
        <button type="submit" title="plans-search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
