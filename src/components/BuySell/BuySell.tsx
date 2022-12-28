import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./BuySell.css";
function BuySell() {
  return (
    <>
      <div className="buy-sell">
        <FormControlLabel
          control={<Checkbox defaultChecked size="medium" color="primary" />}
          label="Add Buy/Sell Recommendation to your Movie"
        />
      </div>
    </>
  );
}

export default BuySell;
