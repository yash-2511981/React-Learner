import React from 'react';
import { Link } from 'react-router-dom';

const IntroductionPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-white">
            {/* Hero Section */}
            <section className="flex-grow flex flex-col justify-center items-center text-center px-4 py-16 md:py-24">
                <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s animate__slow">
                    Welcome to iNotebook!
                </h1>
                <p className="text-lg md:text-xl mb-8 animate__animated animate__fadeIn animate__delay-2s animate__slow">
                    Keep your notes and todos organized and accessible anytime, anywhere.
                </p>
                <Link
                    to="/register"
                    className="bg-indigo-600 text-white hover:bg-indigo-700 py-3 px-8 rounded-md text-lg font-semibold transform transition-all duration-300 animate__animated animate__fadeIn animate__delay-3s animate__slow"
                >
                    Get Started
                </Link>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gray-800">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-8 animate__animated animate__fadeIn animate__delay-4s animate__slow">
                        Why Choose iNotebook?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-5s animate__slow">
                            <h3 className="text-2xl font-bold mb-4">Easy Organization</h3>
                            <p className="text-lg">Quickly create, edit, and organize your notes and todos in one place.</p>
                        </div>
                        <div className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-6s animate__slow">
                            <h3 className="text-2xl font-bold mb-4">Access Anywhere</h3>
                            <p className="text-lg">Sync your data across all devices and access it wherever you go.</p>
                        </div>
                        <div className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-7s animate__slow">
                            <h3 className="text-2xl font-bold mb-4">Stay Productive</h3>
                            <p className="text-lg">Stay on top of your tasks with to-do lists and reminders.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IntroductionPage;
