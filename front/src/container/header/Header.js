import React, { useState, useEffect } from 'react';

import styles from "./Header.module.css";

function Header() {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsHidden(scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={`${isHidden ? styles.hiddenHeader : styles.header1}`}>
                header1
            </div>
            <div className={styles.header2}>
                header2
            </div>
        </div>
    );
}

export default Header;
