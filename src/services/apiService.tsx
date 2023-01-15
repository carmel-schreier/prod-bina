//import { ActiveSymbolType } from "../components/ActiveSymbols/ActiveSymbols";

export async function onTheFlyEdition(
  interestsArr: Array<string>,
  symbolsArr: Array<string>
  //watchList: Array<string>
) {
  const server = "http://gns.vynopsisprod.com";
  //const suite = "QA0";
  const uid = 1234;
  const size = "720p"; //'480p','1080p';
  const producer = 118;
  const interests = interestsArr.toString();
  console.log("symbolsArr = " + symbolsArr);
  //let interestsA = `stocks,stockAdvice,currencies,commodities`;
  console.log("interests = " + interests);
  const holdings = symbolsArr.map((symbol) => `{"symbol": "${symbol}"}`);
  console.log("holdings = " + holdings);

  //const theHolding = `{"symbol":"${aSymbol}"}`;

  //let holdings = JSON.stringify(symbolsArr);

  console.log("holdings = " + holdings);

  const accJSON = `{"accountId":123,  "accountName":"Michael Golan",
                "voiceName":"mike",
                "cash":123}&holdings=[${holdings}]`;
  console.log(accJSON);

  let url = `${server}/videolink/?uid=${uid}&size=${size}&rrCount=&interests=${interests}&producer=${producer}&account=${accJSON}`;
  console.log(url);

  //let url =
  //  `${server}/videolink?uid=${uid}&producer=${producer}&size=${size}&interests=${interests}` +
  //  `&account=${encodeURIComponent(accJSON)}`;

  fetch(url, {
    method: "get",
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      window.open(`${server}${response}`, "_blank", "noopener,noreferrer");
    });
}

export async function getActiveSymbols() {
  let reply = await fetch("http://gns.vynopsisprod.com/db/activesymbols");
  let activeSymbols = await reply.json();
  return activeSymbols;
}
