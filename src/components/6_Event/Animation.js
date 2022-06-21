import styled from "styled-components";
import { keyframes } from "styled-components";

const move = keyframes`
0%{
    margin: 0;

}
100%{
    margin-top: 100px;
    margin-left: 100px;
}
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: lightblue;
  animation: ${move} 1s infinite alternate;
`;

export const Animation = () => {
  return <Box>Animation</Box>;
};

// 애니메이션 이름을 적을때 ${}
// keyframe은 스타일 컴포넌트로 불러와야함
