import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { AppHeader } from "../AppHeader/AppHeader"
import "./Job.scss"
import { ThemeContext } from '../../ThemeProvider'

export const Job = () => {
    const [job, setJob] = useState({});
    const { id } = useParams();
    const location = useLocation();

    useEffect(() => {
        setJob(location.state.job);
    }, [location.state.job]);

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const parentClass = `${darkMode ? 'job-dark' : 'job'}`;
    return (
        <div className={`${darkMode ? "dark-body" : "light-body"}`}>
            <AppHeader />
            <div className="container">
                {job ? <div className={parentClass}>
                    <div className={parentClass+"-company"}>
                        <div className="row align-items-center">
                            <div className="col-md-2">
                                <div className={parentClass+"-company-imgCont"}>
                                    <img src={job.thumbnail} alt={job.company_name} />
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className={parentClass+"-company-info d-flex justify-content-between align-items-center"}>
                                    <div className={parentClass+"-company-info-name"}>
                                        <h2>{job.company_name}</h2>
                                        {Array.isArray(job.related_links) && <span>{job.related_links[0].text}</span>}
                                    </div>
                                    {Array.isArray(job.related_links) && <div className={parentClass+"-company-info-link"}>
                                        <a className="appBtn-secondary" href={job.related_links[0].link}>
                                            Company Site
                                        </a>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={parentClass+"-details"}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <div className={parentClass+"-details-scheduleGroup"}>
                                    {Array.isArray(job.extensions) && job.extensions.length > 0 && job.extensions.map((extension) => <span>{extension}</span>)}
                                </div>
                                <h1 className={parentClass+'-details-title'}>{job.title}</h1>
                                <div className={parentClass+"-details-location"}>
                                    {job.location ? job.location : "Location not specified"}
                                </div>
                            </div>
                            {Array.isArray(job.related_links) && <a href={job.related_links[0].link} className='appBtn-primary'>Apply Now</a>}
                        </div>
                        <p className="job-details-body">
                            {job.description}
                        </p>
                    </div>
                </div> : <></>}
            </div>
            <div className={parentClass+"-footer"}>
                <div className="container">
                    <div className={parentClass+"-footer-wrapper d-flex justify-content-between"}>
                        <div>
                            <h3>{job.title}</h3>
                            <span>{job.company_name}</span>
                        </div>
                        {Array.isArray(job.related_links) && <a href={job.related_links[0].link} className='appBtn-primary'>Apply Now</a> }
                    </div>
                </div>
            </div>
        </div>
    )
}
