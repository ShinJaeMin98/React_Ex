import { Component } from 'react';

class LifeCycle extends Component {
  state = {
    color: 'black',
    number: 0,
  };

  constructor(props) {
    super(props);
     this.state.color = props.color || 'black';
     this.state.number = props.number;
  }

  /*
  static getDerivedStateFromProps(nextProps, prevState) {
    // 마운트, 업데이트 단계, render 함수 호출 전
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }

    return null;
  }
  */

  /*
  shouldComponentUpdate(nextProps, nextState) {
    // nextState -> setState를 통해서 변경을 하고자 하는 값
    // this.state -> 현재 상태 값
    if (nextState.number % 4 === 0) {
      console.log('렌더링 X');
      //this.setState({ number: nextState.number });
      return false;
    }

    console.log('렌더링 O');
    return true;
  }
  */

  /*
  componentDidMount() {
    // 1번만 호출
    console.log('render() 호출 후에 DOM 구성 완료 시 호출 - componentDidMount');
    // 이벤트 바인딩, DOM을 직접 접근 해야 하는 경우
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 업데이트 전

    return 'snapshot';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 업데이트 이후
    // 현재 상태 this.state
    // 기존 상태 prevState
    console.log('현재 상태 : ', this.state);
    console.log('기존 상태 : ', prevState);
    console.log('snapshot', snapshot);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }
  */

  changeColor = (e) => {
    const color = e.currentTarget.value;
    this.setState({ ...this.state, color }); // color: color
  };

  render() {
    //this.state.missing.value = 10;

    const { color, number } = this.state;
    return (
      <div>
        <div
          style={{
            width: 300,
            height: 300,
            background: color,
          }}>
        </div>
        <input type="color" onChange={this.changeColor} />
        <hr />
        <h1>{number}</h1>
        <button
          type="button"
          onClick={() => this.setState({ ...this.state, number : number + 1 })}
        >
          +1
        </button>
        <button
          type="button"
          onClick={() => this.setState({ ...this.state, number : number - 1 })}
        >
          -1
        </button>
      </div>
    );
  }
}

export default LifeCycle;