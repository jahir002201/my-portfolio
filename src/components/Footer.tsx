import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="text-center py-3">
            <p>&copy; 2024 Md Jahirul Islam. All rights reserved.</p>
            <div className="footer-links">
                <a href="mailto:jahirul002201@gmail.com"><i className="fas fa-envelope"></i> Email</a>
                <a href="https://www.linkedin.com/in/jahirul12" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
                <a href="https://leetcode.com/jahir002201/" target="_blank" rel="noopener noreferrer"><i className="fab fa-code"></i> LeetCode</a>
                <a href="https://judge.beecrowd.com/en/profile/654592" target="_blank" rel="noopener noreferrer"><i className="fas fa-gavel"></i> Beecrowd</a>
            </div>
        </footer>
    );
};

export default Footer;
