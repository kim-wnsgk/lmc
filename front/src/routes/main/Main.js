import Header from "../../container/header/Header";
import ImageBox from "../../container/main/ImageBox";
import styles from "./Main.module.css";



function Main() {
    return (  
        <div className={styles.container}>
            <div className={styles.header}>
                <Header/>
            </div>
            <div className={styles.content}>
                <ImageBox />
            </div>
        </div>
    );
}

export default Main;