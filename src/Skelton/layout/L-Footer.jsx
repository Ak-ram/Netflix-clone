import { Fragment } from "react";
import { NavLink } from "react-router-dom";
const Footer = (props) => {
  return (
    <Fragment>
      <footer className={props.type}>
        <div className="container">
          <nav className="row list-unstyled g-5 w-100">
            <li className="exect">
              <a href="$" className="footerHead text-decoration-none">
                {props.footer_head}
              </a>
            </li>
            {Object.keys(props.footer_links).map((key, index) => {
              return (
                <li
                  key={`unique-${index}`}
                  className="pageLinks col-sm-5 col-md-4 col-lg-3"
                >
                  <i className={`icon-${index} d-inline-block col-1`}>
                    {props.footer_links[key]}
                  </i>

                  <NavLink to={key} className="">
                    {key}
                  </NavLink>
                </li>
              );
            })}
            <li className="ms-3 my-4 col-12">{props.children}</li>
          </nav>
          <p className="text-secondary ms-4 my-2">{props.footer_foot}</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
