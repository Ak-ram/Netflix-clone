import { Component } from "../all";
class FaqArticles extends Component {
  state = {
    "ar-1": {
      header: "What is Netflix?",
      img: "https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png",
      "p-1": `Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies without commercials on an internet - connected device.`,
      "p-2": `You can also download TV shows and movies to
                  your iOS, Android, or Windows 10 device and watch without an
                  internet connection.`,
      "p-3": `If you're already a member and would like to learn more about
                  using Netflix, visit Getting started with Netflix.`,
    },
    "ar-2": {
      header: "TV Shows & Movies",
      img: "https://help.nflxext.com/396a2a39-8d34-4260-b07a-6391fe04ded5_what_is_netflix_2_en.png",
      "p-1": `Netflix content varies by region and may change over time. You can watch from a wide variety of award-winning Netflix Originals, TV shows, movies, documentaries, and more. `,
      "p-2": `The more you watch, the better Netflix gets at recommending TV shows and movies we think you’ll enjoy.`,
      "p-3": ``,
    },
    "ar-3": {
      header: "Supported Devices",
      img: "https://help.nflxext.com/7ac9b493-ae69-431a-923d-3cb8a79d7e63_what_is_netflix_3_en.png",
      "p-1": `You can watch Netflix through any internet-connected device that offers the Netflix app, including smart TVs, game consoles, streaming media players, set-top boxes, smartphones, and tablets. You can also watch Netflix on your computer using an internet browser. You can review the  system requirements for web browser compatibility, and check our internet speed recommendations to achieve the best performance. `,
      "p-2": `Need help getting set up? Search our Help Center for the manufacturer of the device you're using.`,
      "p-3": `NOTE: The Netflix app may come pre-loaded on certain devices, or you may need to download the Netflix app onto your device. Netflix app functionality may differ between devices.`,
    },
    "ar-4": {
      header: "Plans and Pricing",
      img: "https://help.nflxext.com/b3e9e3a3-20ff-4974-87d4-162e0a547768_what_is_netflix_4_en.png",
      "p-1": `Each Netflix plan determines the number of devices you can watch Netflix on at the same time and if you prefer to view in Standard Definition (SD), High Definition (HD), or Ultra High Definition (UHD).`,
      "p-2": `Compare our plans and pricing to decide which one is right for you. You can easily change your plan or cancel online at any time.`,
      "p-3": ``,
    },
    "ar-5": {
      header: "Get Started!",
      img: "https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png",
      "p-1": `Follow these easy steps to start watching Netflix today:`,
      "p-2": `Need help getting set up? Search our Help Center for the manufacturer of the device you're using.`,
      "p-3": `That's it. Enjoy Netflix!`,
    },
  };
  render() {
    return (
      <>
        <section className="article_wrapper">
          <div className="container">
            {Object.keys(this.state).map((key, i) => {
              return (
                <article className=" mt-4" key={`num-${i}`}>
                  <h2 className='p-2 border-top border-bottom border-danger mark'>{this.state[`${key}`].header}</h2>
                  <img
                    className="img-thumbnail border-0"
                    src={this.state[`${key}`].img}
                    alt=""
                  />
                  <div className="article_content my-3">
                    <p>{this.state[`${key}`]["p-1"]}</p>
                    <p>{this.state[`${key}`]["p-2"]}</p>
                    <p>{this.state[`${key}`]["p-3"]}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </>
    );
  }
}

export default FaqArticles;
