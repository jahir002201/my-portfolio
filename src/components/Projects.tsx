import React from 'react';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="container py-5">
            <h2 className="section-title">Projects</h2>
            <div className="row">
                <div className="col-md-6 col-sm-12 mb-4">
                    <h3>Project 1</h3>
                    <p>Description of the project.</p>
                    <img src="project1.jpg" alt="Project 1" className="img-fluid project" />
                </div>
                <div className="col-md-6 col-sm-12 mb-4">
                    <h3>Project 2</h3>
                    <p>Description of the project.</p>
                    <img src="project2.jpg" alt="Project 2" className="img-fluid project" />
                </div>
            </div>
        </section>
    );
};

export default Projects;
