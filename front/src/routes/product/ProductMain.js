import Header from "../../container/header/Header";
import styles from "./ProductMain.module.css";

function ProductMain() {
    return (  
        <div className={styles.container}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.content}>
                <div className={styles.name}>
                    올라온 상품
                </div>
                <div className={styles.products}>
                    <div className={styles.product}>
                        <div className={styles.image}>
                            <img src={process.env.PUBLIC_URL + '/logo192.png'}
                                width={"230px"} height={"230px"}/>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.title}>
                                {"아이폰15"}
                            </div>
                            <div className={styles.price}>
                                {'18,000'}원  
                            </div>
                            <div className={styles.location}>
                                곡반정동 | 택배거래
                            </div>
                            <div className={styles.distance}>
                                0.7km
                            </div>
                            <div className={styles.time}>
                                1분20초전
                            </div>
                        </div>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.image}>
                            <img src={process.env.PUBLIC_URL + '/logo192.png'}
                                width={"230px"} height={"230px"}/>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.title}>
                                {"아이폰15"}
                            </div>
                            <div className={styles.price}>
                                {'18,000'}원  
                            </div>
                            <div className={styles.location}>
                                곡반정동 | 택배거래
                            </div>
                            <div className={styles.distance}>
                                0.7km
                            </div>
                            <div className={styles.time}>
                                1분20초전
                            </div>
                        </div>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.image}>
                            <img src={process.env.PUBLIC_URL + '/logo192.png'}
                                width={"230px"} height={"230px"}/>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.title}>
                                {"아이폰15"}
                            </div>
                            <div className={styles.price}>
                                {18000}원 직접거래
                            </div>
                            <div className={styles.location}>
                                곡반정동
                            </div>
                            <div className={styles.time}>
                                1분20초전
                            </div>
                        </div>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.image}>
                            <img src={process.env.PUBLIC_URL + '/logo192.png'}
                                width={"230px"} height={"230px"}/>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.title}>
                                {"아이폰15"}
                            </div>
                            <div className={styles.price}>
                                {18000}원 직접거래
                            </div>
                            <div className={styles.location}>
                                곡반정동
                            </div>
                            <div className={styles.time}>
                                1분20초전
                            </div>
                        </div>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.image}>
                            <img src={process.env.PUBLIC_URL + '/logo192.png'}
                                width={"230px"} height={"230px"}/>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.title}>
                                {"아이폰15"}
                            </div>
                            <div className={styles.price}>
                                {18000}원 직접거래
                            </div>
                            <div className={styles.location}>
                                곡반정동
                            </div>
                            <div className={styles.time}>
                                1분20초전
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    );
}

export default ProductMain;