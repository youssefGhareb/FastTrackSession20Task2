import React, { useContext } from 'react';
import "./JobCard.scss";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../ThemeProvider';

export const JobCard = ({ job }) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const parentClass = `${darkMode ? 'jobCard-dark' : 'jobCard'}`;
    return (
        <Link to={`job/${job.job_id}`} style={{color:"inherit", textDecoration:"none"}} state={{job: job}}>
            <div className={parentClass}>
                <div className={parentClass+"-floatingImg"}>
                    <img src={job.thumbnail} />
                </div>
                <div className={parentClass+"-scheduleGroup"}>
                    {Array.isArray(job.extensions) && job.extensions.length > 0 && job.extensions.map((extension) => <span>{extension}</span>)}
                </div>
                <h3 className={parentClass+'-title'}>{job.title}</h3>
                <div className={parentClass+"-company"}>
                    {job.company_name}
                </div>
                <div className={parentClass+"-location"}>
                    {job.location ? job.location : "Not specified"}
                </div>
            </div>
        </Link>
    )
}
