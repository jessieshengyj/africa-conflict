import "./Person.css"

function PersonD() {
    return (
        <div className="flex flex-col gap-2">
            {/* Research Question 1 */}
            <div className="name-section">
                <h1 className="title name">Junyao Wang</h1>
                <h2 className="grey-subtitle">Actors and Themes with Conflicts</h2>
            </div>

            <div className="question-section flex flex-col gap-2">
               {/* /!* Research Question 1 *!/ */}
               <div className="section">
                   <h1 className="title">Research Question 1:</h1>
                   <p>
                       Which actors of conflicts in Africa have the most violent tendencies throughout time?
                   </p>
                </div> 

               <div className="iframe-container flex flex-col section">
                   <h2 className="subtitle">Visualization View</h2>
                   <iframe
                       src="/africa-conflict/charts/yao_viz1.html"
                       width="1200"
                       height="600"
                       frameBorder="0"
                       className="iframe-view"
                   ></iframe>
               </div>

               <div className="section">
                   <h2 className="subtitle">Summary of Tasks</h2>
                   <div className="section-sub">
                       <p>
                           The visualization identifies the top 10 actors that are involved with the most fatalities. Patterns can be observed to determine if there are common actors that have violent tendencies.
                       </p>
                       <ul className="list">
                           <li>Identifying top violent actors in each country or as a continent.</li>
                           <li>Exploring trends throughout time (such as if amount of deaths increase or decrease or remain the same)</li>
                       </ul>
                   </div>
               </div>

               {/* /!* Visualization Choices *!/ */}
               <div className="section">
                   <h2 className="subtitle">Visualization Choices and Justification</h2>
                   <div className="section-sub">
                       <p>
                           <strong>Map of Africa</strong> The map helps visualize and isolate geographical areas of interest.
                       </p>
                       <p>
                           <strong>Text Plot:</strong> The plot puts labels on the map through longitude and latitude.
                       </p>
                       <p>
                           <strong>Bar Plot:</strong> The plot clearly lists out a sorted view of the total deaths and the actors that to correspond to it which makes it easy for the user to identify violent conflicts
                       </p>
                   </div>
               </div>

            {/*    /!* Channels *!/*/}
               <div className="section">
                   <h2 className="subtitle">Channels (Map of Africa)</h2>
                   <div className="section-sub">
                       <div>
                           <p><strong>Color:</strong> Shows a nice distinction between countries. The color is displayed conditionally dependent on if the user selects it or not. If the user selects that country, only that country’s color will display and the rest will be grayed out.</p>
                           <p><strong>Tooltip:</strong> Shows the name of each country</p>
                       </div>
                   </div>
               </div>

            {/*    /!* Channels *!/*/}
               <div className="section">
                   <h2 className="subtitle">Channels (Text Plot)</h2>
                   <div className="section-sub">
                       <div>
                           <p><strong>Longitude:</strong> Longitude of the centroid of the country so it is overlaid on the map.</p>
                           <p><strong>Latitude:</strong> Latitude of the centroid of the country so it is overlaid on the map</p>
                           <p><strong>Text:</strong> the name of each country in Africa so that users can tell which country on the map</p>
                       </div>
                   </div>
               </div>

            {/*    /!* Channels *!/*/}
               <div className="section">
                   <h2 className="subtitle">Channels (Bar Plot)</h2>
                   <div className="section-sub">
                       <div>
                           <p><strong>X-Axis:</strong> shows the total deaths of all conflicts the actor has caused.</p>
                           <p><strong>Y-Axis:</strong>The top 10 names of each ACTOR1. This is sorted by the amount of deaths in descending order.</p>
                           <p><strong>Color:</strong> Colored by the ACTOR to show differentiation between the bars instead of just one uniform color. Conflicts may have had different locations and different counter-actors (ACTOR2) so therefore, this information is not shown on the tooltips.</p>
                           <p><strong>Tooltips:</strong> Shows even further clarity on actor 1 and provides the exact total fatalities that actor has caused or been involved with.</p>
                       </div>
                   </div>
               </div>

            {/*    /!* Interactivity *!/*/}
               <div className="section">
                   <h2 className="subtitle">Interactivity</h2>
                   <p><strong>Click Selection:</strong> Each country in Africa is clickable. The unclicked countries are greyed out. So are their names. This also applies changes in the bar chart beside it to show country filtered statistics of violent actors
                   </p>
                   <p><strong>Slider:</strong> The slider slides between years 1997 and 2017 showing just the conflicts that occurred in the given year it’s on.
                   </p>
               </div>

            {/*    /!* Critique *!/*/}
               <div className="section">
                   <h2 className="subtitle">Critique</h2>
                   <div className="section-sub">
                       <p><strong>Strengths:</strong> Allows users to understand historical violent presence in countries if they were to vacation to Africa. It gives them an idea on present violent actors and historical ones.</p>
                       <p><strong>Limitations:</strong> The map is nice but instead of color-coding them by country, it would be better to convert it to a choropleth depicting a shade to represent the amount of deaths occurring in that country (for example, darker = more fatalities and lighter = less). This gives additional information to the viewer right off the top instead of having to look at the chart on the right.</p>
                   </div>
               </div>
            </div>

            {/*/!* Research Question 2 *!/*/}
            <div className="question-section flex flex-col gap-2">
               <div className="section">
                   <h1 className="title">Research Question 2:</h1>
                   <p>
                       What are the most frequent actors and the conflict events they tend to cause?
                   </p>
               </div>

               <div className="iframe-container flex flex-col section">
                   <h2 className="subtitle">Visualization View</h2>
                   <iframe
                       src="/africa-conflict/charts/yao_viz2.html"
                       width="1200"
                       height="550"
                       frameBorder="0"
                       className="iframe-view"
                   ></iframe>
               </div>

            {/*    /!* Summary of Task *!/*/}
               <div className="section">
                   <h2 className="subtitle">Summary of Tasks</h2>
                   <div className="section-sub">
                       <p>
                           The visualization depicts the most frequent conflict initiating actors, the counter-actor, ACTOR2, involved in the conflict and the event that happened.
                       </p>
                       <ul className="list">
                           <li>Identifying most prominent actors and the counter-actor they are likely to have a conflict with.</li>
                           <li>Analyzing which conflict the main actor, ACTOR1, tends to commit</li>
                           <li>Explores prominent actors/conflicts by each country and throughout time.</li>
                       </ul>
                   </div>
               </div>

            {/*    /!* Visualization Choices *!/*/}
               <div className="section">
                   <div className="section-sub">
                       <h2 className="subtitle">Visualization Choices and Justification</h2>
                       <p>
                           <strong>Bar Chart:</strong> Clearly shows a sorted view of top 10 frequent actors and the amount of incidents they are involved with as well as the corresponding actor 2 they most tend to be involved with.
                       </p>
                       <p>
                           <strong>Pie Chart:</strong> Pie charts are good at showing breakdowns of events that happened which informs the user on tendencies that each actor is likely to cause.
                       </p>
                   </div>
               </div>

            {/*    /!* Channels *!/*/}
               <div className="section">
                   <h2 className="subtitle">Channels (Bar Chart)</h2>
                   <div className="section-sub">
                       <div>
                           <p><strong>Position (X-axis):</strong>  Encodes main actor, ACTOR1</p>
                           <p><strong>Position (Y-axis):</strong> Encodes count of incidents on the bar chart</p>
                           <p><strong>Color (by ACTOR 2):</strong> Encodes the corresponding ACTOR2 that the main actor had conflict with</p>
                           <p><strong>Tooltip:</strong> Shows both actor pairs, total incidents that have occurred, and the total fatalities that have occurred </p>
                       </div>
                   </div>
               </div>

            {/*    /!* Channels *!/*/}
               <div className="section">
                   <h2 className="subtitle">Channels (Pie Chart)</h2>
                   <div className="section-sub">
                       <div>
                           <p><strong>Color:</strong> Colors by the event type that occurred with ACTOR1 and ACTOR2. </p>
                           <p><strong>Theta:</strong> Encodes count of that event type that’s occurred on the bar chart</p>
                           <p><strong>Tooltip:</strong> Shows additional information on the type of conflict, the count of records of that conflict and the fatalities that have occurred from that conflict. </p>
                       </div>
                   </div>
               </div>

            {/*    /!* Interactivity *!/*/}
               <div className="section">
                   <h2 className="subtitle">Interactivity</h2>

                   <p><strong>Interaction Selection:</strong> The user is able to select a sub-bar of the type of actor representing the conflict pair between ACTOR1 and ACTOR2. This directly changes and applies a filter to pie chart breaking down the types of conflicts that occurred.</p>
                   <p><strong>Slider:</strong> The slider filters each conflict by the year.</p>
                   <p><strong>Dropdown:</strong> The user can filter by the country using the dropdown.</p>



               </div>

            {/*    /!* Critique *!/*/}
               <div className="section">
                   <h2 className="subtitle">Critique</h2>
                   <div className="section-sub">
                       <p><strong>Strengths:</strong> This informs a tourist on the exact tendencies that each actor pair is likely to arise. It lets the user learn about conflicts that have occurred throughout history and how intense each conflict is (in terms of fatalities).</p>
                       <p><strong>Limitations: </strong>Interactivity is a bit work-intensive (and might require a bit  of dexterity) because the user has to hover above each bar if inquiries about each actor2 want to be made. This may be hard if the bar is very thin.  </p>
                   </div>
               </div>
            </div>

            <div className="question-section flex flex-col gap-2">
               <div className="section">
                   <h1 className="title">Research Question 3:</h1>
                   <p>
                       How are the most prominent actors geographically distributed?
                   </p>
               </div>

               <div className="iframe-container flex flex-col section">
                   <h2 className="subtitle">Visualization View</h2>
                   <iframe
                       src="/africa-conflict/charts/yao_viz3.html"
                       width="1450"
                       height="920"
                       frameBorder="0"
                       className="iframe-view"
                   ></iframe>
               </div>

            {/*    /!* Summary of Tasks *!/*/}
               <div className="section">
                   <h2 className="subtitle">Summary of Tasks</h2>
                   <div className="section-sub">
                       <p>
                           This visualization aims to establish a trend on the geographical distributions of the most prominent actors that cause conflicts in africa.
                       </p>
                       <ul className="list">
                           <li>Exploring geographical distributions of prominent actors throughout time.</li>
                           <li>Analyzing the most conflicted countries.</li>
                           <li>Analyzing the most conflicted countries throughout time. Can one country continually be seen in the top places on the chart?</li>
                       </ul>
                   </div>
               </div>

            {/*    /!* Visualization Choices and Justification *!/*/}
               <div className="section">
                   <h2 className="subtitle">Visualization Choices and Justification</h2>
                   <div className="section-sub">
                       <p>
                           <strong>Map of Africa with Point Markers:</strong> Viewing the point markers on the map ensures that the user understands which regions are the most conflicted.  If the user sees a lot of points in a particular region, the user can click on that region which will reflect analytics in the bar chart.
                       </p>
                       <p>
                           <strong>Bar Chart:</strong> The bar chart is sorted and it allows the user to immediately see the country with the highest conflicts. Once the user has clicked the region of interest from the visualization above, analytics of that country will be filtered on the right with a breakdown of the prominent actors.
                       </p>
                   </div>
               </div>

            {/*    /!* Channels *!/*/}
               <div className="section">
                   <h2 className="subtitle">Channels (Map of Africa)</h2>
                   <div className="section-sub">
                       <div>
                           <p><strong>Opacity: </strong> Opacity is high or low dependent on the condition that the user selects the country or not.
                           </p>
                           <p><strong>Tooltip: </strong>Used to encode name of the country to better inform the user.
                           </p>
                       </div>
                   </div>
               </div>

            {/*    /!* Channels *!/*/}
               <div className="section">
                   <h2 className="subtitle">Channels (Point Markers for the Map)</h2>
                   <div className="section-sub">
                       <div>
                           <p><strong>Longitude: </strong> The longitude of the event that happened
                           </p>
                           <p><strong>Latitude: </strong> The latitude of the event that happened
                           </p>
                           <p><strong>Color: </strong>Colored by the main actor, ACTOR1
                           </p>
                           <p><strong>Tooltip: </strong>Used to encode the name of both actors, the fatalities that occurred, the country, the specific location, and the year that the conflict occurred.
                           </p>
                       </div>
                   </div>
               </div>

            {/*    /!* Interactivity *!/*/}
               <div className="section">
                   <h2 className="subtitle">Interactivity</h2>

                   <p><strong>Selection:</strong> The user can select the country which will grey out the other countries and filter out analytics displayed on the bar chart on the right. This is especially useful in the case that the user sees a dense cluster of points in a specific area.</p>
                   <p><strong>Slider:</strong> Filters by year as the user slides the widget around so that geographical movement of points can be observed throughout time.</p>
               </div>

            {/*    /!* Critique *!/*/}
               <div className="section">
                   <h2 className="subtitle">Critique</h2>
                   <div className="section-sub">
                       <p><strong>Strengths:</strong> Very informative on most common actors, allows the user to explore trends throughout time, and enables the user to click and display analytics on the right if the user sees clusters of points in a specific region. It allows immediate identification of the conflicted country and breaks down the actors seen. This potentially gives better information for the user to plan for safe tourist locations!</p>
                       <p><strong>Limitations: </strong>The bar chart breaks down the actors on the right but cannot further breakdown the actor2 and event type that happened because it is already colored by the ACTOR1.
                       </p>
                   </div>
               </div>
            </div>
        </div>
    );
}

export default PersonD;