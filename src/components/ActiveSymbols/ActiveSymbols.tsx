import { useEffect, useState } from "react";
import { getActiveSymbols, onTheFlyEdition } from "../../services/apiService";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import "./ActiveSymbols.css";
import useMediaQuery from "@mui/material/useMediaQuery";

export type ActiveSymbolType = {
  priority: number;
  producer: string;
  symbol: string;
  type: string;
};

interface activeProps {
  getInitialList: Function;
  getRecom: boolean;
}

function ActiveSymbols(props: activeProps) {
  const deskTopSize = useMediaQuery("(min-width:1000px)");
  let getRecom = props.getRecom;
  const [activeSymbols, setActiveSymbols] = useState<Array<ActiveSymbolType>>(
    []
  );

  //const [otherActive, setOtherActive] = useState<Array<string>>([
  //  "AAPL",
  //  "KO",
  //  "TSLA",
  //]);

  useEffect(() => {
    const getASymbols = async () => {
      if (activeSymbols.length < 1) {
        const aSymbols = await getActiveSymbols();
        console.log(aSymbols);
        getOtherSymbols(aSymbols);
        const activeSymbols =
          aSymbols.length > 3 ? aSymbols.slice(0, 3) : aSymbols;
        setActiveSymbols([...activeSymbols]);
      }
    };
    getASymbols();
  });

  const getOtherSymbols = (aSymbols: Array<ActiveSymbolType>) => {
    console.log(aSymbols[3].symbol, aSymbols[4].symbol);
    let otherActive = ["AAPL", "KO", "TSLA"];
    if (aSymbols.length === 4)
      otherActive = [aSymbols[3].symbol, "AAPL", "TSLA"];
    if (aSymbols.length === 5)
      otherActive = [aSymbols[3].symbol, aSymbols[4].symbol, "TSLA"];
    if (aSymbols.length >= 6)
      otherActive = [
        aSymbols[3].symbol,
        aSymbols[4].symbol,
        aSymbols[5].symbol,
      ];
    props.getInitialList(otherActive);
  };

  const handelGetSymbolMovie = (event: Object, symbol: ActiveSymbolType) => {
    const aSymbol = symbol.symbol;
    //const theHolding = `{"symbol":"${aSymbol}"}`;
    console.log(aSymbol);
    onTheFlyEdition([], [aSymbol], getRecom);
  };
  return (
    <div>
      <Grid container className="symbols-section">
        <Grid item xs={12}>
          <Typography
            variant="h5"
            style={
              deskTopSize
                ? {
                    textAlign: "center",
                    fontWeight: "500",
                    color: "white",
                    fontSize: "2.2vw",
                  }
                : {
                    textAlign: "center",
                    fontWeight: "600",
                    color: "white",
                    fontSize: "15px",
                  }
            }
          >
            Today's Highlighted Securities:
          </Typography>
        </Grid>
        {activeSymbols.map((symbol) => {
          return (
            <Grid
              item
              xs={
                activeSymbols.length === 3
                  ? 4
                  : activeSymbols.length === 2
                  ? 6
                  : 12
              }
              // sm={
              //   activeSymbols.length === 3
              //     ? 4
              //     : activeSymbols.length === 2
              //     ? 6
              //     : 12
              // }
              // xs={12}
              style={{
                textAlign: "center",
              }}
              key={symbol.symbol}
            >
              <Typography
                variant="h5"
                style={
                  deskTopSize
                    ? {
                        color: "white",
                        marginTop: "2vw",
                        marginBottom: "1.2vw",
                        fontWeight: "600",
                      }
                    : {
                        color: "white",
                        marginTop: "2vw",
                        marginBottom: "1.2vw",
                        fontWeight: "600",
                        fontSize: "17px",
                      }
                }
              >
                {symbol.symbol}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={(event) => handelGetSymbolMovie(event, symbol)}
                className="get-movie-btn"
                size="large"
                style={
                  deskTopSize
                    ? {
                        fontSize: "1.5vw",
                        borderRadius: "15px",
                        marginBottom: "1vw",
                      }
                    : {
                        fontSize: "9px",
                        borderRadius: "15px",
                        marginBottom: "1vw",
                        fontWeight: "600",
                      }
                }
                startIcon={
                  <PlayCircleFilledWhiteOutlinedIcon
                    style={{ fontSize: "1.5vw" }}
                  />
                }
              >
                Get Movie
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default ActiveSymbols;
