import React, { useState } from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func
};
Pagination.defaultProps = {
    onPageChange: null
}
function Pagination(){
    const {pagination , onPageChange} = props;
    return (
        <div>

        </div>
    );
};




export default Pagination;
