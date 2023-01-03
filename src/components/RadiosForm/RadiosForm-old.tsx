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

  return (
    <>
      <div className="radioContainer">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            //id="Always"
            value="Always"
            checked={isSelected("Always")}
            onChange={handleRadioClick}
          />
          <label
            className="form-check-label"
            htmlFor="Always"
            style={{ color: "green" }}
          >
            Always
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            //id="Some-times"
            value="Some-times"
            checked={isSelected("Some-times")}
            onChange={handleRadioClick}
          />
          <label
            className="form-check-label"
            htmlFor="Some-times"
            style={{ color: "orange" }}
          >
            Some-times
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            //id="Never"
            value="Never"
            checked={isSelected("Never")}
            onChange={handleRadioClick}
          />
          <label
            className="form-check-label"
            htmlFor="Never"
            style={{ color: "red" }}
          >
            Never
          </label>
        </div>
      </div>
    </>
  );
};

export default RadiosForm;
