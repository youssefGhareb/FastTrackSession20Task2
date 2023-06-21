import React, { useContext } from 'react';
import "./AppInput.scss";
import { ThemeContext } from '../../ThemeProvider';

export const AppInput = ({ icon, value, onChange }) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className={`${darkMode ? "appInput-dark" : 'appInput'}`}>
            <img src={icon} />
            <input type="text" value={value} onChange={onChange} />
        </div>
    )
}
