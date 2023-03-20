import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import ValidCMD from "./ValidCMD";

function Terminal() {
  const [cmd, setCmd] = useState("");
  const [output, setOutput] = useState("");
  const [lines, setLines] = useState([""]);

  const enter = () => {
    console.log(lines);
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
          // placeholder={line}
          onKeyPress={(e) => {
            if (e.key === "Enter") enter();
          }}
          onChange={change}
          autoFocus
        />
        <h1 className="text-white">{output}</h1>
    </>
  );
}

export default Terminal;
