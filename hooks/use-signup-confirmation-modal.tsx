import { create } from 'zustand'


interface useSignupConfirmationModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useSignupConfirmationModal = create<useSignupConfirmationModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));