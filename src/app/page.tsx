import Cabecalho from "@/components/Cabecalho";
import Inicio from "@/components/Inicio";
import Projetos from "@/components/Projetos";
import Rodape from "@/components/Rodape";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-background " id="home">
        <Cabecalho/>
        <Inicio/>
        <Projetos/>
        <Sobre/>
        <Rodape/>
    </div>
  );
}
