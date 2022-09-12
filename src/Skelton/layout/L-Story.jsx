import "../../sass/layout/_story.sass";
import Textfit from "react-textfit";
import ReactPlayer from "react-player";
const Story=(props)=>{

    return (
      <section
        className='storyItem text-light border-top border-5 border-dark'
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className={`order-${Math.trunc(
                Math.random() * 2
              )} storyContent text-center text-lg-start col-sm-12 col-lg-7`}
            >
              <article
                className='article} mb-3 d-flex flex-column justify-content-center'
              >
                <Textfit>
                  <h1 className="col-md-fs-3 fw-bolder">
                    {props.story_data["story-article-H"]}
                  </h1>
                </Textfit>
                <Textfit style={{ width: "90%", margin: "0 auto" }}>
                  <p>{props.story_data["story-article-P"]}</p>
                </Textfit>
              </article>
            </div>
            <div
              className={`storyPresentation col-sm-12 col-md-5 position-relative`}
            >
              <img
                src={props.story_data["story-presentation-img"]}
                alt=""
                className='storyPresentation-img position-relative top-0 left-0 w-100' />

              <ReactPlayer
                playing
                muted // must for chrome
                loop
                width={props.story_data["width"]}
                height="auto"
                style={props.story_data["story-video-style"]}
                url={props.story_data["story-presentation-video"]}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

export default Story;
