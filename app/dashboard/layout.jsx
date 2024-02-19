import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import styles from "../ui/dashboard/dashboard.module.css";
import Footer from "../ui/dashboard/footer/footer";
import { auth } from "../auth";

const Layout = async ({ children }) => {
  const { user } = await auth();
  //console.log(session);
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar user={user} />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
