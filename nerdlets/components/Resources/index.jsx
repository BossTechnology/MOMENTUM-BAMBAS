// Components
import Resource from "./Resource";

// JSON
import llantas from "./data/llantas.json";
import produccion from "./data/produccion.json";
import combustible from "./data/combustible.json";

export default function Resources() {
  return (
    <section className="resources d-flex align-items-start">
      <Resource
        {...combustible}
        total={100}
        unit="Gal/hrs"
        title="Combustible"
      />

      <div className="separator" />

      <Resource
        {...llantas}
        total={80}
        unit="hrs"
        status="low"
        title="Llantas"
      />

      <div className="separator" />

      <Resource {...produccion} total={5} unit="ton/hr" title="Producción" />
    </section>
  );
}
