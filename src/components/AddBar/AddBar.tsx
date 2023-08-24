import useMediaQuery from "@material-ui/core/useMediaQuery";
import securities from "./securities-list";
import { useFormik } from "formik";
import { SecurityType } from "../WatchList/WatchList";
import "./AddBar.css";

interface AddBarProps {
  //list: Array<SecurityType>;
  onSubmitSec: Function;
}
function AddBar(props: AddBarProps) {
  const deskTopSize = useMediaQuery("(min-width:1000px)");
  //const list = props.list;
  const formik = useFormik({
    initialValues: {
      ticker: "",
    },
    onSubmit: (value) => {
      if (valid()) props.onSubmitSec(value.ticker);
      formik.resetForm();
    },
  });

  function valid() {
    return formik.values.ticker === "" ? false : true;
  }
  return (
    <>
      <div className="add-container">
        <form
          className={
            deskTopSize
              ? "add-form d-flex float-end mb-3 mt-3"
              : "mobil-add-form d-flex"
          }
          onSubmit={formik.handleSubmit}
        >
          <select
            className="name-input form-select"
            value={formik.values.ticker}
            name="ticker"
            onChange={formik.handleChange}
            placeholder="Add to your watch list"
          >
            <option>Add to watch list</option>
            {/* <option value={""}>Add to your watch-list</option> */}
            {securities.map((security: SecurityType, index) => (
              <option key={index} value={security.ticker}>
                {security.ticker} - {security.name}
              </option>
            ))}
          </select>
          <button className="add-btn btn btn-secondary ms-1" type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBar;
