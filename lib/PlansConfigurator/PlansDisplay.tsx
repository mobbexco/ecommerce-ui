export default function PlansDisplay() {
  //logica para renderizar checkbox de planes
  //logica para renderizar estrellas
  return (
    <>
      <span className="mobbex-pc-config-checkbox-title">Selecciona uno de los planes</span>
      <div className="mobbex-pc-config-checkbox-container">
        <label className="mobbex-pc-checkbox-label">
          <input className="mobbex-pc-config-checkbox"type="checkbox" id="box1" value="box1"/>
          Activar todos los planes
        </label>
        <label className="mobbex-pc-checkbox-label">
          <input className="mobbex-pc-config-checkbox"type="checkbox" id="box1" value="box1"/>
          12 cuotas sin interés
        </label>
      </div>
    </>
  );
}