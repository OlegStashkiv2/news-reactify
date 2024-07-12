import React from 'react'
import styles from './categories.module.css'

export const Categories = ({categories, setSelectedCategory,selectedCategory}) => {
  return (
    <div className={styles.categories}>
      {categories.map(category => {
        return (
        <button
         onClick= {()=> setSelectedCategory(category) } 
          className={
            selectedCategory === category ? styles.aclive : styles.item
          } 
            key={category}

          >
            {category}
        </button>
        );
    
    })}
    </div>
  );
};

{()=> setSelectedCategory(category)} 