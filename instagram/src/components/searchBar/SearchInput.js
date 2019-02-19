import React, { useState } from 'react';
import { SearchBox, SearchIcon, InputBox, CloseButton} from './searchInputStyles';

function SearchInput({ handleSearch, searchTerm }) {
    const [typing, setTyping] = useState(false);
    return (
        <SearchBox 
            onClick={() => setTyping(true)}
            onBlur={() => setTyping(false)}
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
                        // value={searchTerm}
                        onChange={handleSearch}
                    />
                        <CloseButton 
                            onClick={() => setTyping(false)}    
                        >
                            <i 
                                className="fas fa-times-circle" 
                                style={{ 
                                    color: '#484848', 
                                    marginTop: 3, 
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