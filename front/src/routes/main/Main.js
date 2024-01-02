import styles from "./Main.module.css";

import Header1 from "../../container/header/Header1";
import Header2 from "../../container/header/Header2";

function Main() {
    return (  
        <div className={styles.container}>
            <Header1 />
            <Header2 />
        </div>
    );
}

export default Main;