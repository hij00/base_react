// 작업 다 한 상태로 사이트 배포해서 오기

import styledComponents from "styled-components";
import { conWrapS } from "../../styles/GlobalStyled";

const Div = styledComponents.div`
backgroundColor: ${conWrapS.backgroundColor}`;

export const Works = ({ workText }) => {
  return (
    <div
      style={{
        width: "1920px",
        height: "1080px",
        backgroundColor: "#505050",
      }}
    >
      <Div
        style={{
          padding: "150px 200px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {workText.map((a) => (
          <div
            key={a.id}
            style={{
              width: "400px",
              height: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              //   backgroundImage: `url${a.img}`,
            }}
          >
            <div
              style={{
                height: "300px",
                backgroundImage: `url(${a.bgImg})`,
                backgroundPosition: "center",
              }}
            ></div>
            <h2>{a.title}</h2>
            <p>{a.desc}</p>
          </div>
        ))}
      </Div>
      {/* <div>
        <div bgImg>
          <h2>???</h2>
          <p>?????</p>
        </div>
      </div>
      <div>
        <div bgImg>
          <h2>???</h2>
          <p>?????</p>
        </div>
      </div>
      <div>
        <div bgImg>
          <h2>???</h2>
          <p>?????</p>
        </div>
      </div> */}
    </div>
  );
};
