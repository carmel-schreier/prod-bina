import Interests, { InterestInfoType } from "../Interests/Interests";
import { useState } from "react";
import WatchList, { SecurityType } from "../WatchList/WatchList";
import GetMovie from "../GetMovie/GetMovie";
import "./Main.css";
import AddBar from "../AddBar/AddBar";
import BuySell from "../BuySell/BuySell";
import { FormControl, Grid, Paper, Typography } from "@material-ui/core";
import RecommSwitch from "../RecommSwitch/RecommSwitch";
import NewRadio from "../NewRadio/NewRadio";
import { ArrowDownward } from "@material-ui/icons";
import CustomizedSwitch from "../RecommSwitch/gg";

const securities = [
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "KO", name: "The Coca-Cola Company" },
  { ticker: "TSLA", name: "Tesla Inc." },
  { ticker: "C", name: "Citigroup Inc." },
  { ticker: "JPM", name: "JPMorgan Chase & Co." },
  { ticker: "AMZN", name: "Amazon.com, Inc." },
];

function Main() {
  const [watchList, setWatchList] = useState<Array<string>>([
    "AAPL",
    "KO",
    "TSLA",
  ]);
  const [interestsArr, setInterestsArr] = useState<Array<string>>([]);

  const addSecurity = (value: string) => {
    let test = watchList.filter((x) => x === value)[0];
    if (!test) {
      watchList.push(value);
      setWatchList([...watchList]);
    }
  };

  const resetList = () => {
    setWatchList([]);
  };

  const updateInterestsList = (interestsList: Array<InterestInfoType>) => {
    let interests: Array<string> = [];
    interestsList.map((int) => {
      int.pref === "Never"
        ? interests.push(`-${int.name}`)
        : interests.push(int.name);
      return interests;
    });
    setInterestsArr(interests);
  };

  async function onTheFlyEdition() {
    const onTheFlyServer = "gns.vynopsisprod.com";
    const suite = "QA0";
    const uid = -999;
    const size = "720p"; //'480p','1080p';
    const producer = 118;
    const interests = interestsArr.toString();
    const accountJson = `{"accountId":"123",  "accountName":"Michael Golan",
                "voiceName":"mike",
                "cash":123}&
                holdings=[{"symbol":"OIL"}]`;
    let url = `http://${onTheFlyServer}/videolink/?uid=${uid}&size=${size}&rrCount=&suite=${suite}&interests=${interests}&producer=${producer}&account=${accountJson}`;

    fetch(url, {
      method: "get",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        window.open(
          `http://${onTheFlyServer}${response}`,
          "_blank",
          "noopener,noreferrer"
        );
      });
  }

  return (
    <>
      <div className="full-page  d-flex flex-column align-items-center">
        <div className="hero">
          <h4 className="top-title">Automated Financial Movies</h4>
          <div className="btn-container">
            <GetMovie getMovie={onTheFlyEdition} />
          </div>
          <p className=" top-par">
            Please set your interests preference and your securities watch-list,
            so that we can provide you movies with financial information best
            suited for your needs
          </p>
        </div>

        <div className="middle">
          <Grid container className="items">
            <Grid item md={4} xs={12}>
              <Paper className="square square-1">
                <h3 className="buy-sell-text">
                  Include Buy/Sell Recommendations
                </h3>
                <CustomizedSwitch />
              </Paper>
            </Grid>
            <Grid item md={4} xs={12}>
              <Paper className="square square-2">
                <h5>Set your interest preference:</h5>
                <br />
                <p>
                  Yes - to always include the subject in your broadcasts. <br />
                  <br />
                  Some-times - to include it only when there are interesting
                  nows or updates.
                  <br />
                  <br />
                  No - to never include it. <br />
                </p>
                <ArrowDownward />
              </Paper>
            </Grid>
            <Grid item md={4} xs={12}>
              <Paper className="square square-3">
                <AddBar list={securities} onSubmitSec={addSecurity} />
                <WatchList theList={watchList} clearList={resetList} />
              </Paper>
            </Grid>

            <div className="interests-section">
              <Grid xs={12}>
                <Interests liftInterestsList={updateInterestsList} />
                <div className="lower-get-movie-btn d-flax align-items-center">
                  <GetMovie getMovie={onTheFlyEdition} />
                </div>
              </Grid>
            </div>
          </Grid>
        </div>
        <div className="recommended-movies-section">hi</div>
      </div>
    </>
  );
}

export default Main;
