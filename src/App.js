import TagRule from "./components/1_JsxRule/TagRule";
import ClassComponent from "./components/2_component/ClassComponent";
// import FnComponent from "./components/2_component/FnComponent";
import {
  FnComponent_1,
  FnComponent_2,
} from "./components/2_component/FnComponent";
import { FoodMenu } from "./components/2_component/FoodMenu";

const App = () => {
  return (
    <>
      {/* <TagRule /> */}
      {/* ==========1일차========== */}

      {/* <FnComponent /> */}
      {/* <FnComponent_1 />
      <FnComponent_2 /> */}

      {/* <ClassComponent /> */}
      {/* =======2일차========== */}

      {/* // props
      // 매개변수와 비슷
      // <component 프롭스명="값"/> 
      오브젝트 형태로 전달됨(중괄호까지)=> 매개변수를 쓸때는 중괄호를 빼야함
      */}
      <h3>아침</h3>
      <FoodMenu menuName="계란밥" subMenu="된장국" />

      <h3>점심</h3>
      <FoodMenu menuName="우동" subMenu="김치" />

      <h3>저녁</h3>
      <FoodMenu menuName="김치볶음밥" subMenu="계란국" />
    </>
  );
};

export default App;
