import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/profile-2.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Jack O'Donnell
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3,200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/profile-1.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Tim Murphy
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>01.01.2024</td>
            <td>$1,800</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/profile-3.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Sam Brown
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>22.12.2023</td>
            <td>$5,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
