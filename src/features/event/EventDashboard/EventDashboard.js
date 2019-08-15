import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import cuid from "cuid";
import { connect } from "react-redux";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";

class EventDashboard extends Component {
  handleCreateEvent = newEvent => {
    const { createEvent } = this.props;
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    createEvent(newEvent);
  };

  handleUpdateEvent = updatedEvent => {
    const { updateEvent } = this.props;
    updateEvent(updatedEvent);
  };

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
          <h2>Activity Feed</h2>
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
});

export default connect(
  mapState,
  actions
)(EventDashboard);
