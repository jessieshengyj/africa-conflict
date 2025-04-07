import "./Person.css"

function PersonA() {
    return (
        <div className="flex flex-col gap-2">
            {/* Research Question 1 */}
            <div className="name-section">
                <h1 className="title name">Wendy Phung</h1>
                <h2 className="grey-subtitle">Examining with the primary focus of time aspect on actor alliance, conflict intensity, and event types across geographic regions.</h2>
            </div>

            <div className="question-section flex flex-col gap-2">
                {/* Research Question 1 */}
                <div className="section">
                    <h1 className="title">Research Question 1:</h1>
                    <p>
                        How have conflict intensity patterns evolved over time across different geographic regions, and
                        what
                        role do actor interactions play in shaping these trends?
                    </p>
                </div>

                <div className="iframe-container flex flex-col section">
                    <h2 className="subtitle">Visualization View</h2>
                    <iframe
                        src="/africa-conflict/charts/wendy_plot1.html"
                        width="1250"
                        height="550"
                        frameBorder="0"
                        className="iframe-view"
                    ></iframe>
                </div>

                {/* Summary of Task */}
                <div className="section">
                    <h2 className="subtitle">Summary of Tasks</h2>
                    <div className="section-sub">
                        <p>
                            This visualization aims to reveal trends in conflict intensity over time while identifying
                            geographical
                            differences and actor influences. The tasks involve:
                        </p>
                        <ul className="list">
                            <li>Identifying temporal trends in fatalities.</li>
                            <li>Comparing overall conflict intensity between countries.</li>
                            <li>Exploring actor-specific patterns and their influence on conflict intensity.</li>
                        </ul>
                    </div>
                </div>

                {/* Visualization Choices */}
                <div className="section">
                    <h2 className="subtitle">Visualization Choices and Justification</h2>
                    <div className="section-sub">
                        <p>
                            <strong>Line Chart:</strong> This chart effectively represents the temporal aspect by utilizing the x-axis for years and the y-axis for total fatalities. Distinct color encoding by country helps highlight geographic differences. Line charts excel in displaying trends over time, making it ideal for observing conflict fluctuations. The addition of tooltips offers precise insights without overcrowding the chart.
                        </p>
                        <p>
                            <strong>Histogram:</strong> The histogram effectively visualizes total fatalities across countries, enabling viewers to compare overall conflict intensity by region. Histograms are well-suited for categorical comparison tasks like this. The bar structure supports rapid comparison, and color encoding enhances distinction between countries.
                        </p>
                    </div>
                </div>

                {/* Channels */}
                <div className="section">
                    <h2 className="subtitle">Channels</h2>
                    <div className="section-sub">
                        <div>
                            <li><strong>Line Chart:</strong></li>
                            <p><strong>Position (X-axis):</strong> Represents time (years), ensuring accurate temporal perception.</p>
                            <p><strong>Position (Y-axis):</strong> Represents total fatalities, leveraging accurate vertical positioning.</p>
                            <p><strong>Color (Categorical):</strong> Differentiates countries, allowing effective regional comparison.</p>
                        </div>
                        <div>
                            <li><strong>Histogram:</strong></li>
                            <p><strong>Position (X-axis):</strong> Displays countries to enable geographic comparison.</p>
                            <p><strong>Position (Y-axis):</strong> Represents total fatalities of all time, enhancing quantitative interpretation.</p>
                            <p><strong>Color (Categorical):</strong> Differentiates countries, allowing effective regional comparison.</p>
                        </div>
                    </div>
                </div>

                {/* Interactivity */}
                <div className="section">
                    <h2 className="subtitle">Interactivity</h2>
                        <p><strong>Actor Dropdown Selector:</strong> Enables focused exploration of conflict patterns
                            involving specific actor types. This enhances insight into actor-specific influences.
                        </p>
                        <p><strong>Click Selection:</strong> Enhances comparative analysis by highlighting a selected
                            country across both charts, reducing visual clutter by greying out unselected data.
                        </p>
                        <p><strong>Tooltips:</strong> Provide detailed data points on the line chart, ensuring detailed
                            context without overwhelming the visual.
                        </p>
                </div>

                {/* Critique */}
                <div className="section">
                    <h2 className="subtitle">Critique</h2>
                    <div className="section-sub">
                        <p><strong>Strengths:</strong> The combination of the line chart and histogram effectively leverages bi-directional interaction, enhancing the ability to explore conflict intensity across both temporal and geographic dimensions.
                        The line chart clearly visualizes trends in conflict intensity over time, while the histogram effectively compares total fatalities between countries. The click-selection feature enables seamless navigation, allowing viewers to isolate
                        specific countries and track their corresponding trends. The actor dropdown filter further strengthens the analysis by isolating conflict patterns linked to specific actor types, providing insights into actor-driven conflict dynamics. Tooltips
                        in the line chart provide detailed year-by-year information, aiding precise exploration without overwhelming the visualization.</p>
                        <p><strong>Limitations:</strong> Despite the enhanced interactivity, the visualization may become cluttered when displaying multiple countries with overlapping trends in the line chart, making it difficult to distinguish individual trajectories.
                        Countries with minimal conflict intensity may appear less prominent, reducing their visibility. The color-coding strategy, while useful for distinguishing countries, may become overwhelming when many regions are included. To improve clarity, implementing
                        a toggle for selecting top conflict-intense countries or grouping countries with similar trends could streamline the display.</p>
                    </div>
                </div>
            </div>

            {/* Research Question 2 */}
            <div className="question-section flex flex-col gap-2">
                <div className="section">
                    <h1 className="title">Research Question 2:</h1>
                    <p>
                        What temporal patterns emerge when analyzing conflict actor alliances, and how do these
                        alliances correlate with shifts in conflict intensity?
                    </p>
                </div>

                <div className="iframe-container flex flex-col section">
                    <h2 className="subtitle">Visualization View</h2>
                    <iframe
                        src="/africa-conflict/charts/wendy_plot2.html"
                        width="1200"
                        height="350"
                        frameBorder="0"
                        className="iframe-view"
                    ></iframe>
                </div>

                {/* Summary of Task */}
                <div className="section">
                    <h2 className="subtitle">Summary of Tasks</h2>
                    <div className="section-sub">
                        <p>
                        This visualization investigates the temporal dynamics of conflict actor alliances and their correlation with shifts in conflict intensity, as reflected through fatalities. The tasks involve:
                        </p>
                        <ul className="list">
                            <li>Identification of high-fatality alliances between actor types.</li>
                            <li>Exploration of how these alliances evolve across time.</li>
                            <li>Country-specific analysis of actor interaction patterns and their impact on conflict intensity.</li>
                        </ul>
                    </div>
                </div>

                {/* Visualization Choices */}
                <div className="section">
                    <div className="section-sub">
                        <h2 className="subtitle">Visualization Choices and Justification</h2>
                        <p>
                            <strong>Heatmap:</strong> The heatmap was chosen to visualize the datalities resulting from interactions between different actor types (Actor 1 and Actor 2) across time and country. The color gradient encodes the total fatalities, allowing quick visual identification of the most intense alliances. Combined with interactive filters (country and year), this design supports deep exploration of patterns in a dense, multi-dimensional dataset.
                        </p>
                    </div>
                </div>

                {/* Channels */}
                <div className="section">
                    <h2 className="subtitle">Channels</h2>
                    <div className="section-sub">
                        <div>
                            <li><strong>Heatmap:</strong></li>
                            <p><strong>Position (X-axis):</strong> Displays Actor 2 types for alliance visualization.</p>
                            <p><strong>Position (Y-axis):</strong> Displays Actor 1 types for alliance visualization.</p>
                            <p><strong>Color (Gradient):</strong> Effectively encodes fatalities in the heatmap, ensuring
                                impactful alliances are immediately visible.</p>
                            <p><strong>Tooltips: </strong> Displays specific details for each alliance by year and country for added context.</p>
                        </div>
                    </div>
                </div>

                {/* Interactivity */}
                <div className="section">
                    <h2 className="subtitle">Interactivity</h2>
                        <p><strong>Country Dropdown Selector:</strong> Enables focused analysis on a specific country’s actor interactions.
                        </p>
                        <p><strong>Year Slider:</strong> Allows dynamic filtering by year to analyze temporal changes in alliances and fatalities.
                        </p>
                        <p><strong>Tooltips:</strong> Provides granular insights without crowding the visual space.
                        </p>
                </div>

                {/* Critique */}
                <div className="section">
                    <h2 className="subtitle">Critique</h2>
                    <div className="section-sub">
                        <p><strong>Strengths:</strong> This visualization effectively highlights the dynamics of actor alliances and their role in shaping conflict intensity. The heatmap design, 
                        with its red color gradient, makes it easy to spot high-fatality alliances between actor types, offering clear insights into the most impactful interactions. By enabling 
                        users to filter the data by country and year, the visualization supports focused exploration of both spatial and temporal patterns. The interactivity enhances usability, 
                        allowing users to drill down into specific contexts and investigate year-by-year changes in alliance behavior. Tooltips provide immediate access to detailed information 
                        without cluttering the visual space, making the chart both informative and clean.</p>
                        <p><strong>Limitations:</strong> One limitation of the current design is the absence of an explicit indicator for alliance frequency, such as event count. As a result, 
                        it is not always clear whether a high number of fatalities results from frequent low-intensity events or from a few extremely deadly incidents. Additionally, while the 
                        country dropdown supports focused analysis, it restricts cross-country comparisons unless users manually switch between countries.</p>
                    </div>
                </div>
            </div>

            <div className="question-section flex flex-col gap-2">
                {/* Research Question 3 */}
                <div className="section">
                    <h1 className="title">Research Question 3:</h1>
                    <p>
                        How do trends influence conflict event types, and are certain actor types or geographic regions
                        more susceptible to seasonal conflict surges?
                    </p>
                </div>

                {/* Visualization View */}
                <div className="iframe-container flex flex-col section">
                    <h2 className="subtitle">Visualization View</h2>
                    <iframe
                        src="/africa-conflict/charts/wendy_plot3.html"
                        width="1450"
                        height="600"
                        frameBorder="0"
                        className="iframe-view"
                    ></iframe>
                </div>

                {/* Summary of Tasks */}
                <div className="section">
                    <h2 className="subtitle">Summary of Tasks</h2>
                    <div className="section-sub">
                        <p>
                            This visualization aims to uncover seasonal trends in conflict patterns while identifying actors
                            and regions prone to fluctuations. The tasks involve:
                        </p>
                        <ul className="list">
                            <li>Identifying seasonal spikes in conflict events.</li>
                            <li>Assessing actor dominance during conflict surges.</li>
                            <li>Exploring regional variations in seasonal conflict patterns.</li>
                        </ul>
                    </div>
                </div>

                {/* Visualization Choices and Justification */}
                <div className="section">
                    <h2 className="subtitle">Visualization Choices and Justification</h2>
                    <div className="section-sub">
                        <p>
                            <strong>Polar Chart:</strong> This chart effectively emphasizes cyclical seasonal patterns,
                            with the radial layout intuitively displaying month-based trends. Faceting by year enables
                            multi-year comparison without excessive overlap. Distinct colors distinguish actor types to
                            highlight seasonal influence.
                        </p>
                        <p>
                            <strong>Bar Chart:</strong> This chart effectively summarizes total conflict events by actor
                            type, with labels improving readability for precise comparisons.
                        </p>
                    </div>
                </div>

                {/* Channels */}
                <div className="section">
                    <h2 className="subtitle">Channels</h2>
                    <div className="section-sub">
                        <div>
                            <li><strong>Polar Chart:</strong></li>
                            <p><strong>Theta Encoding (Angle):</strong> The polar chart utilizes theta encoding to represent
                                cyclical seasonality, aligning with the intuitive understanding of months as circular time
                                markers.</p>
                            <p><strong>Color (Categorical):</strong> Differentiates actor types for distinct visual
                                identification.</p>
                        </div>

                        <div>
                            <li><strong>Bar Chart:</strong></li>
                            <p><strong>Position (X-axis):</strong> Used in the bar chart to display actor types for direct
                                comparison.
                            </p>
                            <p><strong>Position (Y-axis):</strong> Used in the bar chart for precise quantitative
                                comparison.
                            </p>
                            <p><strong>Color (Categorical):</strong> Used in the bar chart to enhances actor
                                differentiation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Interactivity */}
                <div className="section">
                    <h2 className="subtitle">Interactivity</h2>
                        <p><strong>Event Type, Region, and Month Dropdowns:</strong> Enable targeted exploration of
                            seasonal patterns by filtering both charts simultaneously.
                        </p>
                        <p><strong>Tooltip:</strong> Offers precise data point insights without cluttering the visuals.
                        </p>
                </div>

                {/* Critique */}
                <div className="section">
                    <h2 className="subtitle">Critique</h2>
                    <div className="section-sub">
                        <p><strong>Strengths:</strong> The combination of the polar chart and bar chart effectively reveals seasonal and overall trends in conflict events.
                        The polar chart’s radial layout highlights cyclical patterns in conflict events, making it particularly useful for identifying seasonal surges in
                        conflict intensity. The use of distinct colors for different actor types ensures clarity, while the facet grid layout efficiently organizes the polar
                        charts by year, making temporal comparisons intuitive. The bar chart complements this by summarizing the total number of events for each actor type,
                        providing a clear comparison of actor dominance. The bi-directional filtering feature allows users to explore patterns by event type, country, or month,
                        improving focus and enabling detailed exploration.</p>
                        <p><strong>Limitations:</strong> While the polar chart effectively emphasizes seasonal trends, its circular layout may reduce precision when comparing
                        exact event counts. This may limit the ability to detect subtle month-to-month variations. The bar chart, although clear, lacks temporal context;
                        incorporating a time filter or trend visualization alongside the bar chart could provide a more comprehensive view of actor behavior over time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonA;
