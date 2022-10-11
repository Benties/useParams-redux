import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './SingleArticle.css';

const SingleArticle = () => {
  const {id} = useParams()
  const articles = useSelector((state) =>  state.articleState.entries)
  const currArticle = articles.find((article) => article.id === id)
  return (
    <div className='singleArticle'>
      <h1>{currArticle.title}</h1>
      <img
        src={currArticle.imageUrl}
        alt={currArticle.imageUrl}
      />
      <p>
        {currArticle.body}
      </p>
    </div>
  );
};

export default SingleArticle;
