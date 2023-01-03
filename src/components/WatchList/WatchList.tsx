import "./WatchList.css";

export type SecurityType = {
  name: string;
  ticker: string;
};

interface listProps {
  theList: Array<string>;
  clearList: Function;
}
function WatchList(props: listProps) {
  const handleClearClick = () => {
    props.clearList();
  };
  return (
    <>
      <div className="list-container ms-4 mt-2">
        <p className="list-title">Your Watch List:</p>
        <ul className="list">
          {props.theList.map((ticker: string, index) => (
            <li key={index}>{ticker}</li>
          ))}
        </ul>
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