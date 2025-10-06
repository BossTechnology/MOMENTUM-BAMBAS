// Components
import Resource from "./Resource";
import FuelModal from "./FuelModal";
import TiresModal from "./TiresModal";

// Hooks
import useResources from "./useResources";

// Utils
import createValidObject from "../../utils/createValidObject";

export default function Resources() {
  const { fuelModal, tiresModal, selectedHexagon } = useResources();

  // Get context fields
  const fuel = createValidObject(selectedHexagon?.context?.fuel);
  const tires = createValidObject(selectedHexagon?.context?.tires);
  const production = createValidObject(selectedHexagon?.context?.production);

  return (
    <section className="resources d-flex align-items-start">
      <Resource
        {...fuel}
        onClickKpi={fuelModal.show}
        title="Combustible"
        unit="Gal/hrs"
      />

      <div className="separator" />

      <Resource
        {...tires}
        onClickKpi={tiresModal.show}
        title="Llantas"
        unit="hrs"
      />

      <div className="separator" />

      <Resource {...production} title="Producción" unit="ton/hr" />

      {fuelModal.isShowing && <FuelModal isShowing onHide={fuelModal.hide} />}

      {tiresModal.isShowing && (
        <TiresModal isShowing onHide={tiresModal.hide} />
      )}
    </section>
  );
}
