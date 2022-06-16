import TagRule from "./components/1_JsxRule/TagRule";
import ClassComponent from "./components/2_component/ClassComponent";
// import FnComponent from "./components/2_component/FnComponent";
import {
  FnComponent_1,
  FnComponent_2,
} from "./components/2_component/FnComponent";
import { MenuEx } from "./components/3_props/MenuEx";
import { Menus } from "./components/3_props/Menus";
import { Subject } from "./components/3_props/Subject";
import { FoodMenu } from "./components/4_map/FoodMenu";
import { MapEx } from "./components/4_map/MapEx";
import { MapEx_2 } from "./components/4_map/MapEx_2";
import { menuDb, subjectDb, textDb } from "./db";

// 컨트롤 누르고 클릭하면 파일열림, 옆의 탐색기에서 찾지않아도 됨

const App = () => {
  return (
    <>
      {/* <TagRule /> */}
      {/* 1일차==================== */}

      {/* <FnComponent /> */}

      {/* <FnComponent_1 />
      <FnComponent_2 /> */}

      {/* <ClassComponent /> */}
      {/* 2일차======================= */}

      {/* <Menus /> */}
      {/* <MenuEx menu={menuDb} /> */}

      {/* <Subject sub={subjectDb} /> */}
      {/* jsx에서 변수를 전달할땐 중괄호 안쪽으로(subjectDb는 중괄호) */}
      {/* 3일차======================= */}

      {/* <FoodMenu menus={menuDb} /> */}
      {/* <MapEx text={textDb} /> */}
      <MapEx_2 kakaoData={textDb} />
    </>
  );
};

export default App;
