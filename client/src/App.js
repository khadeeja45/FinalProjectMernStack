import React, { Component } from 'react';
import DashBoard from "./components/dashboard/dashboard";
import {Switch, Route} from "react-router-dom";
import Header from "./components/header";
import SideBar from "./components/side_bar/side_bar";
import TimeTable from "./components/time_table";
import Users from "./components/users";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      <section className = "main">
      <div className = "container">
        <div className = "row">
          {/* <SideBar/>             */}
           <Switch>   
             <Route exact path = "/"  component = {DashBoard} />
             <Route exact path = "/timetable"  component = {TimeTable} />
             <Route exact path = "/users"  component = {Users} />
           </Switch>
         </div>
         </div> 
         </section> 
         </div>
          );

  }
}

export default App;
