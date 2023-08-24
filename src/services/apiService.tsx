import { InterestInfoType } from "../components/Interests/Interests";

export async function onTheFlyEdition(
  interestsArr: Array<InterestInfoType>,
  symbolsArr: Array<string>,
  getRecom: boolean,
  format: string
) {
  let interests: Array<string> = [];
  getRecom === true
    ? interests.push(`stockAdvice`)
    : interests.push(`-stockAdvice`);
  for (let i = 0; i < interestsArr.length; i++) {
    if (interestsArr[i].pref === "Yes")
      interests.push(`${interestsArr[i].URLname}`);
    if (interestsArr[i].pref === "No")
      interests.push(`-${interestsArr[i].URLname}`);
  }
  //console.log(" interests = ");
  //console.log(interests);
  const server = "http://gns.vynopsisprod.com";
  //const suite = "QA0";
  const uid = 1235;
  const deviseSize = format === "laptop" ? "1080h" : "1080v";
  const size = deviseSize; //"1080v"; '', "p","480p","720p";
  //console.log("final size = " + size);
  const producer = 118;
  let interestsString = interests.toString();
  //console.log("interestsString = ");
  //console.log(interestsString);
  //console.log("symbolsArr = ");
  //console.log(symbolsArr);

  const holdings = symbolsArr.map((symbol) => `{"symbol": "${symbol}"}`);
  //console.log("holdings = ");
  //console.log(holdings);

  const accJSON = `{"accountId":123,  "accountName":"Michael Golan",
                "voiceName":"mike",
                "cash":123}&holdings=[${holdings}]`;
  //console.log(accJSON);

  let url = `${server}/videolink/?uid=${uid}&size=${size}&rrCount=&interests=${interestsString}&producer=${producer}&account=${accJSON}`;
  console.log(url);

  //let url =
  //  `${server}/videolink?uid=${uid}&producer=${producer}&size=${size}&interests=${interests}` +
  //  `&account=${encodeURIComponent(accJSON)}`;

  fetch(url, {
    method: "get",
  })
    .then((response) => response.json())
    .then((response) => {
      window.open(`${server}${response}`, "_blank", "noopener,noreferrer");
    });
}

export async function getActiveSymbols() {
  let reply = await fetch("http://gns.vynopsisprod.com/db/activesymbols");
  let activeSymbols = await reply.json();
  return activeSymbols;
}
