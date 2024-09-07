import * as types from "../types";

const DoctorReducer = (state, action) => {
  if (
    action.type === types.UPDATE_PROFILE_SUCCESS ||
    action.type === types.ADD_PRESCRIPTION_SUCCESS
  ) {
    return {
      ...state,
    };
  } else if (action.type === types.PATIENT_EXISTS_FAILURE) {
    return {
      ...state,
      patientExists: false,
    };
  } else if (action.type === types.PATIENT_EXISTS_SUCCESS) {
    return {
      ...state,
      patientExists: true,
    };
  } else if (action.type === types.GET_MEDICINE_SUCCESS) {
    return {
      ...state,
      medicines: action.payload,
    };
  } else if (action.type === types.GET_RELATIVES_SUCCESS) {
    return {
      ...state,
      relative: action.payload,
    };
  } else if (action.type === types.CLEAR_ERROR) {
    return {
      ...state,
      error: null,
    };
  } else if (action.type === types.CLEAR_PATIENT_EXISTS) {
    return {
      ...state,
      patientExists: null,
    };
  } else if (action.type === types.GET_PRESCRIPTION_SUCCESS) {
    return {
      ...state,
      allPrescription: action.payload,
    };
  } else if (action.type === types.GET_PRESCRIPTION_BY_ID_SUCCESS) {
    return {
      ...state,
      prescription: action.payload,
    };
  } else if (
    action.type ===
      (types.UPDATE_SCHEDULE_SUCCESS ||
        types.UPDATE_PROFILE_FAILURE ||
        types.GET_ALL_MEDICINES_FAILURE ||
        types.UPDATE_SCHEDULE_FAILURE ||
        types.UPDATE_AVAILABILITY_FAILURE ||
        types.ADD_PRESCRIPTION_FAILURE ||
        types.GET_RELATIVES_FAILURE) ||
    types.GET_PRESCRIPTION_FAILURE ||
    types.GET_PRESCRIPTION_BY_ID_FAILURE
  ) {
    return { ...state, error: action.payload };
  } else if (action.type === types.CLEAR_STATE) {
    return {
      ...state,
      prescription: null,
      relative: null,
      allMedicines: null,
      patientExists: null,
      allPrescription: null,
    };
  } else {
    return state;
  }
};

export default DoctorReducer;
