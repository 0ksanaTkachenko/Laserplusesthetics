import './ServicesList.css';
import { useEffect, useState } from 'react';
import servicesData from '@data/services.json';

const ServicesList = () => {

    const [services, setServices] = useState({});

    useEffect(() => {
        setServices(servicesData);
    }, []);

    return (
        <div className="services-list">
        <div>Services list Example</div>
        <h1>Our Services</h1>
        {Object.keys(services).map((category) => (
            <div key={category} className="service-category">
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <ul>
                {services[category].map((service, index) => (
                <li key={index}>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                </li>
                ))}
            </ul>
            </div>
        ))}
        </div>
    );
    
    
    
    
    
    

}

export default ServicesList