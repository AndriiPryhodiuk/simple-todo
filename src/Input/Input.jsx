import React from "react";
import "./Input.scss";

export const Input = ({ label, isRequired }) => {
    return (
        <label htmlFor={label}>
            {label}
            <input
                className="input"
                id={label}
                required={isRequired ? true : false}
            />
        </label>
    );
};
