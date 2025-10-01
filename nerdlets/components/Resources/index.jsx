// Components
import Resource from "./Resource";
import FuelModal from "./FuelModal";
import TiresModal from "./TiresModal";

// Hooks
import useResources from "./useResources";

export default function Resources() {
  const { fuelModal, tiresModal, selectedStage } = useResources();

  return (
    <section className="resources d-flex align-items-start">
      <Resource
        {...selectedStage.fuel}
        onClickKpi={fuelModal.show}
        title="Combustible"
        unit="Gal/hrs"
      />

      <div className="separator" />

      <Resource
        {...selectedStage.tires}
        onClickKpi={tiresModal.show}
        title="Llantas"
        unit="hrs"
      />

      <div className="separator" />

      <Resource
        {...selectedStage.production}
        title="Producción"
        unit="ton/hr"
      />

      {fuelModal.isShowing && <FuelModal isShowing onHide={fuelModal.hide} />}

      {tiresModal.isShowing && (
        <TiresModal isShowing onHide={tiresModal.hide} />
      )}
    </section>
  );
}
