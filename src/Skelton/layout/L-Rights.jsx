import { Component } from 'react';
class Rights extends Component {

  render() {
    return (
      <>
        <article className="d-flex flex-column my-3">
          <h5  
            className='article-head ps-2 '>
            {this.props["article-head"]}
            <span
              id='hash'
              onClick={(ele) => {ele.target.scrollIntoView(true,{behavior: 'smooth',block: 'center',inline: 'nearest'})}}
              className="position-absolute"
            >#</span>
            
          </h5>
          <p className="ms-2">
            {this.props["article-body"]}
            <a
              href="2"
              className="text-decoration-none text-danger left-motion"
            >
              {this.props["article-foot"]}
            </a>
            .
          </p>
        </article>
      </>
    );
  }
}
 
export default Rights;