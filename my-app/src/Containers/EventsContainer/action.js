export const FETCH_EVENTS_INIT_ACTION = "FETCH_EVENTS_INIT_ACTION";
export const FETCH_EVENTS_SUCCESS_ACTION =
  FETCH_EVENTS_INIT_ACTION + "_SUCCESS";
export const FETCH_EVENTS_FAIL_ACTION = FETCH_EVENTS_INIT_ACTION + "_ERROR";

export const FETCH_EVENTTYPES_INIT_ACTION = "FETCH_EVENTTYPES_INIT_ACTION";
export const FETCH_EVENTTYPES_SUCCESS_ACTION =
  FETCH_EVENTTYPES_INIT_ACTION + "_SUCCESS";
export const FETCH_EVENTTYPES_FAIL_ACTION =
  FETCH_EVENTTYPES_INIT_ACTION + "_ERROR";

export function fetchEvents() {
  return {
    type: FETCH_EVENTS_INIT_ACTION
    //,payload: item
  };
}
export const getEvents = (item) => {
  return {type: FETCH_EVENTS_SUCCESS_ACTION, payload: item}
}
export function fetchEventTypes() {
  return {
    type: FETCH_EVENTTYPES_INIT_ACTION
  };
}
