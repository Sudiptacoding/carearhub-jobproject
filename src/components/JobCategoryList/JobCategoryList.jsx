import React from 'react';

const JobCategoryList = () => {
    return (
        <div className='my-[130px]'>
            <div className='mb-8 text-center'>
                <h1 className='text-[#1A1919] text-5xl font-extrabold mb-4'>Job Category List</h1>
                <p className='text-[#757575] text-base font-medium'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='grid grid-cols-1 gap-6 text-center lg:text-left lg:grid-cols-4 md:grid-cols-2'>

                <div className='p-10'>
                    <div className='flex items-center justify-center lg:justify-start'><img className='w-[40px] h-[40px]' src="https://i.postimg.cc/2589MTP3/accounts.png" alt="" /></div>
                    <div className='mt-8'>
                        <h1 className='text-[#474747] text-xl font-extrabold'>Account & Finance</h1>
                        <p className='text-[#A3A3A3] font-medium'>300 Jobs Available</p>
                    </div>
                </div>

                <div className='p-10'>
                    <div className='flex items-center justify-center lg:justify-start'><img className='w-[40px] h-[40px]' src="https://i.postimg.cc/2589MTP3/accounts.png" alt="" /></div>
                    <div className='mt-8'>
                        <h1 className='text-[#474747] text-xl font-extrabold'>Account & Finance</h1>
                        <p className='text-[#A3A3A3] font-medium'>300 Jobs Available</p>
                    </div>
                </div>

                <div className='p-10'>
                    <div className='flex items-center justify-center lg:justify-start'><img className='w-[40px] h-[40px]' src="https://i.postimg.cc/2589MTP3/accounts.png" alt="" /></div>
                    <div className='mt-8'>
                        <h1 className='text-[#474747] text-xl font-extrabold'>Account & Finance</h1>
                        <p className='text-[#A3A3A3] font-medium'>300 Jobs Available</p>
                    </div>
                </div>

                <div className='p-10'>
                    <div className='flex items-center justify-center lg:justify-start'><img className='w-[40px] h-[40px]' src="https://i.postimg.cc/2589MTP3/accounts.png" alt="" /></div>
                    <div className='mt-8'>
                        <h1 className='text-[#474747] text-xl font-extrabold'>Account & Finance</h1>
                        <p className='text-[#A3A3A3] font-medium'>300 Jobs Available</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default JobCategoryList;