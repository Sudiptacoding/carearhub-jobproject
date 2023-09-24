import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import { AiOutlineDollar, AiOutlineMail, AiOutlineCalendar } from 'react-icons/ai';
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import swal from 'sweetalert';
import { addData, getData } from '../../../public/Utiliti/Localstorage';

const JobDetails = () => {
    const location = useLocation()
    const isShowButton = location.hash;
    const data = location.state;
    const navigate = useNavigate()
    const findData = getData();

    const handelApply = () => {
        const findItem = findData.filter(id => id === data.id)
        if (findItem.length) {
            swal("Opps!", "Sorry Alrady Applied !", "error");
            navigate('/')
        } else {
            swal("Good job!", "You Apply successfully !", "success");
            addData(data.id);
            navigate('/appliedjob')
        }
    }
    return (
        <div>
            <div className='bg-url banner'>
                <Header></Header>
                <Outlet></Outlet>
                <div className='flex items-center justify-center py-[140px]'><h1 className='text-[#1A1919] text-[32px] font-extrabold'>Job Details</h1></div>

            </div>
            <div className='py-[130px]'>
                <d1v className='flex items-start justify-center gap-6 xl:px-[300px] lg:px-[100px] flex-col lg:flex-row p-5'>
                    <div className='w-full lg:w-2/3'>
                        <div><span className='text-[#1A1919] text-base font-extrabold'>Job Description : </span><span className='text-[#757575] font-medium'>{data.job_description ? data.job_description : "No Data"}</span></div>
                        <div className='py-6'><span className='text-[#1A1919] text-base font-extrabold'>Job Responsibility : </span><span className='text-[#757575] font-medium'>{data.job_responsibility ? data.job_responsibility : "No Data"}</span></div>
                        <div className='leading-10'><span className='text-[#1A1919] text-base font-extrabold'>Educational Requirements : </span><br /><span className='text-[#757575] font-medium '>{data.educational_requirements ? data.educational_requirements : "No Data"}</span></div>
                        <div className='pt-2 leading-9'><span className='text-[#1A1919] text-base font-extrabold'>Experiences : </span><br /><span className='text-[#757575] font-medium '>{data.experiences ? data.experiences : "No Data"}</span></div>
                    </div>
                    <div className='w-full lg:w-1/3 '>

                        <div className='bg-[#f2f2ff] p-[30px] rounded-lg'><div className='border-b text-[#1A1919] text-xl font-extrabold pb-6'>Job Details</div>
                            <div className='flex items-center gap-2 pt-6 pb-4 text-2xl '><AiOutlineDollar className='text-[#7E90FE]'></AiOutlineDollar><span className='text-[#474747] text-xl font-bold'>Salary :</span><span className='text-[#757575] text-xl font-medium'>{data.salary ? data.salary : "No Data"}</span></div>
                            <div className='flex flex-wrap items-center gap-2 pb-6 text-2xl'><AiOutlineCalendar className='text-[#7E90FE]'></AiOutlineCalendar><span className='text-[#474747] text-xl font-bold'>Job Title : </span><span className='text-[#757575] text-xl font-medium'>{data.job_title ? data.job_title : "No Data"}</span></div>
                            <div className='border-b text-[#1A1919] text-xl font-extrabold pb-6'>Contact Information</div>
                            <div className='flex items-center gap-2 pt-6 pb-4 text-2xl '><BsTelephone className='text-[#7E90FE]'></BsTelephone><span className='text-[#474747] text-xl font-bold'>Phone : </span><span className='text-[#757575] text-xl font-medium'>{data.contact_information.phone ? data.contact_information.phone : "No Data"}</span></div>
                            <div className='flex items-center gap-2 pb-3 text-2xl '><AiOutlineMail className='text-[#7E90FE]'></AiOutlineMail><span className='text-[#474747] text-xl font-bold'>Email : </span><span className='text-[#757575] text-xl font-medium'>{data.contact_information.email ? data.contact_information.email : "No Data"}</span></div>
                            <div className='text-2xl '><CiLocationOn className='inline-block text-[#7E90FE]'></CiLocationOn><span className='text-[#474747] ml-2 text-xl font-bold'>Address : </span><span className='text-[#757575] text-xl font-medium'>{data.contact_information.address ? data.contact_information.address : "No Data"}</span></div></div>

                        {
                            isShowButton !== '#applied' && <div className='mt-6'><button className='w-full bg-custom-gradient' onClick={handelApply}>Apply Now</button></div>
                        }

                    </div>

                </d1v>
            </div>
        </div>
    );
};

export default JobDetails;