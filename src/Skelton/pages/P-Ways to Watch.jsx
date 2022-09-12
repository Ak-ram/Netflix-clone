import {
  Component,
  Navbar,
  Btn,
  SelectBox,
  Footer,
  Devices,
 
} from "../all.jsx";
class WaysToWatch extends Component {
  render() {
    return (
      <>
        <Navbar type="navbar--relative" brand-head = 'ways to watch'>
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
              "url(https://devices.netflix.com/images/header-2560-2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "350px",
          }}
        >
          <div className="text-center position-relative top-50 translate-middle-y ">
            <div className="container">
              <hgroup>
                <h1 className="h1">Unlimited movies, TV shows, and more.</h1>
                <h4 className="h4">Watch anywhere. Cancel anytime.</h4>
              </hgroup>
            </div>
          </div>
        </div>
        {/* Face End */}
        <Devices />
          <Footer
            type="footer--white"
            footer_head=""
            footer_links={{
              FAQ: "",
              "Help Center": "",
              Account: "",
              "Media Center": "",
              "Investor Relations": "",
              Jobs: "",
              "Ways to watch": "",
              "Terms of Use": "",
              Privacy: "",
              "Cookie Perferences": "",
              "Corporate Information": "",
              "Contact Us": "",
              "Speed Test": "",
              "Legal Notices": "",
              "Only on Netflix": "",
            }}
            footer_foot="© 2021 Netflix, Inc."
          ></Footer>
      </>
    );
  }
}

export default WaysToWatch;
