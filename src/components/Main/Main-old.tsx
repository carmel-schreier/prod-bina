import Interests, { InterestInfoType } from "../Interests/Interests";
import { useState } from "react";
import WatchList, { SecurityType } from "../WatchList/WatchList";
import GetMovie from "../GetMovie/GetMovie";
import "./Main.css";
import AddBar from "../AddBar/AddBar";
import BuySell from "../BuySell/BuySell";
import { Typography } from "@material-ui/core";

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
        <h4 className="text-center mt-5">
          Welcome to our automated financial movies service
        </h4>
        <div className="btn-container">
          <GetMovie getMovie={onTheFlyEdition} />
        </div>
        <p className="text-center mt-3">
          Please set your interests preference and your securities watch-list
        </p>
        <span className="bar-row">
          <BuySell />
          <AddBar list={securities} onSubmitSec={addSecurity} />
        </span>

        <span className="d-flex">
          <Interests liftInterestsList={updateInterestsList} />
          <WatchList theList={watchList} clearList={resetList} />
        </span>
      </div>
    </>
  );
}

export default Main;
