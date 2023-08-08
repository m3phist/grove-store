'use client';
import { Product } from '@/types';
import Currency from '@/components/ui/currency';
import Button from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import useCart from '@/hooks/use-cart';
import { MouseEventHandler } from 'react';

export const revalidate = 0;

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
        {data.name}
      </h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-row gap-x-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-5 w-5 rounded-full border border-gray-600"
            style={{
              backgroundColor: data?.color?.value,
            }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="flex items-center gap-x-2 text-sm"
        >
          Add To Cart
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Info;
<div>product info</div>;
