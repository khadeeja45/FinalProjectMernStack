import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
class TimeTable extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date }, console.log(this.state));
 
  render() {
    return (
        <div class="panel panel-default">
        <div class="panel-heading main-color-bg">
          <h3 class="panel-title">Users</h3>
        </div>
        <div class="panel-body" id  = "calender_panel_body">
          <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        </div>
  </div>   
    );
  }
}

export default TimeTable;