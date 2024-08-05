import React from 'react';
import '../App.css';

const Table = ({ query, data, loading, resultsPerPage, currentPage }) => {
    if (loading) return <div className="spinner">Loading...</div>;

    // Calculate the start and end index for the current page
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;

    // Slice the data array for the current page
    const paginatedData = data.slice(startIndex, endIndex);
    console.log(paginatedData);
    return (
        <table className="result-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Place Name</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {query === "" ? (
                    <tr>
                        <td colSpan="3" className="message">Start searching</td>
                    </tr>
                ) : !paginatedData.length ? (
                    <tr>
                        <td colSpan="3" className="message">No result found</td>
                    </tr>
                ) : (
                    paginatedData.map((item, index) => (
                        <tr key={item.id}>
                            <td>{startIndex + index + 1}</td>
                            <td>{item.name}</td>
                            <td className='country-column'>
                                <img
                                    src={`https://flagsapi.com/${item.countryCode}/flat/32.png`}
                                    alt={item.country}
                                />
                                {item.country}
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
};

export default Table;
