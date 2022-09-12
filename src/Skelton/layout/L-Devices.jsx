import { Component } from "react";
import "../../sass/layout/_devices.sass";
class Devices extends Component {
  state = {
    current: "media_players",
    deviceSlider: {
      deviceImgs: "https://devices.netflix.com/images/",
      deviceName: {
        "Streming Media Players": "media-player",
        "Smart TVs": "hdtv",
        "Game Consoles": "game-console",
        "Set-Top Boxes": "mvpd",
        "Blu-ray Players": "blu-ray-player",
        "Smartphones & Tablets": "phones-and-tablet",
        "PCs & Laptops": "laptop",
      },
    },
    deviceSliderShow: {
      media_players: {
        device_title: "PLUG AND PLAY",
        device_description:
          "The newest generation of media players and streaming sticks offer a fast, easy, and affordable way to watch Netflix on your TV.",
        device_callout_wrapper: "",
        device_logos: {
          "https://www.apple.com/appletv/": "/appletv_rev.png",
          "https://store.google.com/product/chromecast":
            "https://devices.netflix.com/uploads/g-chromecast.png",
          "https://portal.facebook.com/":
            "https://devices.netflix.com/uploads/portal-from-facebook.png",
        },
      },

      hdtvs: {
        device_title: "BUILT-IN CONNECTION",
        device_description:
          "Smart TVs have Netflix already on them—ready for you to watch. There’s no need to add another device.",
        device_callout_wrapper: "true",
        device_logos: {
          "https://www.hisense-usa.com/": "/hisenselogo.png",
          "https://www.lg.com/": "/lg-logo-3d-tagline-white.png",
          "https://www.panasonic.com/": "/panasonic_logo_bl_posi_png.png",
          "https://www.philips.com/": "/philips_transparent_logo.png",
          "https://www.samsung.com/": "/samsung_lettermark_white_rgb.png",
          "https://www.sharpusa.com/ForHome/HomeEntertainment/LCDTV/Features/Smart.aspx":
            "/sharp-light.png",
          "https://www.sony.com/": "/sony-light.png",
          "https://toshiba-tv.com": "/toshiba.png",
          "https://www.vestel.com.tr/tuketici-elektronigi":
            "https://devices.netflix.com/uploads/vestel-logo-vector-2.svg",
        },
      },

      "game-consoles": {
        device_title: "PLAY GAMES PLAY MOVIES",
        device_description:
          "You can also watch Netflix on a variety of game consoles.",
        device_callout_wrapper: "true",
        device_logos: {
          "https://www.playstation.com/explore/ps3/": "/ps3.png",
          "https://www.playstation.com/explore/ps4/": "/ps4.png",

          "https://www.playstation.com/en-us/ps5/?smcid=pdc%3Aen-us%3Aprimary%2520nav%3Amsg-hardware%3Aps5":
            "https://devices.netflix.com/uploads/ps5-logo.png",

          "https://www.microsoft.com/en-us/p/netflix/9wzdncrfj3tj?rtc=1&activetab=pivot:overviewtab":
            "/xbox360_2013_stacked_wht_rgb.png",

          "https://www.microsoft.com/en-us/p/netflix/9wzdncrfj3tj?rtc=1&activetab=pivot:overviewta":
            "https://devices.netflix.com/uploads/xboxseriesxs-2020-stack-wht-rgb-1-copy-xboxallaccess-2020-stacked-dkgray-rgb.png",
        },
      },

      setTopBoxes: {
        device_title: "EASY AS CHANGING CHANNELS",
        device_description:
          "YNow you can switch from live TV to Netflix right from your set-top box. Netflix is available through a growing number of pay TV providers. Ask yours for Netflix if you don’t see it here.",
        device_callout_wrapper: "",
        device_logos: { "": "" },
      },

      blu_rayPlayer: {
        device_title: "ENJOY THE SIGHTS & SOUNDS",
        device_description:
          "Stream Netflix using your Blu-ray player or Home Theater System.",
        device_callout_wrapper: "",
        device_logos: {
          "https://www.lg.com/": "/lg-logo-3d-tagline-white.png",
          "https://www.panasonic.com/": "/panasonic_logo_bl_posi_png.png",
          "https://www.samsung.com/": "/samsung_lettermark_white_rgb.png",
          "https://www.sony.com/": "/sony-light.png",
        },
      },

      "phones-and-tablets": {
        device_title: "TAKE NETFLIX WITH YOU",
        device_description:
          "It’s easy to watch Netflix from anywhere. If Netflix isn’t already on your phone or tablet, you can download our free app from the Apple App Store, Google Play, or the Windows Phone Store.",
        device_callout_wrapper: "",
        device_logos: {
          "https://www.android.com/": "/android.png",
          "https://www.apple.com/": "/apple_logo_360.png",
          "https://www.microsoft.com/en-us/mobile/phones/all/":
            "/windows-phone.png",
        },
      },
    },
  };
  activation = (e) => {
    let ele = document.getElementsByClassName("deviceItem"),
      d = this.state.deviceSlider,
      nodeIndex = Array.prototype.indexOf.call(
        e.target.parentNode.childNodes,
        e.target
      ); // child Index within it's parent
    e.preventDefault();
    for (let i = 0; i < ele.length; i++) {
      ele[i].classList.remove("activation");
      ele[i].style.backgroundImage = `url(${d.deviceImgs}icons/${
        d.deviceName[Object.keys(d.deviceName)[i]]
      }.png
      )`;

      e.target.classList.add("activation");
      e.target.style.backgroundImage = `url(${d.deviceImgs}icons/${
        d.deviceName[Object.keys(d.deviceName)[nodeIndex]]
      }-active.png)`;
      this.setState({
        current: Object.keys(this.state.deviceSliderShow)[nodeIndex],
      });
    }
  };

