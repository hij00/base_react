import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { sub_1, sub_2 } from "./contents";
import { Home } from "./pages/Home";
import { PageNot } from "./pages/PageNot";
import { Sub } from "./pages/Sub";
// import { Sub2 } from "./pages/Sub2";

export const LayoutRouter = () => {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sub1" element={<Sub cons={sub_1} />} />
          <Route path="/sub2" element={<Sub cons={sub_2} />} />
          <Route path="/*" element={<PageNot />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

//      / => Home, Main
// 메뉴가 없는 상태에서는 주소창에 주소를 입력해야 해당페이지로 이동
// 해쉬라우터를 쓰면 주소창에 "/#/주소" 입력

// 캐쉬 = 기록 / 쿠키 = Ai알고리즘

// 헤더나 푸터는 컴포넌트쪽으로 (페이지는 아니니까.?)
