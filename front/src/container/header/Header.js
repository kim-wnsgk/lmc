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
            <div className={`${styles.header1} ${isHidden ? styles.hiddenHeader1 : ''}`}>
                <div className={styles.buttonBox}>
                    <div className={styles.buttons}>
                        <div className={styles.button}>
                            아직안넣음
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <div className={styles.button}>
                            로그인/회원가입
                        </div>
                        <div className={styles.button}>
                            마이페이지
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.header2} ${isHidden ? styles.hiddenHeader2 : ''}`}>
                <div className={styles.first}>
                    <div className={styles.logo}>
                        Logo
                    </div>
                    <div className={styles.search}>
                        <input size={'100%'} className={styles.input}/>
                    </div>
                    <div className={styles.buttons2}>
                        d
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
