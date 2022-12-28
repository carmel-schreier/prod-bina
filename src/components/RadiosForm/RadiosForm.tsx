import "./RadiosForm.css";
import React, { useState } from "react";
import { InterestType, RadioProps } from "../Interest/Interest";

interface Props {
  id: number;
}

const RadiosForm = (props: Props) => {
  const [selectedBtn, setSelectedBtn] = useState("Some-times");
  const isSelected = (value: string): boolean => selectedBtn === value;
  const handleRadioClick = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedBtn(event.currentTarget.value);
  console.log(selectedBtn);

  const name = `radio-btn-${props}`;

  return <></>;
};

export default RadiosForm;
