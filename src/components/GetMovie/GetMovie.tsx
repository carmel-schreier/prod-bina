import Button from "@material-ui/core/Button";
import "./GetMovie.css";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { InterestInfoType } from "../Interests/Interests";

interface GetMovieProps {
  getMovie: Function;
  interestsArr: Array<InterestInfoType>;
  symbolArr: Array<string>;
  getRecom: string;
}

function GetMovie(props: GetMovieProps) {
  const deskTopSize = useMediaQuery("(min-width:1000px)");
  const handleGetMovieClick = () => {
    props.getMovie(props.interestsArr, props.symbolArr, props.getRecom);
  };
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleGetMovieClick}
      className="get-movie-btn"
      size="large"
      style={
        deskTopSize
          ? { fontSize: "1.8vw", borderRadius: "20px" }
          : {
              fontSize: "11px",
              borderRadius: "20px",
              fontWeight: "700",
              padding: "5px",
              paddingInline: "12px",
            }
      }
      startIcon={
        <PlayCircleFilledWhiteOutlinedIcon style={{ fontSize: "1.8vw" }} />
      }
    >
      Get a Real-Time Movie
    </Button>
  );
}

export default GetMovie;
