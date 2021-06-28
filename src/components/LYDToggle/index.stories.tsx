import React, { useState } from "react";
import LYDToggle from "./LYDToggle";

export default {
  title: "Components/LYDToggle",
  component: LYDToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <LYDToggle checked={isChecked} onChange={toggle} />
      </div>
      <div>
        <LYDToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
