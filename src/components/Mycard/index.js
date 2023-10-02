import React from 'react';
import { FaBriefcase, FaStore, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 

const Card = ({ title, description, icon }) => {
    const navigate = useNavigate();

    const handleApplyClick = () => {
        navigate('/apply');
    };

    const renderIcon = () => {
        switch (icon) {
            case 'business':
                return <FaBriefcase className="text-3xl text-teal-400 absolute top-5 right-5" />;
            case 'shop':
                return <FaStore className="text-4xl text-green-400 absolute top-5 right-5" />;
            case 'ecommerce':
                return <FaShoppingCart className="text-3xl text-teal-400 absolute top-5 right-5" />;
            case 'personal':
                return <FaUser className="text-3xl text-teal-400 absolute top-5 right-5" />;
            default:
                return null;
        }
    };

    return (
        <div className="max-w-sm w-80 mx-auto bg-white shadow-lg rounded-2xl mt-3 overflow-hidden mb-3 text-center transition-transform transform hover:scale-105">
            <div className="px-6 py-4 relative">
                {renderIcon()}
                <div className="mb-4">
                    <h2 className="text-xl font-bold">{title}</h2>
                </div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 py-4 flex justify-center">
                <button
                    className="bg-blue-600 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
                    onClick={handleApplyClick}
                >
                    Apply
                </button>
            </div>
        </div>
    );
};

const CardList = () => {
    const cardsData = [
        { title: 'Business Website', description: 'Get a professional website for your business.', icon: 'business' },
        { title: 'Shop Website', description: 'Create an online presence for your shop.', icon: 'shop' },
        { title: 'E-commerce Website', description: 'Start selling online with an e-commerce platform.', icon: 'ecommerce' },
        { title: 'Personal Website', description: 'Build your personal brand with a customized website.', icon: 'personal' },
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {cardsData.map((card, index) => (
                <Card key={index} title={card.title} description={card.description} icon={card.icon} />
            ))}
        </div>
    );
};

export default CardList;
