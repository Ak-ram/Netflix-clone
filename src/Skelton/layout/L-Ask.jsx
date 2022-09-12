import { Component } from "react";
class Ask extends Component {
  render() {
    return (
      <details className='details p-0 mx-auto my-2 w-75'>
        <summary className='summary mb-1'>
          {this.props.question.q_head}
        </summary>
        <p className='classes.p p-3 p-size-Ask'>
          {this.props.question.q_tail}
        </p>
      </details>
    );
  }
}

export default Ask;
