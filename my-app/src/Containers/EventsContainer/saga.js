import { put, takeEvery } from "redux-saga/effects";

import {
  FETCH_EVENTS_INIT_ACTION,
  FETCH_EVENTS_SUCCESS_ACTION,
  FETCH_EVENTS_FAIL_ACTION,
  FETCH_EVENTTYPES_INIT_ACTION,
  FETCH_EVENTTYPES_SUCCESS_ACTION,
  FETCH_EVENTTYPES_FAIL_ACTION
} from "./action";
import firebase from "../../firebase"
// import { ipConfig } from "../../../config";

function* fetchEvents() {
  // const token = localStorage.getItem("token");
  // try {
  //   const res = yield fetch(`${ipConfig.URL}events`, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`
  //     }
  //   });
  //   if (!res.ok) {
  //     let errJSON = {};
  //     try {
  //       errJSON = yield res.json();
  //     } catch {}
  //     throw Object.assign(res, errJSON);
  //   } else {
  //     const resJSON = yield res.json();
  //     console.log(resJSON);
  //     yield put({
  //       type: FETCH_EVENTS_SUCCESS_ACTION,
  //       payload: resJSON
  //     });
  //   }
  // } catch (err) {
  //   if (err.ok === false) {
  //     yield put({ type: FETCH_EVENTS_FAIL_ACTION, error: err });
  //   } else {
  //   }
  // }



      // const resJSON =  {"test1": "test"};
      // console.log(resJSON);
      // yield put({
      //   type: FETCH_EVENTS_SUCCESS_ACTION,
      //   payload: resJSON
      // });
      try{
        let EventsList = [];
        const itemsRef = firebase.database().ref('Mastersheet');
        itemsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          
          
          for (let item in items) {
            EventsList.push({
              id: items[item].ID,
              title: items[item].Event_Name,
              type: items[item].Type, 
              address: items[item].Address,
              ageGroup: items[item].Agegroup,
              date: items[item].Date,
              eventName: items[item].Event_Name,
              insta: items[item].Event_Host_Insta,
              descript: items[item].Descript, 
              website: items[item].Website,
              start: items[item].Date,
              end: items[item].Date
            });
          }
         
          // this.setState({
          //   items: newState
          // });
  
        });
        //const EventType = {"EventType": EventsList};
        console.log(EventsList);
        yield put({
          type: FETCH_EVENTS_SUCCESS_ACTION,
          payload: EventsList
        });
      }
      catch(err){
        if (err.ok === false) {
          yield put({ type: FETCH_EVENTS_FAIL_ACTION, error: err });
        } else {
        }        
      }

}

function* fetchEventType() {
  // const token = localStorage.getItem("token");
  // try {
  //   const res = yield fetch(`${ipConfig.URL}events/event_types`, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`
  //     }
  //   });
  //   if (!res.ok) {
  //     let errJSON = {};
  //     try {
  //       errJSON = yield res.json();
  //     } catch {}
  //     throw Object.assign(res, errJSON);
  //   } else {
  //     const resJSON = yield res.json();
  //     console.log(resJSON);
  //     yield put({
  //       type: FETCH_EVENTTYPES_SUCCESS_ACTION,
  //       payload: resJSON
  //     });
  //   }
  // } catch (err) {
  //   if (err.ok === false) {
  //     yield put({ type: FETCH_EVENTTYPES_FAIL_ACTION, error: err });
  //   } else {
  //   }
  // }

  // EventTypeList: [
  //   "Bootcamp",
  //   "Charity",
  //   "Charitable auctions",
  //   "Exhibitions",
  //   "Corporate",
  //   "Family",
  //   "Fundraising",
  //   "Holiday",
  //   "Music events",
  //   "Networking events",
  //   "Product launches",
  //   "Sports events",
  //   "Sponsored runs",
  //   "Trade shows"
  // ]

  //const resJSON =  {"EventTypeList": [
  const resJSON =  [
    "Food + Beverage",
    "Charity",
    "Charitable auctions",
    "Exhibitions",
    "Arts / Theater",
    "Festivals / Fair",
    "Fundraising",
    "Holiday",
    "Music / Comedy",
    "Networking events",
    "Product launches",
    "Sports events",
    "Sponsored runs",
    "Trade shows"
    
  ];
  //console.log(resJSON);
  yield put({
    type: FETCH_EVENTTYPES_SUCCESS_ACTION,
    payload: resJSON
  });
}

export function* EventsActionWatcher() {
  yield takeEvery(FETCH_EVENTS_INIT_ACTION, fetchEvents);
  yield takeEvery(FETCH_EVENTTYPES_INIT_ACTION, fetchEventType);
}
