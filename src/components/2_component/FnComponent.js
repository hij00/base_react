// const FnComponent = () => {
//   return <div>함수형 컴포넌트</div>;
// };

// export default FnComponent;

// 2개이상의 함수 적는법, 따로 함수 지정하면 오류남

export const FnComponent_1 = () => {
  return <div>함수형 컴포넌트1</div>;
};

export const FnComponent_2 = () => {
  return <div>함수형 컴포넌트2</div>;
};

// 함수를 하나만 내보낼땐 default
// 두개 이상일땐 함수 앞에 export 붙이면 내보내짐,
// 불러올땐 import{함수명} (호출할때 return안에 적어주면 자동 호출)
