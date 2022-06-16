import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgColor};
  border: 3px solid ${(props) => props.bgColor};
`;

export const Contents = () => {
  const mainColor = "#3AB0FF";
  return (
    <>
      <Box bgColor={mainColor}></Box>
    </>
  );
};

// 스타일 프레임워크 styled-components (설치따로 해야함, with npm)

// 도큐먼트(목차)
//npm node package manager

// install = i
// --save dependencies에 자동저장되서 따로 적지 않아도 됨
// npm uninstall filename 설치파일 삭제
// node_modules 용량 많아서 삭제했을때 npm install (npm i)
// 깃허브엔 노드모듈폴더는 안 올라감

// 스타일 컴포넌트는 따로 빼지않고 위쪽에 작성
// const 대문자로 이름시작 = styledComponents호출.만들 태그
// 컴포넌트라서 대문자로 태그작성

// 태그 클래스 이름을 지정하지 않아도 되는 장점이있음 => 랜덤 클래스명 생성됨
// 프롭스로 값을 전달받을수있음 ex)메인컬러 함수로 잡아놓고 불러오기
//
// npm install --save styled-components
// 기본 스타일은 scss와 비슷함

// 스타일 자동완성 확장프로그램 vscode-styled-components
// 확장프로그램 쓸땐 styled로 호출(Components nono)
