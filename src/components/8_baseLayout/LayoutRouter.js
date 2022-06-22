import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageNot } from "./pages/PageNot";
import { Sub1 } from "./pages/Sub1";
import { Sub2 } from "./pages/Sub2";

export const LayoutRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub1" element={<Sub1 />} />
        <Route path="/sub2" element={<Sub2 />} />
        <Route path="/*" element={<PageNot />} />
      </Routes>
    </Router>
  );
};

//      / => Home, Main
// 메뉴가 없는 상태에서는 주소창에 주소를 입력해야 해당페이지로 이동
// 해쉬라우터를 쓰면 /#/주소
