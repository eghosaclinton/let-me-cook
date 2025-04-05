import Image from 'next/image'
export default function Recipes() {
    return (
        <div className="flex">
            <button className="flex justify-center items-center bg-[#f5b96b] text-[#3d2c2a] font-bold p-2 w-4/5 mx-auto rounded">
                Let me cook!
                <Image src="/Man Cook.svg" alt="robo chef" width={25} height={25} />
            </button>
        </div>
    )
}
