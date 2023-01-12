import Interests, { InterestInfoType } from "../Interests/Interests";
import { useState } from "react";
import WatchList from "../WatchList/WatchList";
import GetMovie from "../GetMovie/GetMovie";
import AddBar from "../AddBar/AddBar";
import { Grid, Paper } from "@material-ui/core";
import { ArrowDownward } from "@material-ui/icons";
import RecommSwitch from "../RecommSwitch/RecommSwitch";
import { onTheFlyEdition } from "../../services/apiService";
import ActiveSymbols from "../ActiveSymbols/ActiveSymbols";
import "./Main.css";

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
  const [interestsArr, setInterestsArr] = useState<Array<string>>([
    "stockAdvice",
  ]);

  //const [includeRecomm, setIncludeRecomm] = useState<boolean>(true);

  function liftRecommState(checked: boolean) {
    //setIncludeRecomm(checked);
    checked === true
      ? setInterestsArr([...interestsArr, "stockAdvice"])
      : interestsArr.splice(
          interestsArr.indexOf("stockAdvice"),
          interestsArr.indexOf("stockAdvice") + 1
        );
  }

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

  return (
    <>
      <div className="full-page  d-flex flex-column align-items-center">
        <div className="hero">
          <h4 className="top-title">Automated Financial Movies</h4>
          <div className="btn-container">
            <GetMovie getMovie={onTheFlyEdition} interestsArr={interestsArr} />
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
                <RecommSwitch handleRecommSwitch={liftRecommState} />
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
                  <GetMovie
                    getMovie={onTheFlyEdition}
                    interestsArr={interestsArr}
                  />
                </div>
              </Grid>
            </div>
          </Grid>
        </div>
        <div className="recommended-movies-section"></div>
        <div className="recommended-movies-section-2">
          <ActiveSymbols />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Main;
