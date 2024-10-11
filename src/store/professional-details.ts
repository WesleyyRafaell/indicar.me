import { IProfessional } from '@/types/page/professional';
import { create } from 'zustand';

interface ProfessionalDetailsStore {
  professional: IProfessional | null;
  setProfessional: (professional: IProfessional) => void;
}

export const useProfessionalDetailsStore = create<ProfessionalDetailsStore>((set) => ({
  professional: null,
  setProfessional: (professional) => set({ professional }),
}));
