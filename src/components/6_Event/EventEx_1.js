import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgColor};
`;

export const EventEx_1 = () => {
  const [color, setColor] = useState("teal");
  const [bool, setBool] = useState(true);
  //   bool의 값이 true라고 알리고 시작?

  const handleClick = () => {
    // setColor("gold");

    // 반복==============
    if (bool) {
      setColor("gold");
      setBool(false);
    } else if (!bool) {
      setColor("teal");
      setBool(true);
    }
  };

  //   return <Box bgColor={"gold"} onClick={handleClick}></Box>;
  return <Box bgColor={color} onClick={handleClick}></Box>;
};
