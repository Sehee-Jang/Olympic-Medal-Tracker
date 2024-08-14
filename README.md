# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Medal Tracker App

## 설명

이 앱은 다양한 국가의 올림픽 메달을 추적할 수 있는 간단한 React 애플리케이션입니다. 사용자는 국가를 추가, 업데이트, 삭제할 수 있으며, 각 국가의 메달 수를 관리할 수 있습니다.

## 컴포넌트

### 1. `App.jsx`

애플리케이션의 메인 컴포넌트로, 상태를 관리하고 다른 컴포넌트를 렌더링합니다. 국가 목록과 메달 수를 유지하며, 국가를 추가, 업데이트, 삭제하는 기능을 처리합니다.

### 2. `Form.jsx`

국가 정보를 입력하거나 업데이트하는 폼을 담당하는 컴포넌트입니다. 국가 이름과 메달 수를 입력받아, 새로운 국가를 추가하거나 기존 국가를 업데이트하는 기능을 제공합니다.

**Props:**

- `countryName` (string): 현재 입력된 국가 이름
- `setCountryName` (function): `countryName` 상태를 업데이트하는 함수
- `goldMedals` (number): 현재 금메달 수
- `setGoldMedals` (function): `goldMedals` 상태를 업데이트하는 함수
- `silverMedals` (number): 현재 은메달 수
- `setSilverMedals` (function): `silverMedals` 상태를 업데이트하는 함수
- `bronzeMedals` (number): 현재 동메달 수
- `setBronzeMedals` (function): `bronzeMedals` 상태를 업데이트하는 함수
- `addNewCountry` (function): 새로운 국가를 추가하는 함수
- `updateCountry` (function): 기존 국가를 업데이트하는 함수

**사용 예시:**

```jsx
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
```

### 3. `Country.jsx`

    국가 목록과 메달 수를 테이블 형식으로 렌더링하는 컴포넌트입니다. 각 국가의 삭제 버튼도 포함되어 있습니다.

**Props:**

- countries (array): 국가 객체들의 리스트
- deleteCountry (function): 국가를 삭제하는 함수

**사용 예시:**

```jsx
<Country countries={countries} deleteCountry={deleteCountry} />
```
