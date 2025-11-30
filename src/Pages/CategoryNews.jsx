import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const {id} = useParams()
    const data = useLoaderData();

    const [categoryNews,setCategoryNews] = useState([]);


    useEffect(()=>{
        if(id=='0'){
            setCategoryNews(data)
            
        }
        else if(id=='1'){
            const filteredNews = data.filter((news)=>news.others.is_today_pick==true)
        setCategoryNews(filteredNews)
        }
        else{
        const filteredNews = data.filter((news)=>news.category_id==id)
        setCategoryNews(filteredNews)
        }
    },[data,id])

    return (
        <div>
            <h2 className='font-bold mb-5'>Category news- {categoryNews.length}</h2>

            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news=> 
                    <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;