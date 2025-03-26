function Navbar() {
    return (
        <div className="bg-base-100 shadow-sm p-4 flex justify-between">
            <h1 className="text-xl font-bold">DSCI 320</h1>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                Open Menu
            </label>
        </div>
    );
}

export default Navbar;
