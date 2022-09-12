import {
  Component,
  Navbar,
  Rights,
  Btn,
  SelectBox,
  NavLink,
  Footer,
  BsArrowLeftShort,
  BsLock,
  BsListCheck,
  IoInformationCircleOutline,
  BiCookie,
} from "../all.jsx";
class LegalNotices extends Component {
  state = {};
  render() {
    return (
      <>
        {/* Navbar Start */}
        <Navbar type="navbar--relative bg-dark" brand-head="help center">
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
        {/* Navbar End */}

        <div className="container">
          <div className="print d-flex justify-content-between align-items-center p-3">
            <div className="">
              <NavLink
                to="/" // Home page
                className="text-decoration-none text-danger left-motion"
              >
                <BsArrowLeftShort /> Back to Help Home
              </NavLink>
            </div>
            <div className="text-end">
              <button onClick={()=>window.print()} className="p-1 rounded-0 btn btn-light border-1 border-secondary">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      d="M19,8 L5,8 C3.34,8 2,9.34 2,11 L2,17 L6,17 L6,21 L18,21 L18,17 L22,17 L22,11 C22,9.34 20.66,8 19,8 Z M16,19 L8,19 L8,14 L16,14 L16,19 Z M19,12 C18.45,12 18,11.55 18,11 C18,10.45 18.45,10 19,10 C19.55,10 20,10.45 20,11 C20,11.55 19.55,12 19,12 Z M18,3 L6,3 L6,7 L18,7 L18,3 Z"
                      id="Shape"
                      fill="#221f1f"
                      fillRule="nonzero"
                    ></path>
                  </g>
                </svg>
                <span className="d-none d-sm-inline-block">PRINT</span>
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <section className="m-auto" style={{ width: "90%" }}>
            <article>
              <h1 className="mb-4">Legal Notices</h1>
              <p>
                The Netflix service, including all content provided on the
                Netflix service, is protected by : copyright, trademark, trade
                secret or other intellectual property laws, treaties.
              </p>
            </article>
            <Rights
              article-head="Copyright"
              article-body="The copyrights in the shows and movies on our service are owned
                by many great producers, including Netflix Studios, LLC. If you
                believe your or someone else’s copyrights are being infringed
                upon through the Netflix service, let us know by completing the
                Copyright Infringement Claims form "
              article-foot="(www.netflix.com/copyrights)"
            />

            <Rights
              article-head="Trademarks"
              article-body={`Netflix and the N Logo are trademarks of Netflix, Inc.
                If you haven’t received our permission, do not use the Netflix
                marks as your own or in any manner that implies sponsorship or
                endorsement by Netflix.
                A product branded with the Netflix name or logo is a reflection
                of Netflix. Unless you are one of our licensees, we don’t allow
                others to make, sell, or give away anything with our name or
                logo on it.
              `}
              article-foot="www.netflix.com/copyrights"
            />

            <Rights
              article-head="Patents"
              article-body="Netflix streaming and DVD services are covered by patents. For
                information on patents related to our services please visit"
              article-foot="www.netflix.com/patents"
            />

            <Rights
              article-head="Third Party Notices"
              article-body="The software installed on Netflix ready devices to enable
                streaming of the Netflix service may contain software available
                under open source or free software licenses (“Open Source
                Software”) and/or commercial software licensed to Netflix by
                parties (“Commercial Software”). The Netflix Terms of Use do not
                alter any rights or obligations you may have under those Open
                Source Software licenses. Additional information about Open
                Source and Commercial Software, including required
                acknowledgements, license terms and notices, can be found"
              article-foot="here"
            />

            <span>
              <b>Last Updated:</b> May 11, 2018
            </span>
          </section>
        </div>
        <Footer
          type="footer--normal border-0 mt-3"
          footer_head=""
          footer_links={{
            "Terms of Use": <BsListCheck />,
            Privacy: <BsLock />,
            "Cookie Preferences": <BiCookie />,
            "Corporate Information": <IoInformationCircleOutline />,
          }}
          footer_foot=""
        ></Footer>
        
      </>
    );
  }
}

export default LegalNotices;
