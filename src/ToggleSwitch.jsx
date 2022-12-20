import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ToggleSwitch = ({ size, color }) => {
  const [toggle, setToggle] = useState(false);

  const scaleY = size === "small" ? 20 : size === "big" ? 40 : 30;
  const scaleX = scaleY * 2.5;

  const handleOnToggle = () => {
    setToggle((current) => !current);
  };

  return (
    <ToggleWrapper onClick={handleOnToggle}>
      <ToggleOuter state={toggle} scaleX={scaleX} scaleY={scaleY} color={color}>
        <ToggleInner
          state={toggle}
          scaleX={scaleX}
          scaleY={scaleY}
        ></ToggleInner>
      </ToggleOuter>
    </ToggleWrapper>
  );
};

ToggleSwitch.defaultProps = {
  size: "normal",
  color: "#006eff",
};

ToggleSwitch.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default ToggleSwitch;

const ToggleWrapper = styled.div`
  margin: 10px;
`;
const ToggleOuter = styled.div`
  text-align: left;
  border-radius: ${({ scaleY }) => scaleY}px;
  background-color: lightgray;
  width: ${({ scaleX }) => scaleX}px;
  height: ${({ scaleY }) => scaleY}px;
  background-color: ${({ state, color }) => (state ? color : "lightgray")};
  transition: background-color 0.4s ease-in-out;
`;

const ToggleInner = styled.div`
  display: inline-flex;
  width: ${({ scaleY }) => scaleY}px;
  height: ${({ scaleY }) => scaleY}px;
  background-color: white;
  border-radius: 50%;
  transform: ${({ state, scaleX, scaleY }) =>
    state ? `translateX(${scaleX - scaleY + 1}px)` : "translateX(0px)"};
  transition: transform 0.2s ease-in-out;
  box-sizing: border-box;
  background-clip: padding-box;
  border: ${({ scaleY }) => (scaleY / 10) * 1.8}px solid transparent;
`;
