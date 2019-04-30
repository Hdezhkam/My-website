import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPostsCount } from '../../services/postService';
import { getCourseCount } from '../../services/courseService';

class Navbar extends Component {
    state = {
        postCount: '',
        courseCount: '' 
    };

    async componentDidMount() {
        const { data: postCount } = await getPostsCount();
        const { data: courseCount } = await getCourseCount();

        this.setState({
            postCount: postCount.count,
            courseCount: courseCount.count
        });
    }
    render() {
        const { postCount, courseCount } = this.state;
        return (
            <nav className="rtl navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
                    Hi Hamid
                </a>
                <p className="mt-2" style={{ color: 'white' }}>
                    Posts:
                    <span className="badge badge-warning badge-pill m-1">
                        {postCount}
                    </span>
                </p>
                <p className="mt-2" style={{ color: 'white' }}>
                    Courses:
                    <span className="badge badge-warning badge-pill m-1">
                        {courseCount}
                    </span>
                </p>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <Link className="nav-link" to="/admin/logout">
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;