import styled from "styled-components";
import { Link } from "react-router-dom";
import { keyframes } from "styled-components";

const move = keyframes`
0%{
    margin: 0;
}
100%{
    box-shadow: rgba(0, 0, 0, 0.1);
    margin: -5% 0 0 -5%;
}
`;

const Section1 = styled.div`
  height: 80vh;
  background-color: gray;
  background: url(https://cdn.britannica.com/74/182174-050-6755AB49/balloon-sky.jpg)
    center / cover;
  padding: 250px 0 0 250px;
  box-sizing: border-box;
`;
const TextWrap = styled.div`
  width: 500px;
  height: 400px;
  text-align: left;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 900;
  color: white;
  margin-bottom: 30px;
`;
const Desc = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: black;
  opacity: 0.5;
`;
const Section2 = styled.div`
  /* height: 1000px; */
  width: 100%;
`;
const ConWrap = styled.div`
  width: 1000px;
  margin: 150px auto 150px auto;
  display: flex;
  justify-content: space-between;
`;
const Con1 = styled.div`
  width: 450px;
  height: 500px;
  background-color: gray;
  box-shadow: 15px 30px 15px 0 rgba(0, 0, 0, 0.3);
  background: url(https://addons-media.operacdn.com/media/CACHE/images/themes/05/144705/1.0-rev1/images/0993404e-79e0-4052-923d-89236e7c102f/e4f4077f6d1f715a07786ff7692a8d1d.jpg)
    no-repeat center / cover;
  &:hover {
    animation: ${move} 0.5s infinite alternate;
  }
`;
const Con2 = styled.div`
  width: 450px;
  height: 500px;
  background-color: gray;
  box-shadow: 15px 30px 15px 0 rgba(0, 0, 0, 0.3);
  background: url(https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2t5fGVufDB8fDB8fA%3D%3D&w=1000&q=80)
    no-repeat left / cover;
  &:hover {
    animation: ${move} 0.5s infinite alternate;
  }
`;

export const Main = () => {
  return (
    <>
      <Section1>
        <TextWrap>
          <Title>Fly to the Sky</Title>
          <Desc>
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </Desc>
        </TextWrap>
      </Section1>
      <Section2>
        <ConWrap>
          <Link to="/menu1">
            <Con1></Con1>
          </Link>
          <Link to="/menu2">
            <Con2></Con2>
          </Link>
        </ConWrap>
      </Section2>
    </>
  );
};
