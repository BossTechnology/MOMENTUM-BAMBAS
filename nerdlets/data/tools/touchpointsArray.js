const touchpoints = [
  {
    air_filter_1_restrictionengine_psi: {
      TouchpointName: "air_filter_1_restrictionengine_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 0.595
    }
  },
  {
    air_filter_3_restrictionengine_psi: {
      TouchpointName: "air_filter_3_restrictionengine_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 0.682
    }
  },
  {
    ambient_air_temperatureengine_deg_f: {
      TouchpointName: "ambient_air_temperatureengine_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 32.36,
      upper: 89.78
    }
  },
  {
    atmospheric_pressureengine_psi: {
      TouchpointName: "atmospheric_pressureengine_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 8.34,
      upper: 8.702
    }
  },
  {
    auto_lube_pressurechassis_ctrl_psi: {
      TouchpointName: "auto_lube_pressurechassis_ctrl_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 13.343,
      upper: 481.235
    }
  },
  {
    auto_retarder_modebrake_ecm_: {
      TouchpointName: "auto_retarder_modebrake_ecm_",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 57
    }
  },
  {
    brake_cooling_pump_speedbrake_ecm_rpm: {
      TouchpointName: "brake_cooling_pump_speedbrake_ecm_rpm",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 1912
    }
  },
  {
    brake_pump_pressurebrake_ecm_psi: {
      TouchpointName: "brake_pump_pressurebrake_ecm_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 5.947,
      upper: 3152.974
    }
  },
  {
    cab_ventilation_duct_air_temperaturebrake_ecm_deg_f: {
      TouchpointName: "cab_ventilation_duct_air_temperaturebrake_ecm_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 74.66,
      upper: 115.16
    }
  },
  {
    crankcase_pressureengine__h2o: {
      TouchpointName: "crankcase_pressureengine__h2o",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 5.219
    }
  },
  {
    desired_brake_cooling_pump_speedbrake_ecm_rpm: {
      TouchpointName: "desired_brake_cooling_pump_speedbrake_ecm_rpm",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 1760
    }
  },
  {
    desired_engine_speedengine_rpm: {
      TouchpointName: "desired_engine_speedengine_rpm",
      DNA: "Natural",
      Weight: "MED",
      lower: 700,
      upper: 1960
    }
  },
  {
    desired_fuel_rail_pressureengine_psi: {
      TouchpointName: "desired_fuel_rail_pressureengine_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 26106.785
    }
  },
  {
    differential_axle_lube_pressurebrake_ecm_psi: {
      TouchpointName: "differential_axle_lube_pressurebrake_ecm_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 2.176,
      upper: 57.943
    }
  },
  {
    differential_oil_temperaturebrake_ecm_deg_f: {
      TouchpointName: "differential_oil_temperaturebrake_ecm_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 194,
      upper: 204.8
    }
  },
  {
    engine_coolant_pump_outlet_pressure_absoluteengine_psi: {
      TouchpointName: "engine_coolant_pump_outlet_pressure_absoluteengine_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 15.882,
      upper: 81.004
    }
  },
  {
    engine_coolant_pump_outlet_temperatureengine_deg_f: {
      TouchpointName: "engine_coolant_pump_outlet_temperatureengine_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 143.6,
      upper: 183.2
    }
  },
  {
    engine_coolant_temperatureengine_deg_f: {
      TouchpointName: "engine_coolant_temperatureengine_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 167,
      upper: 190.4
    }
  },
  {
    engine_oil_pressure_absoluteengine_psi: {
      TouchpointName: "engine_oil_pressure_absoluteengine_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 8.485,
      upper: 103.92
    }
  },
  {
    engine_oil_pressureengine_psi: {
      TouchpointName: "engine_oil_pressureengine_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 95.507
    }
  },
  {
    engine_oil_temperatureengine_deg_f: {
      TouchpointName: "engine_oil_temperatureengine_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 165.2,
      upper: 197.6
    }
  },
  {
    engine_power_derateengine_: {
      TouchpointName: "engine_power_derateengine_",
      DNA: "Natural",
      Weight: "MED",
      lower: -0.00000000001,
      upper: 0
    }
  },
  {
    engine_speedengine_rpm: {
      TouchpointName: "engine_speedengine_rpm",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 1995.5
    }
  },
  {
    engine_turbocharger_1_turbine_intake_temperatureengine_deg_f: {
      TouchpointName: "engine_turbocharger_1_turbine_intake_temperatureengine_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 203,
      upper: 1279.4
    }
  },
  {
    engine_turbocharger_2_turbine_intake_temperatureengine_deg_f: {
      TouchpointName: "engine_turbocharger_2_turbine_intake_temperatureengine_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 201.2,
      upper: 1254.2
    }
  },
  {
    engine_turbocharger_3_turbine_intake_temperatureengine_deg_f: {
      TouchpointName: "engine_turbocharger_3_turbine_intake_temperatureengine_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 206.6,
      upper: 1263.2
    }
  },
  {
    engine_turbocharger_4_turbine_intake_temperatureengine_deg_f: {
      TouchpointName: "engine_turbocharger_4_turbine_intake_temperatureengine_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 210.2,
      upper: 1275.8
    }
  },
  {
    fuel_actuator_position_commandengine_: {
      TouchpointName: "fuel_actuator_position_commandengine_",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 90
    }
  },
  {
    fuel_consumption_rateengine_galh: {
      TouchpointName: "fuel_consumption_rateengine_galh",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 206.081
    }
  },
  {
    fuel_filter_differential_pressureengine_psi: {
      TouchpointName: "fuel_filter_differential_pressureengine_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 6.164
    }
  },
  {
    fuel_pressureengine_psi: {
      TouchpointName: "fuel_pressureengine_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 24.656,
      upper: 103.702
    }
  },
  {
    fuel_rail_pressureengine_psi: {
      TouchpointName: "fuel_rail_pressureengine_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 27992.275
    }
  },
  {
    fuel_rail_temperatureengine_deg_f: {
      TouchpointName: "fuel_rail_temperatureengine_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 113.18,
      upper: 143.6
    }
  },
  {
    fuel_temperatureengine_deg_f: {
      TouchpointName: "fuel_temperatureengine_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 79.52,
      upper: 120.02
    }
  },
  {
    fuel_transfer_pump_intake_pressure_absoluteengine_psi: {
      TouchpointName: "fuel_transfer_pump_intake_pressure_absoluteengine_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 7.89,
      upper: 14.185
    }
  },
  {
    ground_speedtrans_ctrl_mph: {
      TouchpointName: "ground_speedtrans_ctrl_mph",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 24.5
    }
  },
  {
    intake_manifold_2_air_temperatureengine_deg_f: {
      TouchpointName: "intake_manifold_2_air_temperatureengine_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 49.64,
      upper: 119.84
    }
  },
  {
    intake_manifold_2_pressureengine_psi: {
      TouchpointName: "intake_manifold_2_pressureengine_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: -0.551,
      upper: 41.249
    }
  },
  {
    intake_manifold_air_temperatureengine_deg_f: {
      TouchpointName: "intake_manifold_air_temperatureengine_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 61.16,
      upper: 123.44
    }
  },
  {
    intake_manifold_pressureengine_psi: {
      TouchpointName: "intake_manifold_pressureengine_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 40.582
    }
  },
  {
    left_exhaust_temperatureengine_deg_f: {
      TouchpointName: "left_exhaust_temperatureengine_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 203,
      upper: 1279.4
    }
  },
  {
    left_front_brake_oil_temperaturebrake_ecm_deg_f: {
      TouchpointName: "left_front_brake_oil_temperaturebrake_ecm_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 167,
      upper: 221
    }
  },
  {
    left_front_strut_pressurecommunication_gateway_2_psi: {
      TouchpointName: "left_front_strut_pressurecommunication_gateway_2_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 389.136,
      upper: 1696.651
    }
  },
  {
    left_rear_axle_rpmbrake_ecm_rpm: {
      TouchpointName: "left_rear_axle_rpmbrake_ecm_rpm",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 897
    }
  },
  {
    left_rear_brake_oil_temperaturebrake_ecm_deg_f: {
      TouchpointName: "left_rear_brake_oil_temperaturebrake_ecm_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 168.8,
      upper: 215.6
    }
  },
  {
    left_rear_parking_brake_oil_pressurebrake_ecm_psi: {
      TouchpointName: "left_rear_parking_brake_oil_pressurebrake_ecm_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 7.687,
      upper: 642.227
    }
  },
  {
    left_rear_strut_pressurecommunication_gateway_2_psi: {
      TouchpointName: "left_rear_strut_pressurecommunication_gateway_2_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 209.579,
      upper: 3230.425
    }
  },
  {
    machine_front_tire_weightspeedcommunication_gateway_2_tmph: {
      TouchpointName: "machine_front_tire_weightspeedcommunication_gateway_2_tmph",
      DNA: "Natural",
      Weight: "MED",
      lower: 26.098,
      upper: 149.129
    }
  },
  {
    machine_rear_tire_weightspeedcommunication_gateway_2_tmph: {
      TouchpointName: "machine_rear_tire_weightspeedcommunication_gateway_2_tmph",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 7.146
    }
  },
  {
    machine_working_distancecommunication_gateway_2_miles: {
      TouchpointName: "machine_working_distancecommunication_gateway_2_miles",
      DNA: "Natural",
      Weight: "MED",
      lower: -3384.745,
      upper: 919.539
    }
  },
  {
    maximum_frame_rack_sample_valuecommunication_gateway_2_psi: {
      TouchpointName: "maximum_frame_rack_sample_valuecommunication_gateway_2_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: -2489.137,
      upper: 3134.555
    }
  },
  {
    oil_filter_differential_pressureengine_psi: {
      TouchpointName: "oil_filter_differential_pressureengine_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 8.05,
      upper: 8.05
    }
  },
  {
    payload_cycle_traveling_loaded_distancecommunication_gateway_2_miles: {
      TouchpointName: "payload_cycle_traveling_loaded_distancecommunication_gateway_2_miles",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 3.48
    }
  },
  {
    peak_air_filter_restrictionengine_psi: {
      TouchpointName: "peak_air_filter_restrictionengine_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 0.653
    }
  },
  {
    peak_frame_biascommunication_gateway_2_psi: {
      TouchpointName: "peak_frame_biascommunication_gateway_2_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: -3040.28,
      upper: 3565.752
    }
  },
  {
    percent_engine_load_at_current_engine_speedengine_: {
      TouchpointName: "percent_engine_load_at_current_engine_speedengine_",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 100
    }
  },
  {
    percent_fuel_positionengine_: {
      TouchpointName: "percent_fuel_positionengine_",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 92
    }
  },
  {
    retarder_lever_positionbrake_ecm_: {
      TouchpointName: "retarder_lever_positionbrake_ecm_",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 57.56
    }
  },
  {
    right_exhaust_temperatureengine_deg_f: {
      TouchpointName: "right_exhaust_temperatureengine_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 201.2,
      upper: 1254.2
    }
  },
  {
    right_front_brake_oil_temperaturebrake_ecm_deg_f: {
      TouchpointName: "right_front_brake_oil_temperaturebrake_ecm_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 159.8,
      upper: 221
    }
  },
  {
    right_front_strut_pressurecommunication_gateway_2_psi: {
      TouchpointName: "right_front_strut_pressurecommunication_gateway_2_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 381.304,
      upper: 1483.881
    }
  },
  {
    right_front_to_left_front_strut_differential_pressurecommunication_gateway_2_psi: {
      TouchpointName:
        "right_front_to_left_front_strut_differential_pressurecommunication_gateway_2_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: -949.272,
      upper: 4752.45
    }
  },
  {
    right_rear_axle_rpmbrake_ecm_rpm: {
      TouchpointName: "right_rear_axle_rpmbrake_ecm_rpm",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 897
    }
  },
  {
    right_rear_brake_oil_temperaturebrake_ecm_deg_f: {
      TouchpointName: "right_rear_brake_oil_temperaturebrake_ecm_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 168.8,
      upper: 215.6
    }
  },
  {
    right_rear_parking_brake_oil_pressurebrake_ecm_psi: {
      TouchpointName: "right_rear_parking_brake_oil_pressurebrake_ecm_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 7.832,
      upper: 645.708
    }
  },
  {
    right_rear_strut_pressurecommunication_gateway_2_psi: {
      TouchpointName: "right_rear_strut_pressurecommunication_gateway_2_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 158.236,
      upper: 3226.944
    }
  },
  {
    right_rear_to_left_rear_strut_differential_pressurecommunication_gateway_2_psi: {
      TouchpointName:
        "right_rear_to_left_rear_strut_differential_pressurecommunication_gateway_2_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: -2776.602,
      upper: 4752.45
    }
  },
  {
    right_to_left_exhaust_differential_temperatureengine_deg_f: {
      TouchpointName: "right_to_left_exhaust_differential_temperatureengine_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: -90,
      upper: 58980.598
    }
  },
  {
    secondary_brake_accumulator_pressurebrake_ecm_psi: {
      TouchpointName: "secondary_brake_accumulator_pressurebrake_ecm_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 1.015,
      upper: 3104.677
    }
  },
  {
    secondary_brake_pedal_positionbrake_ecm_: {
      TouchpointName: "secondary_brake_pedal_positionbrake_ecm_",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 0
    }
  },
  {
    service_brake_accumulator_pressurebrake_ecm_psi: {
      TouchpointName: "service_brake_accumulator_pressurebrake_ecm_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 0.435,
      upper: 3084.372
    }
  },
  {
    steering_accumulator_oil_pressurechassis_ctrl_psi: {
      TouchpointName: "steering_accumulator_oil_pressurechassis_ctrl_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 1.45,
      upper: 3529.927
    }
  },
  {
    steering_anglebrake_ecm_deg: {
      TouchpointName: "steering_anglebrake_ecm_deg",
      DNA: "Natural",
      Weight: "MED",
      lower: -34,
      upper: 34
    }
  },
  {
    steering_fluid_temperaturechassis_ctrl_deg_f: {
      TouchpointName: "steering_fluid_temperaturechassis_ctrl_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 167,
      upper: 190.4
    }
  },
  {
    steering_pump_oil_pressurechassis_ctrl_psi: {
      TouchpointName: "steering_pump_oil_pressurechassis_ctrl_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 1.16,
      upper: 3569.378
    }
  },
  {
    system_voltagechassis_ctrl_volts: {
      TouchpointName: "system_voltagechassis_ctrl_volts",
      DNA: "Natural",
      Weight: "MED",
      lower: 17.547,
      upper: 28.082
    }
  },
  {
    tank_fuel_levelchassis_ctrl_: {
      TouchpointName: "tank_fuel_levelchassis_ctrl_",
      DNA: "Natural",
      Weight: "MED",
      lower: 34.75,
      upper: 99.995
    }
  },
  {
    throttle_positionengine_: {
      TouchpointName: "throttle_positionengine_",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 100
    }
  },
  {
    torque_converter_outlet_temperaturetrans_ctrl_deg_f: {
      TouchpointName: "torque_converter_outlet_temperaturetrans_ctrl_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 165.2,
      upper: 208.4
    }
  },
  {
    transmission_input_speedtrans_ctrl_rpm: {
      TouchpointName: "transmission_input_speedtrans_ctrl_rpm",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 2021
    }
  },
  {
    transmission_oil_pressuretrans_ctrl_psi: {
      TouchpointName: "transmission_oil_pressuretrans_ctrl_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 69.11
    }
  },
  {
    transmission_oil_temperaturetrans_ctrl_deg_f: {
      TouchpointName: "transmission_oil_temperaturetrans_ctrl_deg_f",
      DNA: "Natural",
      Weight: "MED",
      lower: 159.8,
      upper: 194
    }
  },
  {
    transmission_output_speed_1trans_ctrl_rpm: {
      TouchpointName: "transmission_output_speed_1trans_ctrl_rpm",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 1131
    }
  },
  {
    transmission_output_speed_2trans_ctrl_rpm: {
      TouchpointName: "transmission_output_speed_2trans_ctrl_rpm",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 1131
    }
  },
  {
    truck_payloadcommunication_gateway_2_ton: {
      TouchpointName: "truck_payloadcommunication_gateway_2_ton",
      DNA: "Natural",
      Weight: "MED",
      lower: 0,
      upper: 425.933
    }
  },
  {
    turbocharger_1_compressor_inlet_pressure_absoluteengine_psi: {
      TouchpointName: "turbocharger_1_compressor_inlet_pressure_absoluteengine_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 7.791,
      upper: 8.77
    }
  },
  {
    turbocharger_3_compressor_inlet_pressure_absoluteengine_psi: {
      TouchpointName: "turbocharger_3_compressor_inlet_pressure_absoluteengine_psi",
      DNA: "Natural",
      Weight: "MED",
      lower: 7.696,
      upper: 8.739
    }
  }
];

export default touchpoints;
