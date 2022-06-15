import "../../styles/style.css";
// from은 component를 가져올때 사용
// 파일명은 직접 작성

export const FoodMenu = ({ menuName, subMenu }) => {
  console.log(menuName);
  console.log(subMenu);
  return (
    <div>
      오늘의 메뉴 : <i className="menu">{menuName}</i>
      <br></br>
      사이드 메뉴 : <i className="side">{subMenu}</i>
    </div>
  );
};
// ({매개변수 명})
// 프롭스는 오브젝트 형태로 가져옴 (props) => {menuName="값"}
// 오브젝트는 {}안에서 ,로 구분됨
// 중괄호 빼줘야함
// return 안쪽은 jsx문법, jsx 안쪽에 변수를 사용할때는 중괄호{}로 감싸주기

// 리액트에서 클래스(css)사용할때 className으로 사용
