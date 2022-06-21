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
  background: url(https://addons-media.operacdn.com/media/CACHE/images/themes/05/144705/1.0-rev1/images/0993404e-79e0-4052-923d-89236e7c102f/e4f4077f6d1f715a07786ff7692a8d1d.jpg)
    no-repeat center / cover;
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

export const Menu1 = () => {
  return (
    <ConWrap>
      <ConBox></ConBox>
      <TextWrap>
        <Title>서브페이지1</Title>
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
