import styled from "styled-components";
import { Link } from "react-router-dom";

const Together = styled.div`
  a {
    color: black;
  }
`;
const Wrap = styled.div`
  height: 100vh;
`;
const Text = styled.div`
  font-size: 30px;
  font-weight: 900;
  &:nth-child(1) {
    margin-bottom: 30px;
  }
`;
const Box = styled.div``;

export const Err = () => {
  return (
    <Together>
      <Link to="/*">
        <Wrap>
          <Text>
            <h3>페이지를 찾을 수 없습니다.</h3>
          </Text>
          <Text>
            <p>page is not found.</p>
          </Text>
          <Box>메인페이지</Box>
        </Wrap>
      </Link>
    </Together>
  );
};

// export const Footer = () => {
//   if (window.location.pathname === "/*") return null;
//   return (
//     <Link to="/*" style={{ color: "black" }}>
//       <Wrap>
//         <Text>
//           <h3>페이지를 찾을 수 없습니다.</h3>
//         </Text>
//         <Text>
//           <p>page is not found.</p>
//         </Text>
//         <Box>메인페이지</Box>
//       </Wrap>
//     </Link>
//   );
// };
