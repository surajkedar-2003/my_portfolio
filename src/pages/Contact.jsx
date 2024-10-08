import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for handling form submission (e.g., sending data to an API)
        console.log(formData);
    };

    return (
        <section id="contact" className="flex flex-col items-center justify-center h-screen">
            <h2 className="font-semibold text-4xl text-center mb-8">Contact Me</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-md">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="p-2 border border-gray-300 rounded"
                    required
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    className="p-2 border border-gray-300 rounded"
                    required
                ></textarea>
                <button type="submit" className="bg-primary text-white p-2 rounded hover:bg-opacity-90">
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default ContactForm;

