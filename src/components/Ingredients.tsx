'use client'
import IngredientItem from './IngredientItem'
import { useRecipeStore } from '@/store/recipeStore'

export default function Ingredients() {
    const { ingredients, setIngredients } = useRecipeStore()
    function addIngredient() {
        const temp = [...ingredients]
        const newItem = {
            name: '',
            quantity: '',
            id: temp.length + 1,
        }

        setIngredients([...temp, newItem])
    }
    return (
        <div className="flex flex-col gap-2">
            {ingredients.map((ingredient, i) => {
                return (
                    <IngredientItem key={i} index={i} ingredient={ingredient} />
                )
            })}
            <button
                onClick={addIngredient}
                className="bg-[#f5b96b] text-[#3d2c2a] font-bold p-2 w-4/5 mx-auto rounded"
            >
                Add ingredient
            </button>
        </div>
    )
}
