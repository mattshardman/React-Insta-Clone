import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';

import { 
    Header, 
    LogoSection, 
    LogoImg, 
    LogoText, 
    RightHandIcons 
} from './searchBarStyles';

function SearchBar() {
  const [isScrolled, setIsScrolled ] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // this will probably change for styled components
  useEffect(() => {
    const isMobile = window.innerWidth < 900;
    setIsMobile(isMobile);
      window.addEventListener('resize', () => {
        const isMobile = window.innerWidth < 900;
        setIsMobile(isMobile);
      });

      window.addEventListener('scroll', () => {
          if (window.scrollY > 100) {
            return setIsScrolled(true);
          }

          if (!window.scrollY) {
            return setIsScrolled(false);
          }
      });
  })

  return (
    <Header isMobile={isMobile} isScrolled={isScrolled}>
        <LogoSection>
            <LogoImg>
                <i 
                    className="fab fa-instagram" 
                    style={{ fontSize: 30 }}
                />
            </LogoImg>
            <LogoText isScrolled={isScrolled}>Instagram</LogoText>
        </LogoSection>
        { !isMobile && <SearchInput /> }
        <RightHandIcons>
            { ['compass', 'heart', 'user'].map(name => <div key={name}>
                <i 
                    className={`far fa-${name}`}
                    style={{ fontSize: 20, color: '#484848' }}>
                </i>
            </div>) }   
        </RightHandIcons>
    </Header>
  );
}

export default SearchBar;
