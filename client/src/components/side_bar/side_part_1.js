import React from "react";
import {Link} from "react-router-dom";

export default () => {
    return (
   
        <div class="list-group">
          <Link to="/" class="list-group-item active main-color-bg">
            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
          </Link>
          <Link to = "/time_table" class="list-group-item">
          <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> 
          Time Table <span class="badge">12</span></Link>
          <Link href="posts.html" class="list-group-item"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Employees <span class="badge">33</span></Link>
          <Link href="users.html" class="list-group-item"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Projects<span class="badge">203</span></Link>
        </div>

        
     
    )
}