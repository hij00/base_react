import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/intro">소개</Link>
      </li>
      <li>
        <Link to="/product">제품</Link>
      </li>
    </ul>
  );
};

// a태그를 사용하면 새로고침됨, a태그 쓰지말것! Link 사용
