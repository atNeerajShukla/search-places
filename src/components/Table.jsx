import React from 'react';
import '../App.css';

const Table = ({ data, loading }) => {
    if (loading) return <div className="spinner">Loading...</div>;

    if (!data.length) return <div className="no-result">No result found</div>;

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
                {data.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td className='country-column'>
                            <img
                                src={`https://flagsapi.com/${item.countryCode}/flat/32.png`}
                                alt={item.country}
                            />
                            {item.country}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
