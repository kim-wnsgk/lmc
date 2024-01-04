import styles from "./Recent.module.css";

function Recent() {
    return (  
        <div className={styles.container}>
            <div className={styles.title}>
                최근 올라온 상품
            </div>
            <div className={styles.product}>
                <div className={styles.box}>
                    스크롤을 양옆 화살표 버튼?식으로 해서 스크롤되도록 수정하기
                </div>
                <div className={styles.box}>
                    상품2
                </div>
                <div className={styles.box}>
                    상품3
                </div>
                <div className={styles.box}>
                    상품4
                </div>
                <div className={styles.box}>
                    상품1
                </div>
                <div className={styles.box}>
                    상품2
                </div>
                <div className={styles.box}>
                    상품3
                </div>
                <div className={styles.box}>
                    상품4
                </div>
            </div>
        </div>
    );
}

export default Recent;