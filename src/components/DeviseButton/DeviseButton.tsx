import * as React from "react";
import LaptopIcon from "@mui/icons-material/Laptop";
//import TvIcon from "@mui/icons-material/Tv";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

interface DeviseButtonProps {
  handleDeviseSwitch: Function;
}

export default function DeviseButton(props: DeviseButtonProps) {
  const getDeviseData = window.localStorage.getItem("DEVISE");
  let initialDevise =
    getDeviseData !== null && getDeviseData !== "undefined"
      ? JSON.parse(getDeviseData)
      : "phone";

  const liftSizePref = props.handleDeviseSwitch;
  const [devices, setDevices] = React.useState(() => [initialDevise]);

  const handleDevices = (
    event: React.MouseEvent<HTMLElement>,
    newDevices: string[]
  ) => {
    if (newDevices.length) {
      setDevices(newDevices);
      liftSizePref(newDevices);
    }
    window.localStorage.setItem("DEVISE", JSON.stringify(newDevices));
  };
  return (
    <Stack direction="row" spacing={4}>
      <ToggleButtonGroup
        value={devices}
        exclusive
        onChange={handleDevices}
        aria-label="device"
      >
        <ToggleButton value="laptop" aria-label="laptop">
          <LaptopIcon />
        </ToggleButton>
        {/* <ToggleButton value="tv" aria-label="tv"> */}
        {/* <TvIcon /> */}
        {/* </ToggleButton> */}
        <ToggleButton value="phone" aria-label="phone">
          <PhoneAndroidIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
