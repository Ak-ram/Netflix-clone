import { Component } from "../all";
import "../../sass/layout/_Contactbar.sass";
import CallUsPopUp from "./L-CallUsPopUp";
import LiveChatPopUp from "./L-LiveChatPopUp";
class Contactbar extends Component {
  openCallUsPopUp = (e) => {
    let popUp = document.getElementById("call-pop-up"),
    livechatPopup = document.querySelector('.livechatPopup-close-btn');
    livechatPopup.click();
    popUp.classList.toggle('d-sm-block');
    popUp.scrollIntoView(true,{behavior: 'smooth',block: 'center'});
  };
  openLiveChat = (e) => {
    let LiveChat = document.getElementById("live-chat-pop-up"),
    popupCloseBtn = document.querySelector('.callUsPopUp-close-btn');
    popupCloseBtn.click();
    LiveChat.classList.toggle('d-sm-block')
    LiveChat.scrollIntoView(true,{behavior: 'smooth',block: 'center'});
  };
  render() {
    return (
      <section className="bg-dark w-100 p-3 position-relative my-3 d-none d-sm-block">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="col-12 col-sm-6">
              <span className="text-light fs-4">Want to contact us?</span>
            </div>
            <div className="d-flex justify-content-end flex-wrap col-12 col-sm-6 mt-3 mt-sm-0">
              <button
                onClick={this.openCallUsPopUp}
                className="col-12 col-md-6 my-1 btn btn-light mx-1 text-secondary rounded-1 fw-bold text-uppercase"
              >
                call us
              </button>
              <button
                className="col-12 col-md-6 my-1 btn btn-light mx-1 text-secondary rounded-1 fw-bold text-uppercase"
                onClick={this.openLiveChat}
              >
                start live chat
              </button>
            </div>
          </div>
          <CallUsPopUp />
          <LiveChatPopUp />
        </div>
      </section>
    );
  }
}

export default Contactbar;
