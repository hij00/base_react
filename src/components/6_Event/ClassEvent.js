// 클래스함수는 사용 안 함, 옛날버전,,,

import { Component } from "react";

export class ClassEvent extends Component {
  state = {
    num: 0,
  };
  // state는 변수(특정값 변경할때 state안에)
  render() {
    const handlePlus = () => {
      this.setState({
        num: this.state.num + 1,
      });
    };

    const handleMinus = () => {
      this.setState({
        num: this.state.num - 1,
      });
    };

    return (
      <div>
        <h3>{this.state.num}</h3>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
      </div>
    );
  }
}
