import styles from "./ImageBox.module.css"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function ImageBox() {
    return (  
        <div className={styles.container}>
            <div className={styles.buttons}>
                <FaAngleLeft size={30} color="#aaaaaa" cursor={"pointer"}/>
                <FaAngleRight size={30} color="#aaaaaa" cursor={"pointer"}/>
            </div>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    s
                </div>
                <div className={styles.box}>
s
                </div>
                <div className={styles.box}>
s
                </div>
                <div className={styles.box}>
s
                </div>
            </div>
        </div>
    );
}

export default ImageBox;