import styled from "styled-components";

const STitleWrap = styled.div`
  text-align: center;
  h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  p {
    font-size: 14px;
    font-weight: 100;
    opacity: 0.7;
  }
`;

export const TitleWrap = () => {
  return (
    <STitleWrap>
      <h3>Blue Bird</h3>
      <p>pink Dreams</p>
    </STitleWrap>
  );
};
