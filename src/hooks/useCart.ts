import { useCallback, useEffect, useState } from 'react';
import { Product } from '../data/types';
import { nanoid } from 'nanoid';

export const useCart = () => {
  const [addedProducts, setAddedProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedProducts = localStorage.getItem('addedProducts');
    const storedTotal = localStorage.getItem('total');

    if (storedProducts) {
      setAddedProducts(JSON.parse(storedProducts));
    }
    if (storedTotal) {
      setTotal(Number(storedTotal));
    }
  }, []);

  useEffect(() => {
    const totalPrice = addedProducts.reduce((acc, product) => {
      const productPrice = Array.isArray(product.price)
        ? product.prices.reduce((sum, price) => sum + price, 0)
        : product.price;
      return acc + productPrice;
    }, 0);

    setTotal(totalPrice);
    localStorage.setItem('total', totalPrice.toString());
  }, [addedProducts]);

  useEffect(() => {
    if (addedProducts.length > 3) {
      const smallestPrice = Math.min(
        ...addedProducts.map(product => {
          if (!product.size) return Infinity;
          const originalPrice = product.prices[product.sizes.indexOf(product.size)];
          return product.price === 0 ? originalPrice : product.price;
        })
      );

      setAddedProducts(prev => {
        let discountApplied = false;
        const updatedProducts = prev.map(product => {
          const originalPrice =
            product.size && product.sizes.includes(product.size)
              ? product.prices[product.sizes.indexOf(product.size)]
              : product.price;
          if (!discountApplied && originalPrice === smallestPrice) {
            discountApplied = true;
            return { ...product, price: 0 };
          }
          if (product.price === 0 && originalPrice !== smallestPrice) {
            return { ...product, price: originalPrice };
          }
          return product;
        });
        localStorage.setItem('addedProducts', JSON.stringify(updatedProducts));
        return updatedProducts;
      });
    } else {
      setAddedProducts(prev => {
        const updatedProducts = prev.map(product => {
          if (product.price === 0) {
            const originalPrice =
              product.size && product.sizes.includes(product.size)
                ? product.prices[product.sizes.indexOf(product.size)]
                : product.price;
            return { ...product, price: originalPrice };
          }
          return product;
        });
        localStorage.setItem('addedProducts', JSON.stringify(updatedProducts));
        return updatedProducts;
      });
    }
  }, [addedProducts.length]);

  const addToCart = useCallback((product: Product) => {
    const productWithInstanceId = { ...product, instanceId: nanoid() };
    setAddedProducts(prev => {
      const updatedProducts = [...prev, productWithInstanceId];
      localStorage.setItem('addedProducts', JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  }, []);;

  return {
    total,
    setTotal,
    addedProducts,
    setAddedProducts,
    addToCart,
  };
};
