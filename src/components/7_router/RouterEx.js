import { HashRouter as Router, Routes, Route, Switch } from "react-router-dom";
import { Err } from "./routerEx/Err";
import { Footer } from "./routerEx/Footer";
import { Main } from "./routerEx/Main";
import { Menu1 } from "./routerEx/Menu1";
import { Menu2 } from "./routerEx/Menu2";
import { Navi } from "./routerEx/Navi";

export const RouterEx = () => {
  return (
    <Router>
      <Navi />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu1" element={<Menu1 />} />
        <Route path="/menu2" element={<Menu2 />} />
        <Route path="/*" element={<Err />} />
      </Routes>
      <Footer />
    </Router>
  );
};
