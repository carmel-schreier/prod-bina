import React, { useState } from "react";
import "./Interest.css";

export type InterestType = {
  imageUrl: string;
  name: string;
  description: string;
  id: number;
  preference?: string;
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
  const isBuySellAdvise = data.name === "Buy/Sell Advise" ? true : false;
  const [selectedBtn, setSelectedBtn] = useState("Some-times");
  const isSelected = (value: string): boolean => selectedBtn === value;
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

  // console.log(data.name + " " + selectedBtn);

  const name = `radio-btn-${data.name}`;
  return (
    <>
      <div className="card p-1">
        <img
          src={data.imageUrl}
          alt={data.name}
          className="card-img-top image-fluid"
        />
        <p className="card-text">{data.name}</p>
        <div className="radioContainer">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name={name}
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
          {!isBuySellAdvise && (
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
          )}
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
            {!isBuySellAdvise && (
              <label
                className="form-check-label"
                htmlFor="Never"
                style={{ color: "red" }}
              >
                Never
              </label>
            )}
            {isBuySellAdvise && (
              <label
                className="form-check-label"
                htmlFor="Never"
                style={{ color: "red" }}
              >
                Never{"      "}
              </label>
            )}
          </div>
          {isBuySellAdvise && (
            <div className="no-show form-check form-check-inline">
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
                Never-ttt
              </label>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Interest;
