import Header1 from "../../container/header/Header1";
import Header2 from "../../container/header/Header2";

import styles from "./Header.module.css";
function Header() {
    return (  
        <div className={styles.container}>
            <Header1 />
            <Header2 />
        </div>
    );
}

export default Header;