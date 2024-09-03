import { useEffect } from 'react';

const useScrollAnimation = (selector, offset = 50, className = 'visible') => {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (itemTop < windowHeight - offset) {
                    item.classList.add(className);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [selector, offset, className]);
};

export default useScrollAnimation;