import { create } from 'zustand';

import { Product } from '@/types';

interface PreviewModalStore {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onClose: () => set({ isOpen: false }),
  onOpen: (data: Product) => set({ data, isOpen: true }),
}));

export default usePreviewModal;
