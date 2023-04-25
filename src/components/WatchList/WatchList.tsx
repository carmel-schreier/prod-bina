import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./WatchList.css";

export type SecurityType = {
  name: string;
  ticker: string;
};

interface watchListProps {
  theList: Array<string>;
  clearList: Function;
}
function WatchList(props: watchListProps) {
  const deskTopSize = useMediaQuery("(min-width:1000px)");
  const handleClearClick = () => {
    props.clearList();
  };
  return (
    <>
      <div className="list-container ms-4 mt-2">
        <div className={deskTopSize ? "list-desk-top" : "list-mobil"}>
          <p className="list-title">Your Watch List:</p>
          <ul className={deskTopSize ? "list" : "ul-mobil"}>
            {props.theList.map((ticker: string, index) => (
              <li key={index}>{ticker}</li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="btn btn-secondary ms-1"
          style={{ fontSize: "12px" }}
          onClick={handleClearClick}
        >
          Clear Watch List
        </button>
      </div>
    </>
  );
}

export default WatchList;
