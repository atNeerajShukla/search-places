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
  const { data, loading } = useFetch(debouncedQuery, limit);

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
      <Table query={query} data={data} loading={loading} currentPage={offset / limit + 1} resultsPerPage={resultsPerPage} />
      <Pagination
        limit={limit}
        onLimitChange={handleLimitChange}
        currentPage={offset / limit + 1}
        totalPages={Math.ceil(data.length / resultsPerPage)}
        resultsPerPage={resultsPerPage}
        setResultsPerPage={setResultsPerPage}
        onPageChange={handlePageChange}
      />
      <hr />
      <ul>
        <li>
          Note to ensure efficient use of the API, please be aware that searching with the same input consecutively won't work. Each search must be different from the previous one. If you enter the same query as before, the search will not work. Remember to change your input for each new search to get results. <br />
        </li>
        <li>
          Flag loading may sometimes take time due to internet issues in the 3rd Country column.
        </li>
      </ul>

    </div>
  );
};

export default App;
