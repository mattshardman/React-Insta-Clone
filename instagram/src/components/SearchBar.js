import React, { useState } from 'react';

// import styled from 'styled-components';

// const Header = styled.header`
//     box-sizing: border-box;
//     width: 100%;
//     height: 77px;
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
//     padding: 0 15%;
//     border-bottom: #eaeaea 1px solid;
// `;

const styles = {
    header: { 
        boxSizing: 'border-box',
        width: '100%', 
        height: 77,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0 15%',
        borderBottom: '#eaeaea 1px solid'
    }
}

function SearchBar() {
  const [typing, setTyping ] = useState(false);
  return (
    <header style={styles.header}>
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start', 
            width: '20%' 
        }}>
            <div style={{ borderRight: '1px #262626 solid', paddingRight: 10, marginRight: 10 }}>
                <i className="fab fa-instagram" style={{ fontSize: 30 }}></i>
            </div>
            <div style={{ fontFamily: 'Lobster Two, cursive', fontSize: 25 }}>Instagram</div>
        </div>
        <div 
            onClick={!typing ? () => setTyping(true) : null}
            onBlur={() => setTyping(false)}
            style={{ 
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
        }}>
        
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                
            }}>
                <i className="fas fa-search" style={{ marginRight: 5, fontSize: 10, marginTop: 1 }}></i>
            {!typing ? 
                <p style={{ margin: 0 }}>Search</p>
                :
                <>
                <input 
                    autoFocus
                    type="text" 
                    placeholder=""
                    style={{ 
                        width: '100%', 
                        fontSize: 14,
                        height: 28, 
                        borderRadius: 2,
                        border: 'none',
                        textAlign: 'left' ,
                        color: '#999',
                        outline: 'none'
                    }}
                />
                <button  
                    onClick={() => setTyping(false)}
                    style={{ 
                        background: 'none', 
                        border: 'none',
                        outline: 'none',
                        margin: 0,
                        padding: 0
                    }}>
                        <i className="fas fa-times-circle" style={{ color: '#484848', marginTop: 3, fontSize: 14 }}></i>
                    </button>
                </>
                }
            </div>
            
        </div>
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            width: '15%' 
        }}>
            <div>
                <i 
                    className="far fa-compass" 
                    style={{ fontSize: 20, color: '#484848' }}></i>
            </div>
            <div>
                <i 
                    className="far fa-heart" 
                    style={{ fontSize: 20, color: '#484848' }}>
                </i>
            </div>
            <div>
                <i 
                    className="far fa-user" 
                    style={{ fontSize: 20, color: '#484848' }}>
                </i>
            </div>
        </div>
    </header>
  );
}

export default SearchBar;
