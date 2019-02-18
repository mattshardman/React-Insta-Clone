import React from 'react';

function SearchBar() {
  return (
    <header 
        style={{ 
            boxSizing: 'border-box',
            width: '100%', 
            height: 77,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '0 15%',
            borderBottom: '#eaeaea 1px solid'
        }}
    >
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
        <div style={{ width: 215 }}>
            <input 
                type="text" 
                placeholder="Search"
                style={{ 
                    width: '100%', 
                    fontSize: 14,
                    height: 28, 
                    background: 'rgb(250,250,250)',
                    borderRadius: 2,
                    border: '1px solid #dbdbdb',
                    textAlign: 'center' ,
                    color: '#999',
                }}
            />
        </div>
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            width: '15%' 
        }}>
            <div>
                <i class="far fa-compass" style={{ fontSize: 20, color: '#484848' }}></i>
            </div>
            <div>
                <i class="far fa-heart" style={{ fontSize: 20, color: '#484848' }}></i>
            </div>
            <div>
                <i class="far fa-user" style={{ fontSize: 20, color: '#484848' }}></i>
            </div>
        </div>
    </header>
  );
}

export default SearchBar;
