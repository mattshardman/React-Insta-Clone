import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';

import { 
    Header, 
    LogoSection, 
    LogoImg, 
    SeparatingLine,
    LogoText, 
    RightHandIcons 
} from './searchBarStyles';

const scrollHandler = (scrollHeight) => {
    if (scrollHeight > 100) {
        return true
    }

    if (!scrollHeight) {
        return false
    }
    return false;
}

function SearchBar({ handleSearch, searchTerm, logout }) {
  const [isScrolled, setIsScrolled ] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', () => {
          const scrolled = scrollHandler(window.scrollY);
          setIsScrolled(scrolled);
      });

      return () => window.removeEventListener('scroll', () => scrollHandler());
  });

  return (
    <Header isScrolled={isScrolled}>
        <LogoSection>
            <LogoImg isScrolled={isScrolled}>
                <i 
                    className="fab fa-instagram" 
                    style={{ fontSize: 25 }}
                />
            </LogoImg>
            <SeparatingLine isScrolled={isScrolled} />
            <LogoText isScrolled={isScrolled}>Instagram</LogoText>
        </LogoSection>

        <SearchInput 
            searchTerm={searchTerm}
            handleSearch={handleSearch} 
        />

        <RightHandIcons>
            { ['compass', 'heart'].map(name => 
                <div key={name}>
                    <i 
                        className={`far fa-${name}`}
                        style={{ fontSize: 20, color: '#484848' }}>
                    </i>
                </div>) }  
             <button 
                onClick={logout} 
                style={{ 
                    background: 'none', 
                    border: 'none', 
                    outline: 'none',
                    cursor: 'pointer'
                }}>
                <i 
                    className={`far fa-user`}
                    style={{ fontSize: 20, color: '#484848' }}>
                </i>
            </button> 
        </RightHandIcons>
    </Header>
  );
}

export default SearchBar;
