import { useState } from "react";
import Header from "../../container/header/Header";
import styles from "./Write.module.css";
import addImage from "./icon/addImage.png";

function Write() {
  const [checkSale, setCheckSale] = useState(false);
  const [checkSharing, setCheckSharing] = useState(false);
  const toggleCheckSaleState = () => {
    if (!checkSale && !checkSharing) {
      setCheckSale(true);
    } else if (!checkSale && checkSharing) {
      setCheckSale(true);
      setCheckSharing(false);
    }
  };
  const toggleCheckSharingState = () => {
    if (!checkSale && !checkSharing) {
      setCheckSharing(true);
    } else if (checkSale && !checkSharing) {
      setCheckSale(false);
      setCheckSharing(true);
    }
  };

  const [stateNew, setStateNew] = useState(false);
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const toggleCheckStateNew = () => {
    if (!stateNew && !state1 && !state2 && !state3) {
      setStateNew(true);
    } else if (state1 || state2 || state3) {
      setStateNew(true);
      setState1(false);
      setState2(false);
      setState3(false);
    }
  };
  const toggleCheckState1 = () => {
    if (!stateNew && !state1 && !state2 && !state3) {
      state1(true);
    } else if (stateNew || state2 || state3) {
      setStateNew(false);
      setState1(true);
      setState2(false);
      setState3(false);
    }
  };
  const toggleCheckState2 = () => {
    if (!stateNew && !state1 && !state2 && !state3) {
      state2(true);
    } else if (stateNew || state1 || state3) {
      setStateNew(false);
      setState1(false);
      setState2(true);
      setState3(false);
    }
  };
  const toggleCheckState3 = () => {
    if (!stateNew && !state1 && !state2 && !state3) {
      state3(true);
    } else if (stateNew || state1 || state2) {
      setStateNew(false);
      setState1(false);
      setState2(false);
      setState3(true);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <div className={styles.writeBox}>
          <div className={styles.check}>
            <div
              className={`${styles.checkSharing} ${
                checkSharing && styles.active
              }`}
              onClick={toggleCheckSharingState}
            >
              무료나눔
            </div>
            <div
              className={`${styles.checkSale} ${checkSale && styles.active}`}
              onClick={toggleCheckSaleState}
            >
              판매
            </div>
          </div>
          <div className={styles.title}>
            <input placeholder="상품명을 입력해주세요."></input>
          </div>
          {checkSharing ? null : (
            <div className={styles.price}>
              <input placeholder="가격을 입력해주세요."></input>
            </div>
          )}

          <div className={styles.itemEx}>
            <input placeholder="상품에 대해 설명해주세요."></input>
          </div>
          <div className={styles.image}>
            <div className={styles.eachImage}>
              <img src={addImage} width="50px" alt="add Image Icon"></img>
            </div>
          </div>
          <div>이미지는 최대 4장까지 업로드 할 수 있습니다.</div>
          <div className={styles.category}>
            여기는 카테고리를 선택할 수 있는 칸
          </div>

          <div className={styles.state}>
            <div
              className={`${styles.stateNew} ${stateNew && styles.active}`}
              onClick={toggleCheckStateNew}
            >
              새상품
            </div>
            <div
              className={`${styles.state1} ${state1 && styles.active}`}
              onClick={toggleCheckState1}
            >
              사용감 적음
            </div>
            <div
              className={`${styles.state2} ${state2 && styles.active}`}
              onClick={toggleCheckState2}
            >
              사용감 있음
            </div>
            <div
              className={`${styles.state3} ${state3 && styles.active}`}
              onClick={toggleCheckState3}
            >
              사용감 많음
            </div>
          </div>
          <div className={styles.tradeMethod}>택배거래 / 직거래 선택</div>
        </div>
      </div>
    </div>
  );
}

export default Write;
