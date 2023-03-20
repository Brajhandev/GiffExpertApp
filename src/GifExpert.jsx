import React, { useState } from "react";

import { AddCategory } from './components'
import {GiffGrid} from "./components"

const GifExpert = () => {
  const [categories, setcategories] = useState([]);

  const onAddCategory = (value) => {
    if (categories.includes(value)) return;
    setcategories([value, ...categories]);
  };

  return (
    <div>
      <h1>GiffExperttApp</h1>
      <AddCategory onAddCategory={onAddCategory} />
      <div>
        {categories.map((cat) => (
          <GiffGrid cat={cat} key={cat} />
        ))}
      </div>
    </div>
  );
};

export default GifExpert;
