export const MenuEx = ({ menu }) => {
  return (
    <>
      <h1>오늘의 메뉴</h1>
      <ul>
        <li>
          오늘의 메뉴는 {menu[0].menuTitle} 사이드는 {menu[0].subMenu}
        </li>
        <li>
          오늘의 메뉴는 {menu[1].menuTitle} 사이드는 {menu[1].subMenu}
        </li>
        <li>
          오늘의 메뉴는 {menu[2].menuTitle} 사이드는 {menu[2].subMenu}
        </li>
        <li>
          오늘의 메뉴는 {menu[3].menuTitle} 사이드는 {menu[3].subMenu}
        </li>
        <li>
          오늘의 메뉴는 {menu[4].menuTitle} 사이드는 {menu[4].subMenu}
        </li>
      </ul>

      {/* 배열로 만들때 이름주의하기 */}

      {/* 풀이 */}
      {/* 리스트 앞의 동그라미는 스타일 마진, 패딩 0이라서 안 뜨는거임,, */}
    </>
  );
};
