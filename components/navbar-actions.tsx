'use client';

import { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import Button from './ui/button';
import useCart from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const cart = useCart();
  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex item-center gap-x-4">
      <Button
        onClick={() => router.push('/cart')}
        className="flex items-center rounded-full bg-black px-4 py-2 "
      >
        <ShoppingBag color="white" size={20} />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
