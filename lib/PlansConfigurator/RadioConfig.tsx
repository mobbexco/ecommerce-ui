export default function RadioConfig() {
  return (
    <div className="mobbex-pc-config-radio">
      <div>
        <input
          type="radio"
          name="pc-config-radio"
          className="mobbex-pc-config-radio-not-show"
          id="not_show"
          value="not_show"
          defaultChecked
        />
        <label htmlFor="not_show">No quiero mostrar planes destacados</label>
      </div>
      <div>
        <input
          type="radio"
          name="pc-config-radio"
          className="mobbex-pc-config-radio-show"
          id="show"
          value="show"
        />
        <label htmlFor="show">Quiero mostrar planes destacados</label>
      </div>
    </div>
  );
}
