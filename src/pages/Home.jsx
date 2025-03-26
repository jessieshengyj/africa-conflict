function Home() {
    return (
        // <div className="flex flex-col items-center justify-center h-screen">
        //     {/*<h1 className="text-3xl font-bold">DSCI 320 - Africa Conflicts</h1>*/}
        //     <img
        //         src="/africa-conflict/Cover_Image.jpg"
        //         alt="Africa Conflict Visualization"
        //         className="max-w-lg rounded-lg"
        //     />
        // </div>
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="/africa-conflict/Cover_Image.jpg"
                    className="max-w-sm rounded-lg shadow-2xl"/>
                <div>
                    <h1 className="text-5xl font-bold">Visualizing Conflicts in Africa</h1>
                    <p className="py-6">
                        Group Data Miners
                    </p>
                    {/*<button className="btn btn-primary">Get Started</button>*/}
                </div>
            </div>
        </div>
    );
}

export default Home;