  render() {
    return (
      <>
        <section className="device-slider">
          <ul className="d-flex justify-content-evenly overflow-scroll my-3">
            {Object.keys(this.state.deviceSlider.deviceName).map((d, i) => {
              return (
                <>
                  <a
                    key={`index--${i*Math.random()*Math.random()}`}
                    href=" "
                    onClick={this.activation}
                    className="deviceItem d-flex justify-content-center align-items-end text-center fw-bold text-secondary text-decoration-none p-2"
                    style={{
                      backgroundImage: `url(${this.state.deviceSlider.deviceImgs}icons/${this.state.deviceSlider.deviceName[d]}.png)`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center 40px",
                      backgroundSize: "60px",
                      height: "150px",
                      minWidth: "140px",
                      fontSize: "calc(.1rem + 1vw)",
                    }}
                  >
                    {Object.keys(this.state.deviceSlider.deviceName)[i]}
                  </a>
                </>
              );
            })}
          </ul>
        </section>
        <div className="device-slider-show">
          <div className="content">
            <div className="leftSide p-4">
              <h2 className="ps-2 my-3 border-start border-3 border-danger">
                {
                  this.state.deviceSliderShow[`${this.state.current}`]
                    .device_title
                }
              </h2>
              <p>
                {
                  this.state.deviceSliderShow[`${this.state.current}`]
                    .device_description
                }
              </p>
              <div className="d-flex">
                <div className=""></div>
                <div className="content">
                  <p></p>
                </div>
              </div>
            </div>
            <div className="position-relative p-4 brands d-flex flex-wrap">
              {Object.keys(
                this.state.deviceSliderShow[`${this.state.current}`]
                  .device_logos
              ).map((url, i) => {
                return (
                  <>
                    <div
                      className="col-6 bg-black border-top border-primary d-flex align-items-center justify-content-center"
                    >
                      <a href={url} className="text-center">
                        <img
                          src={`${this.state.deviceSlider.deviceImgs}${
                            this.state.current
                          }${
                            this.state.deviceSliderShow[`${this.state.current}`]
                              .device_logos[
                              Object.keys(
                                this.state.deviceSliderShow[
                                  `${this.state.current}`
                                ].device_logos
                              )[i]
                            ]
                          }`}
                          alt=""
                          srcset=""
                          width="60%"
                        />
                      </a>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <section className="fake-footer text-dark ">
            <div
              className="container text-center py-4"
              style={{ fontSize: "13px" }}
            >
              <p className="m-0">
                Netflix streaming membership and internet connection required.
              </p>
              <p className="m-0">
                Netflix will be available on select devices from the following
                brands displayed.
              </p>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Devices;
