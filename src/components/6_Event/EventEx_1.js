import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  background-color: #555;
`;
const Box = styled.div`
  width: 400px;
  height: 400px;
  /* background-color: lightblue; */
  background-color: ${(props) => props.bgColor};
`;
// 스타일은 컴포넌트 => 프롭스를 받아올수있음 => 프롭스를 이용해 변경
//

export const EventEx_1 = () => {
  // const [color, setColor] = useState("gold")
  //   ========================
  const [color, setColor] = useState("gold");
  const [bool, setBool] = useState(true);
  const handleColor = () => {
    if (bool === true) {
      setColor("teal");
      setBool(false);
    } else if (bool === false) {
      setColor("gold");
      setBool(true);
    }
  };

  return (
    <Wrap>
      <Box bgColor={color} onClick={handleColor}></Box>
    </Wrap>
  );
};
