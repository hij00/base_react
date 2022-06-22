import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.div`
  margin: 0 250px;
  height: 80px;
  font-size: 26px;
  color: black;
  font-weight: 900;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  a {
    color: black;
  }
  svg {
    cursor: pointer;
    /* display: none; */
    position: absolute;
    top: 30px;
    right: -200px;
    z-index: 9999;
    color: ${(props) => props.font};
  }
`;
const MenuWrap = styled.div`
  width: 400px;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  /* display: none; */
  justify-content: center;
  align-items: center;
  z-index: 999;
  position: absolute;
  top: 0;
  right: ${(props) => props.wrap};
  transition: 0.5s;
`;
const Menus = styled.div`
  /* width: 40%; */
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Tap = styled.div`
  width: 300px;
  height: 50px;
  /* border-radius: 50%; */
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  a {
    color: black;
    font-size: 22px;
  }
`;

export const Navi = () => {
  const [show, setShow] = useState("-400px");
  const [showw, setShoww] = useState("black");

  const handleClick = () => {
    // setShow("flex");
    // setShoww("none");
    if (show === "-400px") {
      setShow("0px");
    } else {
      setShow("-400px");
    }
    if (showw === "black") {
      setShoww("salmon");
    } else {
      setShoww("black");
    }
  };

  return (
    <>
      <HeaderWrap>
        <Link to="/">로고</Link>
        {/* <MenuWrap>
          <Link to="/menu1">메뉴1</Link>
          <Link to="/menu2">메뉴2</Link>
        </MenuWrap> */}
        <FontAwesomeIcon icon={faBars} font={showw} onClick={handleClick} />
      </HeaderWrap>
      <MenuWrap wrap={show}>
        <Menus>
          <Tap>
            <Link to="/menu1">메뉴1</Link>
          </Tap>
          <Tap>
            <Link to="/menu2">메뉴2</Link>
          </Tap>
        </Menus>
      </MenuWrap>
    </>
  );
};
