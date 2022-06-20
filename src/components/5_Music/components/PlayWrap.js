import styled from "styled-components";

const SPlayWrap = styled.div`
  width: 100%;
  margin-top: 30px;
`;
const GageWrap = styled.div`
  width: 100%;
  height: 5px;
  background-color: gray;
  border-radius: 50px;
`;
const Gage = styled.div`
  width: 10%;
  height: 100%;
  background-color: salmon;
  border-radius: 50px;
`;
const TimeWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 12px;
  font-weight: 100;
`;

export const PlayWrap = () => {
  return (
    <SPlayWrap>
      <GageWrap>
        <Gage />
      </GageWrap>
      <TimeWrap>
        <span>00:03</span>
        <span>03:43</span>
      </TimeWrap>
    </SPlayWrap>
  );
};
