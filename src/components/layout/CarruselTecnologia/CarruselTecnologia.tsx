import { Marquee } from "@/components/magicui/marquee";
import { ListaTecnologia } from "@/data/tecnologias";
import {ItemCarrusel} from "@/components/common/CarruselItemTecnologia/CarruselTecnologiaItem";



const firstRow = ListaTecnologia.slice(0, ListaTecnologia.length / 2);
const secondRow = ListaTecnologia.slice(ListaTecnologia.length / 2);


export function CarruselTecnologia() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((tecnoliga) => (
          <ItemCarrusel key={tecnoliga.NombreTecnoliga} NombreTecnologia={tecnoliga.NombreTecnoliga} LogoTecnologia={tecnoliga.LogoTecnologia} ConocimientoTecnologia={tecnoliga.ConocimientoTecnologia} />

        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((tecnoliga) => (
          <ItemCarrusel key={tecnoliga.NombreTecnoliga} NombreTecnologia={tecnoliga.NombreTecnoliga} LogoTecnologia={tecnoliga.LogoTecnologia} ConocimientoTecnologia={tecnoliga.ConocimientoTecnologia} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-transparent"></div>
    </div>
  );
}
