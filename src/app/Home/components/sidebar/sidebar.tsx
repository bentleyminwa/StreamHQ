import { sidebarData } from "../../../../lib/data";
import "./sidebar.css";

const Sidebar = () => {
  const { general, you, subscriptions } = sidebarData;

  return (
    <section className="sidebar">
      <ul className="general flex-column">
        {general.map((item) => (
          <li key={item.categoryId} className="flex-row">
            <span>{item.icon}</span>
            <p>{item.label}</p>
          </li>
        ))}
      </ul>

      <hr />

      <h4>You</h4>
      <ul className="you flex-column">
        {you.map((item) => (
          <li key={item.categoryId} className="flex-row">
            <span>{item.icon}</span>
            <p>{item.label}</p>
          </li>
        ))}
      </ul>

      <hr />

      <h4>Subscriptions</h4>
      <ul className="subscriptions flex-column">
        {subscriptions.map((item) => (
          <li key={item.categoryId} className="flex-row">
            <span>
              <img src={item.icon} alt="" />
            </span>
            <p>{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
