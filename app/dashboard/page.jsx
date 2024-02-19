import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";

const data = [
  {
    title: "Total Users",
    number: "5,345",
    percent: "12",
  },
  {
    title: "Total Purchases",
    number: "2,345",
    percent: "22",
  },
  {
    title: "Total Page Views",
    number: "10,774",
    percent: "15",
  },
];

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {data.map((item) => (
            <Card key={item.title} data={item} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
