import Grid from "@material-ui/core/Grid";
import {
  MonetizationOnOutlined,
  MoneyOutlined,
  PublicOutlined,
  ShowChartOutlined,
} from "@material-ui/icons";
import useMediaQuery from "@mui/material/useMediaQuery";
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

interface InterestsProps {
  liftInterestsList: Function;
}

function Interests(props: InterestsProps) {
  const deskTopSize = useMediaQuery("(min-width:1000px)");
  const [interestsList, setInterestList] = useState<Array<InterestInfoType>>(
    []
  );

  function saveInterestInfo(interestInfo: InterestInfoType) {
    let check = interestsList.filter((x) => x.name === interestInfo.name);
    if (check.length === 0) interestsList.push(interestInfo);
    else {
      let index = interestsList.indexOf(check[0]);
      interestInfo.pref !== "Some-times"
        ? interestsList.splice(index, 1, interestInfo)
        : interestsList.splice(index, 1);
    }
    setInterestList([...interestsList]);
    props.liftInterestsList(interestsList);
  }
  const interests = [
    {
      imageUrl: "flag-usa-solid.svg",
      name: `US Markets`,
      description: `Something something!`,
      icon: <MonetizationOnOutlined />,
      id: 1,
    },
    {
      imageUrl: "arrow-trend-up-solid.svg",
      name: `Stocks`,
      description: `Something something!`,
      icon: <ShowChartOutlined />,
      id: 2,
    },
    {
      imageUrl: `coins-solid.svg`,
      name: `Currencies`,
      description: `Something something!`,
      icon: <CurrencyExchangeOutlined />,
      id: 4,
    },
    {
      imageUrl: `oil-well-solid.svg`,
      name: `Commodities`,
      description: `Something something!`,
      icon: <OilBarrelOutlined />,

      id: 5,
    },
    {
      imageUrl: `bitcoin-sign-solid.svg`,
      name: `Crypto`,
      description: `Something something!`,
      icon: <CurrencyBitcoinOutlined />,
      id: 6,
    },
    {
      imageUrl: `globe-solid.svg`,
      name: `Global Markets`,
      description: `Something something!`,
      icon: <PublicOutlined />,
      id: 7,
    },
    {
      imageUrl: `sterling-sign-solid.svg`,
      name: `UK Stocks`,
      description: `Something something!`,
      icon: <CurrencyPoundOutlined />,
      id: 8,
    },
    {
      imageUrl: `money-bill-trend-up-solid.svg`,
      name: `Bonds`,
      description: `Something something!`,
      icon: <MoneyOutlined />,
      id: 9,
    },
  ];
  return (
    <>
      <Grid container>
        {interests.map((interest, index) => {
          return (
            <Grid item md={3} sm={4} xs={4}>
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
                    key={interests[index].id}
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
