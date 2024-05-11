import { create } from 'zustand'


interface useCommentConfirmationModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCommentConfirmationModal = create<useCommentConfirmationModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));