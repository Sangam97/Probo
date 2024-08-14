import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Chess = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={20}
    height={20}
    viewBox="0 0 57 57"
    {...props}
  >
    <Path
      d="M19.5 25h-10l-.818 9h11.636zM7.5 47h14l-.636-7H8.136z"
      style={{
        fill: "#f9eab0",
      }}
    />
    <Path
      d="m8.5 36-.182 2h12.364l-.182-2z"
      style={{
        fill: "#fbd490",
      }}
    />
    <Path
      d="M8.136 40h12.728l-.182-2H8.318zM20.318 34H8.682L8.5 36h12z"
      style={{
        fill: "#d6c990",
      }}
    />
    <Path
      d="M47.5 20h-12c-1.1 0-2-.9-2-2s.9-2 2-2h12c1.1 0 2 .9 2 2s-.9 2-2 2z"
      style={{
        fill: "#38454f",
      }}
    />
    <Path
      d="M19.128 3H17.5V1.372C17.5.614 16.886 0 16.128 0h-3.255C12.114 0 11.5.614 11.5 1.372V3H9.872C9.114 3 8.5 3.614 8.5 4.372v2.255C8.5 7.386 9.114 8 9.872 8H11.5v3h6V8h1.628c.758 0 1.372-.614 1.372-1.372V4.372C20.5 3.614 19.886 3 19.128 3z"
      style={{
        fill: "#fbd490",
      }}
    />
    <Path
      d="M20.5 20h-12l-1.597-7.187A1.49 1.49 0 0 1 8.357 11h12.286a1.49 1.49 0 0 1 1.454 1.813L20.5 20z"
      style={{
        fill: "#f9eab0",
      }}
    />
    <Path
      d="M48.5 47h-14l2-22h10z"
      style={{
        fill: "#38454f",
      }}
    />
    <Path
      d="M47.5 53h-12a3 3 0 1 1 0-6h12a3 3 0 1 1 0 6z"
      style={{
        fill: "#546a79",
      }}
    />
    <Path
      d="M51.5 57h-20a2 2 0 1 1 0-4h20a2 2 0 1 1 0 4z"
      style={{
        fill: "#38454f",
      }}
    />
    <Path
      d="M48 25H35a2.5 2.5 0 1 1 0-5h13a2.5 2.5 0 1 1 0 5z"
      style={{
        fill: "#546a79",
      }}
    />
    <Path
      d="M21 25H8a2.5 2.5 0 1 1 0-5h13a2.5 2.5 0 1 1 0 5zM20.5 53h-12a3 3 0 1 1 0-6h12a3 3 0 1 1 0 6z"
      style={{
        fill: "#fbd490",
      }}
    />
    <Path
      d="M24.5 57h-20a2 2 0 1 1 0-4h20a2 2 0 1 1 0 4z"
      style={{
        fill: "#f9eab0",
      }}
    />
    <Path
      d="m50.5 5-2.845 4.741a.532.532 0 0 1-.457.259H44.15a.534.534 0 0 1-.523-.638L44.5 5h-6l.872 4.362a.533.533 0 0 1-.522.638h-3.048a.532.532 0 0 1-.457-.259L32.5 5h-4l5 11h16l5-11h-4z"
      style={{
        fill: "#546a79",
      }}
    />
  </Svg>
);
export default Chess;
