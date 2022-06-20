import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;
const Menu = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(1) {
    background-color: white;
    color: #1d1d1d;
    font-size: 12px;
  }
  &:nth-child(2) {
    border: 1px solid #fff;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Menu>
        <FontAwesomeIcon icon={faChevronDown} />
      </Menu>
      <Menu>
        <FontAwesomeIcon icon={faBars} />
      </Menu>
      {/* html은 클래스나 구조선택자로 자식선택, react는 구조선택자로 
      menu의 첫번째자식 => menu를 한번 더 잡아줘야함, 같은걸 잡는건 & */}
    </SHeader>
  );
};
