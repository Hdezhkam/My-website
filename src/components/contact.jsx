import React from 'react';

const Contact = () => {
    {/* const mapObj = {
        key: '',
        type: 'neshan',
        zoom: 14,
        lat: '',
        long: '',
        width: 500,
        height: 400,
        marker: 'none'
    };

    const mapUrl = `https://api.neshan.org/v1/static?key=${mapObj.key}&type=${
        mapObj.type
    }&zoom=${mapObj.zoom}&center=${mapObj.lat},${mapObj.long}&width=${
        mapObj.width
    }&height=${mapObj.height}&marker=${mapObj.marker}`;
*/}
    return (
        <div className="container-fluid">
            <div className="row bg-light border rounded m-2">
                <div className="col-6 mt-3">
                    <p className="lead m-2">
                        {/* <span className="fa fa-envelope m-1" />
                        Contact:*/}
                    </p>
                    <div className="col">
                        <p className="m-2 mt-2">
                            <span className="fa fa-envelope-open" />
                            <span
                                style={{
                                    fontFamily: 'sans-serif'
                                }}
                                className="m-2 font-weight-bold"
                            >
                                hamid.dezhkam@gmail.com
                            </span>
                        </p>
                        <p className="m-2 mt-2">
                            <span className="fa fa-github" />
                            <span
                                style={{
                                    fontFamily: 'sans-serif'
                                }}
                                className="m-2 font-weight-bold"
                            >
                                Hdezhkam
                            </span>
                        </p>
                        <p className="m-2">
                            <span className="fa fa-address-card" />
                            <span className="m-2 font-weight-bold">1/38 Maidstone Street,Ringwood,VIC, Australia</span>
                        </p>
                        {/*<img
                            className="img-fluid img-thumbnail m-2"
                            src={mapUrl}
                            alt="Map"
                        />*/}
                    </div>
                </div>
                <div className="col-6">
                    <form>
                        <div className="card border-primary rounded m-2">
                            <div className="card-header p-0">
                                <div className="bg-info text-white text-center py-2">
                                    <h3>
                                        <i className="fa fa-envelope" /> Contact Information Form
                                    </h3>
                                    <p className="m-0">
                                        Please fill and send
                                    </p>
                                </div>
                            </div>
                            <div className="card-body p-3">
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fa fa-user text-info" />
                                            </div>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="fullname"
                                            placeholder="Full Name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fa fa-envelope text-info" />
                                            </div>
                                        </div>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email Address"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fa fa-comment text-info" />
                                            </div>
                                        </div>
                                        <textarea
                                            className="form-control"
                                            placeholder="Comment"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="text-center">
                                    <input
                                        type="submit"
                                        value="Send"
                                        className="btn btn-info btn-block rounded-0 py-2"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
