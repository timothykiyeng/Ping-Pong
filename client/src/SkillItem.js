import React from "react";
import { Link } from "react-router-dom";

function SkillItem({ skill, handleUpdateItem, handleFindVideoData }) {
  const {
    id,
    title,
    image,
    category,
    description,
    is_favorite: isFavorite,
  } = skill;

  function handleClick(e) {
    e.preventDefault();

    fetch(`http://localhost:4000/skill_sets/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_favorite: !isFavorite }),
    })
      .then((r) => r.json())
      .then((updatedItem) => handleUpdateItem(updatedItem));
  }

  function handleItemClick() {
    handleFindVideoData(skill);
  }

  const summary = description.substring(0, 50);

  return (
    <div className="skill-item">
      <div>
        <h2 className="skill-card-title">{title}</h2>
        <img src={image} className="skillimage" alt="skill set" />
        <h4 className="skill-card-category">{category}</h4>
        <p className="skill-card-description">{summary}...</p>
      </div>

      <Link exact to="/video" onClick={handleItemClick}>
        <i className="gg-play-button-o"></i>
      </Link>

    </div>
  );
}
export default SkillItem;
