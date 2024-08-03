import React from 'react';
import Card from './Card';

const Cards = ({ models }) => {
  if (!models) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7 xl:gap-8">
      {models.map((model) => (
        <Card key={model.title} {...model} />
      ))}
    </div>
  );
};

export default Cards;