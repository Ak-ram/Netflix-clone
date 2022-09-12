import { Component } from "../all";
import img from "../../googleplay.png";

class CallUsPopUp extends Component {
  closeCallUsPopUp = (e) => {
    e.target.parentNode.classList.remove('d-sm-block');
  };

  render() {
    return (
      <>
        <div id="call-pop-up" className="call-pop-up position-absolute mb-2 d-none">
          <button
            onClick={this.closeCallUsPopUp}
            className="callUsPopUp-close-btn fs-5 position-absolute end-0 btn top-0"
          >
            x
          </button>
          <h3>Call Free in App</h3>
          <p>Call us for free through the Netflix app on Android and iOS.</p>
          <div className="img_container d-flex justify-content-around">
            <a href="3" className="col-5 d-flex">
              <img src={img} alt="" className="w-100" />
            </a>
            <a href="3" className="col-5 d-flex">
              <img
                src="https://help.nflxext.com/helpcenter/a011cbc6f8050b1a0476814ed984c7e4.svg"
                alt=""
                className="w-100"
              />
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default CallUsPopUp;
