import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { useState } from "react";
import "./Interest.css";
import useMediaQuery from "@mui/material/useMediaQuery";

export type InterestType = {
  imageUrl: string;
  name: string;
  URLname: string;
  description: string;
  id: number;
  preference?: string;
  icon: string | JSX.IntrinsicElements[keyof JSX.IntrinsicElements];

  //icon?: Element | JSX.Element | HTMLElement;
};

interface InterestProps {
  data: InterestType;
  onChangeInterestInfo: Function;
}

export interface RadioProps {
  selectedBtn: string;
  isSelected: Function;
}

function Interest(props: InterestProps) {
  const deskTopSize = useMediaQuery("(min-width:1000px)");
  const { data } = props;
  const [selectedBtn, setSelectedBtn] = useState(data.preference);

  const handleRadioClick = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedBtn(event.currentTarget.value);
    const interestInfo = {
      name: data.name,
      URLname: data.URLname,
      pref: event.currentTarget.value,
    };
    props.onChangeInterestInfo(interestInfo);
  };

  return (
    <>
      <FormControl>
        <FormLabel className="form-label">{data.name}</FormLabel>
        <RadioGroup
          row={deskTopSize}
          aria-label="gender"
          name="gender1"
          value={selectedBtn}
          onChange={(e) => {
            handleRadioClick(e);
          }}
          className={deskTopSize ? "deskTop-form" : "mobil-form"}
        >
          <FormControlLabel
            value="Yes"
            control={<Radio />}
            label="Yes"
            className="form-option"
          />
          <FormControlLabel
            value="Some-times"
            control={<Radio color="primary" />}
            label="Some-times"
            className="form-option"
          />
          <FormControlLabel
            value="No"
            control={<Radio />}
            label="No"
            className="form-option"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default Interest;
