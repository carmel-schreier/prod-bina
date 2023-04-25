import Interests, { InterestInfoType } from "../Interests/Interests";
import { useState } from "react";
import GetMovie from "../GetMovie/GetMovie";
import { Grid, Paper } from "@material-ui/core";
import { ArrowDownward } from "@material-ui/icons";
import useMediaQuery from "@mui/material/useMediaQuery";
import RecommSwitch from "../RecommSwitch/RecommSwitch";
import { onTheFlyEdition } from "../../services/apiService";
import ActiveSymbols from "../ActiveSymbols/ActiveSymbols";
import "./Main.css";
import Footer from "../Footer/Footer";
import List from "../List/List";

function Main() {
  const deskTopSize = useMediaQuery("(min-width:1000px)");

  const [interestsList, setInterestsList] = useState<Array<InterestInfoType>>(
    []
  );
  const updateInterestsList = (interestsList: Array<InterestInfoType>) => {
    setInterestsList([...interestsList]);
  };

  const [recomStatus, setRecomStatus] = useState(true);
  const getRecommPref = (checked: boolean) => {
    setRecomStatus(checked);
  };

  const [securityList, setSecurityList] = useState<Array<string>>([]);

  const liftSecurityList = (otherActive: Array<string>) => {
    setSecurityList(otherActive);
  };

  const [apiWatchList, setApiWatchList] = useState<Array<string>>([]);

  const getApiWatchList = (otherActive: Array<string>) => {
    setApiWatchList(otherActive);
  };

  return (
    <>
      <div className="full-page  d-flex flex-column align-items-center">
        <div className="hero">
          <h4 className="top-title">Automated Financial Movies</h4>
          <div className="btn-container">
            <GetMovie
              getMovie={onTheFlyEdition}
              interestsArr={interestsList}
              symbolArr={securityList}
              getRecom={recomStatus}
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
                {/* <AddBar onSubmitSec={addSecurity} /> */}
                {/* <WatchList theList={watchList} clearList={resetList} /> */}
                <List
                  apiList={apiWatchList}
                  liftSecurityList={liftSecurityList}
                />
              </Paper>
            </Grid>

            <Grid xs={12} item>
              <div className="interests-section">
                <Interests liftInterestsList={updateInterestsList} />
                <div className="lower-get-movie-btn d-flax align-items-center">
                  <GetMovie
                    getMovie={onTheFlyEdition}
                    interestsArr={interestsList}
                    symbolArr={securityList}
                    getRecom={recomStatus}
                  />
                </div>
              </div>
            </Grid>
            <div className="recommended-movies-section-2">
              <Grid xs={11} item>
                <ActiveSymbols
                  getInitialList={getApiWatchList}
                  getRecom={recomStatus}
                />
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
              interestsArr={interestsList}
              symbolArr={securityList}
              getRecom={recomStatus}
            />
          </div>
          <div className="square-3-mobil">
            <List apiList={apiWatchList} liftSecurityList={liftSecurityList} />
            {/* <AddBar onSubmitSec={addSecurity} /> */}
            {/* <WatchList theList={watchList} clearList={resetList} /> */}
          </div>
          {!deskTopSize && (
            <ActiveSymbols
              getInitialList={getApiWatchList}
              getRecom={recomStatus}
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
