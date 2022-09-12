import {
  Component,
  Fragment,
  Navbar,
  Btn,
  SelectBox,
  Story,
  Questions,
  Membership,
  Footer,
  FaQuoteLeft,
  FaBalanceScaleRight,
  RiComputerLine,
} from "../all.jsx";

// Packages
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        {/* Navbar */}
        <Navbar type="navbar--normal" brand-head="Welcome">
          <SelectBox
            selectOptions={{
              langs: [
                "English",
                "العربية",
                "French",
                "German",
                "Chinese",
                "Korean",
                "Malay",
                "Nepali",
                "Serbian",
                "Sumerian",
                "Ukrainian",
                "Zuni	",
              ],
            }}
          />
          <Btn
            content="Sign in"
            icon=""
            iconDisplacement="false"
            bgFade="false"
          />
        </Navbar>
        {/* Face Start */}
        <div
          className="text-light"
          style={{
            background:
              "url(https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/2c237eeb-61e6-46b0-8097-768a01ade2f4/EG-en-20210719-popsignuptwoweeks-perspective_alpha_website_medium.jpg)",
            backgroundSize: "cover",
            height: "100vh",
            boxShadow: "inset 0 0 0px 1400px #0000009e",
          }}
        >
          <div className="position-absolute w-100 top-50 start-50 translate-middle text-center">
            <div className="container">
              <hgroup>
                <h1 className="h1">Unlimited movies, TV shows, and more.</h1>
                <h4 className="h4">Watch anywhere. Cancel anytime.</h4>
              </hgroup>
              <Membership />
            </div>
          </div>
        </div>
        {/* Face End */}

        <Story
          story_data={{
            "story-article-H": "Enjoy on your TV.",
            "story-article-P":
              "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,Blu-ray players, and more.",
            "story-presentation-img":
              "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
            "story-presentation-video":
              "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
            "story-video-style": {
              top: "49%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              position: "absolute",
            },
            width: "69%",
          }}
        />
        <Story
          story_data={{
            "story-article-H": "Download your shows to watch offline.",
            "story-article-P":
              "Save your favorites easily and always have something to watch.",
            "story-presentation-img":
              "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
            "story-presentation-video": "",
          }}
        />
        <Story
          story_data={{
            "story-article-H": "Watch everywhere.",
            "story-article-P":
              "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
            "story-presentation-img":
              "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png",
            "story-presentation-video":
              "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v",

            "story-video-style": {
              top: "0",
              left: "0",
              transform: "translate(35.5%, 19%)",
              position: "absolute",
            },
            width: "57%",
          }}
        />
        <Story
          story_data={{
            "story-article-H": "Create profiles for kids.",
            "story-article-P":
              "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
            "story-presentation-img":
              "https://occ-0-778-360.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd",
            "story-presentation-video": "",
          }}
        />
        <Questions>
          <Membership />
        </Questions>
        <Footer
          type="footer--normal"
          footer_head="Questions? Contact us."
          footer_links={{
            FAQ: <FaQuoteLeft />,
            "Ways to watch": <RiComputerLine />,
            "Legal Notices": <FaBalanceScaleRight />,
          }}
          footer_foot="Netflix Egypt"
        >
          <SelectBox
            selectOptions={{
              langs: [
                "English",
                "العربية",
                "French",
                "German",
                "Chinese",
                "Korean",
                "Malay",
                "Nepali",
                "Serbian",
                "Sumerian",
                "Ukrainian",
                "Zuni	",
              ],
            }}
          />
        </Footer>
      </Fragment>
    );
  }
}

export default Home;
