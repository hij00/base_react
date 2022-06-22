import styled from "styled-components";

const Section = styled.div`
  padding: 200px 400px;
  display: flex;
  justify-content: space-between;
`;

const Bg = styled.div`
  width: 400px;
  height: 500px;
  background-color: lightgray;
`;

const TextWrap = styled.div`
  max-width: 500px;
`;

const Title = styled.div`
  margin-top: 100px;
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Desc = styled.div`
  opacity: 0.7;
  font-weight: 300;
  line-height: 1.5rem;
`;

export const Sub1 = () => {
  return (
    <Section>
      <Bg></Bg>
      <TextWrap>
        <Title>서브페이지1</Title>
        <Desc>
          모든 사람은 의견의 자유와 표현의 자유에 대한 권리를 가진다. 이러한
          권리는 간섭없이 의견을 가질 자유와 국경에 관계없이 어떠한 매체를
          통해서도 정보와 사상을 추구하고, 얻으며, 전달하는 자유를 포함한다.
        </Desc>
      </TextWrap>
    </Section>
  );
};
