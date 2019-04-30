import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { getCourseCount } from '../services/courseService';
import getNavLinks from '../services/navLinks';
import UserInfo from './common/userInfo';

class Sidebar extends Component {
    state = {
        courseCount: ''
    };
    async componentDidMount() {
        const {data: courseCount} = await getCourseCount();
        this.setState({courseCount: courseCount.count});
    }
    render() {
        const navLinks = getNavLinks();
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <UserInfo 
                        imgUrl="https://lh3.googleusercontent.com/-E8HGRIybCoQ/XIl4z1G9KvI/AAAAAAAAMYU/yKfNNCMht_gCIPIG3OF1TcFz6UTe21hKQCEwYBhgL/w140-h139-p/IMG-2376.JPG"
                        fullname="Hamid Dezhkam"
                        text="Front End Web Developer"
                    />
                    <hr className="shadow"/>
                    <ul className="nav flex-column">
                        {navLinks.map(nav => (
                          <li className="nav-item" key={nav.id}>
                            <Link className="nav-link" to={nav.link}>
                                <span className={nav.icon}/>
                                <span className="m-2">{nav.text}</span>
                                {nav.text ==='Courses'? (
                                    <span className="badge-primary badge-pill">
                                        {this.state.courseCount}
                                    </span>
                                ) : null}
                            </Link>
                          </li>
                            
                        ))} 
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Sidebar;