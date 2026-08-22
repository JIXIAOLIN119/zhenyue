import type { FieldInfo as FieldInfo } from '@zhenyue/dtos'
import { create } from 'zustand'

interface FieldState {
  fields: FieldInfo[]
  loadedProjectId: string | null
  setFields: (fields: FieldInfo[], projectId: string) => void
  updateFields: (fields: FieldInfo[]) => void
}

export const useFieldStore = create<FieldState>((set) => ({
  fields: [],
  loadedProjectId: null,
  setFields: (fields, projectId) =>
    set({
      fields,
      loadedProjectId: projectId,
    }),
  updateFields: (fields) => set({ fields }),
}))
