import styled from "styled-components";

const ConWrap = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  margin: 150px auto;
`;
const ConBox = styled.div`
  width: 450px;
  height: 550px;
  background-color: gray;
  background: url(https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2t5fGVufDB8fDB8fA%3D%3D&w=1000&q=80)
    no-repeat left / cover;
`;
const TextWrap = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  color: #555;
  margin-bottom: 25px;
`;
const Desc = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #999;
`;

export const Menu2 = () => {
  return (
    <ConWrap>
      <ConBox></ConBox>
      <TextWrap>
        <Title>서브페이지2</Title>
        <Desc>
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Desc>
      </TextWrap>
    </ConWrap>
  );
};
