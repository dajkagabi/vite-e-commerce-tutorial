import React from "react";
import { useFavorites } from "./FavoritesContext";
import "./Favorites.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0)
    return <div className="favorites-empty">No favorites yet.</div>;

  return (
    <div className="favorites-container">
      <h2>Your Favorites</h2>
      <div className="favorites-list">
        {favorites.map((item) => (
          <div className="favorites-card" key={item.id}>
            <img src={item.image} alt={item.name} className="favorites-img" />
            <div className="favorites-info">
              <div className="favorites-name">{item.name}</div>
              <div className="favorites-price">{item.price} $</div>
            </div>
            <button
              className="favorite-btn"
              onClick={() => toggleFavorite(item)}
              aria-label="Remove from favorites"
            >
              <FontAwesomeIcon icon={solidHeart} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;