import React, { Dispatch, SetStateAction, FormEvent } from 'react';

interface ContactProps {
    name: string;
    email: string;
    message: string;
    setName: Dispatch<SetStateAction<string>>;
    setEmail: Dispatch<SetStateAction<string>>;
    setMessage: Dispatch<SetStateAction<string>>;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Contact: React.FC<ContactProps> = ({ name, email, message, setName, setEmail, setMessage, handleSubmit }) => {
    return (
        <section id="contact" className="container py-5">
            <h2 className="section-title">Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea className="form-control" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </section>
    );
};

export default Contact;
