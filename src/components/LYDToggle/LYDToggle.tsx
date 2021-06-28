import React from "react";
import { LydiaStack, LydiaInput, LydiaLabel } from "./StyledLYDToggle";
import { LYDToggleProps, scales } from "./types";

const LYDToggle: React.FC<LYDToggleProps> = ({ checked, scale = scales.MD, ...props }) => (
  <LydiaStack scale={scale}>
    <LydiaInput id={props.id || "lydia-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <LydiaLabel scale={scale} checked={checked} htmlFor={props.id || "lydia-toggle"}>
      <div className="lydias">
        <div className="lydia" />
        <div className="lydia" />
        <div className="lydia" />
        <div className="butter" />
      </div>
    </LydiaLabel>
  </LydiaStack>
);

LYDToggle.defaultProps = {
  scale: scales.MD,
};

export default LYDToggle;
