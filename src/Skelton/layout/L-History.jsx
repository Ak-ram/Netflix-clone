/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { BsBoxArrowRight, BsBoxArrowLeft } from "react-icons/bs";

class History extends Component {
  state = {};
  render() {
    return (
      <>
        <a
          href="#"
          onClick={() => window.history.back()}
          className="position-fixed translate-middle-y top-50 start-0 btnhover fs-2 p-0 ms-2"
          style={{ zIndex: "3" }}
        >
          <BsBoxArrowLeft />
        </a>
        <a
          href="#"
          onClick={() => window.history.forward()}
          className="position-fixed translate-middle-y top-50 end-0 btnhover fs-2 p-0 me-2"
          style={{ zIndex: "3" }}
        >
          <BsBoxArrowRight />
        </a>
      </>
    );
  }
}

export default History;
