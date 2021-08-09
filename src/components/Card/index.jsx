import React from 'react';
import styles from "./Card.module.scss";
function Card({title, imageUrl, price, onClickAdd, onClickFavourite}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const handleClick = () => {
    onClickAdd({title, imageUrl, price});
    setIsAdded(!isAdded);
  };

  return (
      <div className={styles.card}>
        <div className={styles.favourite} onClick={onClickFavourite}>
          <img src="/img/dislike.svg" alt="dislike" />
        </div>
        <img width={133} height={112} src={imageUrl} alt="Sneakers" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price} руб.</b>
          </div>
            <img className={styles.plus} onClick={handleClick} src={isAdded ? '/img/add.svg' : '/img/plus.svg'} alt="Plus" />
        </div>
      </div>
    );
  }
  
  export default Card;