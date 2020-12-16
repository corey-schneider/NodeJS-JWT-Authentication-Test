import React from 'react';

function Navigation() {
    return (
        <div className="navbar" aria-label="Navigation bar"><br/>
        <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Configure budgets</a></li>
            <li><a href="#">[empty]</a></li>
            <li class="dropdown">
                <a href="#">Log in</a>
                <div class="dropdown-content">
                    <a href="#">dropdown 1</a>
                    <a href="#">dropdown 2</a>
                </div>
            </li>
        </ul>
    </div>
    );
}

export default Navigation;