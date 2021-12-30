import React from 'react';
import './../styles/styles.css';

const Header = (props)=>{
    return(
        <div className="header" data-testid = "headertest">
            {props.headertitle}
        </div>
    )
}

export default Header;