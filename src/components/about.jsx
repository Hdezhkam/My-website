import React from 'react';

const About = () => {
    return (
        <div className="container-fluid">
            <div className="row m-2 bg-light border rounded shadow">
                <div className="col-9">
                    <div className="card bg-light shadow mx-auto mt-5">
                        <p className="card-body">
                            I have always had a burning desire for any work related to the field of IT, and after 8 years of working as an electrical engineer, I decided to purse my passion and start a career in IT which had always been intresting to me,especially WEB DEVELOPING.
                        </p>
                        <p className="m-2">Hamid Dezhkam</p>
                    </div>
                </div>
                <div className="col-3">
                    <img
                        className="img-fluid rounded m-2"
                        src="https://via.placeholder.com/250x400"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default About;