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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CoverImg = styled.div`
  width: 90%;
  height: 250px;
  /* magin 0 auto를 쓰거나 섹션에 디스플레이 */
  border-radius: 25px;
  /* 똑같은 둥글기로 하고싶다면 글로벌스타일에 정의, 불러오기(props) */
  box-shadow: 0 15px 20px 10px rgba(0, 0, 0, 0.3);
  margin: 30px 0;
`;

export const Music = () => {
  return (
    <Wrap>
      <Section>
        <Header />
        <CoverImg
          style={{
            background: `url(https://miro.medium.com/max/1266/1*NSxK1LpaHRoBLN0ZgGpvUw.png) no-repeat center / cover`,
          }}
        />
        <TitleWrap />
        <PlayWrap />
        <BtnWrap />
        <BottomPlay />
      </Section>
    </Wrap>
  );
};
