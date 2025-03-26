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
        <div className="flex flex-col h-full">
            <div className="hero h-full">
                <div className="hero-content flex flex-col lg:flex-row-reverse gap-12">
                    <img
                        src="/africa-conflict/Cover_Image.jpg"
                        className="max-w-sm rounded-lg shadow-2xl"/>
                    <div>
                        <h1 className="text-5xl font-bold">Visualizing Conflicts in Africa</h1>
                        <p className="pt-6">
                            Group Data Miners
                        </p>
                        <p className="pt-2">
                            Jessie Sheng, Wendy Phung, Rowan Murphy, Junyao Wang
                        </p>
                        {/*<button className="btn btn-primary">Get Started</button>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;