import React from "react";

const Country = ({ countries, deleteCountry }) => {
  // 총 메달 갯수 구하기
  const getTotalMedals = (country) => {
    return country.goldMedals + country.silverMedals + country.bronzeMedals;
  };

  // 정렬된 국가 목록 생성 (총 메달 갯수 순)
  const sortedCountries = [...countries].sort(function (a, b) {
    return getTotalMedals(b) - getTotalMedals(a);
  });

  return (
    <div>
      {
        /* 메달 집계 리스트가 표시될 자리 */
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>총 메달 갯수</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>입력</th>
            </tr>
          </thead>
          <tbody>
            {sortedCountries.map((country) => (
              <tr key={country.id}>
                <td>{country.countryName}</td>
                <td>{getTotalMedals(country)}</td>
                <td>{country.goldMedals}</td>
                <td>{country.silverMedals}</td>
                <td>{country.bronzeMedals}</td>
                <td>
                  <button onClick={() => deleteCountry(country.id)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
};

export default Country;
