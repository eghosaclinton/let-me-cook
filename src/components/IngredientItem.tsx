'use client'
import { Ingredient, useRecipeStore } from '@/store/recipeStore'
import { Trash2 } from 'lucide-react'
import { motion } from 'motion/react'
type Props = {
    ingredient: Ingredient
    index: number
}

export default function IngredientItem({
    ingredient: { name, quantity },
    index,
}: Props) {
    const { setIngredients, ingredients } = useRecipeStore()
    function handleChange(target: HTMLInputElement) {
        const { name, value } = target
        const temp = [...ingredients]
        temp[index] = {
            ...temp[index],
            [name]: value,
        }

        setIngredients(temp)
    }
    function deleteItem() {
        const temp = [...ingredients]
        const newState = temp.filter((ingre) => temp[index].id !== ingre.id)

        setIngredients(newState)
    }
    return (
        <motion.div className="flex justify-between">
            <input
                type="number"
                name="quantity"
                onChange={({ target }) => handleChange(target)}
                value={quantity}
                className="text-bold p-2 w-[15%] rounded"
                placeholder="Quantity"
            />
            <input
                type="text"
                value={name}
                onChange={({ target }) => handleChange(target)}
                name="name"
                className="w-[70%] text-bold p-2 rounded"
                placeholder="Ingredient name rounded"
            />
            <button onClick={deleteItem} className="w-[10%] text-bold roounded">
                <Trash2 color="#f5b96b" width={30} height={30} />
            </button>
        </motion.div>
    )
}
