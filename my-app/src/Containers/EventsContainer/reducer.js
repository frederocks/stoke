import {
  FETCH_EVENTS_SUCCESS_ACTION,
  FETCH_EVENTTYPES_SUCCESS_ACTION
} from "./action";

const initialState = {
  processing: false,
  error: false,
  EventsList: [
    {
      address: "4247 South Kingshighway Blvd, 2nd floor, St. Louis, MO 63109",
      ageGroup: "21+",
      date: "2021-09-15T09:47:17.456000Z",
      descript: "\n*No cover charge!*\nLive music at The Attic music bar featuring Strings Attached as well as Rockin' Rod McCarron.",
      eventName: "Strings Attached",
      id: 1,
      insta: "theattic_musicbar",
      title: "Strings Attached",
      type: "Music / Comedy",
      website: "https://m.facebook.com/events/122319086667611",
      start: "2021-09-15T09:47:17.456000Z",
      end: "2021-09-15T09:50:17.456000Z"
    },
    {
      address: "897 St. Lous Ave, St. Louis MO 63109",
      ageGroup: "21+",
      date: "2021-09-27T05:00:00.000Z",
      descript: "the party",
      eventName: "Poop check 2011",
      id: 12,
      insta: "Poopman",
      title: "Poop check 2011",
      type: "Food + Beverage",
      start: "2021-09-27T09:47:17.456000Z",
      end: "2021-09-27T09:50:17.456000Z"

    },
    {
      id: 628,
      name: "Music Program",
      event_type: "Sports events",
      start: "2021-09-11T09:47:17.456000Z",
      end: "2021-09-11T09:50:17.456000Z"
    },
    {
      id: 639,
      name: "stoke launch",
      event_type: "Product launches",
      start: "2021-09-12T09:00:00Z",
      end: "2021-09-11T09:30:00Z"
    },
    {
      id: 676,
      name: "Toms lunch",
      event_type: "Product launches",
      start: "2021-09-16T09:00:00Z",
      end: "2021-09-16T09:30:00Z"
    },
    {
      id: 677,
      name: "Fun",
      event_type: "Networking events",
      start: "2021-09-13T09:00:00Z",
      end: "2021-09-13T09:30:00Z"
    }
  ],
  EventTypeList: [
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
  ]
};

export default function EventsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS_ACTION:
       //console.log(action.payload);
      return {
        ...state,
        EventsList: action.payload
      };

    case FETCH_EVENTTYPES_SUCCESS_ACTION:
      return {
        ...state
         //EventTypeList: action.payload
      };
    default:
      // const aa = {...state}; 
      // console.log(aa);
      return {
        ...state
      };
  }
}
