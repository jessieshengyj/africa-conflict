import "./Person.css"

function PersonB() {
    return (
        <div className="flex flex-col gap-2">
            <div className="name-section">
                <h1 className="title name">Jessie Sheng</h1>
                <h2 className="grey-subtitle">Exploring the geographic distribution of
                    conflicts and key actors to understand regional patterns.</h2>
            </div>

            <div className="question-section flex flex-col gap-2">
                {/* Research Question 1 */}
                <div className="section">
                    <h1 className="title">Research Question 1:</h1>
                    <p>
                        Which countries have the highest and lowest concentration of conflict events, and are they
                        located within the same region in Africa?
                    </p>
                </div>

                <div className="iframe-container flex flex-col section">
                    <h2 className="subtitle">Visualization View</h2>
                    <iframe
                        src="/africa-conflict/charts/jessie_plot1.html"
                        width="1200"
                        height="810"
                        frameBorder="0"
                        className="iframe-view"
                    ></iframe>
                </div>

                {/* Summary of Task */}
                <div className="section">
                    <h2 className="subtitle">Summary of Tasks</h2>
                    <div className="section-sub">
                        <p>
                            This visualization aims to analyze the distribution of conflict events across African
                            countries, addressing the question of which nations have the highest and lowest
                            concentrations of conflict and whether they are geographically clustered. The key tasks
                            include:
                        </p>
                        <ul className="list">
                            <li>Identifying countries with the highest and lowest conflict events.</li>
                            <li>Understanding spatial patterns of conflict intensity across Africa.</li>
                            <li>Comparing countries numerically to detect significant disparities in conflict levels.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Visualization Choices */}
                <div className="section">
                    <h2 className="subtitle">Visualization Choices and Justification</h2>
                    <div className="section-sub">
                        <p>
                            <strong>Choropleth Map:</strong> The map provides a spatial overview, using color intensity
                            to encode the number of conflict events per country. This helps in identifying broad
                            regional trends and spotting geographic clusters of conflict.
                        </p>
                        <p>
                            <strong>Bar Chart:</strong> The bar chart ranks countries by conflict intensity, providing
                            precise numerical comparisons. The use of a log scale prevents highly skewed data from
                            distorting comparisons, ensuring better expressiveness (Munzner, 2014).
                        </p>
                    </div>
                </div>

                {/* Channels */}
                <div className="section">
                    <h2 className="subtitle">Channels</h2>
                    <div className="section-sub">
                        <div>
                            <li><strong>Choropleth Map:</strong></li>
                            <p><strong>Color (Hue & Intensity):</strong> Used in the choropleth to encode conflict
                                levels, leveraging color’s effectiveness in ordinal and quantitative comparisons.</p>
                        </div>
                        <div>
                            <li><strong>Bar Chart:</strong></li>
                            <p><strong>Position (X, Y), Length:</strong> The bar chart leverages vertical position and
                                bar length to effectively compare conflict numbers across countries, as these are among
                                the most perceptually accurate channels for encoding numerical data. The y-axis uses a
                                <strong> log scale</strong> to accommodate large variations in conflict numbers, ensuring smaller values
                                remain visible while preserving meaningful comparisons. </p>
                        </div>
                    </div>
                </div>

                {/* Interactivity */}
                <div className="section">
                    <h2 className="subtitle">Interactivity</h2>
                    <ul className="list">
                        <li><strong>Bidirectional Selection:</strong> Clicking a bar highlights the corresponding
                            country on the map and vice versa, reinforcing the connection between geographic location
                            and conflict intensity.
                        </li>
                        <li><strong>Multi-Selection:</strong> (Shift + Click) allows users to compare multiple
                            countries, enabling deeper regional analysis. Users can select the top N conflict regions directly on the
                            map to observe their spatial distribution, reducing cognitive load by allowing the
                            visualization to present insights dynamically.
                        </li>
                        <li><strong>Tooltips:</strong> Provide precise numerical summaries and details of the data points
                            without overwhelming the visual.
                        </li>
                    </ul>
                </div>

                {/* Critique */}
                <div className="section">
                    <h2 className="subtitle">Critique</h2>
                    <div className="section-sub">
                        <p><strong>Strengths:</strong> The visualization effectively highlights conflict patterns, allowing
                            viewers to analyze geographic clustering and disparities in conflict intensity. The bidirectional
                            selection provides an intuitive way to link spatial and numerical insights, while the
                            logarithmic scale ensures fair comparisons between countries with vastly different conflict levels.
                            The choropleth serves as a spatial heatmap, making it well-suited for analyzing the
                            geographic distribution of conflicts, while the bar chart facilitates direct numerical
                            comparisons across multiple countries.</p>
                        <p><strong>Limitations:</strong> The color scale could be adjusted to improve contrast for
                            mid-range conflict values, making distinctions clearer. Additionally, country-level
                            aggregation may hide regional patterns. Grouping nations into broader regions (e.g., East,
                            West, Central, Southern Africa) or incorporating subnational data could provide more
                            detailed insights.</p>
                    </div>
                </div>
            </div>

            <div className="question-section flex flex-col gap-2">
                {/* Research Question 2 */}
                <div className="section">
                    <h1 className="title">Research Question 2:</h1>
                    <p>
                        Are certain conflict actors (e.g., military, civilians, rebel groups) more active in regions
                        with high levels of conflict, and how do their activities differ across different types of
                        conflict?
                    </p>
                </div>

                <div className="iframe-container flex flex-col section">
                    <h2 className="subtitle">Visualization View</h2>
                    <iframe
                        src="/africa-conflict/charts/jessie_plot2.html"
                        width="1200"
                        height="790"
                        frameBorder="0"
                        className="iframe-view"
                    ></iframe>
                </div>

                {/* Summary of Task */}
                <div className="section">
                    <h2 className="subtitle">Summary of Tasks</h2>
                    <div className="section-sub">
                        <p>
                            This visualization aims to analyze the relationship between conflict actors and
                            high-conflict regions. The tasks include:
                        </p>
                        <ul className="list">
                            <li>Identifying key actors involved in conflicts across the (top 5) most affected countries.</li>
                            <li>Comparing the activity levels of different actors across event types.</li>
                            <li>Exploring geographic patterns of actor involvement in conflict zones.</li>
                        </ul>
                    </div>
                </div>

                {/* Visualization Choices */}
                <div className="section">
                    <h2 className="subtitle">Visualization Choices and Justification</h2>
                    <div className="section-sub">
                        <p>
                            <strong>Scatter Plot (Map View):</strong> The scatter plot represents conflict event
                            locations by encoding longitude and latitude, using color to differentiate actors.
                            This makes it easier to spot regional actor distribution patterns. The interactive
                            legend allows filtering specific actors, reducing visual clutter and aiding comparison.
                        </p>
                        <p>
                            <strong>Bar Chart:</strong> The bar chart provides a ranking of actors based on their
                            conflict involvement for a specific type of conflict. It uses horizontal bars for easy
                            comparison of actor activity levels and better readability.
                        </p>
                    </div>
                </div>

                {/* Channels */}
                <div className="section">
                    <h2 className="subtitle">Channels</h2>
                    <div className="section-sub">
                        <div>
                            <li><strong>Scatter Plot (Map View):</strong></li>
                            <p><strong>Position (X, Y):</strong> Longitude and latitude are used in the scatter plot to
                                accurately represent geographic event locations.</p>
                            <p><strong>Color (Categorical):</strong> Used to distinguish actors, ensuring clear
                                comparisons between them.</p>
                        </div>
                        <div>
                            <li><strong>Bar Chart:</strong></li>
                            <p><strong>Position (Y), Color:</strong> Represents different actors involved in the
                                selected country and event type.</p>
                            <p><strong>Length (Bar Chart):</strong> Encodes the number of conflicts per actor,
                                leveraging the perceptual strength of bar charts.</p>
                        </div>
                    </div>
                </div>

                {/* Interactivity */}
                <div className="section">
                    <h2 className="subtitle">Interactivity</h2>
                    <ul className="list">
                        <li><strong>Interactive Legend:</strong> Clicking on an actor in the legend highlights their
                            activity on the map and also updates the bar chart, supporting actor-specific analysis.
                        </li>
                        <li><strong>Dropdown Filters:</strong> Users can filter by country and event type, refining
                            their focus and reducing cognitive load.
                        </li>
                        <li><strong>Tooltips:</strong> Provide detailed numerical summaries of the
                            data points on country, actor, and event type.
                        </li>
                        {/*<li><strong>Selection Mechanism:</strong> Clicking on an actor highlights their corresponding*/}
                        {/*    data in both charts, making actor-specific comparisons more intuitive.*/}
                        {/*</li>*/}
                    </ul>
                </div>

                {/* Critique */}
                <div className="section">
                    <h2 className="subtitle">Critique</h2>
                    <div className="section-sub">
                        <p><strong>Strengths:</strong> The visualization effectively balances spatial and categorical
                            data, enabling users to explore patterns in actor activity across different regions. The
                            scatter plot map serves as a spatial heatmap, accurately representing conflict
                            event locations while allowing users to detect geographic clustering. The bar chart, on the
                            other hand, provides a clear numerical comparison of actor involvement, making it easier to
                            rank and compare activity levels. The interactive elements allow users to filter
                            for relevant information and highlighting allows for easy comparisons.</p>
                        <p><strong>Limitations:</strong> The scatter plot may become cluttered if too many actors
                            are presented. Additionally, using size encoding for conflict intensity could further improve
                            clarity by distinguishing high-impact events.</p>
                    </div>
                </div>
            </div>

            <div className="question-section flex flex-col gap-2">
                {/* Research Question 3 */}
                <div className="section">
                    <h1 className="title">Research Question 3:</h1>
                    <p>
                        How have the geographic locations of major conflict hotspots evolved over time, and what
                        geographic patterns emerge across different periods?
                    </p>
                </div>

                <div className="iframe-container flex flex-col section">
                    <h2 className="subtitle">Visualization View</h2>
                    <iframe
                        src="/africa-conflict/charts/jessie_plot3.html"
                        width="1200"
                        // height="750"
                        height="860"
                        frameBorder="0"
                        className="iframe-view"
                    ></iframe>
                </div>

                {/* Summary of Task */}
                <div className="section">
                    <h2 className="subtitle">Summary of Tasks</h2>
                    <div className="section-sub">
                        <p>
                            This visualization is designed to examine how conflict intensity shifts over time across the
                            most affected countries each year. It specifically aims to:
                        </p>
                        <ul className="list">
                            <li>Identify the top 10 countries with the highest conflict events annually.</li>
                            <li>Track changes in conflict intensity within these countries over time.</li>
                            <li>Explore the geographic distribution of conflict hotspots and how they evolve yearly.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Visualization Choices */}
                <div className="section">
                    <h2 className="subtitle">Visualization Choices and Justification</h2>
                    <div className="section-sub">
                        <p>
                            <strong>Multi-line Chart:</strong> The top visualization presents a line chart displaying
                            yearly conflict event counts for the top 10 countries. It effectively highlights temporal
                            trends, showing which countries experience sustained or fluctuating conflict levels over
                            time. The interactive legend enhances usability by allowing users to focus on selected
                            countries, reducing visual clutter.
                        </p>
                        <p>
                            <strong>Map with Time Slider:</strong> The lower visualization is a layered map where point
                            size and color encode conflict intensity at specific locations. A time slider enables users
                            to explore how conflict hotspots shift across different years, providing a dynamic spatial
                            perspective on conflict evolution.
                        </p>
                    </div>
                </div>

                {/* Channels */}
                <div className="section">
                    <h2 className="subtitle">Channels</h2>
                    <div className="section-sub">
                        <div>
                            <li><strong>Line Chart:</strong></li>
                            <p><strong>Position (X, Y):</strong> The line chart uses the x-axis for time (years) and the
                                y-axis for conflict counts, ensuring clear trend visualization.</p>
                            <p><strong>Color:</strong> Represents the different countries, for easier comparison.</p>
                        </div>
                        <div>
                            <li><strong>Map:</strong></li>
                            <p><strong>Position (X, Y):</strong> Latitude and longitude are used in the map to
                                accurately represent geographic locations of conflicts.</p>
                            <p><strong>Color & Size:</strong> In the map, conflict intensity is encoded using both color
                                (red intensity) and size, making variations in event count immediately perceptible.</p>
                            <p><strong>Opacity:</strong> The interactive legend controls line visibility in the chart,
                                helping reduce visual overload.</p>
                        </div>
                    </div>
                </div>

                {/* Interactivity */}
                <div className="section">
                    <h2 className="subtitle">Interactivity</h2>
                    <ul className="list">
                        <li><strong>Interactive Legend:</strong> The interactive legend in the line chart allows users
                            to filter specific country trends, focusing on individual or comparative patterns.
                        </li>
                        <li><strong>Time Slider:</strong> The slider widget below the map lets users adjust the time
                            frame, dynamically updating the geographic distribution of conflict hotspots. This enables a
                            deeper understanding of how conflict intensity shifts across different years.
                        </li>
                    </ul>
                </div>

                {/* Critique */}
                <div className="section">
                    <h2 className="subtitle">Critique</h2>
                    <div className="section-sub">
                        <p><strong>Strengths:</strong> The visualization successfully integrates both temporal and
                            spatial dimensions of conflict data, providing a comprehensive view of how conflict
                            intensity shifts across years and geographic regions. The use of both a line chart and a
                            dynamic map allows users to explore both trends over time and geographical patterns simultaneously.
                            The interactive elements, like the legend and time slider, significantly enhance user experience and exploration.</p>
                        <p><strong>Limitations:</strong> While the visualization is effective, it could be further
                            refined in a few areas. The line chart might benefit from a smoothing option or smaller time intervals to help
                            reduce abrupt fluctuations, making long-term trends clearer. Additionally, the map's
                            legend for event size encoding could be improved for clarity to ensure users interpret
                            variations in size correctly. Finally, adding regional groupings or filtering options could
                            enhance comparative analysis across different regions or conflict types.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonB;
