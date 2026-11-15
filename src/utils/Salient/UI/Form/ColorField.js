import React from "react";

/**
 * ColorField - color picker with swatch preview replicating the showcase color input.
 *
 * Usage:
 *   <ColorField label="Brand Color" tag="type=color" helper="Choose your primary color" defaultValue="#2563eb" onChange={...} />
 */
const ColorField = ({
  label,
  tag,
  helper,
  error,
  defaultValue = "#2563eb",
  value,
  onChange,
  className,
  ...rest
}) => {
  const isControlled = value !== undefined || onChange !== undefined;
  const current = isControlled ? value : undefined;

  return (
    <div
      className={`color-field ${error ? "has-error" : ""} ${className || ""}`.trim()}
      {...rest}
    >
      {label && (
        <label className="text-field-title" htmlFor={rest.id}>
          {label}
          {tag && <span className="text-field-tag">{tag}</span>}
        </label>
      )}
      <div className="color-field-input">
        <input
          type="color"
          id={rest.id}
          defaultValue={isControlled ? undefined : defaultValue}
          value={current}
          onChange={onChange}
        />
        <span
          className="color-field-swatch"
          style={{ background: current || defaultValue }}
        />
        <span className="color-field-value">
          {(current || defaultValue).toUpperCase()}
        </span>
      </div>
      {(error || helper) && (
        <p className={`text-field-helper ${error ? "is-error" : ""}`}>
          {error || helper}
        </p>
      )}
    </div>
  );
};

export default ColorField;
