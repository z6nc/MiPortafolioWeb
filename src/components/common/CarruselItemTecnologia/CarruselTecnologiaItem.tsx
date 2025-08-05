import { cn } from "@/lib/utils";
import { ListaTecnologia } from "@/data/tecnologias";
const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/james",
    },
];


interface ItemCarruselProps {
    NombreTecnologia: string;
    LogoTecnologia: string;
    ConocimientoTecnologia: string;
}


export const ItemCarrusel = ({ NombreTecnologia, LogoTecnologia, ConocimientoTecnologia }: ItemCarruselProps) => {
    return (
        <figure
            className={cn(
                "relative h-full w-72 py-7 cursor-pointer overflow-hidden rounded-xl border p-4",
                "bg-fondoOscuro",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <div className="h-16 w-16  overflow-hidden ">
                 <img className="w-full h-full object-contain"  alt={`Logo de ${NombreTecnologia}`} src={LogoTecnologia} />
                </div>
                <div className="flex flex-col">
                    <figcaption className=" font-bold">
                        {NombreTecnologia}
                    </figcaption>
                    <p className="text-sm  dark:text-white/40">{ConocimientoTecnologia}</p>
                </div>
            </div>
        </figure>
    );
};