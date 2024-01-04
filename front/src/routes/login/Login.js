import Header from "../../container/header/Header";
import ImageBox from "../../container/main/ImageBox";
import styles from "./Login.module.css";
import email from "./icon/email.png";
import password from "./icon/password.png";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <div className={styles.logInBox}>
          <div className={styles.logInTitle}>
            <h2>안녕하세요!</h2>
            <h2>환영합니다.</h2>
          </div>
          <div className={styles.loginInputBox}>
            <div className={styles.emailBox}>
              <div className={styles.emailInput}>
                {/* 플렉스 가로 */}
                <div>{/* 이미지(이메일) */}</div>
                <input placeholder="이메일 입력"></input>
              </div>
            </div>
            <div className={styles.passwordBox}>
              <img
                src={password}
                width="16px"
                height="16px"
                alt="passwordIcon"
              />
              <div className={styles.passwordInput}>
                {/* 플렉스 가로 */}

                <input placeholder="비밀번호 입력"></input>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
