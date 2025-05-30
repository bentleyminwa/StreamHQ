import { feedCategories } from "../../../../lib/data";
import "./feed.css";

const Feed = () => {
  return (
    <section className="feed">
      {/* categories */}

      <ul className="flex-row feed-categories">
        {feedCategories.map(({ categoryId, label }) => (
          <li key={categoryId} className="category">
            {label}
          </li>
        ))}
      </ul>

      {/* videos */}
    </section>
  );
};

export default Feed;
