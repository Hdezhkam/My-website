import React from 'react'

const Footer = () => {
    return (
        <footer className="float-right fixed-bottom navbar navbar-dark bg-dark col-md-9 ml-sm-auto col-lg-10 px-4 shadow">
            <div className="socialmedia">
                <a className="fa fa-instagram m-1" href="http://instagaram.com"></a>
                <a className="fa fa-facebook m-1" href="http://facebook.com"></a>
                <a className="fa fa-github m-1" href="http://github.com"></a>
            </div>
            <div className="copyright">
                <span className="fa fa-copyright m-1" />
                2018 Hamid Dezhkam
            </div> 
        </footer>
    );
}

export default Footer;
