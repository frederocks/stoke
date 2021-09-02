import React, { Component } from "react";
import { connect } from "react-redux";
import Events from "../../Screens/Events";
import { fetchEvents, fetchEventTypes } from "./action";
import firebase from "../../firebase"

class EventsSection extends Component {
  render() {
    return (
      <Events
        fetchEvents={this.props.fetchEvents}
        eventsList={this.props.EventsList}
        fetchEventTypes={this.props.fetchEventTypes}
        eventTypeList={this.props.EventTypeList}
      />
    );
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('Mastersheet');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      
      let newState = [];
      for (let item in items) {
        newState.push({
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
      console.log(newState);
      this.setState({
        items: newState
      });
    });
  }
}
function bindAction(dispatch) {
  return {
    fetchEvents: () => {
      dispatch(fetchEvents());
    },
    fetchEventTypes: () => {
      dispatch(fetchEventTypes());
    }
  };
}
const mapStateToProps = (state) => ({
  EventsList: state.EventsReducer.EventsList,
  EventTypeList: state.EventsReducer.EventTypeList
});

export default connect(mapStateToProps, bindAction)(EventsSection);
