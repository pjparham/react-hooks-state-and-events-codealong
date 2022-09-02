import React, { useState } from "react";

function Toggle() {
  const [isOn, changeIsOn] = useState(false)

  function setButton(){
    changeIsOn((isOn) => !isOn)
  }

  const color = isOn ? "red" : "yellow"

  return <button style={{ background: color}} onClick={setButton}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
