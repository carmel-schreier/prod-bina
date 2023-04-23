import Interests, { InterestInfoType } from "../Interests/Interests";
import { useEffect, useState } from "react";
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

  let listData = window.localStorage.getItem("WATCH-LIST");
  let storedList: Array<string>;
  if (listData !== null && listData !== "undefined")
    storedList = JSON.parse(listData);
  else storedList = ["AAPL", "KO", "TSLA"];

  const [watchList, setWatchList] = useState<Array<string>>(storedList);

  let interestData = window.localStorage.getItem("INTERESTS");
  let initialInterest;
  if (interestData !== null && interestData !== "undefined")
    initialInterest = JSON.parse(interestData);
  else
    initialInterest = [
      { name: "US Markets", pref: "Some-times" },
      { name: "Stocks", pref: "Some-times" },
      { name: "Currencies", pref: "Some-times" },
      { name: "Commodities", pref: "Some-times" },
      { name: "Crypto", pref: "Some-times" },
      { name: "Global Markets", pref: "Some-times" },
      { name: "UK Stocks", pref: "Some-times" },
      { name: "Bonds", pref: "Some-times" },
    ];
  const [interestsArr, setInterestsArr] =
    useState<Array<InterestInfoType>>(initialInterest);

  let getRecomData = window.localStorage.getItem("GET-RECOM");
  let initialGetRecom;
  if (getRecomData !== null && getRecomData !== "undefined")
    initialGetRecom = getRecomData;
  else initialGetRecom = "true";

  const [getRecom, setGetRecom] = useState(initialGetRecom);

  useEffect(() => {
    window.localStorage.setItem("INTERESTS", JSON.stringify(interestsArr));
  }, [interestsArr]);

  useEffect(() => {
    window.localStorage.setItem("GET-RECOM", JSON.stringify(getRecom));
  }, [getRecom]);

  useEffect(() => {
    window.localStorage.setItem("WATCH-LIST", JSON.stringify(watchList));
  }, [watchList]);

  const getInitialList = (otherActive: Array<string>) => {
    if (listData === null && listData === "undefined")
      setWatchList(otherActive);
  };

  const getRecommPref = (checked: boolean) => {
    if (checked) {
      setGetRecom("true");
    } else {
      setGetRecom("false");
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
  const resetList = () => {
    localStorage.removeItem("WATCH-LIST");
    setWatchList([]);
  };

  const updateInterestsList = (interestsList: Array<InterestInfoType>) => {
    setInterestsArr([...interestsList]);
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
              getRecom={getRecom}
            />
          </div>
          <p className=" top-par">
            For movies with financial information best suited for your needs,
            please set your interests preference and your securities watch-list.
          </p>
        </div>

        <div className="middle">
          <Grid container className="items" justifyContent="center">
            <Grid item md={4} xs={12}>
              <Paper className="square square-1">
                <h3 className="buy-sell-text">
                  Include Buy/Sell Recommendations
                </h3>
                <RecommSwitch
                  handleRecommSwitch={getRecommPref}
                  getRecom={getRecom}
                />
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
                <Interests
                  liftInterestsList={updateInterestsList}
                  interestsPref={interestsArr}
                />
                <div className="lower-get-movie-btn d-flax align-items-center">
                  <GetMovie
                    getMovie={onTheFlyEdition}
                    interestsArr={interestsArr}
                    symbolArr={watchList}
                    getRecom={getRecom}
                  />
                </div>
              </div>
            </Grid>
            <div className="recommended-movies-section-2">
              <Grid xs={11} item>
                <ActiveSymbols
                  getInitialList={getInitialList}
                  getRecom={getRecom}
                />
              </Grid>
            </div>
          </Grid>
        </div>
        <div className="middle-mobil">
          <div className="square-1-mobil">
            <h3 className="buy-sell-text">Include Buy/Sell Recommendations</h3>
            <RecommSwitch
              handleRecommSwitch={getRecommPref}
              getRecom={getRecom}
            />
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
            <Interests
              liftInterestsList={updateInterestsList}
              interestsPref={interestsArr}
            />
            <GetMovie
              getMovie={onTheFlyEdition}
              interestsArr={interestsArr}
              symbolArr={watchList}
              getRecom={getRecom}
            />
          </div>
          <div className="square-3-mobil">
            <AddBar list={securities} onSubmitSec={addSecurity} />
            <WatchList theList={watchList} clearList={resetList} />
          </div>
          {!deskTopSize && (
            <ActiveSymbols
              getInitialList={getInitialList}
              getRecom={getRecom}
            />
          )}
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
