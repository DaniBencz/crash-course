import Link from "next/link";
import styles from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  // a single card on the Home screen
  return (
    <Link href={`/article/${article.id}`} className={styles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
    </Link>
  );
}

export default ArticleItem;
