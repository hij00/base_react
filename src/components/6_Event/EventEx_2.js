import { useState } from "react";
import styled from "styled-components";

// 팝업이벤트
const Box = styled.div`
  width: 400px;
  height: 400px;
  background-color: gray;
`;
const PopUp = styled.div`
  width: 250px;
  height: 500px;
  background-color: white;
  border: 3px solid black;
  position: absolute;
  top: 100px;
  left: 300px;
  display: ${(props) => props.show};
`;

export const EventEx_2 = () => {
  const [show, setShow] = useState("none");
  const [bool, setBool] = useState(true);

  const handleShow = () => {
    setShow("block");
  };
  const handleClose = () => {
    setShow("none");
  };

  return (
    <>
      <Box onClick={handleShow}></Box>
      <PopUp show={show} onClick={handleClose}></PopUp>
    </>
  );
};

// 박스를 클릭하면 팝업창이 뜨고 팝업창 클릭하면 팝업창 사라지는 => 팝업의 디스플레이!
