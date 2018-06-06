import React from "react";
import {Link} from "react-router-dom";
export default () => {
    return (
        
    <nav class="navbar navbar-default">
        <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">React Dashboard</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
            <li class="active"><a href="index.html">Dashboard</a></li>
            <li><Link to= "/timetable">Time Table</Link></li>
            <li><Link to ="/">Posts</Link></li>
            <li><Link to = "/users">Users</Link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
            <li><Link to = "/">Welcome, Brad</Link></li>
            <li><Link to = "/">Logout</Link></li>
            </ul>
        </div>
        </div>
    </nav>
    )
}