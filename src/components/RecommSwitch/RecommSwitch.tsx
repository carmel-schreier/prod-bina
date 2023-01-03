import Switch from "@material-ui/core/Switch";
import "./RecommSwitch.css";
import { useState } from "react";

function RecommSwitch() {
  const [state, setState] = useState({
    checked: true,
  });
  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    //<Switch
    //  className="switch"
    //  checked={state.checked}
    //  onChange={handleChange}
    //  name="checked"
    //  inputProps={{ "aria-label": "primary checkbox" }}
    //  color="default"
    //  size="medium"
    ///>
    <></>
  );
}

export default RecommSwitch;
