import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#78be8d",
        //backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      //color: "#78be8d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

interface recommProps {
  handleRecommSwitch: Function;
}

export default function RecommSwitch(props: recommProps) {
  const liftRecomPref = props.handleRecommSwitch;

  const getRecomData = window.localStorage.getItem("GET-RECOM");
  let initialGetRecom =
    getRecomData !== null && getRecomData !== "undefined"
      ? JSON.parse(getRecomData)
      : true;

  const [getRecom, setGetRecom] = useState(initialGetRecom);
  //console.log("getRecom = ");
  //console.log(getRecom);

  useEffect(() => {
    liftRecomPref(getRecom);
    console.log("getRecom = ");
    console.log(getRecom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const recommSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGetRecom(event.target.checked);
    let checked = event.target.checked;
    window.localStorage.setItem("GET-RECOM", JSON.stringify(checked));
    liftRecomPref(checked);
  };
  return (
    <FormGroup>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography style={{ color: "white" }}>No</Typography>
        <FormControlLabel
          control={
            <IOSSwitch
              sx={{ m: 1 }}
              checked={getRecom}
              onChange={recommSwitchChange}
            />
          }
          label=""
        />
        <Typography style={{ color: "white" }}>Yes</Typography>
      </Stack>
    </FormGroup>
  );
}
