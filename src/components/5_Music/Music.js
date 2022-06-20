import styledComponents from "styled-components";
import styled from "styled-components";
import { BottomPlay } from "./components/BottomPlay";
import { BtnWrap } from "./components/BtnWrap";
import { Header } from "./components/Header";
import { PlayWrap } from "./components/PlayWrap";
import { TitleWrap } from "./components/TitleWrap";

const Wrap = styled.div`
  /* 글로벌스타일 바디에 컬러넣거나 여기 컬러 넣으면 됨 */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Section = styled.div`
  width: 375px;
  height: 667px;
  background-color: #1d1d1d;
  border-radius: 25px;
  padding: 40px;
`;
const CoverImg = styled.div``;

export const Music = () => {
  return (
    <Wrap>
      <Section>
        <Header />
        <CoverImg></CoverImg>
        <TitleWrap />
        <PlayWrap />
        <BtnWrap />
        <BottomPlay />
      </Section>
    </Wrap>
  );
};
