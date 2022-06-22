import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  height: 70px;
  width: 100%;
  background-color: white;
  padding: 0 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  a {
    color: black;
  }
`;

const Logo = styled.h3`
  font-size: 28px;
  font-weight: 900;
`;

const MenuWrap = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.li`
  margin-left: 250px;
  font-weight: 700;
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to="/">로고</Link>
      </Logo>

      <MenuWrap>
        <Menu>
          <Link to="/sub1">메뉴1</Link>
        </Menu>
        <Menu>
          <Link to="/sub1">메뉴2</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};

// 폰트 적용하기 => 링크복사 html 붙여넣기 => 폰트스타일 : 글로벌스타일 폰트패밀리

// 헤더픽스되서 글자 안보임
