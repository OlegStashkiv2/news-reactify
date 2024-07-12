import React from 'react'
import styles from './categories.module.css'

export const Categories = ({categories, setSelectedCategory,selectedCategory}) => {
  return (sss
    <div className={styles.categories}>
      {categories.map(category => {ssss
        return (
        <button
         onClick= {()=> setSelectedCategory(category) } 
          className={
            selectedCategory === category ? styles.aclive : styles.item
          } 
            key={category}

          >
          console .log ssdds
            {category}cccc
        </button>
        );
    
    })}
    </div>
  );
};

{()=> setSelectedCategory(category)} 