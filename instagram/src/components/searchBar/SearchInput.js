import React, { useState } from 'react';
import { SearchBox, SearchIcon, InputBox, CloseButton} from './searchInputStyles';

function SearchInput({ handleSearch, searchTerm }) {
    const [typing, setTyping] = useState(false);
    return (
        <SearchBox 
            onClick={() => setTyping(true)}
            onBlur={(e) => { 
                setTyping(false);
                handleSearch(e); 
            }}
            typing={typing}
        >
            <SearchIcon>
                <i 
                    className="fas fa-search" 
                    style={{ 
                        marginRight: 5, 
                        fontSize: 10, 
                        marginTop: 1 
                    }}
                />
            {!typing 
                ? 
                <p style={{ margin: 0 }}>Search</p>
                :
                <>
                    <InputBox
                        autoFocus
                        type="text" 
                        placeholder=""
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                        <CloseButton 
                            onClick={(e) => {
                                setTyping(false);
                                handleSearch(e);
                            }}    
                        >
                            <i 
                                className="fas fa-times-circle" 
                                style={{ 
                                    color: '#bfbfbf', 
                                    marginTop: 2, 
                                    fontSize: 14 
                                }}
                            >
                            </i>
                        </CloseButton>
                </>
                }
            </SearchIcon>     
        </SearchBox>
    )
}

export default SearchInput;