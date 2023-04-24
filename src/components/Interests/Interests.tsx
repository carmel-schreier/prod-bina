import Grid from "@material-ui/core/Grid";
import {
  MonetizationOnOutlined,
  MoneyOutlined,
  PublicOutlined,
  ShowChartOutlined,
} from "@material-ui/icons";
//import useMediaQuery from "@mui/material/useMediaQuery";
import {
  CurrencyBitcoinOutlined,
  CurrencyExchangeOutlined,
  CurrencyPoundOutlined,
  OilBarrelOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import Interest from "../Interest/Interest";
import "./Interests.css";

const defaultInterests = [
  { name: "US Markets", pref: "Some-times" },
  { name: "Stocks", pref: "Some-times" },
  { name: "Currencies", pref: "Some-times" },
  { name: "Commodities", pref: "Some-times" },
  { name: "Crypto", pref: "Some-times" },
  { name: "Global Markets", pref: "Some-times" },
  { name: "UK Stocks", pref: "Some-times" },
  { name: "Bonds", pref: "Some-times" },
];
const interests = [
  {
    imageUrl: "flag-usa-solid.svg",
    name: `US Markets`,
    description: `Something something!`,
    icon: <MonetizationOnOutlined />,
    id: 1,
    preference: "Some-times",
  },
  {
    imageUrl: "arrow-trend-up-solid.svg",
    name: `Stocks`,
    description: `Something something!`,
    icon: <ShowChartOutlined />,
    id: 2,
    preference: "Some-times",
  },
  {
    imageUrl: `coins-solid.svg`,
    name: `Currencies`,
    description: `Something something!`,
    icon: <CurrencyExchangeOutlined />,
    id: 4,
    preference: "Some-times",
  },
  {
    imageUrl: `oil-well-solid.svg`,
    name: `Commodities`,
    description: `Something something!`,
    icon: <OilBarrelOutlined />,
    id: 5,
    preference: "Some-times",
  },
  {
    imageUrl: `bitcoin-sign-solid.svg`,
    name: `Crypto`,
    description: `Something something!`,
    icon: <CurrencyBitcoinOutlined />,
    id: 6,
    preference: "Some-times",
  },
  {
    imageUrl: `globe-solid.svg`,
    name: `Global Markets`,
    description: `Something something!`,
    icon: <PublicOutlined />,
    id: 7,
    preference: "Some-times",
  },
  {
    imageUrl: `sterling-sign-solid.svg`,
    name: `UK Stocks`,
    description: `Something something!`,
    icon: <CurrencyPoundOutlined />,
    id: 8,
    preference: "Some-times",
  },
  {
    imageUrl: `money-bill-trend-up-solid.svg`,
    name: `Bonds`,
    description: `Something something!`,
    icon: <MoneyOutlined />,
    id: 9,
    preference: "Some-times",
  },
];

export interface InterestInfoType {
  name: string;
  pref: string;
}

interface InterestsProps {
  liftInterestsList: Function;
}

function Interests(props: InterestsProps) {
  const liftInterestsList = props.liftInterestsList;

  const interestData = window.localStorage.getItem("INTERESTS");
  const initialInterest =
    interestData !== null && interestData !== "undefined"
      ? JSON.parse(interestData)
      : defaultInterests;

  const [interestsArr, setInterestsArr] =
    useState<Array<InterestInfoType>>(initialInterest);

  useEffect(() => {
    liftInterestsList(interestsArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  for (let i = 0; i < interestsArr.length; i++) {
    if (interests[i].preference !== interestsArr[i].pref)
      interests[i].preference = interestsArr[i].pref;
  }
  function saveInterestInfo(interestInfo: InterestInfoType) {
    let check = interestsArr.filter((x) => x.name === interestInfo.name)[0];
    let index = interestsArr.indexOf(check);
    interestsArr[index].pref = interestInfo.pref;
    setInterestsArr([...interestsArr]);
    window.localStorage.setItem("INTERESTS", JSON.stringify(interestsArr));
    liftInterestsList(interestsArr);
  }

  return (
    <>
      <Grid container>
        {interests.map((interest, index) => {
          return (
            <Grid item md={3} sm={4} xs={4} key={interests[index].id}>
              <Grid container>
                <Grid item xs={12}>
                  <img
                    className="interest-icon"
                    src={interest.imageUrl}
                    alt={interest.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Interest
                    data={interests[index]}
                    onChangeInterestInfo={saveInterestInfo}
                  />
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Interests;
