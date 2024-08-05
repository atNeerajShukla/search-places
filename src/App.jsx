import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import Table from './components/Table';
import Pagination from './components/Pagination';
import { useDebounce } from './hooks/useDebounce';
import { useFetch } from './hooks/useFetch';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(3);
  const debouncedQuery = useDebounce(query, 500);
  const { data, loading } = useFetch(debouncedQuery, limit, offset);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setOffset(0); // Reset offset on new search
  };

  const handlePageChange = (newPage) => {
    setOffset((newPage - 1) * limit);
  };

  const handleLimitChange = (newLimit) => {
    const validLimit = Math.min(10, Math.max(1, Number(newLimit)));
    setLimit(validLimit);
  };

  return (
    <div className="app">
      <SearchBox onSearch={handleSearch} />
      <Table data={data} loading={loading} />
      <Pagination
        limit={limit}
        currentPage={offset / limit + 1}
        totalPages={Math.ceil(data.length / limit)}
        onPageChange={handlePageChange}
        onLimitChange={handleLimitChange}
      />
    </div>
  );
};

export default App;
