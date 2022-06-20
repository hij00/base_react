import {
  faBackward,
  faForward,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SBtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const Items = styled.div`
  &:nth-child(3) {
    width: 50px;
    height: 50px;
    background-color: salmon;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BtnWrap = () => {
  return (
    <SBtnWrap>
      <Items>
        <FontAwesomeIcon icon={faShuffle} />
      </Items>
      <Items>
        <FontAwesomeIcon icon={faBackward} />
      </Items>
      <Items>
        <FontAwesomeIcon icon={faPause} />
      </Items>
      <Items>
        <FontAwesomeIcon icon={faForward} />
      </Items>
      <Items>
        <FontAwesomeIcon icon={faRepeat} />
      </Items>
    </SBtnWrap>
  );
};
