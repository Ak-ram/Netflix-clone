import React, { Component } from "react";

class x_Progress extends Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let $Y1 = window.pageYOffset,
        $Y2 = document.documentElement["scrollHeight"],
        $C = document.documentElement.clientHeight,
        gohead = document.getElementById("gohead");
      gohead.style.width = `${($Y1 / ($Y2 - $C)) * 100}vw`;
    });
  }

  render() {
    return (
      <>
        <div
          className="progress position-fixed top-0"
          style={{ height: "3px", zIndex: 23 }}
        >
          <div
          className='bg-danger'
            id="gohead"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </>
    );
  }
}

export default x_Progress;
