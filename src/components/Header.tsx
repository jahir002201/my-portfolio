import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-teal text-white text-center py-3">
            <nav className="navbar navbar-expand-lg navbar-dark bg-teal fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Md Jahirul Islam</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                                <a className="nav-link fw-bold" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#experience">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
