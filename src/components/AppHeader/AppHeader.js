import React, { useContext } from 'react';
import appLogo from "../../img/devjobs.png";
import headerBG from "../../img/Triangle.jpg";
import sunIcon from "../../img/sunIcon.png";
import moonIcon from "../../img/moonIcon.png";
import "./AppHeader.scss"
import { ThemeContext } from '../../ThemeProvider';

export const AppHeader = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const switchTheme = ()=>{
        if (darkMode) {
            theme.dispatch({ type: "LIGHTMODE" });
        } else {
            theme.dispatch({ type: "DARKMODE" });
        }
    }
    return (
        <div className={`${darkMode ? "header-dark": "header"}`} style={{ backgroundImage:`url(${headerBG})`}}>
            <img src={appLogo} alt="DevJobs" />
            <div className="form-check form-switch">
                <img src={sunIcon} alt="" />
                <input className="form-check-input" onChange={switchTheme} type="checkbox" id="flexSwitchCheckDefault" checked={darkMode}/>
                <img src={moonIcon} style={{marginTop:"2px"}} alt="" />
            </div>
        </div>
    )
}
