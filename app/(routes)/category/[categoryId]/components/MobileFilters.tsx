'use client';

import { useState } from 'react';
import { Color, Size } from '@/types';
import Button from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import IconButton from '@/components/ui/icon-button';
import Filter from './Filter';

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button onClick={onOpen} className="flex gap-x-2 items-center lg:hidden">
        Filters <Plus size={20} />
      </Button>
      <Dialog
        onClose={onClose}
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 flex z-40">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} onClick={onClose} />} />
            </div>
            <div className="p-4 ">
              <Filter data={sizes} name="Sizes" valueKey="sizeId" />
              <Filter data={colors} name="Colors" valueKey="colorId" />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
