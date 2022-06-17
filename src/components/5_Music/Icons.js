import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Icon = styled.div`
  i {
    color: lightblue;
  }
  svg {
    color: teal;
  }
`;

export const Icons = () => {
  return (
    <Icon>
      <i class="fa-brands fa-youtube"></i>
      <FontAwesomeIcon icon={faPlay} />
    </Icon>
  );
};
// tms에 폰트어썸 설치 있음 - 여러개 한번에 설치할때 각 프로그램당 한칸씩 띄우고 설치하기

// cdn 링크 복사, html에 붙여넣기 / 폰트어썸에서 html 아이콘 복사=> 사이트를 한번 거치기 때문에 느려짐

// <FontAwesomeIcon icon={fa'name'}  =>svg

//< cdn 연결 ?or
