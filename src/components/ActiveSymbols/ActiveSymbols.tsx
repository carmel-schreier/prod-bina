import { useEffect, useState } from "react";
import { getActiveSymbols, onTheFlyEdition } from "../../services/apiService";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import "./ActiveSymbols.css";

export type ActiveSymbolType = {
  priority: number;
  producer: string;
  symbol: string;
  type: string;
};

interface activeProps {
  getInitialList: Function;
}

function ActiveSymbols(props: activeProps) {
  const [activeSymbols, setActiveSymbols] = useState<Array<ActiveSymbolType>>(
    []
  );

  const [otherActive, setOtherActive] = useState<Array<string>>([
    "AAPL",
    "KO",
    "TSLA",
  ]);

  useEffect(() => {
    const getASymbols = async () => {
      if (activeSymbols.length < 1) {
        const aSymbols = await getActiveSymbols();
        console.log(aSymbols);
        getOtherSymbols(aSymbols);
        const activeSymbols =
          aSymbols.length > 3 ? aSymbols.slice(0, 3) : aSymbols;
        console.log(activeSymbols);
        setActiveSymbols([...activeSymbols]);
      }
    };
    getASymbols();
  }, []);

  const getOtherSymbols = (aSymbols: Array<ActiveSymbolType>) => {
    let otherActive = ["AAPL", "KO", "TSLA"];
    if (aSymbols.length === 4)
      otherActive = [aSymbols[3].symbol, "AAPL", "TSLA"];
    if (aSymbols.length === 5)
      otherActive = [aSymbols[3].symbol, aSymbols[4].symbol, "TSLA"];
    if (aSymbols.length >= 6)
      otherActive = [
        aSymbols[3].symbol,
        aSymbols[4].symbol,
        aSymbols[6].symbol,
      ];
    props.getInitialList(otherActive);
  };

  const handelGetSymbolMovie = (event: Object, symbol: ActiveSymbolType) => {
    const aSymbol = symbol.symbol;
    //const theHolding = `{"symbol":"${aSymbol}"}`;
    console.log(aSymbol);
    onTheFlyEdition([], [aSymbol]);
  };
  return (
    <div>
      <Grid container className="symbols-section">
        <Grid item xs={12}>
          <Typography
            variant="h5"
            style={{
              textAlign: "center",
              fontWeight: "500",
              color: "white",
              fontSize: "2.2vw",
            }}
          >
            Today's Highlighted Securities:
          </Typography>
        </Grid>
        {activeSymbols.map((symbol) => {
          return (
            <Grid
              item
              md={4}
              sm={4}
              xs={12}
              style={{
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                style={{
                  color: "white",
                  marginTop: "2vw",
                  marginBottom: "1.2vw",
                  fontWeight: "600",
                }}
              >
                {symbol.symbol}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={(event) => handelGetSymbolMovie(event, symbol)}
                className="get-movie-btn"
                size="large"
                style={{
                  fontSize: "1.5vw",
                  borderRadius: "15px",
                  marginBottom: "1vw",
                }}
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
