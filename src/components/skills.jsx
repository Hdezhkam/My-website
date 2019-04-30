import React from 'react';

const Skill = () => {
    return (
        <div className="container-fluid">
            <div className="card m-2">
                <p className="card-title text-center m-2">My Skills</p>
                <div className="card-body">
                    React Js- Redux
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: '80%' }}
                        />
                    </div>
                    Bootstrap
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: '80%' }}
                        />
                    </div>
                    Java Script
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: '70%' }}
                        />
                    </div>
                    HTML - CSS
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: '90%' }}
                        />
                    </div>
                    Git- Github
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-dark"
                            role="progressbar"
                            style={{ width: '85%' }}
                        />
                    </div>
                    Sass- Less
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-secondary"
                            role="progressbar"
                            style={{ width: '95%' }}
                        />
                    </div>
                    npm- yarn
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-secondary"
                            role="progressbar"
                            style={{ width: '90%' }}
                        />
                    </div>
                    Visual Studio Code
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-secondary"
                            role="progressbar"
                            style={{ width: '90%' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
