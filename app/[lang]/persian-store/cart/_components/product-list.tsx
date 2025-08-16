"use client";

import React, { useState } from 'react';
import { ProductItem } from './product-item';
import { useCartStore } from '@/hooks/use-cart-store';

export const ProductList = () => {
  const { items, removeItem, updateQuantity, total } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);


  console.log(items)
  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate a checkout process
    setTimeout(() => {
      alert('Checkout completed!');
      setIsCheckingOut(false);
    }, 2000);
  };

  return (
    <div>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4 mt-6 container mx-auto">
          {items.map((item) => (
            <ProductItem key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};
