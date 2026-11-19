import React, { useState, useEffect, useRef, useCallback } from "react";
import classNames from "classnames";

const Timeline = (props) => {
  const [startIndex, setStartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(props.activeEventID || null);
  const timelineRef = useRef(null);
  const timelineItemsRef = useRef(null);

  const items = React.Children.toArray(props.children);
  const totalItems = items.length;

  const handlePaginationClick = (direction) => {
    setStartIndex((prev) => {
      const newIndex =
        direction === "prev"
          ? Math.max(prev - props.showCount, 0)
          : Math.min(prev + props.showCount, totalItems - props.showCount);
      return newIndex;
    });
    timelineItemsRef.current.classList.add("rendering");
  };

  let timelineClass = classNames("timeline", {
    "timeline-horz": props.isHorz,
    loaded: !props.isLoading && React.Children.count(props.children) > 0,
    "timeline-staggered": props.isStaggered,
    "center-events": props.centerEvents,
    "timeline-active": props.isTimelineActive && props.activeEventID,
  });

  useEffect(() => {
    if (timelineRef.current) {
      if (props.isTimelineActive) {
        if (startIndex > props.activeEventID) {
          timelineRef.current.classList.remove("timeline-active");
        } else {
          if (!timelineRef.current.classList.contains("timeline-active")) {
            timelineRef.current.classList.add("timeline-active");
          }
        }
      }
    }
  }, [props.activeEventID, props.isTimelineActive, startIndex]);

  const getMaxHeight = (listItems) => {
    let maxOddHeight = 0; // To store the max child height for odd-indexed <li>
    let maxEvenHeight = 0; // To store the max child height for even-indexed <li>

    listItems.forEach((li, index) => {
      // Get all direct child elements of the <li> (excluding pseudo-elements)
      const children = Array.from(li.children);

      if (children.length === 0) return;

      // Calculate the maximum height of children
      const maxChildHeight = children.reduce((sum, child) => {
        return sum + child.offsetHeight;
      }, 0);

      if ((index + 1) % 2 !== 0) {
        // Odd-indexed <li>
        maxOddHeight = Math.max(maxOddHeight, maxChildHeight);
      } else {
        // Even-indexed <li>
        maxEvenHeight = Math.max(maxEvenHeight, maxChildHeight);
      }
    });

    return { maxOddHeight, maxEvenHeight }; // Return max heights for odd and even groups
  };

  // helper function for resize
  const handleUlResize = useCallback(() => {
    if (timelineItemsRef.current) {
      if (props.isHorz && props.isStaggered && window.innerWidth >= 768) {
        const ulItemsHeight = getMaxHeight(
          timelineItemsRef.current.querySelectorAll("ul li"),
        );
        const maxHeight = Math.max(...Object.values(ulItemsHeight));
        if (maxHeight !== 0) {
          timelineItemsRef.current.style.height = `${maxHeight * 2 + 40}px`;
        }
      } else {
        timelineItemsRef.current.style.removeProperty("height");
      }
    }
  }, [props.isHorz, props.isStaggered]);

  // handle window resize event
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(() => {
        handleUlResize();
      });
    });

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, [props.centerEvents, handleUlResize]);

  // handle UL resize due to props and state change
  useEffect(() => {
    handleUlResize();
    if (timelineItemsRef.current) {
      timelineItemsRef.current.classList.add("rendering");
    }
  }, [
    props.showCount,
    props.children,
    props.isLoading,
    startIndex,
    handleUlResize,
  ]);

  const handleAnimationEnd = () => {
    if (timelineItemsRef.current) {
      timelineItemsRef.current.classList.remove("rendering");
    }
  };

  return (
    <div
      className={[timelineClass, props.className || ""].join(" ").trim()}
      style={props.style}
      ref={timelineRef}
    >
      {props.showControls && (
        <button
          className="toggle-timeline toggle-back"
          onClick={() => handlePaginationClick("prev")}
          disabled={startIndex === 0}
          style={{ cursor: startIndex === 0 ? "not-allowed" : "pointer" }}
        ></button>
      )}
      <ul
        onMouseEnter={() => setActiveIndex(null)}
        onMouseLeave={() => setActiveIndex(props.activeEventID)}
        ref={timelineItemsRef}
        onAnimationEnd={handleAnimationEnd}
      >
        {items.map((item, index) =>
          React.isValidElement(item)
            ? React.cloneElement(item, {
                key: item.key ?? index,
                ...item.props,
                className: [
                  item.props.className || "",
                  props.isTimelineActive &&
                  startIndex <= props.activeEventID &&
                  activeIndex === index
                    ? "active-event"
                    : "",
                ]
                  .join(" ")
                  .trim(),
                style: {
                  ...item.props.style,
                  display:
                    index >= startIndex && index < startIndex + props.showCount
                      ? "block"
                      : "none",
                  opacity:
                    index >= startIndex && index < startIndex + props.showCount
                      ? 1
                      : 0,
                  transform:
                    index >= startIndex && index < startIndex + props.showCount
                      ? "translate(0)"
                      : props.isHorz
                        ? "translateX(200%)"
                        : "translateY(200%)",
                },
              })
            : item,
        )}
      </ul>
      {props.showControls && (
        <button
          className="toggle-timeline toggle-forward"
          onClick={() => handlePaginationClick("next")}
          disabled={startIndex + props.showCount >= totalItems}
          style={{
            cursor:
              startIndex + props.showCount >= totalItems
                ? "not-allowed"
                : "pointer",
          }}
        ></button>
      )}
    </div>
  );
};

// set default props for showControls to true when showControls prop is never set as an attribute
Timeline.defaultProps = {
  showControls: true,
  isStaggered: false,
  centerEvents: false,
  isHorz: false,
  isTimelineActive: false,
  activeEventID: undefined,
};

const TimelineEvent = ({ text, icon = "icon-circle", event, ...rest }) => {
  return (
    <li {...rest}>
      <label className={["timeline-event-icon", icon].join(" ").trim()}></label>
      <span className="timeline-event-thumbnail">{event}</span>
      <small>{text}</small>
    </li>
  );
};

export default Timeline;
export { TimelineEvent };
