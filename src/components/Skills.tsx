import React from 'react';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="container py-5 bg-light">
            <h2 className="section-title">Skills</h2>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">PHP Laravel Framework</li>
                <li className="list-group-item">HTML5, CSS3</li>
                <li className="list-group-item">JavaScript, jQuery, AJAX</li>
                <li className="list-group-item">MySQL, PHP OOP</li>
                <li className="list-group-item">Bootstrap</li>
                <li className="list-group-item">Algorithms & Data Structures</li>
                <li className="list-group-item">C, C++</li>
            </ul>
        </section>
    );
};

export default Skills;
