import React from 'react';
import { useAppSelector } from '../hooks/redux';

export function FavoritesPage() {
  const { favorites } = useAppSelector((state) => state.github);
  if (favorites.length === 0) return <p className='text-center'>No items.</p>;
  return (
    <div className='flex justify-center pt-10 mx-auto h-screen'>
      <ul className='list-none'>
        {favorites.map((favorit) => (
          <li key={favorit}>
            <a href={favorit} target='_black'>
              {favorit}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
