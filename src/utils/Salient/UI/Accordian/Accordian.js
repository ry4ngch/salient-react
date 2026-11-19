import React, { useState, useMemo } from "react";

const Accordian = ({
  activeToggle = "multiple",
  children,
  className,
  ...rest
}) => {
  const initialAccordianState = useMemo(() => {
    return Object.fromEntries(
      (children || []).map((_, index) => [index, false]),
    );
  }, [children]);

  const [_accordianItemsState, _setAccordianItemsState] = useState(
    initialAccordianState,
  );
  const [prevChildren, setPrevChildren] = useState(children);

  // Adjust item state when the children list changes (derived state during render)
  if (children !== prevChildren) {
    setPrevChildren(children);
    _setAccordianItemsState((prevState) =>
      Object.fromEntries(
        (children || []).map((_, index) => [index, prevState[index] ?? false]),
      ),
    );
  }

  return (
    <div
      {...rest}
      className={["accordian", className || ""].join(" ").trim()}
      data-active-toggle={activeToggle}
    >
      {React.Children.map(children, (child, _refIndex) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              _accordianItemsState,
              _setAccordianItemsState,
              _refIndex,
              activeToggle: activeToggle,
            })
          : child,
      )}
    </div>
  );
};

const AccordianItem = (props) => {
  return (
    <div
      {...props}
      className={[
        "accordian-card",
        props._accordianItemsState[props._refIndex] ? "open" : "",
      ]
        .join(" ")
        .trim()}
    >
      <div
        className="accordian-heading"
        onClick={() =>
          props._setAccordianItemsState((prevState) => {
            if (props.activeToggle === "single") {
              // Set all to false, then toggle the clicked one
              const newState = Object.fromEntries(
                Object.keys(prevState).map((key) => [key, false]),
              );
              return {
                ...newState,
                [props._refIndex]: !prevState[props._refIndex],
              };
            } else {
              // Toggle only the clicked item
              return {
                ...prevState,
                [props._refIndex]: !prevState[props._refIndex],
              };
            }
          })
        }
      >
        <a>{props.title}</a>
      </div>
      <div className="accordian-body">
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Accordian;
export { AccordianItem };
