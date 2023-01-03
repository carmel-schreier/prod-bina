import Button from "@material-ui/core/Button";
import "./GetMovie.css";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";

interface GetMovieProps {
  getMovie: Function;
}

function GetMovie(props: GetMovieProps) {
  const handleGetMovieClick = () => {
    props.getMovie();
  };
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleGetMovieClick}
      className="get-movie-btn"
      size="large"
      style={{ fontSize: "1.8vw", borderRadius: "20px" }}
      startIcon={
        <PlayCircleFilledWhiteOutlinedIcon style={{ fontSize: "1.8vw" }} />
      }
    >
      Get a Real-Time Movie
    </Button>
  );
}

export default GetMovie;