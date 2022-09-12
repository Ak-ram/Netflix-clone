import { Component, Btn } from "../all";
import "../../sass/layout/_ArticleQuery.sass";
import Contactbar from "./L-Contactbar";
class ArticleQuery extends Component {
  usefulArticle = (e) => {
    let usefulArticle = document.querySelector(".usefulArticle");
    usefulArticle.classList.remove("d-none");
    usefulArticle.classList.add("d-block");
    usefulArticle.scrollIntoView(true,{behavior: 'smooth',block: 'center'});

    e.target.parentNode.classList.add("d-none"); // hide the parent
  };
  uselessArticle = (e) => {
    let uselessArticle = document.querySelector(".uselessArticle");
    uselessArticle.classList.remove("d-none");
    uselessArticle.classList.add("d-block");
    uselessArticle.scrollIntoView(true,{behavior: 'smooth',block: 'center'});

    e.target.parentNode.classList.add("d-none");
  };
  feedback = (e) => {
    let usefulArticle = document.querySelector(".usefulArticle"),
      fakeNode = e.target.parentElement.childNodes[2];
    e.target.parentNode.replaceChild(usefulArticle, fakeNode);
    usefulArticle.classList.remove("d-none");
    usefulArticle.classList.add("d-block");
  };
  textareaCounter = (e) => {
    let screenCounter = document.getElementById("screenCounter");
    screenCounter.innerText = `${e.target.value.length} Chars`;
  };
  render() {
    return (
      <div className="container">
        <div className="article-query d-flex flex-wrap align-items-center my-4">
          <span className="col-12 col-sm-6">Was this article helpful?</span>
          <div className="d-flex mt-3 mt-sm-0 col-12 col-sm-6">
            <button
              onClick={this.usefulArticle}
              className="col-3 query btn border border-danger ms-5 mx-1 px-0 text-uppercase text-danger fw-bold"
            >
              Yes
            </button>
            <button
              onClick={this.uselessArticle}
              className=" col-3 query btn  border border-danger mx-1 px-0 text-uppercase text-danger fw-bold"
            >
              No
            </button>
          </div>
        </div>
        <div className="usefulArticle position-relative d-none mt-4">
          <p>
            Thanks for your feedback! Any suggestions for further improvement?
          </p>
          <textarea
            onChange={this.textareaCounter}
            name="suggestions"
            className="w-100 resize-none py-3 ps-3 pe-5 rounded-2 outline-0"
            rows="3"
            placeholder="(Optional) We do not respond to individual feedback. Please do not leave personal information."
          ></textarea>
          <span
            id="screenCounter"
            className="position-absolute bottom-0 end-0 bg-dark text-light p-2"
          >
            0 Chars
          </span>
          <Btn
            content="Submit"
            icon=""
            iconDisplacement="false"
            bgFade="false"
            classes="mt-2 p-3 fw-bold"
          />
        </div>
        <div className="uselessArticle d-none mt-4">
          <div className="feedback">
            <p>What went wrong?</p>
            <div className="problem my-3" onClick={this.feedback}>
              <input type="radio" name="proplem" id="problem-1" />
              <label className="problem-type" htmlFor="problem-1">
                The steps in the article did not resolve my problem
              </label>
              <div className="fakeNode"></div>
            </div>
            <div className="problem my-3" onClick={this.feedback}>
              <input type="radio" name="proplem" id="problem-2" />
              <label htmlFor="problem-2">
                This article did not address what I was searching for
              </label>
              <div className="fakeNode"></div>
            </div>
            <div className="problem my-3" onClick={this.feedback}>
              <input type="radio" name="proplem" id="problem-3" />
              <label htmlFor="problem-3">
                The wording used in this article made it confusing
              </label>
              <div className="fakeNode"></div>
            </div>
            <div className="problem my-3" onClick={this.feedback}>
              <input type="radio" name="proplem" id="problem-4" />
              <label htmlFor="problem-4">Other</label>
              <div className="fakeNode"></div>
            </div>
          </div>
        </div>
        <Contactbar />
      </div>
    );
  }
}

export default ArticleQuery;
