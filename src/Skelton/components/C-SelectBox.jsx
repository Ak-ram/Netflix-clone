import { Fragment } from "react"
const SelectBox = (props) => {
    return (
      <Fragment>
        <select
          className='fa selectBox selectBox-size'
          name="selectLang"
          id="lang"
        >
          {props.selectOptions.langs.map((language) => (
            <option key={language} value={language}>
              &#xf0ac;&nbsp; {language} &nbsp;&#xf0d7;
            </option>
          ))}
        </select>
      </Fragment>
    );
  }

export default SelectBox;
