import Recipes from '@/components/Recipe'
import { pacifico } from './layout'
import Ingredients from '@/components/Ingredients'
export default function Home() {
    return (
        <main className="p-2 flex flex-col gap-4">
            <p className="text-xl font-semibold">
                An AI-powered recipe generator that cooks up with creative
                recipes, with available ingredients.
            </p>
            <div className="flex flex-col gap-4 ingregients">
                <h2 className={`${pacifico.className} text-2xl underline`}>
                    Ingredients
                </h2>

                <Ingredients />
            </div>
            <div className="recipe">
                <h2 className={`${pacifico.className} text-2xl underline`}>
                    Recipes
                </h2>
                <Recipes />
            </div>
        </main>
    )
}
