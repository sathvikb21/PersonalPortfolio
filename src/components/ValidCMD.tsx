import React from "react";

function ValidCMD(cmd: string) {
  if (cmd === "hello") {
    return "World! \n";
  } else if (cmd === "world") {
    return "Hello! \n";
  } else if (cmd === "about") {
    return `
      Hello, I am Sathvik Bhavaraju and I am a junior at duPont Manual High School. 
      I am a full stack developer that uses frameworks such as React, T3, and Django.
      I am currently working on a few projects that I will be releasing soon. \n
    `;
  } else if (cmd === "projects") {
    return `
      1. Shape Green shapegreen.org
      2. TAK kytelugupeople.org
    `;
  } else if (cmd === "help") {
    return `
      hello - Says hello to the world
      world - Says hello to the world
      about - Tells you about me
      projects - Lists my projects
      help - Lists all the commands \n
    `
  }else {
    return "Invalid Command \n";
  }
}

export default ValidCMD;
