function PersonA() {
    return (
        <div className={"flex flex-col"}>
            <h1 className="text-2xl font-bold mb-4">
                Research Question 1:
            </h1>
            <p>
                How have conflict intensity patterns evolved over time across different geographic regions, and what
                role do actor interactions play in shaping these trends?
            </p>
            
            <div className="iframe-container">
                <iframe
                    src="/africa-conflict/charts/plot1.html"
                    width="1200"
                    height="1150"
                    frameBorder="0"
                ></iframe>
            </div>

            <h2 className="text-xl font-semibold mt-4 mb-2">Summary of Tasks</h2>
            <p>
                This visualization aims to reveal trends in conflict intensity over time while identifying geographical
                differences and actor influences. The tasks involve:
            </p>
            <ul className="list-disc pl-6">
                <li>Identifying temporal trends in fatalities.</li>
                <li>Comparing overall conflict intensity between countries.</li>
                <li>Exploring actor-specific patterns and their influence on conflict intensity.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4 mb-2">Visualization Choices and Justification</h2>
            <p>
                <strong>Line Chart:</strong> This chart effectively represents the temporal aspect by utilizing the x-axis for years and the y-axis for total fatalities. Distinct color encoding by country helps highlight geographic differences. Line charts excel in displaying trends over time, making it ideal for observing conflict fluctuations.
            </p>
            <p>
                <strong>Histogram:</strong> The histogram effectively visualizes total fatalities across countries, enabling viewers to compare overall conflict intensity by region. Histograms are well-suited for categorical comparison tasks like this.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">Channels</h2>
            <p>
                <strong>Position (X-axis):</strong> Used to represent time in the line chart, providing clear temporal progression.
            </p>
            <p>
                <strong>Position (Y-axis):</strong> Employed in both charts to depict fatalities, leveraging the strong perceptual accuracy of vertical positioning.
            </p>
            <p>
                <strong>Color (Categorical):</strong> Used to distinguish countries, effectively supporting the comparison of multiple regions in the line chart and histogram.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">Interactivity</h2>
            <ul className="list-disc pl-6">
                <li><strong>Actor Dropdown Selector:</strong> Enables focused exploration of conflict patterns involving specific actor types. This enhances insight into actor-specific influences.</li>
                <li><strong>Click Selection:</strong> Enhances comparative analysis by highlighting a selected country across both charts, reducing visual clutter by greying out unselected data.</li>
                <li><strong>Tooltips:</strong> Provide detailed data points on the line chart, ensuring detailed context without overwhelming the visual.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4 mb-2">Critique</h2>
            <p>
                <strong>Strengths:</strong> The combination of visualizations achieves strong temporal insight and geographic comparison. Interactive elements like dropdown filters and click selections allow effective data exploration.
            </p>
            <p>
                <strong>Limitations:</strong> The histogram may struggle with overcrowding if numerous countries are presented. Aggregating countries into regions or grouping actors could improve clarity.
            </p>

            <hr className="border-t-2 border-gray-300 my-4" />

            <h1 className="text-2xl font-bold mb-4">
                Research Question 2:
            </h1>

            <p>
                What temporal patterns emerge when analyzing conflict actor alliances, and how do these alliances correlate with shifts in conflict intensity?
            </p>
            <div className="iframe-container">
                <iframe
                    src="/africa-conflict/charts/plot2.html"
                    width="1200"
                    height="950"
                    frameBorder="0"
                ></iframe>
            </div>

            <h2 className="text-xl font-semibold mt-4 mb-2">Summary of Tasks</h2>
            <p>
                This visualization focuses on understanding actor alliances, their stability, and their correlation with conflict intensity. The tasks involve:
            </p>
            <ul className="list-disc pl-6">
                <li>Identifying frequent and impactful alliances.</li>
                <li>Tracking alliance stability across time.</li>
                <li>Visualizing temporal trends in fatalities for specific actors.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4 mb-2">Visualization Choices and Justification</h2>
            <p>
                <strong>Heatmap:</strong> The heatmap’s color gradient effectively highlights alliance impact, while size encoding reinforces the frequency of alliances. This format efficiently displays correlation patterns in a dense dataset.
            </p>
            <p>
                <strong>Stability Indicator (Circle Plot):</strong> A scatter plot with color-encoded stability metrics emphasizes trends in alliance durability across time.
            </p>
            <p>
                <strong>Trend Line:</strong> This line chart visualizes total fatalities per actor over time, providing a clear view of temporal shifts in conflict intensity.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">Channels</h2>
            <p>
                <strong>Position (X/Y-axis):</strong> Used effectively for time (x-axis) and actor types (y-axis) to support exploration of stability patterns.
            </p>
            <p>
                <strong>Size Encoding:</strong>  In the heatmap, size complements color to highlight frequent alliances with precision.
            </p>
            <p>
                <strong>Color (Gradient):</strong> Effectively encodes fatalities in the heatmap, ensuring impactful alliances are immediately visible.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">Interactivity</h2>
            <ul className="list-disc pl-6">
                <li><strong>Country Dropdown Selector:</strong> Enhances focus by limiting data to a specific country across all charts.</li>
                <li><strong>Year Slider:</strong> Empowers dynamic exploration of actor alliances for individual years.</li>
                <li><strong>Tooltips:</strong> Present throughout all charts to provide deeper insights without visual clutter.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4 mb-2">Critique</h2>
            <p>
                <strong>Strengths:</strong> The heatmap's dual encoding (color and size) effectively conveys both alliance impact and frequency. Combining stability plots and trend lines ensures comprehensive temporal analysis.
            </p>
            <p>
                <strong>Limitations:</strong> The heatmap’s complexity may overwhelm viewers. Providing a legend with key alliances or grouping less relevant actors may improve clarity.
            </p>

            <hr className="border-t-2 border-gray-300 my-4" />
            <h1 className="text-2xl font-bold mb-4">
                Research Question 3:
            </h1>

            <p>
                How do trends influence conflict event types, and are certain actor types or geographic regions more susceptible to seasonal conflict surges?
            </p>
            <div className="iframe-container">
                <iframe
                    src="/africa-conflict/charts/plot3.html"
                    width="1200"
                    height="600"
                    frameBorder="0"
                ></iframe>
            </div>

            <h2 className="text-xl font-semibold mt-4 mb-2">Summary of Tasks</h2>
            <p>
            This visualization aims to uncover seasonal trends in conflict patterns while identifying actors and regions prone to fluctuations. The tasks involve:
            </p>
            <ul className="list-disc pl-6">
                <li>Identifying seasonal spikes in conflict events.</li>
                <li>Assessing actor dominance during conflict surges.</li>
                <li>Exploring regional variations in seasonal conflict patterns.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4 mb-2">Visualization Choices and Justification</h2>
            <p>
                <strong>Polar Chart:</strong> This chart effectively emphasizes cyclical seasonal patterns, with the radial layout intuitively displaying month-based trends. Faceting by year enables multi-year comparison without excessive overlap.
            </p>
            <p>
                <strong>Bar Chart:</strong> This chart effectively summarizes total conflict events by actor type, with labels improving readability for precise comparisons.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">Channels</h2>
            <p>
                <strong>Theta Encoding (Angle):</strong> The polar chart utilizes theta encoding to represent cyclical seasonality, aligning with the intuitive understanding of months as circular time markers.
            </p>
            <p>
                <strong>Color (Categorical):</strong> Both charts employ color to distinguish actor types, ensuring consistency across visualizations.
            </p>
            <p>
                <strong>Position (Y-axis):</strong> Used in the bar chart for precise quantitative comparison.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">Interactivity</h2>
            <ul className="list-disc pl-6">
                <li><strong>Event Type, Region, and Month Dropdowns: </strong> Enable targeted exploration of seasonal patterns by filtering both charts simultaneously.</li>
                <li><strong>Tooltips:</strong> Offers precise data point insights without cluttering the visuals.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4 mb-2">Critique</h2>
            <p>
                <strong>Strengths:</strong> The polar chart effectively emphasizes seasonal trends, while the bar chart offers clear actor-level insights. Interactivity enhances data exploration by allowing viewers to isolate specific patterns.
            </p>
            <p>
                <strong>Limitations:</strong> The polar chart's complexity may challenge viewers unfamiliar with circular data encoding. Clearer labeling or additional tooltips may improve interpretability.
            </p>
        </div>
    );
}

export default PersonA;