import { textDb } from "../../db";

export const MapEx_2 = ({ kakaoData }) => {
  return (
    <div>
      <h1>??</h1>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
        }}
      >
        {kakaoData.map((kakao) => (
          <li
            key={kakao.id}
            style={{
              width: "30%",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundImage: `url(${kakao.img})`,
              }}
            ></div>
            {/* <img src={kakao.img} /> */}
            <h3>{kakao.title}</h3>
            <p>{kakao.subText.slice(0, 50) + "..."}</p>
          </li>
        ))}
        {/* <li>
          <h3>???</h3>
          <p>?????????</p>
        </li>
        <li>
          <h3>???</h3>
          <p>?????????</p>
        </li>
        <li>
          <h3>???</h3>
          <p>?????????</p>
        </li> */}
      </ul>
    </div>
  );
};
