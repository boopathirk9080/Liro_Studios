import React, { useState } from 'react';
import '../../App.css'
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [notification, setNotification] = useState('');
    const [isLoading, setIsLoading] = useState(false); // New state for the loader

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhoneNumber = (phoneNumber) => /^[0-9]{10}$/.test(phoneNumber);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate all fields
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
        else if (!validatePhoneNumber(formData.phoneNumber)) newErrors.phoneNumber = 'Phone number should be 10 digits';
        if (!formData.subject) newErrors.subject = 'Subject is required';
        if (!formData.message) newErrors.message = 'Message is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsLoading(true); // Show loader while sending

        try {
            const response = await fetch('http://localhost:5050/liro/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setNotification(<strong>{result.message}</strong>); // Bold message
                setFormData({ name: '', email: '', phoneNumber: '', subject: '', message: '' }); // Reset form
            } else {
                setNotification(<strong>{result.message}</strong>); // Bold error message
            }

            // Hide notification after 10 seconds
            setTimeout(() => setNotification(''), 2000);
        } catch (error) {
            setNotification(<strong>An error occurred while submitting the form.</strong>);
            setTimeout(() => setNotification(''), 2000); // Hide error message after 10 seconds
        }

        setIsLoading(false); // Hide loader
    };

    return (
        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        <span class="highlights"> Get in touch with us</span>
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
                        With a passion for excellence, we bring your ideas to life through cutting-edge digital marketing,
                        exquisite graphic design, and mesmerizing VFX & video support.
                    </p>
                </div>

                <br></br>
                <div class="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                    <div class="overflow-hidden bg-white rounded-xl">
                        <div class="p-6">
                            <svg class="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            <p class="mt-6 text-lg font-medium text-gray-900">+91 8778796477</p>
                            {/* <p class="mt-1 text-lg font-medium text-gray-900">+1-446-526-0117</p> */}
                        </div>
                    </div>

                    <div class="overflow-hidden bg-white rounded-xl">
                        <div class="p-6">
                            <svg class="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <p class="mt-6 text-lg font-medium text-gray-900">lirostudios@gmail.com</p>
                            {/* <p class="mt-1 text-lg font-medium text-gray-900">hr@example.com</p> */}
                        </div>
                    </div>

                    <div class="overflow-hidden bg-white rounded-xl">
                        <div class="p-6">
                            <svg class="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p class="mt-6 text-lg font-medium leading-relaxed text-gray-900">Tamilnadu, India</p>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                    <div className="mt-6 overflow-hidden bg-white rounded-xl">
                        <div className="px-6 py-12 sm:p-12">
                            <h3 className="text-3xl font-semibold text-center text-gray-900">Send us a message</h3>

                            {notification && <div className="mt-6 text-center text-lg text-green-600">{notification}</div>}

                            {isLoading && (
                                <div className="flex-col gap-4 w-full flex items-center justify-center mt-4">
                                    <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                                        <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
                                    </div>
                                    <p className="mt-4 text-blue-600">Sending mail... Please wait</p>
                                </div>
                            )}

                            {!isLoading && (
                                <form onSubmit={handleSubmit} className="mt-14">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                        {/* Form Inputs */}
                                        <div>
                                            <label className="text-base font-medium text-gray-900">Name</label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Enter your name"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                            </div>
                                        </div>
                                        {/* Email */}
                                        <div>
                                            <label className="text-base font-medium text-gray-900">Email address</label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter your email"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                            </div>
                                        </div>
                                        {/* Other Inputs */}
                                        <div>
                                            <label className="text-base font-medium text-gray-900">Phone number</label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    type="tel"
                                                    name="phoneNumber"
                                                    value={formData.phoneNumber}
                                                    onChange={handleChange}
                                                    placeholder="Enter your phone number"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-base font-medium text-gray-900">Subject</label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    placeholder="Enter the subject"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                                {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label className="text-base font-medium text-gray-900">Message</label>
                                            <div className="mt-2.5 relative">
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Enter your message"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                                                    rows="4"
                                                ></textarea>
                                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                                            </div>
                                        </div>
                                        {/* Submit Button */}
                                        <div className="sm:col-span-2">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
