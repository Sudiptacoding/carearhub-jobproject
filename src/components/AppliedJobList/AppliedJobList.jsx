import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { getData, removeCard } from '../../../public/Utiliti/Localstorage';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineDollar } from 'react-icons/ai';

const AppliedJobList = () => {
    const [applyJob, setApplyJob] = useState([]);
    const [duplicate, setDuplicate] = useState([]);


    useEffect(() => {
        fetch('fakedata.js')
            .then(res => res.json())
            .then(data => {
                const storeData = getData()
                let arr = []
                for (const item of storeData) {
                    const match = data.find(p => p.id === item)
                    arr.push(match)
                }
                setDuplicate(arr)
                setApplyJob(arr)
            })
    }, []);

    const handelDelet = (id) => {
        const delet = applyJob.filter(item => item.id !== id)
        setApplyJob(delet)
        removeCard(id)
    }

    const handelClick = (type) => {
        if (type === 'all') {
            setApplyJob(duplicate)
        } else if (type === 'remote') {
            const remote = duplicate.filter(data => data.remote_or_onsite === 'Remote')
            setApplyJob(remote)
        } else if (type === 'onsite') {
            const remote = duplicate.filter(data => data.remote_or_onsite === 'Onsite')
            setApplyJob(remote)
        }
    }


    return (
        <div>
            <div className='bg-url banner'>
                <Header></Header>
                <Outlet></Outlet>
                <div className='flex items-center justify-center py-[140px]'><h1 className='text-[#1A1919] text-[32px] font-extrabold'>Job Details</h1></div>
            </div>
            <div>
                <div className=" lg:px-[300px]">
                    <div className="flex justify-end">
                        <ul className="px-1 menu menu-horizontal">
                            <li>
                                <details>
                                    <summary>
                                        Filter By
                                    </summary>
                                    <ul className="p-2 border">
                                        <li><a onClick={() => handelClick('all')}>All</a></li>
                                        <li><a onClick={() => handelClick('remote')}>Remote</a></li>
                                        <li><a onClick={() => handelClick('onsite')}>Onsite</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
                {
                    (applyJob.length == 0) ? <div className='flex items-center justify-center w-full h-[50vh]'><h1 className='text-2xl font-bold'>No Data Found</h1></div> :
                        <div className=''>

                            {
                                applyJob.map((job, i) => {
                                    return <div key={i}>
                                        <div>
                                            <div className='xl:px-[300px] lg:px-[100px] px-6 mb-6'>
                                                <div className='flex flex-col items-center justify-between p-10 border rounded-lg lg:flex-row '>
                                                    <div><img src={job.logo} alt="" /></div>
                                                    <div>
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
                                                    </div>
                                                    <div className='flex items-start justify-center lg:items-center'>
                                                        <Link to='/jobdetails#applied' state={job}  ><button className='bg-custom-gradient'>View Details</button></Link>
                                                        <button onClick={() => handelDelet(job.id)} className='ml-3 bg-custom-gradient'>Delet</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default AppliedJobList;