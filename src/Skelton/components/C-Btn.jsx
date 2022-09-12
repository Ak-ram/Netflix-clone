let Btn = (props) => {
  let iconDisplacement = () => {
    let btn = document.querySelectorAll('button');
    let btn_icon = document.querySelectorAll("button i");
    for (let i = 0; i < btn.length; i++) {
      if (props.iconDisplacement === "true") {
        btn_icon[i].classList.add('iconDisplacement');
      }
      if (props.bgFade === "true") {
        btn[i].classList.add('btnStyle.bgFade');
      }

    }

  };
  return (
    <button
      onMouseEnter={iconDisplacement}
      id="main_btn"
      className={`main_btn ms-2 p-2 ${props.classes}`}
      type="submit"
    >
      {props.content} <i id="main_btn_icon" className={props.icon}></i>
    </button>
  );
};

export default Btn;
