import { Photographer } from '@/types';
import { create } from 'zustand'


interface usePhotographerModalStore {
  isOpen: boolean;
  photographer: Photographer | null,
  onOpen: (photographer: Photographer) => void;
  onClose: () => void;
}

export const usePhotographerModal = create<usePhotographerModalStore>((set) => ({
  isOpen: false,
  photographer: null,
  onOpen: (photographer) => set({ isOpen: true , photographer }),
  onClose: () => set({ isOpen: false }),
}));