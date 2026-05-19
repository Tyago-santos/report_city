import { create } from "zustand";

interface Modal {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggleOpen: () => void;
}

export const modalStore = create<Modal>((set) => ({
  open: false,
  setOpen: (open: boolean) => set(() => ({ open })),
  toggleOpen: () => set((state) => ({ open: !state.open })),
}));
