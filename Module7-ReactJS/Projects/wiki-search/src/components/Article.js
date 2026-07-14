import { stripHtml } from '../util';

const Article = ({ article }) => {
  const url = `https://en.wikipedia.org/?curid=${article.pageid}`;
  const title = stripHtml(article.title);
  const snippet = stripHtml(article.snippet);

  return (
    <article>
      <a href={url} title={title}>
        <h2>{title}</h2>
      </a>
      <div className="summary">{snippet}...</div>
    </article>
  );
};

export default Article;
