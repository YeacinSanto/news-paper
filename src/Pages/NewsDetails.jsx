import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/Homelayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const[news,setNews] = useState({});
    
    useEffect(()=>{
        const NewsDetails = data.find((singleNews)=>singleNews.id == id);
        setNews(NewsDetails);

    },[data,id])
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 py-10 gap-3'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;