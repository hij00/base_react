import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageTitle } from "../components/PageTitle";

const Banner = styled.div`
  height: 800px;
  background-color: lightgray;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 120px 400px;
`;

const Content = styled.div`
  width: 45%;
  height: 500px;
  background-color: lightgray;
  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: translate(15px, 15px);
    /* 그림자거리만큼 들어가게 하면 됨 */
    box-shadow: none;
  }
`;

export const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PageTitle text={"Home"} />
      <Section>
        <Content>
          <Link to="/sub1"></Link>
        </Content>
        <Content>
          <Link to="/sub2"></Link>
        </Content>
        {/* 컨텐츠 안으로 링크걸어주고 링크(a태그)는 블럭요소로 바꿔주고 크기 100% */}
      </Section>
    </div>
  );
};
