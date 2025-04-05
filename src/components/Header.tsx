import Image from 'next/image'

export default function Header() {
    return (
        <header className="flex justify-center gap-2 p-2 items-center">
            <Image
                src="/robo-chef.png"
                alt="robo-chef"
                width={75}
                height={75}
            />

            <h1 className="font-bold text-2xl">Let me cook</h1>
        </header>
    )
}
