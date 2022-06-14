import { render } from "@testing-library/react";
import { Component } from "react";

class ClassComponent extends Component {
  render() {
    return <div>클래스 함수</div>;
  }
}

export default ClassComponent;
// 클래스도 똑같이 앞에 export 붙일 수 있음

// 클래스 함수 호출방법 (리액트에서 가져다 씀)
// class 함수명 extends Component {
//     render(){
//         return
//     }
// }
