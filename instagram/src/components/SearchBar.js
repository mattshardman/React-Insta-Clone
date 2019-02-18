import React, { useState, useEffect } from 'react';

const styleMaker = typing => ({
    header: { 
        boxSizing: 'border-box',
        width: '100%', 
        height: 77,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0 15%',
        borderBottom: '#eaeaea 1px solid'
    },
    headerMob: { 
        boxSizing: 'border-box',
        width: '100%', 
        height: 77,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 5%',
        borderBottom: '#eaeaea 1px solid'
    },
    logoSection: { 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        width: '20%' 
    },
    logoImg: { 
        borderRight: '1px #262626 solid', 
        paddingRight: 10, 
        marginRight: 10 
    },
    logoText: { 
        fontFamily: 'Lobster Two, cursive', 
        fontSize: 25 
    },
    searchBox: { 
        width: 215,
        fontSize: 14,
        height: 28, 
        background: typing ? '#fff' : 'rgb(250,250,250)',
        borderRadius: 2,
        border: '1px solid #dbdbdb',
        textAlign: 'center',
        overflow: 'hidden',
        color: '#999',
        padding: '0 10px'
    },
    searchIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    searchInput: { 
        width: '100%', 
        fontSize: 14,
        height: 28, 
        borderRadius: 2,
        border: 'none',
        textAlign: 'left' ,
        color: '#999',
        outline: 'none'
    },
    closeButton: { 
        background: 'none', 
        border: 'none',
        outline: 'none',
        margin: 0,
        padding: 0
    },
    rightHandIcons: { 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        width: '15%',
        minWidth: 100 
    }
});

function SearchBar() {
  const [typing, setTyping ] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  
  console.log(isMobile);
  const styles = styleMaker(typing);

  useEffect(() => {
      window.addEventListener('resize', () => {
        const isMobile = window.innerWidth < 900;
        setIsMobile(isMobile)
      });
  })

  console.log(isMobile)
  return (
    <header style={isMobile ? styles.headerMob : styles.header}>
        <div style={styles.logoSection}>
            <div style={styles.logoImg}>
                <i className="fab fa-instagram" style={{ fontSize: 30 }}></i>
            </div>
            <div style={styles.logoText}>Instagram</div>
        </div>
        { !isMobile &&
        <div 
            onClick={!typing ? () => setTyping(true) : null}
            onBlur={() => setTyping(false)}
            style={styles.searchBox}>
        
            <div style={styles.searchIcon}>
                <i 
                    className="fas fa-search" 
                    style={{ marginRight: 5, fontSize: 10, marginTop: 1 }}
                >
                </i>
            {!typing ? 
                <p style={{ margin: 0 }}>Search</p>
                :
                <>
                    <input 
                        autoFocus
                        type="text" 
                        placeholder=""
                        style={styles.searchInput}
                    />
                        <button  
                            onClick={() => setTyping(false)}
                            style={styles.closeButton}
                        >
                            <i 
                                className="fas fa-times-circle" 
                                style={{ color: '#484848', marginTop: 3, fontSize: 14 }}
                            >
                            </i>
                        </button>
                </>
                }
            </div>
            
        </div>
        }
        <div style={styles.rightHandIcons}>
            { ['compass', 'heart', 'user'].map(name => <div key={name}>
                <i 
                    className={`far fa-${name}`}
                    style={{ fontSize: 20, color: '#484848' }}>
                </i>
            </div>) }   
        </div>
    </header>
  );
}

export default SearchBar;
