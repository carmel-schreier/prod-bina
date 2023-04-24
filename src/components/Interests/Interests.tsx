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
import { useState } from "react";
import Interest from "../Interest/Interest";
import "./Interests.css";

export interface InterestInfoType {
  name: string;
  pref: string;
}

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

interface InterestsProps {
  liftInterestsList: Function;
  interestsPref: Array<InterestInfoType>;
}

function Interests(props: InterestsProps) {
  let interestsArr = props.interestsPref;
  //const deskTopSize = useMediaQuery("(min-width:1000px)");
  const [interestsList, setInterestList] =
    useState<Array<InterestInfoType>>(interestsArr);
  for (let i = 0; i < interestsArr.length; i++) {
    if (interests[i].preference !== interestsArr[i].pref)
      interests[i].preference = interestsArr[i].pref;
  }
  function saveInterestInfo(interestInfo: InterestInfoType) {
    let check = interestsList.filter((x) => x.name === interestInfo.name)[0];
    let index = interestsList.indexOf(check);
    interestsList[index].pref = interestInfo.pref;
    setInterestList([...interestsList]);
    props.liftInterestsList(interestsList);
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
