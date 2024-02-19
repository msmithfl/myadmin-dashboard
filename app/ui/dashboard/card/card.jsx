import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ data }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.number}>{data.number}</span>
        <span className={styles.detail}>
          <span className={styles.positive}>{data.percent}%</span> more than
          previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
