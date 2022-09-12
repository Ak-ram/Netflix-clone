import { Component } from "react";
import Brand from "../components/C-Brand";
class Navbar extends Component {
  render() {
    return (
      <>
        <div className={this.props.type}>
          <div className="container">
            <nav className="navbar">
              <Brand brand-head={this.props["brand-head"]} />
              <form>
                {this.props.children}
              </form>
            </nav>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
