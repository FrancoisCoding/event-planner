import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { connect } from "react-redux";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";
import { firestoreConnect } from "react-redux-firebase";
import EventActivity from "../EventActivity/EventActivity";

class EventDashboard extends Component {
  handleDeleteEvent = id => {
    const { deleteEvent } = this.props;
    deleteEvent(id);
  };

  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} deleteEvent={this.handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity />
        </Grid.Column>
      </Grid>
    );
  }
}

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
};

const mapState = state => ({
  events: state.events
  // events: state.firestore.ordered.events
});

export default connect(
  mapState,
  actions
)(firestoreConnect([{ collection: "events" }])(EventDashboard));
