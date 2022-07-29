import React from 'react';
import Header from '../../components/organisms/header';
import ProductsList from '../../components/organisms/products-list';

export default function Categories({ match }) {
  const { id, name } = match.params;
  return (
    <div>
      <Header title={name} />
      <ProductsList category={id} />
    </div>
  );
}