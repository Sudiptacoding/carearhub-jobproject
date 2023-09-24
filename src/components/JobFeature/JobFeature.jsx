import React, { useEffect, useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';



const JobFeature = () => {
    const [data, setData] = useState([])
    const [seeall, setSeeall] = useState(4)
    useEffect(() => {
        fetch('fakedata.js')
            .then((res => res.json()))
            .then(data => setData(data))
    }, []);
    return (
        <div>
            <div className='mb-8 text-center'>
                <h1 className='text-[#1A1919] text-5xl font-extrabold mb-4'>Featured Jobs</h1>
                <p className='text-[#757575] text-base font-medium'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div>
                {
                    data ? <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
                        {
                            data.slice(0, seeall).map(((job, i) => {
                                return <div key={i}>
                                    <div className='p-10 border rounded-lg '>
                                        <img src={job.logo} alt="" />
                                        <h2 className='text-[#474747] text-2xl font-extrabold mt-8'>{job.job_title}</h2>
                                        <p className='text-[#757575] text-xl font-semibold mt-1'>{job.company_name}</p>
                                        <div className='my-4'>
                                            <button className='border-[#7E90FE] border py-[9px] px-[19px] text-[#9873FF] font-extrabold mr-4 rounded'>{job.remote_or_onsite}</button>
                                            <button className='border-[#7E90FE] border py-[9px] px-[19px] text-[#9873FF] font-extrabold rounded'>{job.job_type}</button>
                                        </div>
                                        <div className='flex items-center gap-6 text-[#757575] mb-6'>
                                            <div className='flex items-center gap-2'><CiLocationOn className='w-6 h-6'></CiLocationOn> <span>{job.location}</span>  </div>
                                            <div className='flex items-center gap-2'><AiOutlineDollar className='w-6 h-6'></AiOutlineDollar> <span>Salary : {job.salary}</span></div>
                                        </div>
                                        <Link to='/jobdetails' state={job}><button className='bg-custom-gradient'>View Details</button></Link>
                                    </div>
                                </div>
                            }))
                        }
                    </div> : <div className='flex items-center justify-center w-full h-3/4'><span className="loading loading-spinner loading-lg"></span></div>
                }
            </div>

            {
                seeall === data.length ? '' : <div className='flex items-center justify-center my-10'><button onClick={() => setSeeall(data.length)} className='bg-custom-gradient'>See All Jobs</button></div>
            }

        </div>
    );
};

export default JobFeature;