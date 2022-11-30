import React from 'react';

const Logo = () => {
    return (
        <div className='logo'> {/* Les images importées depuis la balise IMG sont accessibles dans "public" */}
            <img src="../../public/logo192.png" alt="logo react" />
            <h3>React</h3>
        </div>
    );
};

export default Logo;