import React, { useContext, useEffect, useState } from 'react';
import { JobCard } from './JobCard/JobCard';
import "./JobsListing.scss";
import { AppInput } from '../AppInput/AppInput';
import searchIcon from "../../img/searchIcon.png";
import locationIcon from "../../img/location.png";
import { ThemeContext } from '../../ThemeProvider';


export const JobsListing = () => {
    const [jobs, setJobs] = useState([
        {
            "title": "Software Engineer",
            "company_name": "Citadel",
            "location": "  United States   ",
            "via": "via Citadel",
            "description": "At Citadel, Software Engineers are responsible for building the systems that power every aspect of our investment process, from research and analysis to trading, risk management, funding and settlement. Working side by side with investors and quantitative researchers, we use our technical skills to drive critical commercial outcomes. If you’re interested in financial markets and excited by the... prospect of having real impact in a fast-paced environment where everyone is inspired to be their best, we’re excited to meet you.\n\nOur most successful engineers are critical thinkers who know how to dissect the problem as proficiently as they know how to build the solution. While we look for technical acumen, commercial acumen is just as important. That includes the ability to flex, change course, and iterate without always having pre-defined specs.\n\nYOUR OPPORTUNITY:\nFrom system engineers who create next-gen platforms to desk-aligned developers who partner with investment teams to increase efficiency and maximize returns, our engineering opportunities are as varied as they are challenging. If you are selected for an interview, one of our recruiters will be in touch to review the specific roles, teams and regions that best align with your skills, seniority, and experience.\n\nYOUR SKILLS & TALENTS:\n• 6+ years of professional software engineering experience\n• Solid computer science fundamentals\n• Expert level programing skills in at least one of the following: Java, C++, Python\n• Proven track record in software design and development\n• Excellent analysis / problem solving skills\n• Strong communication and teamwork skills\n• Ability to manage multiple tasks in a demanding and dynamic environment\n• Minimum of a Bachelor’s degree in Computer Science or a related STEM discipline\n\nIn accordance with New York City’s Pay Transparency Law, the base salary range for this role is $150,000 to $300,000. Base salary does not include other forms of compensation or benefits",
            "job_highlights": [
                {
                    "title": "Qualifications",
                    "items": [
                        "6+ years of professional software engineering experience",
                        "Solid computer science fundamentals",
                        "Expert level programing skills in at least one of the following: Java, C++, Python",
                        "Proven track record in software design and development",
                        "Excellent analysis / problem solving skills",
                        "Strong communication and teamwork skills",
                        "Ability to manage multiple tasks in a demanding and dynamic environment",
                        "Minimum of a Bachelor’s degree in Computer Science or a related STEM discipline"
                    ]
                },
                {
                    "title": "Benefits",
                    "items": [
                        "Base salary does not include other forms of compensation or benefits"
                    ]
                }
            ],
            "related_links": [
                {
                    "link": "http://www.citadel.com/",
                    "text": "citadel.com"
                },
                {
                    "link": "https://www.google.com/search?q=Citadel&sa=X&ved=0ahUKEwjcos_xr9H_AhVMLFkFHbBnAcgQmJACCNAJ",
                    "text": "See web results for Citadel"
                }
            ],
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGLr2AHanmJ_7bNnFMR6W0LCPbZgHohzeTD-vf&s=0",
            "extensions": [
                "2 days ago",
                "Full-time",
                "Health insurance"
            ],
            "detected_extensions": {
                "posted_at": "2 days ago",
                "schedule_type": "Full-time"
            },
            "job_id": "eyJqb2JfdGl0bGUiOiJTb2Z0d2FyZSBFbmdpbmVlciIsImh0aWRvY2lkIjoiNkttQWZzXzhCazhBQUFBQUFBQUFBQT09IiwiZmMiOiJFdUlCQ3FJQlFVVnpOMnBPVWxSdmRubFpSR2R5VEZKbWVVZHpkRTFoTTNwM2JIb3hMWGRaVVRoSVIyMXZSRkV3ZGxGRWRHVnRSbUUyYjNKb1dsZ3dWa2gxUkZSaGRHNDNZbDlmVkZwSGMxUkJNSE15TUVsV1FYaEdWR3BxZURKWVJqVkNSWFJNVWxGNWNWWm9SRXBHZFZnNVRWbERSbmcyUWpGalZXWm5YM2wyVTFaaVVrWldRbGhFZFRodk5YVnlXV2RPV21NMGFXRlBVak41YkVSdlRVbHBUekF6TmxoUkVoZDJNWFZTV2twNlNFVnplbGsxVG05UWMwMHRSbmRCZHhvaVFVOHRNSEpzTnpSbWFsTjFTVzFpZEZsNVlqUXlSamRGT0ZOcGRXOTJZbTB3UVEiLCJmY3YiOiIzIiwiZmNfaWQiOiJmY18xIiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6Ii5uRmcyZWJ7Zm9udC13ZWlnaHQ6NTAwfS5CaTZEZGN7Zm9udC13ZWlnaHQ6NTAwfUFwcGx5IG9uIENpdGFkZWwiLCJsaW5rIjoiaHR0cHM6Ly93d3cuY2l0YWRlbC5jb20vY2FyZWVycy9kZXRhaWxzL3NvZnR3YXJlLWVuZ2luZWVyLz91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19"
        },
        {
            "title": "Staff Software Engineer, Platforms Infrastructure Engineering",
            "company_name": "Google",
            "location": "  United States   ",
            "via": "via Google Careers",
            "description": "Google's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We're looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale... system design, networking and data storage, security, artificial intelligence, natural language processing, UI design and mobile; the list goes on and is growing every day. As a software engineer, you will work on a specific project critical to Google’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve. We need our engineers to be versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward.\n\nWith your technical expertise you will manage project priorities, deadlines, and deliverables. You will design, develop, test, deploy, maintain, and enhance software solutions.\n\nBehind everything our users see online is the architecture built by the Technical Infrastructure team to keep it running. From developing and maintaining our data centers to building the next generation of Google platforms, we make Google's product portfolio possible. We're proud to be our engineers' engineers and love voiding warranties by taking things apart so we can rebuild them. We keep our networks up and running, ensuring our users have the best and fastest experience possible.\n\nThe US base salary range for this full-time position is $185,000-$283,000 + bonus + equity + benefits. Our salary ranges are determined by role, level, and location. The range displayed on each job posting reflects the minimum and maximum target for new hire salaries for the position across all US locations. Within the range, individual pay is determined by work location and additional factors, including job-related skills, experience, and relevant education or training. Your recruiter can share more about the specific salary range for your preferred location during the hiring process.\n\nPlease note that the compensation details listed in US role postings reflect the base salary only, and do not include bonus, equity, or benefits. Learn more about benefits at Google",
            "job_highlights": [
                {
                    "title": "Responsibilities",
                    "items": [
                        "With your technical expertise you will manage project priorities, deadlines, and deliverables",
                        "You will design, develop, test, deploy, maintain, and enhance software solutions"
                    ]
                },
                {
                    "title": "Benefits",
                    "items": [
                        "The US base salary range for this full-time position is $185,000-$283,000 + bonus + equity + benefits",
                        "Our salary ranges are determined by role, level, and location"
                    ]
                }
            ],
            "related_links": [
                {
                    "link": "http://www.google.com/",
                    "text": "google.com"
                },
                {
                    "link": "https://www.google.com/search?q=Google&sa=X&ved=0ahUKEwjcos_xr9H_AhVMLFkFHbBnAcgQmJACCJEK",
                    "text": "See web results for Google"
                }
            ],
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_POIuBNOEuOLob3qd0dMQ8uPa8wiMThfRtBfa5c&s",
            "extensions": [
                "4 days ago",
                "Full-time",
                "Health insurance"
            ],
            "detected_extensions": {
                "posted_at": "4 days ago",
                "schedule_type": "Full-time"
            },
            "job_id": "eyJqb2JfdGl0bGUiOiJTdGFmZiBTb2Z0d2FyZSBFbmdpbmVlciwgUGxhdGZvcm1zIEluZnJhc3RydWN0dXJlIEVuZ2luZWVyaW5nIiwiaHRpZG9jaWQiOiJqcDVnTnVuSk9oY0FBQUFBQUFBQUFBPT0iLCJmYyI6IkVxSUNDdUlCUVVWek4ycE9VVE41Ylc5SlExaHRPR2huTkhoNU9EZHNRbE5WZVRGUWNVMDRVRTFJTjJSaVprbDVkV1Z0V25kRmIxbENTV2xpUkV0d2JUYzNVMVJZVDA1TVVVaHFRM0pqVVZWR1JuZFpObXRwU0dGVlIwTkVOR0p5YWtvM2JrZ3laV2c1TkZoTVZWZFlaMDQwV0hKWlMycHRVVEowTjBRMVowTlVUM1pFYlcxclVrNU9lVXROWjBWS05uTkhRVlppTmxCR04xOU5PVlUzUkZOWFpFWTVhelJCU2t0Rk4zRmxiREpCUzBaNWExaFZYMDlZWXpsbVdsTlpTVTVuTTJSWFEzaDVXa1prVWtobk9GZHBkamg0TFZrNVkwVlFWVU0yUm5KSFdDMW5VM0ZpUVJJWGRqRjFVbHBLZWtoRmMzcFpOVTV2VUhOTkxVWjNRWGNhSWtGUExUQnliRFJsUWsxcE9HczBOa2t6YlRWWU0wNUVkbFZZY1hCMU5qUTVZbWMiLCJmY3YiOiIzIiwiZmNfaWQiOiJmY18zIiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IG9uIEdvb2dsZSBDYXJlZXJzIiwibGluayI6Imh0dHBzOi8vY2FyZWVycy5nb29nbGUuY29tL2pvYnMvcmVzdWx0cy8xMjkxMjMwNTAxMjI1NTIwMDYtc3RhZmYtc29mdHdhcmUtZW5naW5lZXItcGxhdGZvcm1zLWluZnJhc3RydWN0dXJlLWVuZ2luZWVyaW5nLz9kZWdyZWU9QVNTT0NJQVRFXHUwMDI2ZGVncmVlPUJBQ0hFTE9SU1x1MDAyNmx0Y2xpZFx1MDAyNnBhZ2U9Mlx1MDAyNnNvcnRfYnk9ZGF0ZVx1MDAyNnV0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0="
        },
        {
            "title": "Software Engineer Intern",
            "company_name": "MCKESSON",
            "location": "  Overland Park, KS   ",
            "via": "via McKesson Careers",
            "description": "After being acquired by McKesson Corporation, Rx Savings Solutions now sits alongside CoverMyMeds and, together, we’re working to unlock new opportunities to further improve medication access, affordability and adherence for the patients and members we collectively serve.\n\nCoverMyMeds, part of McKesson Corporation, is a medication access company committed to helping people get the medicine they... need to live healthier lives. To advance our shared mission, we're always looking for smart, talented team members with the same level of dedication and passion to reinvent the way people access medicine, clearing new paths to better health outcomes.\n\nRx Savings Solutions offers an innovative, patented software system that educates and empowers consumers to make the best healthcare choices at the lowest cost. Founded and operated by a team of pharmacists and software engineers, we support a collaborative, cost-saving solution for purchasing prescription drugs.\n\nRx Savings Solutions is seeking a Software Engineer Intern to join our Core Services team. As part of the middleware/backend API team, you will play a crucial role in maintaining and improving the core logic of our flagship software product. This software calculates drug pricing and generates cost-saving opportunities for our members and clients. The intern will assist with software development projects related to building basic APIs, assisting with batch processing, monitoring the health of our application functionality, and more. Join our team and gain valuable experience while contributing to innovative software solutions.\n\nThis role is based out of our Overland Park, KS office. Candidates must be local to the Kansas City area and will work onsite.\n\nResponsibilities:\n• Design, develop, and maintain software components\n• Document software projects that are being developed actively\n• Develop knowledge of the assigned team, technologies, and development processes\n• Participate in code reviews and identify basic issues or deviations from best practices\n• Conduct unit testing and functional testing of the developed service\n• Stay updated with technical knowledge through training and other measures\n• Coordinate with the ETL team to ensure proper migration of data\n• Perform other duties as reasonably requested by management\n\nRequirements:\n• Pursuing an undergraduate degree in Computer Science, Computer Information Systems, or related technical field\n• 0-2 years of experience in designing and developing applications.\n• Strong analytical skills and attention to detail\n• Ability to communicate effectively with stakeholders of different backgrounds and skill levels\n• Demonstrated and effective time management, organizational, prioritization, and planning skills with the ability to successfully handle tasks, projects and priorities in a fast-pace environment\n• Ability to investigate and resolve application functionality issues, providing support and troubleshooting expertise\n• A great attitude with a passion for supporting your team and producing awesome code\n• Willingness and enthusiasm to learn new skills and techniques\n\nIt would be nice if you have…\n• Understanding of MySQL and RDBMS best practices\n• Experience with the Laravel PHP framework\n• Knowledge of version control flow systems (GIT)\n\n#LI-DM1\n\nAt CoverMyMeds, we care about the well-being of the patients and communities we serve, and that starts with caring for our people. That’s why we have a Total Rewards package that includes comprehensive benefits to support physical, mental, and financial well-being. Our Total Rewards offerings serve the different needs of our diverse employee population and ensure they are the healthiest versions of themselves. For more information regarding benefits at CoverMyMeds, please click here.\n\nAs part of Total Rewards, we are proud to offer a competitive compensation package at CoverMyMeds. This is determined by several factors, including performance, experience and skills, equity, regular job market evaluations, and geographical markets. In addition to base pay, other compensation, such as an annual bonus or long-term incentive opportunities may be offered.\n\nOur Base Pay Range for this position\n\n$14.93 - $24.89\n\nCoverMyMeds is an equal opportunity and affirmative action employer. We embrace diversity and are committed to creating an inclusive environment for all employees. Qualified applicants will be considered for employment without regard to race, religion, gender, gender identity, sexual orientation, national origin, age, disability or veteran status.​",
            "job_highlights": [
                {
                    "title": "Qualifications",
                    "items": [
                        "Pursuing an undergraduate degree in Computer Science, Computer Information Systems, or related technical field",
                        "0-2 years of experience in designing and developing applications",
                        "Strong analytical skills and attention to detail",
                        "Ability to communicate effectively with stakeholders of different backgrounds and skill levels",
                        "Demonstrated and effective time management, organizational, prioritization, and planning skills with the ability to successfully handle tasks, projects and priorities in a fast-pace environment",
                        "Ability to investigate and resolve application functionality issues, providing support and troubleshooting expertise",
                        "A great attitude with a passion for supporting your team and producing awesome code",
                        "Willingness and enthusiasm to learn new skills and techniques",
                        "Understanding of MySQL and RDBMS best practices",
                        "Experience with the Laravel PHP framework",
                        "Knowledge of version control flow systems (GIT)"
                    ]
                },
                {
                    "title": "Responsibilities",
                    "items": [
                        "As part of the middleware/backend API team, you will play a crucial role in maintaining and improving the core logic of our flagship software product",
                        "This software calculates drug pricing and generates cost-saving opportunities for our members and clients",
                        "The intern will assist with software development projects related to building basic APIs, assisting with batch processing, monitoring the health of our application functionality, and more",
                        "Design, develop, and maintain software components",
                        "Document software projects that are being developed actively",
                        "Develop knowledge of the assigned team, technologies, and development processes",
                        "Participate in code reviews and identify basic issues or deviations from best practices",
                        "Conduct unit testing and functional testing of the developed service",
                        "Stay updated with technical knowledge through training and other measures",
                        "Coordinate with the ETL team to ensure proper migration of data",
                        "Perform other duties as reasonably requested by management"
                    ]
                },
                {
                    "title": "Benefits",
                    "items": [
                        "As part of Total Rewards, we are proud to offer a competitive compensation package at CoverMyMeds",
                        "In addition to base pay, other compensation, such as an annual bonus or long-term incentive opportunities may be offered",
                        "Our Base Pay Range for this position"
                    ]
                }
            ],
            "related_links": [
                {
                    "link": "http://www.mckesson.com/",
                    "text": "mckesson.com"
                },
                {
                    "link": "https://www.google.com/search?q=MCKESSON&sa=X&ved=0ahUKEwjcos_xr9H_AhVMLFkFHbBnAcgQmJACCNsK",
                    "text": "See web results for MCKESSON"
                }
            ],
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUs_iqepfiLBjF22hvny-Qbk4fIpvz5xsmbtcXu4&s",
            "extensions": [
                "3 days ago",
                "Internship",
                "Health insurance"
            ],
            "detected_extensions": {
                "posted_at": "3 days ago",
                "schedule_type": "Internship"
            },
            "job_id": "eyJqb2JfdGl0bGUiOiJTb2Z0d2FyZSBFbmdpbmVlciBJbnRlcm4iLCJodGlkb2NpZCI6IjJwa2RYNEp0VlEwQUFBQUFBQUFBQUE9PSIsImZjIjoiRW93Q0Nzd0JRVVZ6TjJwT1UwOTZMVEE0Y3prMFIzaEdUMWw1TlY5eFRsVlBhMmczYTNwMGFHaDNXalZUVW0xNVIwbFNkVUl0YkhJemJ6TjFlak5QZW5KM2JHd3dSV2RUTjA1WFZXWXdXSE0zTVVsR2N6RnhaMlJrZGxScVdVWTNUa1F3VXpkWFVIWlphamRhZWpWTllYcGZhMlJ6V1RBeU9Vc3dZM051UkRodlZWOW1RV295VlU5S2VrNTRiM2RpT1ZoQlJXUkNUMDE0TFRZMVRWTndUemwyUmxkR1V6bHNabmxwV0RKNlVGSlVNRGhpWjBaaFduZG9XRjlCYjFNMVdGOWxNaTFwYXpsNGJqaENMVFl3Wkd4UEVoZDJNWFZTV2twNlNFVnplbGsxVG05UWMwMHRSbmRCZHhvaVFVOHRNSEpzTm1ZM1FtUTJSelJXWVhWWU5EWndNbUZNZDA5TlpqZG9abFV4UVEiLCJmY3YiOiIzIiwiZmNfaWQiOiJmY181IiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IG9uIE1jS2Vzc29uIENhcmVlcnMiLCJsaW5rIjoiaHR0cHM6Ly9jYXJlZXJzLm1ja2Vzc29uLmNvbS9lbi9qb2Ivb3ZlcmxhbmQtcGFyay9zb2Z0d2FyZS1lbmdpbmVlci1pbnRlcm4vNzMzLzUwMzk4Mzk0NTYwP3V0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0="
        },
        {
            "title": "Java Software Engineer",
            "company_name": "hackajob",
            "location": " Anywhere ",
            "via": "via LinkedIn",
            "description": "hackajob has partnered with some of the largest global brands and we are looking for Software Engineers on senior and staff levels to join the teams.\n\nThe role: Software Engineer – Java Developer...\n\nLocation: Remote\n\nTech Stack Qualifications:\n• 6+ years of overall experience\n• Experience with Java – AWS - Microservices – scalable systems – CI/CD\n• Experience working on a cross-functional team\n• Test-full development lifecycle\n• Knowledge or ability to release code responsibly\n• Ability to lead tech projects desirable\n• Databases: PostgreSQL (RDS)/ DynamoDB and others\n• Backend: Java (Spring)/ Python/ .NET\n• Frontend: JavaScript (TypeScript)/ Angular/ npm\n\nOffer: basic salary up to $160K + benefits package\n\nIf you're interested in finding out more about this fantastic opportunity, please get your application in and we can arrange a call.\n• This role requires you to be based in the US*\n• Prefers East Coast candidate",
            "job_highlights": [
                {
                    "title": "Qualifications",
                    "items": [
                        "6+ years of overall experience",
                        "Experience with Java – AWS - Microservices – scalable systems – CI/CD",
                        "Experience working on a cross-functional team",
                        "Test-full development lifecycle",
                        "Knowledge or ability to release code responsibly",
                        "Databases: PostgreSQL (RDS)/ DynamoDB and others",
                        "Backend: Java (Spring)/ Python/ .NET",
                        "Frontend: JavaScript (TypeScript)/ Angular/ npm",
                        "Prefers East Coast candidate*"
                    ]
                },
                {
                    "title": "Benefits",
                    "items": [
                        "Offer: basic salary up to $160K + benefits package"
                    ]
                }
            ],
            "related_links": [
                {
                    "link": "http://www.hackajob.co/",
                    "text": "hackajob.co"
                },
                {
                    "link": "https://www.google.com/search?q=hackajob&sa=X&ved=0ahUKEwjcos_xr9H_AhVMLFkFHbBnAcgQmJACCKAL",
                    "text": "See web results for hackajob"
                }
            ],
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpiubFUW7imVu6yrKA5NOPr_oVElUANHxUr1yIsXA&s",
            "extensions": [
                "12 hours ago",
                "Work from home",
                "Full-time"
            ],
            "detected_extensions": {
                "posted_at": "12 hours ago",
                "schedule_type": "Full-time",
                "work_from_home": true
            },
            "job_id": "eyJqb2JfdGl0bGUiOiJKYXZhIFNvZnR3YXJlIEVuZ2luZWVyIiwiaHRpZG9jaWQiOiJ0OWNtYkRONjZuVUFBQUFBQUFBQUFBPT0iLCJmYyI6IkV2Y0JDcmNCUVVWek4ycE9VWEUzTURNd2FISjFNRU5qVERsQlpGUkVSemxyTVVwSGNITXhOVVZ2WnpJMGNIQTJTRzVQTjE5c1VEZFlaSGxFUm1ScU1qRm1MVFZmWlV3MWVHcDVkVlkxZEVwclZrMXhjV05yTUV4c1dEUm1TWGxJVDNoU056QmxPVXRsYlZKS1JXdDJOVUp4ZVROVVVXMXBTMjFXYkZVeVgxZEphM00zTldwTGJDMWZNMHBvU0U4eGNVcFVNMDF2Y2pkT1RqVlNWMDl4WWtsNllYUmZiVGxxU0ZCT2EySmhibHBNUnpCRWFGcFdjMk41U0hCbkVoZDJNWFZTV2twNlNFVnplbGsxVG05UWMwMHRSbmRCZHhvaVFVOHRNSEpzTmpKdE1qSk5abkI0TlhReVJXTnRVRzkxT0VzMU9YVTVMWGRxVVEiLCJmY3YiOiIzIiwiZmNfaWQiOiJmY183IiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IG9uIExpbmtlZEluIiwibGluayI6Imh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9qb2JzL3ZpZXcvamF2YS1zb2Z0d2FyZS1lbmdpbmVlci1hdC1oYWNrYWpvYi0zNjQwMTY5NDk5P3V0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0="
        },
        {
            "title": "Software Development Engineer I",
            "company_name": "Esri",
            "location": "  United States  (+1 other)    ",
            "via": "via Esri",
            "description": "In this position, you will use your Javascript expertise to develop visualization software to understand data where proximity and location matter. Your work will help developer communities re-imagine the capabilities of location-aware software a",
            "job_highlights": [
                {
                    "title": "Responsibilities",
                    "items": [
                        "In this position, you will use your Javascript expertise to develop visualization software to understand data where proximity and location matter"
                    ]
                }
            ],
            "related_links": [
                {
                    "link": "http://www.esri.com/",
                    "text": "esri.com"
                },
                {
                    "link": "https://www.google.com/search?q=Esri&sa=X&ved=0ahUKEwjcos_xr9H_AhVMLFkFHbBnAcgQmJACCNsL",
                    "text": "See web results for Esri"
                }
            ],
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOEqIMg2kLI4o1zWNhrd46b-mU6F4CLmNZbOH0rbM&s",
            "extensions": [
                "Full-time",
                "No degree mentioned"
            ],
            "detected_extensions": {
                "schedule_type": "Full-time"
            },
            "job_id": "eyJqb2JfdGl0bGUiOiJTb2Z0d2FyZSBEZXZlbG9wbWVudCBFbmdpbmVlciBJIiwiaHRpZG9jaWQiOiJVTlFPNnBBSW9DWUFBQUFBQUFBQUFBPT0iLCJmYyI6IkVvd0NDc3dCUVVWek4ycE9VMWxxTFRKYVZGUmZkRnBuYm1KclRFUkNOVlZqZFZCelZqZHpNREpRWjFodGREWTFWa1JPVG05ZmJFVkhkM3AzV1ZoamFUSlBUVEZuU0VwbE4wUTFOWGxJTUVSZk9EQnVSazV5YnpVd1ZYcDJUR2x1WldGblkzZ3RXREZIUTJaclYzZEVTRVpQUzFkS1dpMVhkRmxxY1VvMGQzRk9VbU55ZVdWNVdGVkJjRzlRUTFkRmRtVlpSVTV0VlVsVWVFWXRlbGg2VFdscGVscHpjSGhqZWxKVE9HUnZjWEZLYUVWb1NHWnFTRFpQVm5KWVMyRXlWalE1YmtoTFoxWndTMUU0Y25GeldGbFpFaGQyTVhWU1drcDZTRVZ6ZWxrMVRtOVFjMDB0Um5kQmR4b2lRVTh0TUhKc04zaFRja3htVEMxNmNsSjJjV3hTVTJKbVJHcHlkalpoY3poNlp3IiwiZmN2IjoiMyIsImZjX2lkIjoiZmNfOSIsImFwcGx5X2xpbmsiOnsidGl0bGUiOiJBcHBseSBvbiBFc3JpIiwibGluayI6Imh0dHBzOi8vd3d3LmVzcmkuY29tL2NhcmVlcnMvc29mdHdhcmUtZGV2ZWxvcG1lbnQtZW5naW5lZXItaS0xNzkyMD91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19"
        },
        {
            "title": "Software Engineer III",
            "company_name": "Walmart",
            "location": "  Bentonville, AR   ",
            "via": "via Walmart Careers",
            "description": "What you'll do...\n\nPosition: Software Engineer III\n\nJob Location: 702 SW 8th Street, Bentonville, AR 72716\n\nDuties: Assists in providing guidance to small groups of two to three engineers, including offshore associates, for assigned Engineering projects by providing pertinent documents, directions, examples, and timeline. Provides support to the business by responding to user questions, concerns, and issues (for example, technical feasibility, implementation strategies); researching and identifying needed solutions; determining implementation designs; providing guidance regarding implications of new and enhanced systems; identifying short and long term solutions; and directing users to appropriate contacts for issues outside of associate's domain. Manages small to large-sized complex projects by reviewing project requirements; translating requirements into technical solutions; researching and identifying alternative solutions; determining needed solution based on return on investment... and value add to the business; gathering requested information (for example, design documents, product requirements, wire frames); writing and developing code; conducting unit testing; communicating status and issues to team members and stakeholders; collaborating with project team and cross functional teams; identifying areas of opportunity; interpreting information and identifying a solution; ensuring solution is sustainable across implementation and use; troubleshooting open issues and bug-fixes; and ensuring on-time delivery and hand-offs. Troubleshoots business and production issues by gathering information (for example, issue, impact, criticality, possible root cause); performing root cause analysis to reduce future issues; engaging support teams to assist in the resolution of issues; developing solutions; driving the development of an action plan; performing actions as designated in the plan; interpreting the results to determine further action; and completing online documentation. Participates in the discovery phase of small to medium-sized projects to come up with high level design by partnering with the product management, project management, business, and user experience teams.\n\nMinimum education and experience required: Master’s degree or the equivalent in Computer Science, Information Technology, Engineering, or a related field. Position does not require specific years of experience but requires listed skills.\n\nSkills required: Must have experience with: developing enterprise applications, including the development of event driven applications, web services and database interactions using Microsoft cloud technologies in a SOA-based distributed environment; enhancing or implementing new features using Spring boot, Camel Spring MVC, Spring Security and Cloud, Microsoft Azure and Cross platform development with Java, Junit, Mockito, JPA, and Hibernate; implementing Docker for Containerization and Kubernetes for Orchestration; NoSQL databases such as Cosmos; integrating CI/CD with Looper and Concord; maintaining and improving existing codebases and peer review code changes; testing and maintaining software products to ensure strong functionality and optimization; documenting and demonstrating solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code; supporting, maintaining and documenting product functionality. Employer will accept any amount of professional experience with the required skills.\n\n#LI-DNP #LI-DNI\n\nWal-Mart is an Equal Opportunity Employer",
            "job_highlights": [
                {
                    "items": [
                        "What you'll do...\n\nPosition: Software Engineer III\n\nJob Location: 702 SW 8th Street, Bentonville, AR 72716\n\nDuties: Assists in providing guidance to small groups of two to three engineers, including offshore associates, for assigned Engineering projects by providing pertinent documents, directions, examples, and timeline. Provides support to the business by responding to user questions, concerns, and issues (for example, technical feasibility, implementation strategies); researching and identifying needed solutions; determining implementation designs; providing guidance regarding implications of new and enhanced systems; identifying short and long term solutions; and directing users to appropriate contacts for issues outside of associate's domain. Manages small to large-sized complex projects by reviewing project requirements; translating requirements into technical solutions; researching and identifying alternative solutions; determining needed solution based on return on investment... and value add to the business; gathering requested information (for example, design documents, product requirements, wire frames); writing and developing code; conducting unit testing; communicating status and issues to team members and stakeholders; collaborating with project team and cross functional teams; identifying areas of opportunity; interpreting information and identifying a solution; ensuring solution is sustainable across implementation and use; troubleshooting open issues and bug-fixes; and ensuring on-time delivery and hand-offs. Troubleshoots business and production issues by gathering information (for example, issue, impact, criticality, possible root cause); performing root cause analysis to reduce future issues; engaging support teams to assist in the resolution of issues; developing solutions; driving the development of an action plan; performing actions as designated in the plan; interpreting the results to determine further action; and completing online documentation. Participates in the discovery phase of small to medium-sized projects to come up with high level design by partnering with the product management, project management, business, and user experience teams.\n\nMinimum education and experience required: Master’s degree or the equivalent in Computer Science, Information Technology, Engineering, or a related field. Position does not require specific years of experience but requires listed skills.\n\nSkills required: Must have experience with: developing enterprise applications, including the development of event driven applications, web services and database interactions using Microsoft cloud technologies in a SOA-based distributed environment; enhancing or implementing new features using Spring boot, Camel Spring MVC, Spring Security and Cloud, Microsoft Azure and Cross platform development with Java, Junit, Mockito, JPA, and Hibernate; implementing Docker for Containerization and Kubernetes for Orchestration; NoSQL databases such as Cosmos; integrating CI/CD with Looper and Concord; maintaining and improving existing codebases and peer review code changes; testing and maintaining software products to ensure strong functionality and optimization; documenting and demonstrating solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code; supporting, maintaining and documenting product functionality. Employer will accept any amount of professional experience with the required skills.\n\n#LI-DNP #LI-DNI\n\nWal-Mart is an Equal Opportunity Employer"
                    ]
                }
            ],
            "related_links": [
                {
                    "link": "https://www.walmart.com/",
                    "text": "walmart.com"
                },
                {
                    "link": "https://www.google.com/search?q=Walmart&sa=X&ved=0ahUKEwjcos_xr9H_AhVMLFkFHbBnAcgQmJACCI4M",
                    "text": "See web results for Walmart"
                }
            ],
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM5FvH34ZOATLYnu5r4x6771B-yvvnvALrzttQHGCAW5FqQKRnaG-bXyo&s",
            "extensions": [
                "5 days ago",
                "Full-time"
            ],
            "detected_extensions": {
                "posted_at": "5 days ago",
                "schedule_type": "Full-time"
            },
            "job_id": "eyJqb2JfdGl0bGUiOiJTb2Z0d2FyZSBFbmdpbmVlciBJSUkiLCJodGlkb2NpZCI6InZzbW5pbWJuel8wQUFBQUFBQUFBQUE9PSIsImZjIjoiRXZjQkNyY0JRVVZ6TjJwT1UyNDNTak5HYlZkSWRWUTFRM2syYWxablQwbDFTWGRMZDBoTFIwTjNkMUJ3U1hsS2JVRlNXV0pCWlZOYVZITmhSbEl6VEVsUmRsSnJlR2wzVG05RmNVTkJhRXBXZDBkRE1teHlUbWhvYlRrM2RFaHFRVVJrT1hsM1VreEthRk50VDJOd1dVaGpWVXQxZGxaaVpVNWlaVE0yTW05TmVFMVFjVGx2YTNkSFQyOXNPVUpFUmpNM1UyRkhOMGRZYkVGSU4yWjJUWFJOV1MxalJVZFFXVTVxU2trNU9ERk5TRWt5UzJoVk9WOXhiRU5CRWhkMk1YVlNXa3A2U0VWemVsazFUbTlRYzAwdFJuZEJkeG9pUVU4dE1ISnNOM1o0YlZSdFJEZENkMjFtV21GVVZXTXlWMk5sYVZoc2RqQTNkdyIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzExIiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IG9uIFdhbG1hcnQgQ2FyZWVycyIsImxpbmsiOiJodHRwczovL2NhcmVlcnMud2FsbWFydC5jb20vdXMvam9icy9XRDE1NDIxODQtc29mdHdhcmUtZW5naW5lZXItaWlpP3V0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0="
        },
        {
            "title": "Software Engineer III",
            "company_name": "GO LOCAL INTERACTIVE",
            "location": "  Overland Park, KS   ",
            "via": "via Paycomonline.net",
            "description": "Job Details\n\nJob Location: 8215 W 108TH TERR - OVERLAND PARK, KS...\n\nSalary Range: Undisclosed\n\nDescription\n\nJob Description\n\nAs a Software Engineer III, you provide level two and level three support for websites and web applications, review and test new features prior to release, and act as a content management system administrator to fulfill a variety of requests. As part of the web development team, you will instruct other software engineers in critical development, hosting, and project management skills while working alongside a team of experienced professionals. Your attention to detail, communication skills, and ability to manage time, mentor and adapt are critical to our mission.\n\nJob Expectations\n• Modify, develop, test, and implement code for assigned support requests\n• Participate in quality assurance testing for new features in development\n• Content Management System Administration, including content and setting changes\n• Use project management software and email to communicate regarding support requests\n• Take notes and update documentation where needed\n• Retrieve, analyze, and interpret data\n\nQualifications\n\nJob Qualifications\n• Software Engineer II level experience or equivalent\n• Working knowledge of LAMP development\n• Working knowledge of PHP, HTML, CSS, and JavaScript\n• Strong written and verbal communication skills\n• Ability to prioritize, organize, and multi-task to project and internal meet deadlines\n• Take ownership and pride in personal performance and understand its impact on the company’s success\n• Collaborate in a team environment\n• Must demonstrate ability to manage time while completing multiple project assignments\n• Must demonstrate ability to work on Software Related tasks\n• Must provide critical issue and urgent issue assistance when requested\n\nRequired Experience\n• 2+ years of experience or equivalent with Hosting and DNS\n• 2+ years of experience or equivalent with WordPress or other CMS frameworks\n• Associate Degree in Computer Science or work related equivalent experience\n\nPhysical Requirements:\n• While performing the duties of this job, the employee is regularly required to stand, walk, sit, and talk or hear.\n• The physical demands described here are representative of those that must be met by an employee to successfully perform the essential functions of this job. Reasonable accommodations may be made to enable individuals with disabilities to perform the essential functions.\n\nTravel\n• 0-5%\n\nSchedule\n• Example: Full-time; 8:00-5:00, Monday through Friday\n\nBenefits/Perks:\n• Two (2) medical plan options with BlueCross BlueShield of Kansas City including generous company contribution.\n• Dental, vision, basic/supplemental life insurance, short/long term disability, critical illness, accident insurance.\n• 401k retirement safe harbor plan available including generous company contribution.\n• Fifteen (15) Paid Time Off (PTO) days your first year (hours earned each pay date).\n• Thirteen (13) paid holidays observed annually.\n• Casual dress code.\n• Snacks, coffee and vending available.\n• Company provided laptop.\n• Company events and incentives with an unmatched company culture!\n\nGo Local Interactive is an Equal Opportunity Employer. Qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, protected veteran status, or any other characteristic protected by law.\n\nNeed Assistance? If you require assistance or reasonable accommodation for any part of the application or hiring process, please submit your request by email to careers@golocalinteractive.com. This contact information is for accommodation requests only, and should not be used to inquire about the status of applications",
            "job_highlights": [
                {
                    "title": "Qualifications",
                    "items": [
                        "Software Engineer II level experience or equivalent",
                        "Working knowledge of LAMP development",
                        "Working knowledge of PHP, HTML, CSS, and JavaScript",
                        "Strong written and verbal communication skills",
                        "Ability to prioritize, organize, and multi-task to project and internal meet deadlines",
                        "Take ownership and pride in personal performance and understand its impact on the company’s success",
                        "Collaborate in a team environment",
                        "Must demonstrate ability to manage time while completing multiple project assignments",
                        "Must demonstrate ability to work on Software Related tasks",
                        "Must provide critical issue and urgent issue assistance when requested",
                        "2+ years of experience or equivalent with Hosting and DNS",
                        "2+ years of experience or equivalent with WordPress or other CMS frameworks",
                        "Associate Degree in Computer Science or work related equivalent experience"
                    ]
                },
                {
                    "title": "Responsibilities",
                    "items": [
                        "As a Software Engineer III, you provide level two and level three support for websites and web applications, review and test new features prior to release, and act as a content management system administrator to fulfill a variety of requests",
                        "As part of the web development team, you will instruct other software engineers in critical development, hosting, and project management skills while working alongside a team of experienced professionals",
                        "Your attention to detail, communication skills, and ability to manage time, mentor and adapt are critical to our mission",
                        "Modify, develop, test, and implement code for assigned support requests",
                        "Participate in quality assurance testing for new features in development",
                        "Content Management System Administration, including content and setting changes",
                        "Use project management software and email to communicate regarding support requests",
                        "Take notes and update documentation where needed",
                        "Retrieve, analyze, and interpret data",
                        "The physical demands described here are representative of those that must be met by an employee to successfully perform the essential functions of this job"
                    ]
                },
                {
                    "title": "Benefits",
                    "items": [
                        "Two (2) medical plan options with BlueCross BlueShield of Kansas City including generous company contribution",
                        "Dental, vision, basic/supplemental life insurance, short/long term disability, critical illness, accident insurance",
                        "401k retirement safe harbor plan available including generous company contribution",
                        "Fifteen (15) Paid Time Off (PTO) days your first year (hours earned each pay date)",
                        "Thirteen (13) paid holidays observed annually",
                        "Casual dress code",
                        "Snacks, coffee and vending available",
                        "Company provided laptop",
                        "Company events and incentives with an unmatched company culture!"
                    ]
                }
            ],
            "related_links": [
                {
                    "link": "https://www.google.com/search?q=GO+LOCAL+INTERACTIVE&sa=X&ved=0ahUKEwjcos_xr9H_AhVMLFkFHbBnAcgQmJACCNcM",
                    "text": "See web results for GO LOCAL INTERACTIVE"
                }
            ],
            "extensions": [
                "4 days ago",
                "Full-time",
                "Health insurance",
                "Dental insurance",
                "Paid time off"
            ],
            "detected_extensions": {
                "posted_at": "4 days ago",
                "schedule_type": "Full-time"
            },
            "job_id": "eyJqb2JfdGl0bGUiOiJTb2Z0d2FyZSBFbmdpbmVlciBJSUkiLCJodGlkb2NpZCI6IlQ1LUktWlNyOWJzQUFBQUFBQUFBQUE9PSIsImZjIjoiRXZjQkNyY0JRVVZ6TjJwT1VXSlZNVlUyTVRWSU5IVklWMlJOY2twS1lUWlpSM1pXUzFwWFQxQk1SV2RoVEZGTVVXOXZVWEIwZVVsVVEwcERVMUJSYlMxeVQybGxkREl5VUhsVmFHZ3RObVE1VUVGVmJHMVBSVUpMZVdVeVRscDFTVk16WmxKYVRFazFNWGgyYVZFeGVqSmpURnBPU0VVNFRISjRNR1p0YkdZMWVtcE5aVlZaV0hKWVdrWTJaV05RVEY5d1VYWXdVM1pVVWpZdGF6SnJVR2hGUTBWNU5XTlVPVEYwV2kxWVgxSjNRbEF5ZWtwNVpFdEtUSEpWRWhkMk1YVlNXa3A2U0VWemVsazFUbTlRYzAwdFJuZEJkeG9pUVU4dE1ISnNOa2RXUmkxaU1HNUlkMHRZWVZGSFVrTmFiRkEwZWxOckxWaEdadyIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzEzIiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IG9uIFBheWNvbW9ubGluZS5uZXQiLCJsaW5rIjoiaHR0cHM6Ly93d3cucGF5Y29tb25saW5lLm5ldC92NC9hdHMvd2ViLnBocC9qb2JzL1ZpZXdKb2JEZXRhaWxzP2pvYj0xMDkwODRcdTAwMjZjbGllbnRrZXk9RTZGMjZGNjA1NkY5OEQyODI5QTYyMkUzMTY1MjI3NjVcdTAwMjZ1dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19"
        },
        {
            "title": "Software Engineer (L4) - Android Product Engineering",
            "company_name": "Netflix",
            "location": " Anywhere ",
            "via": "via Startup Jobs",
            "description": "Netflix is the world's leading streaming video service with over 200 million paid memberships in 190+ countries. It's an exciting time to be working on Android at Netflix. Our members in international markets already outnumber our domestic subscriptions by a large margin and we’re only getting started! The Android team sits at the intersection of this global growth, compounded with an... ever-increasing mobile usage for content consumption. We love every minute of the complex engineering and product challenges that come with operating at this scale.\n\nWe proudly ship the Netflix app on Android to millions of members around the world. Our responsibilities include extensive A/B testing on a wide variety of devices by building highly performant and often custom UI experiences. We work on data-driven optimizations at scale in a diverse and sometimes unforgiving device and network ecosystem. We also create foundational client infrastructure elements used as building blocks for A/B tests. We tie it all together with sophisticated operational testing and automation solutions designed to support our high-performance, fast-paced culture of experimentation, autonomy, and ownership.\nAbout the Role\n\n• Build and ship complex product experiences on frequently updated business-critical Android apps\n• Closely partner with product teams and designers to help scope and refine hypotheses-driven data-informed products and experiences\n• Collaborate with partner engineering teams on shared infrastructure\n• Create delightful, scalable, extensible, and highly performant user experiences\n• Deliver high-quality Android client code with effective documentation and automated tests that can be leveraged by other developers on the team\n• Optimizes the performance of our Android apps with complex view hierarchies and states on low-end devices and networks\n\nWhat Sets You Apart\n\n• Clear communicator and effective at developing strong relationships with cross-functional teams\n• Curious about a broad range of new or unfamiliar technologies, our consumer base, and product vision; Comfortable asking questions and seeking knowledge in unfamiliar or ambiguous situations\n• Taking a thoughtful and practical approach to problem-solving that considers tradeoffs and avoids over-engineering\n• Always seeking different perspectives, feedback, and relevant information to continuously grow and improve\n• Fosters an inclusive and collaborative environment\n\nWhy Netflix?\n\n• Work with other high-performing engineers where you will be constantly learning and sharpening your skill set\n• Help evolve the way people watch content online\n• The Netflix culture - Not just a memo, but something we practice daily\n\nAt Netflix, we carefully consider a wide range of compensation factors to determine your personal top of market. We rely on market indicators to determine compensation and consider your specific job, skills, and experience to get it right. These considerations can cause your compensation to vary and will also be dependent on your location.\n\nThe overall market range for roles in this area of Netflix is typically $100,000 - $700,000\n\nThis market range is based on total compensation (vs. only base salary), which is in line with our compensation philosophy. Netflix is a unique culture and environment. Learn more here",
            "job_highlights": [
                {
                    "title": "Qualifications",
                    "items": [
                        "Clear communicator and effective at developing strong relationships with cross-functional teams",
                        "Curious about a broad range of new or unfamiliar technologies, our consumer base, and product vision; Comfortable asking questions and seeking knowledge in unfamiliar or ambiguous situations",
                        "Taking a thoughtful and practical approach to problem-solving that considers tradeoffs and avoids over-engineering",
                        "Always seeking different perspectives, feedback, and relevant information to continuously grow and improve"
                    ]
                },
                {
                    "title": "Responsibilities",
                    "items": [
                        "Build and ship complex product experiences on frequently updated business-critical Android apps",
                        "Closely partner with product teams and designers to help scope and refine hypotheses-driven data-informed products and experiences",
                        "Collaborate with partner engineering teams on shared infrastructure",
                        "Create delightful, scalable, extensible, and highly performant user experiences",
                        "Deliver high-quality Android client code with effective documentation and automated tests that can be leveraged by other developers on the team",
                        "Optimizes the performance of our Android apps with complex view hierarchies and states on low-end devices and networks"
                    ]
                },
                {
                    "title": "Benefits",
                    "items": [
                        "Work with other high-performing engineers where you will be constantly learning and sharpening your skill set",
                        "We rely on market indicators to determine compensation and consider your specific job, skills, and experience to get it right",
                        "The overall market range for roles in this area of Netflix is typically $100,000 - $700,000"
                    ]
                }
            ],
            "related_links": [
                {
                    "link": "https://www.netflix.com/",
                    "text": "netflix.com"
                },
                {
                    "link": "https://www.google.com/search?q=Netflix&sa=X&ved=0ahUKEwjcos_xr9H_AhVMLFkFHbBnAcgQmJACCKEN",
                    "text": "See web results for Netflix"
                }
            ],
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzX6EOFxoA26goJcmK6M4JrvKvR6EkepIkj1kITgA&s",
            "extensions": [
                "3 days ago",
                "Work from home",
                "Full-time",
                "No degree mentioned"
            ],
            "detected_extensions": {
                "posted_at": "3 days ago",
                "schedule_type": "Full-time",
                "work_from_home": true
            },
            "job_id": "eyJqb2JfdGl0bGUiOiJTb2Z0d2FyZSBFbmdpbmVlciAoTDQpIC0gQW5kcm9pZCBQcm9kdWN0IEVuZ2luZWVyaW5nIiwiaHRpZG9jaWQiOiJEVVVqcjBOUjl1c0FBQUFBQUFBQUFBPT0iLCJmYyI6IkVvd0NDc3dCUVVWek4ycE9WRkJ0YW5KcVpWOU9SVUl6Um1SWFRTMWtTVlo1YWxsT1pYTlVZaTFIVERSZlVrRXhlRVpsUWpCV1JsRTBUVlpvV2psWlRqWkVkM0J5ZGtWdVQwMTJZbFUwYW1VeVRFaGlTRE5oYzBWT1RrWjZhVGgwVlZsTGFqWTVZbGhuY1c0NFkySkxlSFpPTW5GYVJEZElUMWRpU2tkclRrOTBiMUo2TlZwcFgyNDNTMEZqU1c1a1lsTTRVVUpKVkRsUlIyaFJOVGc0U0VWRlZIQlBObDg0VEZkVlYzWXlOSGhuY20xSlVVMXVaRWR6TTFsVFpXNHdTMHR1YzI5TFpVUjRjVkJqWTFkV1MxcHlFaGQyTVhWU1drcDZTRVZ6ZWxrMVRtOVFjMDB0Um5kQmR4b2lRVTh0TUhKc05uWk1MVU5NUm5GaFIwVlZhRzVyTm5RMFFXNU1TRTl4WkVWeVVRIiwiZmN2IjoiMyIsImZjX2lkIjoiZmNfMTQiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gU3RhcnR1cCBKb2JzIiwibGluayI6Imh0dHBzOi8vc3RhcnR1cC5qb2JzL3NvZnR3YXJlLWVuZ2luZWVyLWw0LWFuZHJvaWQtcHJvZHVjdC1lbmdpbmVlcmluZy1uZXRmbGl4LTQ1MDg5NTY/dXRtX2NhbXBhaWduPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX3NvdXJjZT1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9tZWRpdW09b3JnYW5pYyJ9fQ=="
        },
        {
            "title": "Senior Software Engineer",
            "company_name": "IntegriShield",
            "via": "via LinkedIn",
            "description": "Job Title: Senior Software Engineer\n\nCompany: IntegriShield...\n\nLocation: Kansas City, Missouri\n\nAbout Us:\n\nIntegriShield is a rapidly growing compliance monitoring software company that specializes in providing cutting-edge solutions to help businesses maintain regulatory compliance. Our innovative software tools enable organizations to streamline their compliance processes, identify potential risks, and ensure adherence to industry standards. As we continue to expand our client base, we are seeking a highly skilled Senior Software Engineer to join our talented team and contribute to our ongoing success.\n\nJob Description:\n\nAs a Senior Software Engineer at [Company Name], you will play a crucial role in developing and maintaining our compliance monitoring software. You will work closely with our cross-functional teams to design, implement, and deploy scalable software solutions that meet the evolving needs of our clients. Your expertise in software development, problem-solving, and technical leadership will be instrumental in driving innovation and delivering high-quality products.\n\nResponsibilities:\n• Collaborate with product managers, software architects, and other stakeholders to define software requirements and translate them into technical specifications.\n• Design, develop, and test robust, scalable, and efficient software solutions using modern programming languages and frameworks.\n• Write clean, maintainable, and well-documented code while adhering to industry best practices and coding standards.\n• Conduct code reviews to ensure code quality, performance, and maintainability.\n• Participate in all phases of the software development lifecycle, including requirements gathering, design, implementation, testing, deployment, and maintenance.\n• Identify and troubleshoot software defects and performance issues, providing timely resolutions and recommendations.\n• Mentor and provide guidance to junior engineers, fostering a collaborative and inclusive work environment.\n• Stay updated with the latest industry trends, technologies, and tools, and apply them to enhance our software offerings.\n\nQualifications:\n• Bachelor's or Master's degree in Computer Science, Software Engineering, or a related field.\n• 5+ years of professional experience in software development, with a focus on back-end or full-stack development.\n• Strong proficiency in one or more programming languages such as Java, Python, C++, or similar.\n• Experience with web application frameworks and technologies (e.g., Spring, Django, Flask) is highly desirable.\n• In-depth knowledge of relational databases and experience with SQL.\n• Familiarity with cloud computing platforms (e.g., AWS, Azure, Google Cloud) and containerization technologies (e.g., Docker, Kubernetes).\n• Solid understanding of software development principles, design patterns, and best practices.\n• Excellent problem-solving skills and a strong attention to detail.\n• Ability to work effectively in a collaborative team environment and independently when needed.\n• Strong communication and interpersonal skills.\n\nPerks and Benefits:\n• Competitive salary commensurate with experience.\n• Comprehensive health, dental, and vision insurance plans.\n• Retirement savings plan with company matching.\n• Flexible working hours and remote work options.\n• Professional development opportunities.\n• Collaborative and inclusive work environment.\n• Opportunity to make a significant impact and contribute to the success of a growing company.\n\nHow to Apply:\n\nTo apply for the position of Senior Software Engineer at IntegriShield, please send your resume, cover letter, and any relevant portfolio or GitHub links to mstevenson@integrishield.com. We thank all applicants for their interest, but only those selected for an interview will be contacted.\n\nIntegriShield is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees",
            "job_highlights": [
                {
                    "title": "Qualifications",
                    "items": [
                        "Bachelor's or Master's degree in Computer Science, Software Engineering, or a related field",
                        "5+ years of professional experience in software development, with a focus on back-end or full-stack development",
                        "Strong proficiency in one or more programming languages such as Java, Python, C++, or similar",
                        "In-depth knowledge of relational databases and experience with SQL",
                        "Familiarity with cloud computing platforms (e.g., AWS, Azure, Google Cloud) and containerization technologies (e.g., Docker, Kubernetes)",
                        "Solid understanding of software development principles, design patterns, and best practices",
                        "Excellent problem-solving skills and a strong attention to detail",
                        "Ability to work effectively in a collaborative team environment and independently when needed",
                        "Strong communication and interpersonal skills"
                    ]
                },
                {
                    "title": "Responsibilities",
                    "items": [
                        "As a Senior Software Engineer at [Company Name], you will play a crucial role in developing and maintaining our compliance monitoring software",
                        "You will work closely with our cross-functional teams to design, implement, and deploy scalable software solutions that meet the evolving needs of our clients",
                        "Your expertise in software development, problem-solving, and technical leadership will be instrumental in driving innovation and delivering high-quality products",
                        "Collaborate with product managers, software architects, and other stakeholders to define software requirements and translate them into technical specifications",
                        "Design, develop, and test robust, scalable, and efficient software solutions using modern programming languages and frameworks",
                        "Write clean, maintainable, and well-documented code while adhering to industry best practices and coding standards",
                        "Conduct code reviews to ensure code quality, performance, and maintainability",
                        "Participate in all phases of the software development lifecycle, including requirements gathering, design, implementation, testing, deployment, and maintenance",
                        "Identify and troubleshoot software defects and performance issues, providing timely resolutions and recommendations",
                        "Mentor and provide guidance to junior engineers, fostering a collaborative and inclusive work environment",
                        "Stay updated with the latest industry trends, technologies, and tools, and apply them to enhance our software offerings"
                    ]
                },
                {
                    "title": "Benefits",
                    "items": [
                        "Competitive salary commensurate with experience",
                        "Comprehensive health, dental, and vision insurance plans",
                        "Retirement savings plan with company matching",
                        "Flexible working hours and remote work options",
                        "Professional development opportunities",
                        "Collaborative and inclusive work environment",
                        "Opportunity to make a significant impact and contribute to the success of a growing company"
                    ]
                }
            ],
            "related_links": [
                {
                    "link": "https://www.google.com/search?q=IntegriShield&sa=X&ved=0ahUKEwjcos_xr9H_AhVMLFkFHbBnAcgQmJACCOsN",
                    "text": "See web results for IntegriShield"
                }
            ],
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5m-9pnVmkJkWOvhdUn0TWLZw9Xmz8xsANqURFPBg&s",
            "extensions": [
                "10 hours ago",
                "Full-time",
                "Health insurance",
                "Dental insurance"
            ],
            "detected_extensions": {
                "posted_at": "10 hours ago",
                "schedule_type": "Full-time"
            },
            "job_id": "eyJqb2JfdGl0bGUiOiJTZW5pb3IgU29mdHdhcmUgRW5naW5lZXIiLCJodGlkb2NpZCI6IndSS2RJMW9LY0U0QUFBQUFBQUFBQUE9PSIsImZjIjoiRXVJQkNxSUJRVVZ6TjJwT1UzUlphQzAzWkZkSGJubEJhM0ZOVUZkVVNVbDFTMTlxTVRWeU5VaGxRVEJqV0U5NU5sUXpiamh5U0dkaVNWSjJlSEpVWDNSWlZXNU1OVzFwYWw5bGNtZGpVR2hSVm5kbWMyc3pZMkZpVVhJNFYwbE1RMk10Um1Ob1RWRTFMV3AwUnpjMVlWSm5NaTEwTlZZeWRVOUVhWEZKTFZRdGFHNURVRlZYUmtKbVdURkNiWEF6T0VSa1oyYzJjSFpPZEZSSlIxcG1lalZOUW01Q1VHMVJFaGQyTVhWU1drcDZTRVZ6ZWxrMVRtOVFjMDB0Um5kQmR4b2lRVTh0TUhKc05HRnBUbmxSYWxKMGVIY3RkbFZSWWs1MVRuWlBVbTR3ZFVWbFp3IiwiZmN2IjoiMyIsImZjX2lkIjoiZmNfMTYiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gTGlua2VkSW4iLCJsaW5rIjoiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2pvYnMvdmlldy9zZW5pb3Itc29mdHdhcmUtZW5naW5lZXItYXQtaW50ZWdyaXNoaWVsZC0zNjM1MTYzNjE1P3V0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0="
        },
        {
            "title": "Software Engineer III, Chrome",
            "company_name": "Google",
            "location": "  United States   ",
            "via": "via Google Careers",
            "description": "Google's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We're looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale... system design, networking and data storage, security, artificial intelligence, natural language processing, UI design and mobile; the list goes on and is growing every day. As a software engineer, you will work on a specific project critical to Google’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve. We need our engineers to be versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward.\n\nWith your technical expertise you will manage project priorities, deadlines, and deliverables. You will design, develop, test, deploy, maintain, and enhance software solutions.\n\nChrome is dedicated to building a better, more open web. We’re focused on making a better browser (on both desktop and mobile) to help users take advantage of all the web has to offer in a safe and secure way.Chrome is available across all major platforms — iOS, Android, Windows, Mac, Linux and Chrome OS. We also built Chrome as an open source project so the entire web ecosystem could benefit from the latest innovations in speed, simplicity and security.\n\nThe US base salary range for this full-time position is $133,000-$194,000 + bonus + equity + benefits. Our salary ranges are determined by role, level, and location. The range displayed on each job posting reflects the minimum and maximum target for new hire salaries for the position across all US locations. Within the range, individual pay is determined by work location and additional factors, including job-related skills, experience, and relevant education or training. Your recruiter can share more about the specific salary range for your preferred location during the hiring process.\n\nPlease note that the compensation details listed in US role postings reflect the base salary only, and do not include bonus, equity, or benefits. Learn more about benefits at Google",
            "job_highlights": [
                {
                    "title": "Responsibilities",
                    "items": [
                        "With your technical expertise you will manage project priorities, deadlines, and deliverables",
                        "You will design, develop, test, deploy, maintain, and enhance software solutions"
                    ]
                },
                {
                    "title": "Benefits",
                    "items": [
                        "The US base salary range for this full-time position is $133,000-$194,000 + bonus + equity + benefits",
                        "Our salary ranges are determined by role, level, and location"
                    ]
                }
            ],
            "related_links": [
                {
                    "link": "http://www.google.com/",
                    "text": "google.com"
                },
                {
                    "link": "https://www.google.com/search?q=Google&sa=X&ved=0ahUKEwjcos_xr9H_AhVMLFkFHbBnAcgQmJACCK0O",
                    "text": "See web results for Google"
                }
            ],
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_POIuBNOEuOLob3qd0dMQ8uPa8wiMThfRtBfa5c&s",
            "extensions": [
                "4 days ago",
                "Full-time",
                "Health insurance"
            ],
            "detected_extensions": {
                "posted_at": "4 days ago",
                "schedule_type": "Full-time"
            },
            "job_id": "eyJqb2JfdGl0bGUiOiJTb2Z0d2FyZSBFbmdpbmVlciBJSUksIENocm9tZSIsImh0aWRvY2lkIjoiV2NEc1FzR2QwQUlBQUFBQUFBQUFBQT09IiwiZmMiOiJFdmNCQ3JjQlFVVnpOMnBPVVMxMVNsWnlaSGQwWkRZMVp6ZFBXbGRxVW5oT2RqbDJVVkZpUXpodGEwbHdWbEJ2YTBrMlNYRlVaMDVXV0UweGRXNXJTME5vZDNkaVNVeGthMjh6VldKSGJFRkllVkJxVjJwTFJIVjRObEZDT0hWRU16aGxjMmhWTkRobFpFVTVWVkUzVW1GNE0wOUVlSFJXWld0M2N5MXpXREpIZUROWGRGRmxWRU15VEhoblZIRm5UbVpyYUU4eVRpMDJjbFV3VkUxQ1JESjFNUzB0WTJjemRsSmpZbEUxU0VKalZWOVJTMGRpZVVnMU5GOXZFaGQyTVhWU1drcDZTRVZ6ZWxrMVRtOVFjMDB0Um5kQmR4b2lRVTh0TUhKc05XbzFWa2hsWmtjek9HMDBXV3QxVDBsS1YzQlFRVU5RWDFWM1VRIiwiZmN2IjoiMyIsImZjX2lkIjoiZmNfMTciLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gR29vZ2xlIENhcmVlcnMiLCJsaW5rIjoiaHR0cHM6Ly9jYXJlZXJzLmdvb2dsZS5jb20vam9icy9yZXN1bHRzLzEwMzM3MDk5NTU2NzMzODE4Mi1zb2Z0d2FyZS1lbmdpbmVlci1paWktY2hyb21lLz9jb21wYW55PUdvb2dsZVx1MDAyNmNvbXBhbnk9WW91VHViZVx1MDAyNmhsPWVuXHUwMDI2aGw9ZW5cdTAwMjZqbG89ZW4tVVNcdTAwMjZsb2NhdGk7K0luZG9uZXNpYVx1MDAyNnBhZ2U9NFx1MDAyNnNvcnRfYnk9ZGF0ZVx1MDAyNnV0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0="
        }
    ]);
    const [search, setSearch] = useState("Software Engineer");
    const [location, setLocation] = useState("");
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://cors-anywhere.herokuapp.com/serpapi.com/search.json?api_key=00d8b572290fc5ebe9c63d5e0ab8f49b37e000378d32365fbd4cafb7640560e1&engine=google_jobs&q=' + search + '&start=' + 0 + "&location=" + location);
            const data = await response.json();
            setJobs(data.jobs_result);
        }
        // fetchData();
    })

    return (
        <>
            <div className={`${darkMode ? "jobs-dark-filterGroup" : "jobs-filterGroup" }`}>
                <div className="container">
                    <div className={`${darkMode ? "row gx-0 align-items-center row-dark" : "row gx-0 align-items-center bg-white"}`}>
                        <div className="col-md-5">
                            <AppInput icon={searchIcon} value={search} onChange={(event) => { setSearch(event.target.value) }} />
                        </div>
                        <div className="col-md-5">
                            <AppInput icon={locationIcon} value={location} onChange={(event) => { setLocation(event.target.value) }} />
                        </div>
                        <div className="col-md-2 px-4">
                            <button className='appBtn-primary'>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${darkMode ? "jobs-dark" : "jobs"}`} >
                <div className="container">
                    <div className="row">
                        {jobs.length > 0 && jobs.map((job) => {
                            return (<div className="col-md-4">
                                <JobCard job={job} />
                            </div>);
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
