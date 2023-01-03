import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { useState } from "react";

function NewRadio() {
  const [selectedBtn, setSelectedBtn] = useState("Some-times");

  return (
    <FormControl>
      <FormLabel>Commodities</FormLabel>
      <RadioGroup
        row
        aria-label="gender"
        name="gender1"
        value={selectedBtn}
        onChange={(e) => {
          setSelectedBtn(e.target.value);
        }}
        color="primary"
      >
        <FormControlLabel
          value="Yes"
          control={<Radio />}
          label="Yes"
          style={{ color: "green" }}
        />
        <FormControlLabel
          value="Some-times"
          control={<Radio />}
          label="Some-times"
          style={{ color: "orange" }}
        />
        <FormControlLabel
          value="No"
          control={<Radio />}
          label="No"
          style={{ color: "red" }}
        />
      </RadioGroup>
    </FormControl>
  );
}

export default NewRadio;
