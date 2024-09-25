import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import service from '../assets/service.png';
import check from '../assets/1.png';

const Services = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isThankYouOpen, setThankYouOpen] = useState(false);
    const navigate = useNavigate();

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleModal(); 
        setThankYouOpen(true); 
    };

    const closeThankYouModal = () => {
        setThankYouOpen(false); 
    };

    const handleBackToHome = () => {
        navigate('/'); 
    };

    return (
        <div>
        <div className="flex flex-col md:flex-row w-full font-poppins pl-4 md:px-10">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h1 className="font-extrabold text-4xl text-center md:text-left md:text-5xl mb-4">24/7 Technical Support And <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Consulting</span></h1>
                <ul className='pt-5 text-xl md:text-2xl space-y-4'>
                    <li className="flex items-center">
                        <img src={check} alt="Check icon" className="inline w-6 h-6 mr-3" />
                        Get expert consultation and technical support via email anytime, day or night.
                    </li>
                    <li className="flex items-center">
                        <img src={check} alt="Check icon" className="inline w-6 h-6 mr-3" />
                        Assistance available in multiple languages to ensure clear communication.
                    </li>
                    <li className="flex items-center">
                        <img src={check} alt="Check icon" className="inline w-6 h-6 mr-3" />
                        Fast and efficient! Receive personalized solutions in less than 2 minutes.
                    </li>
                </ul>
                {/* Button Container */}

            </div>
            <div className="flex justify-center w-full md:w-1/2 pl-0 md:pl-10">
                <img src={service} alt="Service" className="w-full max-w-lg h-auto" />
            </div>
            
            
            {/* Modal for asking questions */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
                    onClick={toggleModal}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative p-4 w-full max-w-lg bg-white rounded-lg shadow z-50 dark:bg-gray-700" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Feel free to ask us</h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={toggleModal}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4">
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="John Doe"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="issue" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Describe Your Issue:</label>
                                    <textarea
                                        name="issue"
                                        id="issue"
                                        placeholder="Describe your issue here..."
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                                >
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Thank You Modal */}
            {isThankYouOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
                    onClick={closeThankYouModal}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    <div className="relative p-4 w-full max-w-lg bg-white rounded-lg shadow dark:bg-gray-700" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                            
                            <div className='justify-center text-center'>
                                <h1 className="text-6xl font-bold text-gray-900 dark:text-white">Thank You!!</h1>
                                <p className='text-xl pt-5'>Your request has been received. Our expert team will reach out to you shortly with personalized support.</p>
                            </div>

                        </div>
                        <div className='items-center justify-center text-center'>
                            <button
                                type="button"
                                className="text-white bg-black px-10 py-2 rounded-lg text-xl"
                                onClick={closeThankYouModal}
                                >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        <div className="flex justify-center mt-5">
            <button
                onClick={toggleModal}
                className="text-white bg-black focus:ring-4 md:text-3xl text-1xl rounded-xl font-semibold text-sm px-10 py-2.5"
                >
                Get Expert Advice
                </button>
        </div>
        </div>
    );
};

export default Services;
