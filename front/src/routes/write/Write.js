import { useState, useRef } from "react";
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
  const [direct, setDirect] = useState(false);
  const [parcel, setParcel] = useState(false);
  const toggleParcelState = () => {
    if (!direct && !parcel) {
      setParcel(true);
    } else if (!parcel && direct) {
      setParcel(true);
      setDirect(false);
    }
  };
  const toggleDirectState = () => {
    if (!direct && !parcel) {
      setDirect(true);
    } else if (parcel && !direct) {
      setParcel(false);
      setDirect(true);
    }
  };

  /* 이미지 관련 */
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);

  const handleImageClick = () => {
    if (images.length >= 4) {
      alert("이미지는 최대 4개까지만 추가할 수 있습니다.");
      return;
    }
    // 이미지 클릭 시 파일 업로드 input 클릭
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    // 선택된 이미지에 대한 처리 로직 추가
    const newImage = {
      id: Date.now(), // 간단한 방법으로 고유한 ID 부여 (실제로는 더 복잡한 방법을 사용해야 함)
      file: selectedImage,
    };

    // 기존 이미지 배열에 새 이미지 추가
    setImages((prevImages) => [...prevImages, newImage]);
  };
  /* 이미지 관련 */

  /* input 값 관련 */
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleItemDescriptionChange = (event) => {
    setItemDescription(event.target.value);
  };
  /* input 값 관련 */
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const submitForm = () => {
    // 백엔드로 보낼 데이터 준비
    const formData = {
      type: checkSale ? "판매" : "나눔",
      state: stateNew
        ? "새상품"
        : state1
        ? "사용감 적음"
        : state2
        ? "사용감 있음"
        : "사용감 많음",
      method: direct ? "직거래" : parcel ? "택배" : "",
      productName,
      itemDescription,
      category,
      images, // 이미지 정보가 담긴 객체 배열로 가정
    };

    // 만약 판매인 경우에는 가격을 formData에 추가
    if (checkSale) {
      formData.price = price;
    }

    console.log(formData);

    // fetch나 다른 HTTP 라이브러리를 사용하여 데이터를 백엔드로 전송
    fetch("/write/write", {
      method: "POST", // 필요에 따라 "GET" 또는 "POST" 사용
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // 백엔드로부터의 응답 처리, 필요시
        console.log("성공:", data);
      })
      .catch((error) => {
        console.error("에러:", error);
      });
  };

  const isFormValid = () => {
    if (
      (checkSale || checkSharing) &&
      (stateNew || state1 || state2 || state3) &&
      (direct || parcel) &&
      productName.trim() !== "" &&
      (!checkSale || (checkSale && price.trim() !== "")) &&
      itemDescription.trim() !== ""
    ) {
      return true;
    }
    return false;
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
            <input
              placeholder="상품명을 입력해주세요."
              value={productName}
              onChange={handleProductNameChange}
            />
          </div>
          {checkSharing ? null : (
            <div className={styles.price}>
              <input
                type="number" // 숫자만 입력 가능하도록 설정
                placeholder="가격을 입력해주세요."
                value={price}
                onInput={handlePriceChange}
              />
              {price !== "" && (
                <span style={{ marginLeft: "5px" }}>
                  {parseInt(price, 10).toLocaleString()} 원
                </span>
              )}
            </div>
          )}

          <div className={styles.itemEx}>
            <input
              placeholder="상품에 대해 설명해주세요."
              value={itemDescription}
              onChange={handleItemDescriptionChange}
            />
          </div>
          <div className={styles.image}>
            <div className={styles.eachImage} onClick={handleImageClick}>
              <img src={addImage} width="70px" alt="add Image Icon"></img>
            </div>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleImageChange}
            />
            {images.map((image) => (
              <div key={image.id} className={styles.eachImage}>
                <img
                  src={URL.createObjectURL(image.file)}
                  alt="Uploaded"
                  width="125px"
                />
              </div>
            ))}
          </div>
          <div>이미지는 최대 4장까지 업로드 할 수 있습니다.</div>
          <div className={styles.category}>
            <select onChange={handleCategoryChange} value={category}>
              <option value="">카테고리를 선택하세요</option>
              {/* Add your category options here */}
            </select>
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
          <div className={styles.tradeMethod}>
            <div
              className={`${styles.checkSharing} ${parcel && styles.active}`}
              onClick={toggleParcelState}
            >
              택배
            </div>
            <div
              className={`${styles.checkSale} ${direct && styles.active}`}
              onClick={toggleDirectState}
            >
              직거래
            </div>
          </div>
          <button onClick={submitForm} disabled={!isFormValid()}>
            글 작성
          </button>
          {!isFormValid() && (
            <div className={styles.validationMessage}>
              이미지를 제외한 모든 항목을 입력해주세요.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Write;
