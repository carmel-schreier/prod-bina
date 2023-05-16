import { useEffect, useState } from "react";
import AddBar from "../AddBar/AddBar";
import WatchList from "../WatchList/WatchList";

interface listProps {
  apiList: Array<string>;
  liftSecurityList: Function;
}

function List(props: listProps) {
  const apiWatchList = props.apiList;

  console.log("i'm apiList");
  console.log(apiWatchList);
  const liftList = props.liftSecurityList;

  let listData = window.localStorage.getItem("WATCH-LIST");
  console.log("i'm listData");
  console.log(listData);
  let storedList =
    listData !== null && listData !== "undefined"
      ? JSON.parse(listData)
      : apiWatchList;

  console.log("i'm storedList");
  console.log(storedList);

  const [watchList, setWatchList] = useState<Array<string>>(storedList);

  console.log("i'm watchList");
  console.log(watchList);

  console.log("i'm storedList");
  console.log(storedList);

  useEffect(() => {
    //
    liftList(watchList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addSecurity = (value: string) => {
    let test = watchList.filter((x: string) => x === value)[0];
    if (!test) {
      watchList.splice(2, 1);
      watchList.unshift(value);
      window.localStorage.setItem("WATCH-LIST", JSON.stringify(watchList));
      setWatchList([...watchList]);
    }
  };

  const resetList = () => {
    localStorage.removeItem("WATCH-LIST");
    setWatchList(apiWatchList);
  };

  return (
    <>
      <AddBar onSubmitSec={addSecurity} />
      <WatchList theList={watchList} clearList={resetList} />
    </>
  );
}

export default List;
