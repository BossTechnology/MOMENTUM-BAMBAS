// Components
import FuelModal from "./FuelModal";
import TiresModal from "./TiresModal";
import BusinessObjective from "./BusinessObjective";

// Hooks
import useBusinessObjectives from "./useBusinessObjectives";

export default function BusinessObjectives() {
  const { fuelModal, tiresModal } = useBusinessObjectives();

  return (
    <section className="business-objectives d-flex align-items-start">
      <BusinessObjective
        unit="Gal/hrs"
        title="Combustible"
        onClickPerformanceIndicator={fuelModal.show}
        riskMeter={{
          value: 90, // Posicion del indicador de riesgo
          percentage: 80, // Porcentaje del indicador
        }}
        performanceIndicator={{
          total: 2,
          status: "low", // Se muestra en rojo si es low
        }}
        answersEngine={[
          {
            value: "112",
            status: "high", // Cuando es high, se muestra un flecha hacia arriba en color verde
            label: "Cuentas pagadas",
          },
          {
            value: "568",
            status: "high",
            label: "Productos Adquiridos",
          },
          {
            value: "2h",
            status: "low",
            label: "Tiempo de espera",
          },
        ]}
      />

      <div className="separator" />

      <BusinessObjective
        unit="hrs"
        title="Llantas"
        onClickPerformanceIndicator={tiresModal.show}
        performanceIndicator={{ total: 88, status: "" }}
        riskMeter={{ value: 60, percentage: 80 }}
        answersEngine={[
          {
            value: "4",
            status: "low", // Cuando es low, se muestra un flecha hacia abajo en color rojo
            label: "Citas médicas",
          },
        ]}
      />

      <div className="separator" />

      <BusinessObjective
        unit="ton/hr"
        title="Producción"
        answersEngine={[]}
        riskMeter={{ value: 40, percentage: 30 }}
        performanceIndicator={{ total: 7, status: "" }}
      />

      {fuelModal.isShowing && <FuelModal isShowing onHide={fuelModal.hide} />}

      {tiresModal.isShowing && (
        <TiresModal isShowing onHide={tiresModal.hide} />
      )}
    </section>
  );
}
