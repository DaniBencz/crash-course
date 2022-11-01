import ArticleItem from "./ArticleItem";
import styles from "../styles/Article.module.css";
import { Article } from "../types";

type Props = { articles: Article[]; };
const ArticleList = ({ articles }: Props) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article}></ArticleItem>
      ))}
    </div>
  );
};

export default ArticleList;
