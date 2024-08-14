import React from "react";

const Form = ({
  countryName,
  setCountryName,
  goldMedals,
  setGoldMedals,
  silverMedals,
  setSilverMedals,
  bronzeMedals,
  setBronzeMedals,
  addNewCountry,
  updateCountry
}) => {
  return (
    <form className="input-group">
      {
        /* 국가 이름, 메달 갯수의 입력 필드와 버튼 위치 */
        <>
          <div className="input-field">
            <label>{"국가명"}</label>
            <input
              type="text"
              placeholder="국가입력"
              value={countryName}
              onChange={(e) => {
                setCountryName(e.target.value);
              }}
            />
          </div>
          <div className="input-field">
            <label>{"금메달"}</label>
            <input
              type="number"
              placeholder="0"
              value={goldMedals}
              onChange={(e) => {
                setGoldMedals(parseInt(e.target.value)||0);
              }}
            />
          </div>
          <div className="input-field">
            <label>{"은메달"}</label>
            <input
              type="number"
              placeholder="0"
              value={silverMedals}
              onChange={(e) => {
                setSilverMedals(parseInt(e.target.value)||0);
              }}
            />
          </div>
          <div className="input-field">
            <label>{"동메달"}</label>
            <input
              type="number"
              placeholder="0"
              value={bronzeMedals}
              onChange={(e) => {
                setBronzeMedals(parseInt(e.target.value)||0);
              }}
            />
          </div>
          <div className="button-group">
            <button onClick={addNewCountry}>국가 추가</button>
            <button onClick={updateCountry}>업데이트</button>
          </div>
        </>
      }
    </form>
  );
};

export default Form;
