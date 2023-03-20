import React from "react";
import NewLine from "./NewLine";

function ValidCMD(cmd: string) {
  if (cmd === "hello") {
    return "World!";
  } else if (cmd === "world") {
    return "Hello!";
  } else if (cmd === "clear") {
    return <NewLine />;
  } else {
    return "Invalid Command";
  }
}

export default ValidCMD;
