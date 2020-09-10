import React from 'react';
import './header.css';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

function Header() {
    return (
        <div className='header'>
          <img className="header_icon"
          src="http://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt="Airbnb-logo"/>
          <div className="header_center">
              <input type='text' placeholder="search"/>
              <SearchIcon/>
          </div>
          <div className="header_right">
              <h1>Become a host</h1>
              <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
          </div>
        </div>
    )
}

export default Header
