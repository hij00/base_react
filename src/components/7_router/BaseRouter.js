import {
  BrowserRouter,
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./routes/Home";
import { Intro } from "./routes/Intro";
import { PageNotFound } from "./routes/PageNotFound";
import { Product } from "./routes/Product";

export const BaseRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/product" element={<Product />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

// 라우터 = 경로를 따라 데이터를 전달(경로설정)

// url uri api

// 리액트의 장점 = 가상 돔 => 새로고침 ㄴㄴ
// react router dom 사이트의 패키지
// react router dom npm 설치

// as 이름변경(별칭) => BrowserRouter as Router 면

// path="" 경로설정 (href="" 와 비슷)
// 연결할 경로(컴포넌트 작성) => path 뒤에 element로 작성 ()
// /만 단독으로 있으면 홈(메인)으로 감

// header footer는 router와 routes 사이에 작성

// BrowserRouter(배포할때 힘들다?) HashRouter

// 옳지 못한 경로로 갔을때의 페이지가 필요함 => http 상태코드
// 200번대 좋은 코드(잘 나오는) / 400번대 오류난 페이지
// 오류페이지 링크 /*
