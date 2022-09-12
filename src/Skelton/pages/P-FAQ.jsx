import { Component } from "react";
import Btn from '../components/C-Btn';
import '../../sass/layout/_Navbar.sass';
import Navbar from "../layout/L-Navbar";
import Footer from '../layout/L-Footer';
import FaqArticles from "../layout/L-Faq_articles";
import ArticleQuery from '../layout/L-ArticleQuery'
class FAQ extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar type="navbar--relative" brand-head="help center">
          <Btn
            content="Join Netflix"
            icon=""
            iconDisplacement="false"
            bgFade="false"
            classes = 'bg-dark border border-secondary'
          />
          <Btn
            content="Sign In"
            icon=""
            iconDisplacement="false"
            bgFade="false"
          />
        </Navbar>

        <FaqArticles />
        <ArticleQuery />
        <Footer
          type="footer--white border-0"
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
          footer_foot="Netflix Egypt"
        />
      </>
    );
  }
}

export default FAQ;
