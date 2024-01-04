import Header from "../../container/header/Header";
import Recent from "../../container/main/Recent";
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
                <Recent />
            </div>
        </div>
    );
}

export default Main;