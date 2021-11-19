import React from 'react';
import news1img from '../../../images/team3.jpg';
import news2img from '../../../images/parts.jpg';
import NewsCard from '../NewsCard/NewsCard';

const latestNews = [
  {
    title: "New shoes Arrivals",
    time: "March 15, 2021",
    discription: "Shoes online at best price in bd. Check full specifications of bdshoes with its ...",
    image: news1img
  },
  {
    title: " New Outlet",
    time: "March 17, 2021",
    discription: "Buy shoes online at best price in BD. Check full specifications of apex shoes with ...",
    image: news2img
  }
]

const News = () => {
  return (
    <section className='news'>
      <div className="container">
        <h1 className="mb-5 text-center">Latest News From Our Blog</h1>
        <div className="row mt-5">
          {
            latestNews.map(news => <NewsCard news={news}></NewsCard>)
          }
        </div>
      </div>
    </section>
  );
};

export default News;