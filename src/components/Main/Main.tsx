import Interests, { InterestInfoType } from "../Interests/Interests";
import { useState } from "react";
import WatchList from "../WatchList/WatchList";
import GetMovie from "../GetMovie/GetMovie";
import AddBar from "../AddBar/AddBar";
import { Grid, Paper } from "@material-ui/core";
import { ArrowDownward } from "@material-ui/icons";
import useMediaQuery from "@mui/material/useMediaQuery";
import RecommSwitch from "../RecommSwitch/RecommSwitch";
import { onTheFlyEdition } from "../../services/apiService";
import ActiveSymbols from "../ActiveSymbols/ActiveSymbols";
import "./Main.css";
import Footer from "../Footer/Footer";

const securities = [
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "KO", name: "The Coca-Cola Company" },
  { ticker: "TSLA", name: "Tesla Inc." },
  { ticker: "C", name: "Citigroup Inc." },
  { ticker: "JPM", name: "JPMorgan Chase & Co." },
  { ticker: "AMZN", name: "Amazon.com, Inc." },
];

function Main() {
  const deskTopSize = useMediaQuery("(min-width:1000px)");
  const [watchList, setWatchList] = useState<Array<string>>([
    "AAPL",
    "KO",
    "TSLA",
  ]);
  const [interestsArr, setInterestsArr] = useState<Array<string>>([
    "stockAdvice",
  ]);

  const getInitialList = (otherActive: Array<string>) => {
    console.log("otherActive = " + otherActive);
    setWatchList(otherActive);
  };

  const getRecommPref = (checked: boolean) => {
    if (checked) {
      interestsArr.indexOf("-stockAdvice") > -1 &&
        interestsArr.splice(interestsArr.indexOf("-stockAdvice"), 1);
      setInterestsArr([...interestsArr, "stockAdvice"]);
    } else {
      interestsArr.indexOf("stockAdvice") > -1 &&
        interestsArr.splice(interestsArr.indexOf("stockAdvice"), 1);
      setInterestsArr([...interestsArr, "-stockAdvice"]);
    }
  };

  const addSecurity = (value: string) => {
    let test = watchList.filter((x) => x === value)[0];
    if (!test) {
      watchList.splice(2, 1);
      watchList.unshift(value);
      setWatchList([...watchList]);
    }
  };
  console.log("watchList = " + watchList);
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
            <GetMovie
              getMovie={onTheFlyEdition}
              interestsArr={interestsArr}
              symbolArr={watchList}
            />
          </div>
          <p className=" top-par">
            To watch movies with financial information best suited for your
            needs, please set your interests preference and your securities
            watch-list.
          </p>
        </div>

        <div className="middle">
          <Grid container className="items" justifyContent="center">
            <Grid item md={4} xs={12}>
              <Paper className="square square-1">
                <h3 className="buy-sell-text">
                  Include Buy/Sell Recommendations
                </h3>
                <RecommSwitch handleRecommSwitch={getRecommPref} />
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

            <Grid xs={12} item>
              <div className="interests-section">
                <Interests liftInterestsList={updateInterestsList} />
                <div className="lower-get-movie-btn d-flax align-items-center">
                  <GetMovie
                    getMovie={onTheFlyEdition}
                    interestsArr={interestsArr}
                    symbolArr={watchList}
                  />
                </div>
              </div>
            </Grid>
            <div className="recommended-movies-section-2">
              <Grid xs={11} item>
                <ActiveSymbols getInitialList={getInitialList} />
              </Grid>
            </div>
          </Grid>
        </div>
        <div className="middle-mobil">
          <div className="square-1-mobil">
            <h3 className="buy-sell-text">Include Buy/Sell Recommendations</h3>
            <RecommSwitch handleRecommSwitch={getRecommPref} />
          </div>
          <div className="square-2-mobil">
            <h5>Set your interest preference:</h5>
            <p>
              Yes: to always include the subject in your broadcasts. <br />
              Some-times: to include it only when there are interesting nows or
              updates. <br /> No: to never include it. <br />
            </p>
          </div>
          <div className="interest-mobil">
            <Interests liftInterestsList={updateInterestsList} />
            <GetMovie
              getMovie={onTheFlyEdition}
              interestsArr={interestsArr}
              symbolArr={watchList}
            />
          </div>
          <div className="square-3-mobil">
            <AddBar list={securities} onSubmitSec={addSecurity} />
            <WatchList theList={watchList} clearList={resetList} />
          </div>
          {!deskTopSize && <ActiveSymbols getInitialList={getInitialList} />}
          {!deskTopSize && <Footer />}
        </div>

        {deskTopSize && <div className="recommended-movies-section"></div>}
      </div>
      {deskTopSize && <Footer />}
      <div></div>
    </>
  );
}
//className="recommended-movies-section-2"
export default Main;
