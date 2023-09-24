import React from 'react';
import Banner from '../HomeLayout/Banner';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import JobFeature from '../JobFeature/JobFeature';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='xl:px-[300px] lg:px-[50px]'>
                <JobCategoryList></JobCategoryList>
                <JobFeature></JobFeature>
            </div>
        </div>

    );
};

export default Home;