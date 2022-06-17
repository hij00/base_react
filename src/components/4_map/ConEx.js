// 같은 디자인이면 데이터베이스의 내용만 만들어서 연결해주면 됨
import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
`;

const ConWrap = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 30%;
  background-color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  /* 삼각형표시 => 문법오류 */
  a {
    color: white;
  }
`;

const Bg = styled.div`
  height: 350px;
  background-color: beige;
`;

const TitleWrap = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 26px;
  font-weight: 900;
`;

const Desc = styled.p`
  font-weight: 100;
  margin-top: 10px;
`;

// ctrl + alt 방향키 (커서 여러번)

export const ConEx = ({ ConDb }) => {
  return (
    <Wrap>
      <ConWrap>
        {ConDb.map((con) => (
          <Con key={con.id}>
            <a href={con.url}>
              {/* 색 지정하는 거 a 자체를 스타일로 지정하거나, con의 자식선택자로 잡기 
            자식선택자 => 부모 스타일에서  : 태그명{}*/}
              <Bg
                style={{
                  background: `url(${con.imgUrl}) no-repeat center / cover`,
                }}
              />
              <TitleWrap>
                <Title>{con.title}</Title>
                <Desc>{con.desc}</Desc>
              </TitleWrap>
            </a>
          </Con>
        ))}
      </ConWrap>
    </Wrap>
  );
};

// background 축약
// background: url() no-repeat backgroun-position(위치) / background-size(크기);
