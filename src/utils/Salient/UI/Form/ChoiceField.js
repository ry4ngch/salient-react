import React from "react";

/**
 * ChoiceField - card-style checkbox/radio group replicating the showcase
 * `.choice-item` blocks (box + check/radio on the left, label + description on the right).
 *
 * Usage:
 *   <ChoiceField
 *     label="Interests" tag="type=checkbox" multiple
 *     options={[
 *       { value: "web-dev", label: "Web Development", description: "Frontend & backend development" },
 *       { value: "design", label: "UI/UX Design", description: "User interface and experience design" },
 *     ]}
 *     helper="Select all that apply"
 *   />
 *
 * Controlled: pass `value` (array for multiple, single value otherwise) and onChange(newValue).
 * Uncontrolled: omit both; reads defaultChecked via defaultValue.
 */
const ChoiceField = ({
  label,
  tag,
  helper,
  error,
  multiple = false,
  options = [],
  value,
  defaultValue,
  onChange,
  name,
  className,
  disabled = false,
  ...rest
}) => {
  const isControlled = value !== undefined || onChange !== undefined;
  const selected = isControlled
    ? multiple
      ? value || []
      : value
    : defaultValue;

  const isChecked = (option) =>
    multiple
      ? (selected || []).includes(option.value)
      : selected === option.value;

  const handleToggle = (option, e) => {
    if (!isControlled) return; // let the native input handle its own state
    if (multiple) {
      const next = e.target.checked
        ? [...(selected || []), option.value]
        : (selected || []).filter((v) => v !== option.value);
      onChange(next, option);
    } else {
      onChange(option.value, option);
    }
  };

  const fieldId =
    rest.id || (label ? label.replace(/\s+/g, "-").toLowerCase() : undefined);

  return (
    <div
      className={`choice-field ${error ? "has-error" : ""} ${className || ""}`.trim()}
      {...rest}
    >
      {label && (
        <label
          className="choice-field-label"
          id={fieldId ? `${fieldId}-label` : undefined}
        >
          {label}
          {tag && <span className="text-field-tag">{tag}</span>}
        </label>
      )}
      <div
        className="choice-field-group"
        role={multiple ? "group" : "radiogroup"}
        aria-labelledby={fieldId ? `${fieldId}-label` : undefined}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className={`choice-field-item ${isChecked(option) ? "checked" : ""} ${disabled ? "disabled" : ""}`}
            htmlFor={`${fieldId}-${option.value}`}
          >
            <input
              type={multiple ? "checkbox" : "radio"}
              id={`${fieldId}-${option.value}`}
              name={name || fieldId}
              value={option.value}
              checked={isControlled ? isChecked(option) : undefined}
              defaultChecked={!isControlled ? isChecked(option) : undefined}
              onChange={(e) => handleToggle(option, e)}
              disabled={disabled || option.disabled}
            />
            <span className="choice-field-content">
              <span className="choice-field-title">{option.label}</span>
              {option.description && (
                <span className="choice-field-description">
                  {option.description}
                </span>
              )}
            </span>
          </label>
        ))}
      </div>
      {(error || helper) && (
        <p className={`text-field-helper ${error ? "is-error" : ""}`}>
          {error || helper}
        </p>
      )}
    </div>
  );
};

export default ChoiceField;
