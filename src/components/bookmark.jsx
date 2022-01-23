import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, onClick }) => (
    <button onClick={onClick}>
        <i className={`bi ${status ? "bi-bookmark-fill" : "bi-bookmark"}`}></i>
    </button>
);

BookMark.propTypes = {
    status: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};
export default BookMark;
