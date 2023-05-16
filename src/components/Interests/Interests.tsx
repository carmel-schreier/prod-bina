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
  { name: "US Markets", URLname: "usMarket", pref: "Some-times" },
  { name: "Stocks", URLname: "stocks", pref: "Some-times" },
  { name: "Currencies", URLname: "currencies", pref: "Some-times" },
  { name: "Commodities", URLname: "commodities", pref: "Some-times" },
  { name: "Crypto", URLname: "crypto", pref: "Some-times" },
  { name: "Global Markets", URLname: "globalMarkets", pref: "Some-times" },
  { name: "UK Stocks", URLname: "ukStocks", pref: "Some-times" },
  { name: "Bonds", URLname: "bonds", pref: "Some-times" },
];
const interests = [
  {
    imageUrl: "flag-usa-solid.svg",
    name: `US Markets`,
    URLname: `usMarket`,
    description: `Something something!`,
    icon: <MonetizationOnOutlined />,
    id: 1,
    preference: "Some-times",
  },
  {
    imageUrl: "arrow-trend-up-solid.svg",
    name: `Stocks`,
    URLname: `stocks`,
    description: `Something something!`,
    icon: <ShowChartOutlined />,
    id: 2,
    preference: "Some-times",
  },
  {
    imageUrl: `coins-solid.svg`,
    name: `Currencies`,
    URLname: `currencies`,
    description: `Something something!`,
    icon: <CurrencyExchangeOutlined />,
    id: 4,
    preference: "Some-times",
  },
  {
    imageUrl: `oil-well-solid.svg`,
    name: `Commodities`,
    URLname: `commodities`,
    description: `Something something!`,
    icon: <OilBarrelOutlined />,
    id: 5,
    preference: "Some-times",
  },
  {
    imageUrl: `bitcoin-sign-solid.svg`,
    name: `Crypto`,
    URLname: `crypto`,
    description: `Something something!`,
    icon: <CurrencyBitcoinOutlined />,
    id: 6,
    preference: "Some-times",
  },
  {
    imageUrl: `globe-solid.svg`,
    name: `Global Markets`,
    URLname: `globalMarkets`,
    description: `Something something!`,
    icon: <PublicOutlined />,
    id: 7,
    preference: "Some-times",
  },
  {
    imageUrl: `sterling-sign-solid.svg`,
    name: `UK Stocks`,
    URLname: `ukStocks`,
    description: `Something something!`,
    icon: <CurrencyPoundOutlined />,
    id: 8,
    preference: "Some-times",
  },
  {
    imageUrl: `money-bill-trend-up-solid.svg`,
    name: `Bonds`,
    URLname: `bonds`,
    description: `Something something!`,
    icon: <MoneyOutlined />,
    id: 9,
    preference: "Some-times",
  },
];

export interface InterestInfoType {
  name: string;
  URLname: string;
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
  console.log("I'm interestsArr");
  console.log(interestsArr);

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
