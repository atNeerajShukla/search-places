import React, { useState } from 'react';
import '../App.css';

const Pagination = ({
    limit,
    currentPage,
    totalPages,
    onPageChange,
    onLimitChange,
    resultsPerPage,
    setResultsPerPage
}) => {
    const [fetchLimit, setFetchLimit] = useState(limit);
    const [warning, setWarning] = useState('');
    console.log("limit" + limit, "currentPage" + currentPage, "totalPages" + totalPages);

    const handleLimitChange = (e) => {
        const value = e.target.value;

        if (value === '' || value === '-' || value === '0') {
            setFetchLimit(value);
            setWarning('Enter a limit (max 10), default is 5.');
            onLimitChange(5);
            return;
        }

        const intValue = parseInt(value, 10);

        if (isNaN(intValue) || intValue < 1 || intValue > 10) {
            setWarning('Max limit is 10 records.');
            onLimitChange(5);
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


                {totalPages > 0 && <div >

                    <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                        Previous
                    </button>

                    <span className="pagination-current-page">{currentPage}</span>

                    <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        Next
                    </button>

                </div>}


                <div>
                    <input
                        value={resultsPerPage}
                        type="text"
                        className="fetch-limit-input"
                        placeholder="Results Per Page (Max 10)"
                        onChange={(e) => setResultsPerPage(e.target.value)}
                    />
                </div>

            </div>
        </>
    );
};

export default Pagination;
