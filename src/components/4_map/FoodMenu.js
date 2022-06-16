// 자동으로 배열 결과값뜨게 해주는
export const FoodMenu = ({ menus }) => {
  console.log(menus);
  return (
    <>
      <h1
        style={{
          color: "salmon",
        }}
      >
        오늘의 메뉴
      </h1>
      <ul>
        {menus.map((dish) => (
          <li key={dish.id}>
            오늘의 메뉴는 {dish.menuTitle}와 사이드메뉴는 {dish.subMenu}
          </li>
        ))}
      </ul>
    </>
  );
};

// 배열.map(변수 => 계산식)

// arr.map(() => {})
// 화살표함수에서 ()안의 매개변수가 하나라면 생략가능, {}리턴값도 하나라면 생략가능
// arr.map(변수 => )

// 원본을 훼손하지 않음 => 불변성을 유지함

// {""} => 빈칸

// 요소는 다 {}, html의 요소를 리액트로 적용할때 {}중괄호로 감싸주기

// 첫번째 값에는 유니크한 키 값이 필요함
// map을 적용시킬 요소에 key={유니크한 키값(겹치지 않는 값, id)}
// ======================
// 인라인 스타일
// 태그 안쪽에 작성, <h1 style={{}}> 중괄호 두번~~
