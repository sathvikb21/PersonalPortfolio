import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import ValidCMD from "./ValidCMD";

const NewLine = () => {
  const [cmd, setCmd] = useState("");
  const [output, setOutput] = useState("");
  const enter = () => {
    if (cmd === "clear") {
      setOutput("");
      setCmd("");
      return;
    }

    setOutput((prevCMD) => prevCMD + "> " + ValidCMD(cmd) + "\n");
    console.log(output);
    setCmd("");
  };
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCmd(e.target.value);
  };

  return (
    <>
      <FontAwesomeIcon icon={solid("arrow-right")} className="text-white" />
      <input
        type="text"
        className="w-3/4 ml-1 text-white border-0 bg-transparent focus:outline-none caret-transparent cursol-pointer"
        value={cmd}
        onKeyPress={(e) => {
          if (e.key === "Enter") enter();
        }}
        onChange={change}
        autoFocus
      />
      <div className="text-white">{output}</div>;
    </>
  );
};

export default NewLine;
