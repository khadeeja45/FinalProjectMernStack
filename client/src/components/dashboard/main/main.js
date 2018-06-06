import React from "react";
import WebsiteOveriew from "./website_overview";
import SecondSection from "./second_section_dashboard";

export default () => {
    return (
        <section className = "main">
          <div className = "container">
            <div className = "row">
               <SideBar/>
               <div class="col-md-9">
               <WebsiteOveriew/>
               <SecondSection/>
               </div>
            </div>
          </div>
        </section>  
    )
}