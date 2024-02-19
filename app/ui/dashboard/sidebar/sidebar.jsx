"use client";
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdOutlineMenu,
  MdClose,
} from "react-icons/md";
import { useState } from "react";
import { signOutUser } from "@/app/lib/actions";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/#revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/#reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/#teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/#settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/#help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.topNav}>
        <div className={styles.user}>
          <Image
            className={styles.userImage}
            src={user.img || "/noavatar.png"}
            alt=""
            width="50"
            height="50"
          />
          <div className={styles.userDetail}>
            <span className={styles.username}>{user.username}</span>
            <span className={styles.userTitle}>Administrator</span>
          </div>
        </div>
        <div
          className={styles.mobileMenuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <MdClose /> : <MdOutlineMenu />}
        </div>
      </div>
      <ul
        className={`${styles.list} ${menuOpen && styles.listOpen}`}
        onClick={() => setMenuOpen(false)}
      >
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form action={signOutUser}>
        <button className={`${styles.logout} ${menuOpen && styles.logoutOpen}`}>
          Logout
          <MdLogout />
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
