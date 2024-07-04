import axios from "axios"
import { useState, useEffect } from "react"
import './News.css'

const News = () => {

    const cateArr = ["business", "entertainment", "general", "health", "science", "sports", "technology"]

    const [newsList, setNewsList] = useState();

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 카테고리 버튼 구현
    const [category, setCategory] = useState("science");


    const getNews = async() => {
        try{
            const apiKey = process.env.REACT_APP_API_KEY; // .env파일의 API_KEY를 가져오는 코드

            const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${apiKey}`);

            // console.log(res.data.articles);
            const articles = res.data.articles;
            setNewsList(res.data.articles);

            // 로딩 실패시
            setIsLoading(false);

        } catch (error) {
            console.error(error)
        }
    }


    // 버튼으로 카테고리 변경 구현
    const handleCategory = (e) => {
        setCategory(e.target.innerText);
    }


    useEffect(() => {
        getNews();
    }, [category]); // [category]가 입력 될 때다가 다시 실행

    if (isLoading) {
        return ( 
            <div>로딩 중...</div>
        )
    }

    return (
        <>
        {
            cateArr.map((category, idx) => (
                <>
                    <button key={idx} onClick={handleCategory}>{category}</button> 
                </>

            ))
        }

        <div className="news-list">
            {newsList.map((article, idx) => (
                <div key={idx} className="news-items">
                    <div className="contain">
                        <div className="thumbnail">
                            <a href={article.url}>
                            <img src={article.urlToImage} alt={article.title}></img>   
                            </a>
                        </div>
                
                        <div className="contents">
                            <h4>{article.title}</h4>
                            {/* <p>{article.description}</p> */}
                        </div>
                    </div>
                        {/* <br/><br/>
                        <hr/> */}
                </div>
            ))}
        </div>
        </>
     );
}
 
export default News;