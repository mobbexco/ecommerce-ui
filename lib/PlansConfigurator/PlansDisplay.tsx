export default function PlansDisplay() {
  //logica para renderizar checkbox de planes
  return (
    <>
      <span>Selecciona uno de los planes</span>
      <div className="mobbex-pc-config-checkbox">
        <label><input type="checkbox" id="box1" value="box1"/>box1</label>
        <label><input type="checkbox" id="box2" value="box2"/>box2</label>
      </div>
    </>
  );
}