import { Component, IoChevronForwardOutline, IoCloseOutline } from "../all";
class LiveChatPopUp extends Component {
  closeLiveChat = (e) => {
    let LiveChat = document.getElementById("live-chat-pop-up");
    LiveChat.classList.remove('d-sm-block');
  };
  render() {
    return (
      <>
        <div
          id="live-chat-pop-up"
          onClick={this.closeLiveChat}
          className="live-chat-pop-up position-absolute mb-2 py-3 d-none"
        >
          <button className="livechatPopup-close-btn position-absolute end-0 top-0 p-2" href="d">
            <IoCloseOutline size="20" />
          </button>
          <h2 className="">Before you chat...</h2>
          <p className="px-3">
            You can quickly solve some common questions without live help:
          </p>
          <ul className="p-0">
            <li className="p-2">
              <a href="d" className="text-secondary text-decoration-none">
                Request TV shows or movies
              </a>
              <IoChevronForwardOutline />
            </li>
            <li className="p-2">
              <a href="d" className="text-secondary text-decoration-none">
                I need to reset my password
              </a>
              <IoChevronForwardOutline />
            </li>
            <li className="p-2">
              <a href="d" className="text-secondary text-decoration-none">
                I need to update my payment method
              </a>
              <IoChevronForwardOutline />
            </li>
          </ul>
          <p className="px-3">None of the above?</p>
          <ul className="p-0">
            <li className="p-2">
              <a href="d" className="text-secondary text-decoration-none">
                Tell us what your issue is
              </a>
              <IoChevronForwardOutline />
            </li>
          </ul>
          <span>Wait time: 1 minutes</span>
        </div>
      </>
    );
  }
}

export default LiveChatPopUp;
