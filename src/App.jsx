// App.jsx
import React, { useState } from "react";
import "./App.css";
import Country from "./components/Country";
import Form from "./components/Form";

function App() {
  const [countries, setCountries] = useState([]);

  // 국가 이름을 입력하는 Input 값을 상태관리하기 위한 useState
  const [countryName, setCountryName] = useState("");
  const [goldMedals, setGoldMedals] = useState(0);
  const [silverMedals, setSilverMedals] = useState(0);
  const [bronzeMedals, setBronzeMedals] = useState(0);

  // (1) 새로운 나라 추가 기능
  const addNewCountry = (e) => {
    e.preventDefault();

    // 입력값이 비어 있는 경우 경고창 표시
    if (!countryName.trim()) {
      alert("국가 이름을 입력하세요.");
      return;
    }

    // 동일한 국가가 이미 존재하는지 확인
    const existingCountry = countries.find((country) => country.countryName === countryName);

    if (existingCountry) {
      alert("이미 존재하는 국가입니다. '업데이트' 버튼을 눌러 수정해주세요.");
      return;
    }

    // 새로운 국가 추가
    const newCountryList = [
      ...countries,
      {
        id: new Date().getTime(),
        countryName,
        goldMedals,
        silverMedals,
        bronzeMedals
      }
    ];

    // setCountries
    setCountries(newCountryList);

    // 입력 필드 초기화
    setCountryName("");
    setGoldMedals(0);
    setSilverMedals(0);
    setBronzeMedals(0);
  };

  // (2) 국가 업데이트 기능
  const updateCountry = (e) => {
    e.preventDefault();

    // 입력값이 비어 있는 경우 경고창 표시
    if (!countryName.trim()) {
      alert("국가 이름을 입력하세요.");
      return;
    }

    // 동일한 국가가 이미 존재하는지 확인
    const existingCountry = countries.find((country) => country.countryName === countryName);

    if (!existingCountry) {
      alert("등록되지 않은 국가입니다. '국가 추가' 버튼을 이용하여 국가 등록을 먼저 해주세요.");
      return;
    }

    // 국가 업데이트
    /**
     *     -- find 이용??
     *      1. input창 중에 나라이름에 매칭된 state 정보
     *      2. state에 있는 나라이름으로 현재 존재하는 countries 배열에서 찾아
     *          find => 내가 수정하려는 대상 국가를 찾음
     *          const targetCountry = ~~ ;
     *      3. 전체리스트가 10개, 수정 이후도 10개 => 같은 길이의 배열 반환 => map 사용
     *      3-1. map이 하나하나 순회를 도는데, targetCountry의 이름과 일치하면 메달 state에 맞게 수정
     *      3-2. map이 하나하나 순회를 도는데, targetCountry의 이름과 일치하지 않으면 그냥 return
     *            const newCountries = countries.map() ~~~ ;
     *      4. setCountries
     *      5. input 에 연결되어 있는 state들을 초기화
     */

    // find를 이용한 함수: 불필요하여 주석처리함
    // const targetCountry = countries.find((country) => country.countryName === countryName);

    const newCountries = countries.map((country) => {
      if (country.countryName === countryName) {
        return {
          // 단축속성: key와 value가 같기 때문에 생략 가능
          ...country,
          goldMedals,
          silverMedals,
          bronzeMedals
        };
      }
      return country;
    });

    // setCountries
    setCountries(newCountries);

    // 입력 필드 초기화
    setCountryName("");
    setGoldMedals(0);
    setSilverMedals(0);
    setBronzeMedals(0);
  };

  // (3) 국가 삭제하기 기능
  const deleteCountry = (id) => {
    const targetCountry = countries.find(function (country) {
      return country.id === id;
    });
    if (confirm(`${targetCountry.countryName}를 정말 삭제하시겠습니까?`)) {
      const filteredCountries = countries.filter((country) => country.id !== id);
      setCountries(filteredCountries);
    } else {
    }
  };

  return (
    <div className="container">
      <h1>2024 파리 올림픽 메달 트래커</h1>
      <Form
        countryName={countryName}
        setCountryName={setCountryName}
        goldMedals={goldMedals}
        setGoldMedals={setGoldMedals}
        silverMedals={silverMedals}
        setSilverMedals={setSilverMedals}
        bronzeMedals={bronzeMedals}
        setBronzeMedals={setBronzeMedals}
        addNewCountry={addNewCountry}
        updateCountry={updateCountry}
      />
      <Country countries={countries} deleteCountry={deleteCountry} />
    </div>
  );
}

export default App;
