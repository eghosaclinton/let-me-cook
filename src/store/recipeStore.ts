import { create } from "zustand";

type Ingredient ={
    name: string
    quantity: number
}

type RecipeStore = {
    ingredients: Ingredient [];
    setIngredients: (newState: Ingredient[])=>void
}


export const useRecipeStore = create<RecipeStore>((set)=>({
    ingredients: [],
    setIngredients: (newState)=>set({ingredients: newState})
}))