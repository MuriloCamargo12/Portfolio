'use client'
import { useReveal } from "@/hooks/scroll";
import CardProjetos from "./CardProjetos";

export default function Projetos() {
    const { ref, visible } = useReveal()
    return (
        <section id="projetos"
            ref={ref}
            className={`flex justify-center ${visible
                    ? "animate-fade-up animate-once animate-duration-[2500ms] animate-delay-[5ms] animate-ease-in-out"
                    : "opacity-0"
                }`}
        >
            <div className="md:w-3/4 w-full flex flex-col items-center gap-20">

                <h1 className="text-5xl">Projetos</h1>

                <div className="grid px-1 md:px-0 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-15">
                    <CardProjetos img="/Mineshop.png"
                        nome="MineShop" github="https://github.com/MuriloCamargo12/MineShop" site="https://mine-shop-mu.vercel.app/"
                        desc="Loja virtual completa feita em React e Tailwind CSS. Permite navegar por produtos, adicionar ao carrinho e visualizar detalhes. Projeto focado em Front-End moderno e responsivo." />

                    <CardProjetos img="/cinesearch.png"
                        nome="CineSearch" github="https://github.com/MuriloCamargo12/CineSearch" site="https://cine-search.vercel.app/"
                        desc="Aplicação web para busca de filmes e séries em tempo real, consumindo a API do The Movie Database (TMDB). desenvolvimento Front-end, utilizando Next.js, React e TypeScript"/>

                    <CardProjetos img="/Weather.png"
                        nome="Weather" github="https://github.com/MuriloCamargo12/Weather" site="https://weather-psi-khaki-35.vercel.app/"
                        desc="Weather é um aplicativo de consulta de previsão do tempo feito para praticar consumo de API externa. Desenvolvido em React/Next.js, com interface limpa e responsiva." />

                    <CardProjetos img="/senha.png"
                        nome="Gerador de Senhas" github="https://github.com/MuriloCamargo12/Gerador-Senhas" site="https://gerador-senhas-eta-two.vercel.app/"
                        desc="Projeto que gera senhas aleatórias e indica a força da senha, desenvolvido para praticar lógica de validação e manipulação de strings em JavaScript/React." />

                    <CardProjetos img="/cpf.png"
                        nome="Gerador de CPF" github="https://github.com/MuriloCamargo12/CPF" site="https://murilocamargo12.github.io/CPF/"
                        desc="Projeto simples de front-end que gera CPFs aleatórios e valida a estrutura corretamente, feito para praticar lógica em JavaScript e manipulação de DOM." />

                </div>

            </div>
        </section>
    )
}