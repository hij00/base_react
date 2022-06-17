import {
  faBackward,
  faBars,
  faBorderNone,
  faChevronDown,
  faForward,
  faForwardStep,
  faPause,
  faPauseCircle,
  faRandom,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styledComponents from "styled-components";
import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ConWrap = styled.div`
  width: 375px;
  height: 667px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const HeadWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;
const Icon_1 = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;
const Icon_2 = styled.div`
  width: 50px;
  height: 50px;
  border: 0.5px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: white;
`;
const Cover = styled.div`
  width: 280px;
  height: 280px;
  background-color: beige;
  border-radius: 30px;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIq22dzmgJMzXs5lBBQ_3zzLhW3C5Zx29CRpHtMoIjhDbeJgjzLMABl0cWCdq65dQ9tc&usqp=CAU")
    center / contain;
`;
const TextWrap = styled.div`
  text-align: center;
  color: white;
`;
const SongName = styled.h1`
  font-size: 20px;
`;
const Person = styled.h6`
  font-size: 14px;
  color: #777;
  margin-top: 5px;
`;
const BarWrap = styled.div`
  width: 320px;
`;
const Bar = styled.div`
  height: 5px;
  border-radius: 50px;
  background-color: gray;
`;
const Play = styled.div`
  width: 30px;
  height: 5px;
  border-radius: 50px;
  background-color: salmon;
`;
const Time = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #777;
  font-size: 14px;
  margin-top: 5px;
`;
const GuideWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  svg {
    color: white;
  }
`;
const PopUp = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  background-color: white;
  border-radius: 50px;
  margin-bottom: 30px;
  svg {
    width: 30px;
    height: 30px;
    color: #111;
    border: 0.5px solid #333;
    border-radius: 50px;
  }
`;
const AlbumMid = styled.div`
  width: 30px;
  height: 30px;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIq22dzmgJMzXs5lBBQ_3zzLhW3C5Zx29CRpHtMoIjhDbeJgjzLMABl0cWCdq65dQ9tc&usqp=CAU")
    center / contain;
  border-radius: 50px;
`;
const SongMid = styled.h1`
  margin: 0 70px 0 70px;
`;

export const MusicApp = () => {
  return (
    <Wrap>
      <ConWrap>
        <HeadWrap>
          <Icon_1>
            <FontAwesomeIcon icon={faChevronDown} />
          </Icon_1>
          <Icon_2>
            <FontAwesomeIcon icon={faBars} />
          </Icon_2>
        </HeadWrap>
        <Cover></Cover>
        <TextWrap>
          <SongName>Blue bird</SongName>
          <Person>Pick Dreams</Person>
        </TextWrap>
        <BarWrap>
          <Bar>
            <Play></Play>
          </Bar>
          <Time>
            <h1>00:03</h1>
            <h1>03:33</h1>
          </Time>
          <GuideWrap>
            <FontAwesomeIcon icon={faRandom} />
            <FontAwesomeIcon icon={faBackward} />
            <FontAwesomeIcon
              icon={faPauseCircle}
              style={{
                color: "salmon",
                width: "50px",
                height: "50px",
              }}
            />
            <FontAwesomeIcon icon={faForward} />
            <FontAwesomeIcon icon={faRepeat} />
          </GuideWrap>
          <PopUp>
            <AlbumMid></AlbumMid>
            <SongMid>Blue bird</SongMid>
            <FontAwesomeIcon icon={faForwardStep} />
          </PopUp>
        </BarWrap>
      </ConWrap>
    </Wrap>
  );
};
