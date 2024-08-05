import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const SearchBox = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const inputRef = useRef(null);

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
        if ((e.ctrlKey || e.metaKey) && e.key === '/') {
            e.preventDefault();
            inputRef.current.focus();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [query]);

    return (
        <div className="search-box-wrapper">
            <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search places..."
                className={`search-box ${isFocused ? 'focused' : ''} ${isDisabled ? 'disabled' : ''}`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                disabled={isDisabled}
            />
            <span className="shortcut-text">ctrl + /</span>
        </div>
    );
};

export default SearchBox;

