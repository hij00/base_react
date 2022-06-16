export const MapEx = ({ text }) => {
  console.log(text);
  return (
    <>
      <h1>카카오</h1>
      <div
        style={{
          width: "100%",
          display: "flex",

          justifyContent: "space-between",
        }}
      >
        {text.map((a) => {
          return (
            <div
              style={{
                height: "500px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "400px",
                }}
              >
                <h2>{a.title}</h2>
                <h3>{a.subText}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* content wrap이 3개로 나옴 */}
      {/* 스타일 - css파일 / 인라인(태그 안에 작성) / 프레임워크 */}
    </>
  );
};
