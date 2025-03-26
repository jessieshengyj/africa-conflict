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
                        width="1200"
                        height="1120"
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
                        height="940"
                        frameBorder="0"
                        className="iframe-view"
                    ></iframe>
                </div>

                {/* Summary of Task */}
                <div className="section">
                    <h2 className="subtitle">Summary of Tasks</h2>
                    <div className="section-sub">
                        <p>
                            This visualization focuses on understanding actor alliances, their stability, and their
                            correlation with conflict intensity. The tasks involve:
                        </p>
                        <ul className="list">
                            <li>Identifying frequent and impactful alliances.</li>
                            <li>Tracking alliance stability across time.</li>
                            <li>Visualizing temporal trends in fatalities for specific actors.</li>
                        </ul>
                    </div>
                </div>

                {/* Visualization Choices */}
                <div className="section">
                    <div className="section-sub">
                        <h2 className="subtitle">Visualization Choices and Justification</h2>
                        <p>
                            <strong>Heatmap:</strong> The heatmap’s color gradient effectively highlights alliance impact, while size encoding reinforces the frequency of alliances. This format efficiently displays correlation patterns in a dense dataset. Strong contrast colors provide intuitive interpretation of high-fatality alliances.
                        </p>
                        <p>
                            <strong>Stability Indicator (Circle Plot):</strong> A scatter plot with color-encoded stability metrics emphasizes trends in alliance durability across time. Circle size further enhances the visibility of stable alliances.
                        </p>
                        <p>
                            <strong>Trend Line:</strong> This line chart visualizes total fatalities per actor over time, providing a clear view of temporal shifts in conflict intensity. The addition of distinct actor colors allows effective pattern distinction.
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
                            <p><strong>Size Encoding:</strong> Represents the number of events as a proxy for alliance stability.</p>
                        </div>

                        <div>
                            <li><strong>Stability Indicator(Circle Plot):</strong></li>
                            <p><strong>Position (X-axis):</strong> Represents time (years) for temporal stability analysis.</p>
                            <p><strong>Position (Y-axis):</strong> Displays Actor 1 types for alliance visualization.</p>
                            <p><strong>Color (Gradient):</strong> Represents event count, emphasizing stable alliances.</p>
                        </div>

                        <div>
                            <li><strong>Trend Line:</strong></li>
                            <p><strong>Position (X-axis):</strong> Represents time (years) for tracking fatality trends.</p>
                            <p><strong>Position (Y-axis):</strong> Represents total fatalities for accurate comparison.</p>
                            <p><strong>Color (Categorical):</strong> Differentiates actor types to enhance comparison.</p>
                        </div>
                    </div>
                </div>

                {/* Interactivity */}
                <div className="section">
                    <h2 className="subtitle">Interactivity</h2>
                        <p><strong>Country Dropdown Selector:</strong> Enhances focus by limiting data to a specific
                            country across all charts.
                        </p>
                        <p><strong>Year Slider:</strong> Empowers dynamic exploration of actor alliances for individual
                            years.
                        </p>
                        <p><strong>Tooltips:</strong> Present throughout all charts to provide deeper insights without
                            visual clutter.
                        </p>
                </div>

                {/* Critique */}
                <div className="section">
                    <h2 className="subtitle">Critique</h2>
                    <div className="section-sub">
                        <p><strong>Strengths:</strong> This visualization effectively integrates multiple visual elements to explore actor alliances and their impact on conflict intensity over time.
                        The heatmap’s color gradient clearly emphasizes high-fatality alliances, while size encoding effectively conveys alliance stability through event counts. The circle plot
                        complements this by visualizing alliance stability patterns over time, making it easier to identify persistent partnerships. The trend line further enhances insights by
                        illustrating how shifts in actor alliances correspond to changes in conflict intensity. The country dropdown selector efficiently filters all three charts simultaneously,
                        improving focus when analyzing specific regions. The year slider adds flexibility by dynamically adjusting the heatmap to explore alliances within distinct periods.</p>
                        <p><strong>Limitations:</strong>The stability indicator’s blue gradient may appear too subtle, making it harder to distinguish differences in alliance frequency — a stronger
                        color gradient or larger dots could improve visibility. Additionally, the trend line may become cluttered when displaying multiple actor types, especially if some groups contribute
                        minimally to total fatalities. Introducing a toggle to filter dominant actors or applying a smoothing technique could improve clarity. </p>
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
