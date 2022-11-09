export const DashboardPage = ({ children }) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="flex flex-col w-1/2">
                    <div className="flex flex-row">
                        <div className="flex flex-col w-1/2">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title">Card Title</h2>
                                    <p className="card-subtitle">
                                        Card Subtitle
                                    </p>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, quod.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/2">
                            <div className="card bg-indigo-300">
                                <div className="card-body">
                                    <h2 className="card-title">Card Title</h2>
                                    <p className="card-subtitle">
                                        Card Subtitle
                                    </p>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, quod.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col w-1/2">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title">Card Title</h2>
                                    <p className="card-subtitle">
                                        Card Subtitle
                                    </p>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, quod.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
