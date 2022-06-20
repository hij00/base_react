import { useState } from "react";

export const FnEvent = () => {
  // return안의 함수에 대한 정의는 이 사이
  const [num, setNum] = useState(0);
  // 배열 비구조화 할당
  // num의 값은 useState뒤에 있음
  //setNum = setState, num을 바꾸려면 setNum을 사용(이름은 아무거나 가능!)
  console.log(num);

  // 객체 비구조화 할당
  // const {속성, 속성} = 객체명
  // 객체의 내용을 쉽게 뽑아쓸수있음

  //   ==============================

  //   const handlePlus = () => {
  //     setNum(num + 1);
  //   };

  //   const handleMinus = () => {
  //     setNum(num - 1);
  //   };

  // =====================

  //   const handlePlus = () => setNum(num + 1);
  //   const handleMinus = () => setNum(num - 1);

  //   ==============================

  return (
    <div>
      <h3>{num}</h3>
      {/* <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button> */}
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};

// hooks
// 기존 클래스형 컴포넌트에서 비효율적인 부분 개선 => useState = Hook
// 앞에 use가 붙음
