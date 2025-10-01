// Constants
const queries = {
  pannelsData:
    "FROM CamionEvent SELECT average(numeric(cons_comb)) as avgConsumption, average(numeric(engine_turbocharger__1_turbine_intake_temperature_engine__deg_f_)) AS DifferentialTempEngine, average(numeric(filtro_aceite)) as WorkingDistCommunication, average(numeric(rpm)) as rpm, average(numeric(rpm_obj)) as DesiredRpm, average(numeric(intake_manifold_air_temperature_engine__deg_f_)) as throttlePosEngine, average(numeric(fuel_rail_pressure_engine__psi_)) as fuelPressEngine,average(numeric(fuel_actuator_position_command_engine____)) as groundSpeedTrans, average(numeric(engine_coolant_pump_outlet_pressure__absolute__engine__psi_)) as oilPressEngine, average(numeric(engine_coolant_pump_outlet_temperature_engine__deg_f_)) as coolantTempEngine  facet oht_truck_payload_state_communication_gateway__2___ since 10 minutes ago limit max",
};

export default queries;
