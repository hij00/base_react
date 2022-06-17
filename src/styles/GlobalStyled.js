import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  color: "#3AB0FF",
  fontSize: "26px",
};

export const conWrapS = {
  backgroundColor: "gray",
};
export const hStyle = {
  fontSize: "26px",
};

export const GlobalStyled = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
a{
  text-decoration: none;
}

`;

// npm 홈페이지에서 styled-reset 검색, eric meyer 가 만든거~~

// reset은 전체에 적용 => App에 import

// 박스사이징은 따로 한번 더 적어주기
