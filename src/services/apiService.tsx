import { InterestInfoType } from "../components/Interests/Interests";

export async function onTheFlyEdition(
  interestsArr: Array<InterestInfoType>,
  symbolsArr: Array<string>,
  getRecom: string
) {
  let interests: Array<string> = [];
  getRecom === "true"
    ? interests.push(`stockAdvice`)
    : interests.push(`-stockAdvice`);
  for (let i = 0; i < interestsArr.length; i++) {
    if (interestsArr[i].pref === "Yes")
      interests.push(`${interestsArr[i].name}`);
    if (interestsArr[i].pref === "No")
      interests.push(`-${interestsArr[i].name}`);
  }
  console.log(" interests = ");
  console.log(interests);
  const server = "http://gns.vynopsisprod.com";
  //const suite = "QA0";
  const uid = 1235;
  const size = "720p"; //'480p','1080p';
  const producer = 118;
  let interestsString = interests.toString();
  console.log("symbolsArr = ");
  console.log(symbolsArr);

  const holdings = symbolsArr.map((symbol) => `{"symbol": "${symbol}"}`);
  console.log("holdings = ");
  console.log(holdings);

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
      console.log(response);
      window.open(`${server}${response}`, "_blank", "noopener,noreferrer");
    });
}

export async function getActiveSymbols() {
  let reply = await fetch("http://gns.vynopsisprod.com/db/activesymbols");
  let activeSymbols = await reply.json();
  return activeSymbols;
}
