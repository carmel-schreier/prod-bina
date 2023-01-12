import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { useState } from "react";
import "./Interest.css";

export type InterestType = {
  imageUrl: string;
  name: string;
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
  const { data } = props;
  const [selectedBtn, setSelectedBtn] = useState("Some-times");

  const handleRadioClick = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedBtn(event.currentTarget.value);
    const interestInfo = {
      name: data.name,
      pref: event.currentTarget.value,
    };

    props.onChangeInterestInfo(interestInfo);
  };

  return (
    <>
      <FormControl>
        <FormLabel>{data.name}</FormLabel>
        <RadioGroup
          row
          aria-label="gender"
          name="gender1"
          value={selectedBtn}
          onChange={(e) => {
            handleRadioClick(e);
          }}
        >
          <FormControlLabel
            value="Yes"
            control={<Radio />}
            label="Yes"
            // style={{ color: "green" }}
          />
          <FormControlLabel
            value="Some-times"
            control={<Radio color="primary" />}
            label="Some-times"
            // style={{ color: "orange" }}
          />
          <FormControlLabel
            value="No"
            control={<Radio />}
            label="No"
            // style={{ color: "red" }}
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default Interest;
