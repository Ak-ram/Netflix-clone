import Btn from "../components/C-Btn";
import { Textfit } from "react-textfit";
const Membership = (props) => {
  return (
    <Textfit className="text-center container mt-5" min={15}>
      <p className="my-2 p-size">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form
        action="main.php"
        method="post"
        formNoValidate={true}
        className='formFloating form-floating row justify-content-center'
      >
        <input
          className="emailField col-9"
          type="email"
          placeholder="Example@gmail.com"
        />

        <div className="col-3 my-2 my-sm-2 my-md-0" style={{ all: "inherit" }}>
          <Btn
            content="Get Started"
            icon="fas fa-chevron-right fa-sm"
            iconDisplacement="true"
            bgColor=""
            bgFade="true"
          />
        </div>
      </form>
    </Textfit>
  );
};

export default Membership;
