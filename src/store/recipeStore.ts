import { create } from 'zustand'

export type Ingredient = {
    name: string
    quantity: string
    id: number
}

type RecipeStore = {
    ingredients: Ingredient[]
    setIngredients: (newState: Ingredient[]) => void
}

export const useRecipeStore = create<RecipeStore>((set) => ({
    ingredients: [
        { name: 'eggs', quantity: '2', id: 1 },
        { name: 'salt', quantity: '1', id: 2 },
    ],
    setIngredients: (newState) => set({ ingredients: newState }),
}))
