import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

const Treeview = ({ children, className, ...rest }) => {
  return (
    <section {...rest} className={classNames("list-tree", className)}>
      <ul>{children}</ul>
    </section>
  );
};

const TreeItem = ({
  children,
  text,
  subtext,
  expandOnLoad = false,
  className,
  ...rest
}) => {
  const [isExpanded, setIsExpanded] = useState(expandOnLoad);
  const [isVisible, setIsVisible] = useState(expandOnLoad);
  const hideTimerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(hideTimerRef.current);
  }, []);

  const toggleExpand = () => {
    const nextExpanded = !isExpanded;
    setIsExpanded(nextExpanded);

    clearTimeout(hideTimerRef.current);
    if (nextExpanded) {
      setIsVisible(true);
    } else {
      // Delay hiding until the collapse animation finishes
      hideTimerRef.current = setTimeout(() => setIsVisible(false), 300);
    }
  };

  return (
    <li {...rest} className={classNames(className)}>
      <span
        onClick={toggleExpand}
        title={
          children
            ? isExpanded
              ? "Collapse this branch"
              : "Expand this branch"
            : undefined
        }
        style={{ cursor: children ? "pointer" : "default" }}
      >
        {text}
      </span>
      {subtext && <span className="comment">{subtext}</span>}
      {children && isVisible && (
        <ul className={isExpanded ? "expand" : "collapse"}>
          {React.Children.map(children, (child) =>
            React.isValidElement(child) ? React.cloneElement(child) : child,
          )}
        </ul>
      )}
    </li>
  );
};

export default Treeview;
export { TreeItem };
