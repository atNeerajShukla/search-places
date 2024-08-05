import React, { useState } from 'react';
import '../App.css';

const Pagination = ({ limit, currentPage, totalPages, onPageChange, onLimitChange }) => {
    console.log(currentPage, totalPages);

    const [fetchLimit, setFetchLimit] = useState(limit);
    const [warning, setWarning] = useState('');

    const handleLimitChange = (e) => {
        const value = e.target.value;

        if (value === '' || value === '-' || value === '0') {
            setFetchLimit(value);
            setWarning('Limit must be a number between 1 and 10');
            return;
        }

        const intValue = parseInt(value, 10);

        if (isNaN(intValue) || intValue < 1 || intValue > 10) {
            setWarning('Limit must be a number between 1 and 10');
        } else {
            setWarning('');
            setFetchLimit(intValue);
            onLimitChange(intValue);
        }
    };

    return (
        <>
            <div className="pagination">
                <div>
                    <input
                        value={fetchLimit}
                        type="text"
                        className="fetch-limit-input"
                        placeholder="Fetch Limit (Max 10)"
                        onChange={(e) => handleLimitChange(e)}
                    />
                    <p >{warning && <span className="warning-text">{warning}</span>}</p>

                </div>


                {totalPages.length > 0 && <div >

                    <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                        Previous
                    </button>

                    <span className="pagination-current-page">{currentPage}</span>

                    <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        Next
                    </button>

                </div>}

            </div>
        </>
    );
};

export default Pagination;
