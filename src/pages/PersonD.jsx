import "./Person.css"

function PersonD() {
    return (
        <div className="flex flex-col gap-2">
            {/* Research Question 1 */}
            <div className="name-section">
                <h1 className="title name">Junyao Wang</h1>
                <h2 className="grey-subtitle">Description Here</h2>
            </div>

            {/*<div className="question-section flex flex-col gap-2">*/}
            {/*    /!* Research Question 1 *!/*/}
            {/*    <div className="section">*/}
            {/*        <h1 className="title">Research Question 1:</h1>*/}
            {/*        <p>*/}
            {/*            How do different pairs of actors interact over time in terms of conflict intensity and geographic distribution, and what patterns can we glean from these interactions?*/}
            {/*        </p>*/}
            {/*    </div>*/}

            {/*    <div className="iframe-container flex flex-col section">*/}
            {/*        <h2 className="subtitle">Visualization View</h2>*/}
            {/*        <iframe*/}
            {/*            src="/africa-conflict/charts/rowan_plot1.html"*/}
            {/*            width="1200"*/}
            {/*            height="400"*/}
            {/*            frameBorder="0"*/}
            {/*            className="iframe-view"*/}
            {/*        ></iframe>*/}
            {/*    </div>*/}

            {/*    /!* Summary of Task *!/*/}
            {/*    <div className="section">*/}
            {/*        <h2 className="subtitle">Summary of Tasks</h2>*/}
            {/*        <div className="section-sub">*/}
            {/*            <p>*/}
            {/*                This visualization aims to focus on actor pairs and examine trends in the locations and intensity of their clashes. The tasks involve:*/}
            {/*            </p>*/}
            {/*            <ul className="list">*/}
            {/*                <li>Identifying trends in geographic distribution of incidents.</li>*/}
            {/*                <li>Exploring conflict intensity patterns over time.</li>*/}
            {/*                <li>Exploring geographic patterns of conflict intensity.</li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* Visualization Choices *!/*/}
            {/*    <div className="section">*/}
            {/*        <h2 className="subtitle">Visualization Choices and Justification</h2>*/}
            {/*        <div className="section-sub">*/}
            {/*            <p>*/}
            {/*                <strong>Scatter Plot</strong> This chart shows the physical location of conflicts as well as the number of fatalities, which can reveal conflict hotspots and outline the physical extent of conflict.*/}
            {/*            </p>*/}
            {/*            <p>*/}
            {/*                <strong>Line Chart:</strong> This chart shows how the sum of fatalities changes over time, which adds context to the scatterplot by showing the timescale of the conflict as well as demonstrating how it has evolved over time.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* Channels *!/*/}
            {/*    <div className="section">*/}
            {/*        <h2 className="subtitle">Channels</h2>*/}
            {/*        <div className="section-sub">*/}
            {/*            <div>*/}
            {/*                <p><strong>Position (X-axis):</strong> Represents longitude on the scatterplot, and year on the line chart.</p>*/}
            {/*                <p><strong>Position (Y-axis):</strong> Represents latitude on the scatterplot, and fatalities per year on the line chart.</p>*/}
            {/*                <p><strong>Color (Categorical):</strong> Linking variable that represents actor pair on both charts, and has a clickable legend to focus on specific actor pairs.</p>*/}
            {/*                <p><strong>Size (Continuous):</strong> Represents fatalities per incident on the scatterplot.</p>*/}
            {/*                <p><strong>Color (Categorical):</strong> Also represents fatalities per incident on the scatterplot for situations where the size is difficult to parse due to clustering. Also encodes region names to build knowledge of the geography of Somalia and to provide general context.</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* Interactivity *!/*/}
            {/*    <div className="section">*/}
            {/*        <h2 className="subtitle">Interactivity</h2>*/}
            {/*        <p><strong>Click Selection:</strong> As mentioned earlier, the legend is clickable to allow users to examine one actor pair at a time, or shift click to examine multiple actor pairs at once. This is designed to help combat visual clutter on the scatterplot, but also to enable easier parsing of trends.*/}
            {/*        </p>*/}
            {/*        <p><strong>Tooltips:</strong> Acts as an assisting tool to the size encoding to show the nuance between bins as well as show region names.*/}
            {/*        </p>*/}
            {/*    </div>*/}

            {/*    /!* Critique *!/*/}
            {/*    <div className="section">*/}
            {/*        <h2 className="subtitle">Critique</h2>*/}
            {/*        <div className="section-sub">*/}
            {/*            <p><strong>Strengths:</strong> Even though there is only one interactive element, there is a lot of depth for exploration here. Using multiple different encodings allows us to examine many different variables simultaneously without being overwhelming.</p>*/}
            {/*            <p><strong>Limitations:</strong> Scatterplot is too crowded to read without filtering, especially around the capital region. Out of necessity, the legend also has to be restricted to only the top 10 actor pairs</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*/!* Research Question 2 *!/*/}
            {/*<div className="question-section flex flex-col gap-2">*/}
            {/*    <div className="section">*/}
            {/*        <h1 className="title">Research Question 2:</h1>*/}
            {/*        <p>*/}
            {/*            How do interaction patterns vary across regions and actor pairs?*/}
            {/*        </p>*/}
            {/*    </div>*/}

            {/*    <div className="iframe-container flex flex-col section">*/}
            {/*        <h2 className="subtitle">Visualization View</h2>*/}
            {/*        <iframe*/}
            {/*            src="/africa-conflict/charts/rowan_plot2.html"*/}
            {/*            width="1200"*/}
            {/*            height="690"*/}
            {/*            frameBorder="0"*/}
            {/*            className="iframe-view"*/}
            {/*        ></iframe>*/}
            {/*    </div>*/}

            {/*    /!* Summary of Task *!/*/}
            {/*    <div className="section">*/}
            {/*        <h2 className="subtitle">Summary of Tasks</h2>*/}
            {/*        <div className="section-sub">*/}
            {/*            <p>*/}
            {/*                This visualization focuses on interactions and where in the country they occur most often, but also encodes information on actor pairs. The tasks involve:*/}
            {/*            </p>*/}
            {/*            <ul className="list">*/}
            {/*                <li>Exploring geographic distribution of interactions.</li>*/}
            {/*                <li>Identifying the most prominent actor(s) in each interaction category.</li>*/}
            {/*                <li>Analyzing correlation between actors an interaction types.</li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* Visualization Choices *!/*/}
            {/*    <div className="section">*/}
            {/*        <div className="section-sub">*/}
            {/*            <h2 className="subtitle">Visualization Choices and Justification</h2>*/}
            {/*            <p>*/}
            {/*                <strong>Choropleth:</strong> Choropleths lend themselves very well to conflict data given the geographical nature of the data, and are especially interesting in situations like Somalia with distinct conflicts occurring in different regions.*/}
            {/*            </p>*/}
            {/*            <p>*/}
            {/*                <strong>Bar Chart:</strong> Used as a small multiple to enable the user to “zoom in” on any region and get an overview of the interaction landscape.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* Channels *!/*/}
            {/*    <div className="section">*/}
            {/*        <h2 className="subtitle">Channels</h2>*/}
            {/*        <div className="section-sub">*/}
            {/*            <div>*/}
            {/*                <p><strong>Position (X-axis):</strong> Encodes actor pair on the bar chart.</p>*/}
            {/*                <p><strong>Position (Y-axis):</strong> Encodes count of incidents on the bar chart.</p>*/}
            {/*                <p><strong>Color (Categorical):</strong> Encodes region on the bar chart.</p>*/}
            {/*                <p><strong>Color (Ordinal):</strong> Encodes count of incidents per region on the choropleth.</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* Interactivity *!/*/}
            {/*    <div className="section">*/}
            {/*        <h2 className="subtitle">Interactivity</h2>*/}

            {/*        <p><strong>Interaction Dropdown:</strong> The main focus of the chart, allows the user to select the Interaction they want to view the distribution of. This effectively lets us pack 20 different charts into just one dropdown menu.</p>*/}
            {/*        <p><strong>Click Interaction:</strong> This lets us take a closer look at any region that might be of interest and get an in-depth view of the actor landscape for that region and interaction type.</p>*/}
            {/*        <p><strong>Tooltips:</strong> Encodes region, count of incidents, and interaction and mainly exists to help the user decide which region to click on. Since the tooltip works on both charts, this also allows users to find the name of the region they want to explore on the stacked bar chart and then seek it out on the map.</p>*/}



            {/*    </div>*/}

            {/*    /!* Critique *!/*/}
            {/*    <div className="section">*/}
            {/*        <h2 className="subtitle">Critique</h2>*/}
            {/*        <div className="section-sub">*/}
            {/*            <p><strong>Strengths:</strong> The bi-directional interactivity gives a lot of choices to the user, but the chart is still simple and effective even if the user only uses the dropdown menu.</p>*/}
            {/*            <p><strong>Limitations:</strong>No option to show all interactions at once like is possible with the regions, meaning there is no way to see a full overview of all attributes. </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="question-section flex flex-col gap-2">*/}
            {/*    /!* Research Question 3 *!/*/}
            {/*    <div className="section">*/}
            {/*        <h1 className="title">Research Question 3:</h1>*/}
            {/*        <p>*/}
            {/*            How has the distribution of actors changed over time?*/}
            {/*        </p>*/}
            {/*    </div>*/}

            {/*    /!* Visualization View *!/*/}
            {/*    <div className="iframe-container flex flex-col section">*/}
            {/*        <h2 className="subtitle">Visualization View</h2>*/}
            {/*        <iframe*/}
            {/*            src="/africa-conflict/charts/rowan_plot3.html"*/}
            {/*            width="1450"*/}
            {/*            height="650"*/}
            {/*            frameBorder="0"*/}
            {/*            className="iframe-view"*/}
            {/*        ></iframe>*/}
            {/*    </div>*/}

            {/*    /!* Summary of Tasks *!/*/}
            {/*    <div className="section">*/}
            {/*        <h2 className="subtitle">Summary of Tasks</h2>*/}
            {/*        <div className="section-sub">*/}
            {/*            <p>*/}
            {/*                This visualization aims to uncover long-term trends in the conflict via an interactive timeline. The tasks involve:*/}
            {/*            </p>*/}
            {/*            <ul className="list">*/}
            {/*                <li>Identifying relevance of actors at certain times.</li>*/}
            {/*                <li>Mapping presence of certain actors to surges in fatalities.</li>*/}
            {/*                <li>Observing change in conflict intensity between regions over time.</li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* Visualization Choices and Justification *!/*/}
            {/*    <div className="section">*/}
            {/*        <h2 className="subtitle">Visualization Choices and Justification</h2>*/}
            {/*        <div className="section-sub">*/}
            {/*            <p>*/}
            {/*                <strong>Bar Chart:</strong> This is a relatively simple chart that is intended to give a visual overview of the conflict landscape at any given time by showing the distribution of incidents across regions, as well as the names and distribution of all present actors.*/}
            {/*            </p>*/}
            {/*            <p>*/}
            {/*                <strong>Line Chart:</strong> This chart shows the progression of the intensity of the conflict over time, but mainly serves as effectively a time slider used to manipulate the bar chart.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* Channels *!/*/}
            {/*    <div className="section">*/}
            {/*        <h2 className="subtitle">Channels</h2>*/}
            {/*        <div className="section-sub">*/}

            {/*            <div>*/}
            {/*                <p><strong>Position (X-axis):</strong> Used to encode region on the bar chart and year on the line chart.*/}
            {/*                </p>*/}
            {/*                <p><strong>Position (Y-axis):</strong> Used to encode count of incidents on both charts.*/}
            {/*                </p>*/}
            {/*                <p><strong>Color (Categorical):</strong> Used to encode actor pairs on the bar chart.*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* Interactivity *!/*/}
            {/*    <div className="section">*/}
            {/*        <h2 className="subtitle">Interactivity</h2>*/}

            {/*        <strong>Brush Selection:</strong> This is what really makes this graph special, enabling the user to easily observe changes in the conflict over time by panning left to right. Also has a manipulatable size which allows for creating custom snapshots of the conflict distribution.*/}

            {/*    </div>*/}

            {/*    /!* Critique *!/*/}
            {/*    <div className="section">*/}
            {/*        <h2 className="subtitle">Critique</h2>*/}
            {/*        <div className="section-sub">*/}
            {/*            <p><strong>Strengths:</strong> This chart is simple, effective, easy to understand and use, and encodes a surprising amount of information given its relatively low number of encodings.</p>*/}
            {/*            <p><strong>Limitations:</strong> Assumes some level of knowledge of Somalia's main administrative regions, and puts the primary burden of analysis on the user.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default PersonD;