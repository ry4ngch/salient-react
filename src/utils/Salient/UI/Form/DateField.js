import React from "react";

/**
 * DateField - wraps the native date/time pickers: date, time, datetime-local, month, week.
 * No picker library; native inputs styled to match the field look.
 *
 * Usage:
 *   <DateField type="date" label="Birth Date" tag="type=date" helper="Select your date of birth" min="1900-01-01" max="2025-12-31" onChange={...} />
 *   <DateField type="time" label="Appointment Time" min="09:00" max="18:00" />
 */
const DateField = ({
  type = "date",
  label,
  tag,
  helper,
  error,
  inputPrefix,
  inputSuffix,
  expandFull = false,
  className,
  onChange,
  ...rest
}) => {
  return (
    <div
      className={`text-field-group ${expandFull ? "expand-full" : ""} ${error ? "has-error" : ""} ${className || ""}`.trim()}
    >
      {label && (
        <label className="text-field-title" htmlFor={rest.id}>
          {label}
          {tag && <span className="text-field-tag">{tag}</span>}
        </label>
      )}
      <div className="text-field-input">
        {inputPrefix ? inputPrefix : ""}
        <input type={type} onChange={onChange} {...rest} />
        {inputSuffix ? inputSuffix : ""}
      </div>
      {(error || helper) && (
        <p className={`text-field-helper ${error ? "is-error" : ""}`}>
          {error || helper}
        </p>
      )}
    </div>
  );
};

export default DateField;
