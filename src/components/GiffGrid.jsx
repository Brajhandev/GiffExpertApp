import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GiffGrid = ({ cat }) => {

const { images, isLoading } = useFetchGifs(cat)


  return (
    <div>
      <h2>{cat}</h2>
      {
        isLoading &&
        <h2>cargando...</h2>
      
      }
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
};

export default GiffGrid;
