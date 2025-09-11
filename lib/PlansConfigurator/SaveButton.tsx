import { ISaveButton } from "./interface";

export default function SaveButton({ settings }: ISaveButton) {
  return (
    <div className="mobbex-button-container">
      <button
        type="submit"
        title="mobbex-plans-save-button"
        className="mobbex-plans-save-button"
        disabled={settings?.length === 0}
      >
        <span>Confirmar</span>
      </button>
    </div>
  );
}
