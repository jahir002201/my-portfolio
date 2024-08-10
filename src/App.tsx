import React, { useState, FormEvent } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
        } else {
            alert('Please fill out all fields.');
        }
    };

    return (
        <>
            <Header />
            <main>
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact 
                    name={name} 
                    email={email} 
                    message={message} 
                    setName={setName} 
                    setEmail={setEmail} 
                    setMessage={setMessage} 
                    handleSubmit={handleSubmit} 
                />
            </main>
            <Footer />
        </>
    );
};

export default App;
