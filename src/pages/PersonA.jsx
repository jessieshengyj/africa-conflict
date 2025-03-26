function PersonA() {
    return (
        <div className={"flex flex-col gap-2"}>
            {/* research question */}
            <div>
                <h1 className="text-2xl font-bold mb-2">
                    Research Question 1:
                </h1>

                <p>
                    How have conflict intensity patterns evolved over time across different geographic regions, and what
                    role do actor interactions play in shaping these trends?
                </p>
            </div>

            <div className="iframe-container">
                <iframe
                    src="/africa-conflict/charts/wendy_plot1.html"
                    width="1200"
                    height="1150"
                    frameBorder="0"
                ></iframe>
            </div>

            {/* summary of task*/}
            <div>
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
            </div>

            {/* vis choices */}
            <div>
                <h2 className="text-xl font-semibold mt-4 mb-2">Visualization Choices and Justification</h2>
                <p>
                    <strong>Line Chart:</strong> This chart effectively represents the temporal aspect by utilizing the x-axis for years and the y-axis for total fatalities. Distinct color encoding by country helps highlight geographic differences. Line charts excel in displaying trends over time, making it ideal for observing conflict fluctuations.
                </p>
                <p>
                    <strong>Histogram:</strong> The histogram effectively visualizes total fatalities across countries, enabling viewers to compare overall conflict intensity by region. Histograms are well-suited for categorical comparison tasks like this.
                </p>
            </div>

            {/* channels */}
            <div>
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
            </div>

            {/* interactivity */}
            <div>
                <h2 className="text-xl font-semibold mt-4 mb-2">Interactivity</h2>
                <ul className="list-disc pl-6">
                    <li><strong>Actor Dropdown Selector:</strong> Enables focused exploration of conflict patterns involving specific actor types. This enhances insight into actor-specific influences.</li>
                    <li><strong>Click Selection:</strong> Enhances comparative analysis by highlighting a selected country across both charts, reducing visual clutter by greying out unselected data.</li>
                    <li><strong>Tooltips:</strong> Provide detailed data points on the line chart, ensuring detailed context without overwhelming the visual.</li>
                </ul>
            </div>

            {/* critique */}
            <div>
                <h2 className="text-xl font-semibold mt-4 mb-2">Critique</h2>
                <p>
                    <strong>Strengths:</strong> The combination of visualizations achieves strong temporal insight and geographic comparison. Interactive elements like dropdown filters and click selections allow effective data exploration.
                </p>
                <p>
                    <strong>Limitations:</strong> The histogram may struggle with overcrowding if numerous countries are presented. Aggregating countries into regions or grouping actors could improve clarity.
                </p>
            </div>
        </div>
    );
}

export default PersonA;