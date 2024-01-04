import Header from "../../container/header/Header";
import ImageBox from "../../container/main/ImageBox";
import styles from "./SignIn.module.css";
import email from "./icon/email.png";
import password from "./icon/password.png";

function SignIn() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <div className={styles.signInBox}>
          <div className={styles.title}>
            <h2>회원정보</h2>
          </div>
          <div className={styles.inputBox}>
            <div className={styles.emailBox}>
              <p>이메일</p>
              <input></input>
            </div>
            <div className={styles.passwordBox}>
              <p>패스워드</p>
              <input></input>
            </div>
            <div className={styles.nameBox}>
              <p>이름</p>
              <input></input>
            </div>
            <div className={styles.birthBox}>
              <p>생년월일</p>
              <input></input>
            </div>
            <div className={styles.nicknameBox}>
              <p>닉네임</p>
              <input></input>
            </div>
            <div className={styles.nextButton}>
              <div className={styles.nextText}>다음으로</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
