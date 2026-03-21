'use client'
import { useReveal } from "@/hooks/scroll";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Rodape() {
    const { ref, visible } = useReveal()
    return (
        <footer id="rodape" ref={ref} className="pt-60">
            <div className={`border-t border-white/10 shadow-lg flex justify-center items-center
            ${visible
                ? "animate-fade-down animate-once animate-duration-[2500ms] animate-delay-[5ms] animate-ease-in-out"
                : "opacity-0"
                }
        `}>
                <div className="md:w-3/4 w-full px-1 md:px-0 flex flex-col md:flex-row py-10 gap-15 md:justify-between justify-center items-center">
                    <div className="flex flex-col gap-10">
                        <h1 className="text-4xl text-center md:text-start font-semibold">Contato</h1>
                        
                        <div className="flex gap-10 md:justify-start justify-center items-center">
                            <div className="flex gap-2 transition-all duration-300 transform hover:-translate-y-1">
                                <Link className="flex flex-col items-center gap-2 " href={"https://www.linkedin.com/in/murilo-camargo-morais-9b94463b2/"} target="blank"><FaLinkedin className="text-blue-600" size={60} />
                                    Linkedin
                                </Link>
                            </div>

                            <div className="flex gap-2 transition-all duration-300 transform hover:-translate-y-1">
                                <Link className="flex flex-col items-center gap-2" href={"https://github.com/MuriloCamargo12"} target="blank"><FaGithub size={60} />
                                    Github
                                </Link>
                            </div>

                            <div className="flex gap-2 transition-all duration-300 transform hover:-translate-y-1">
                                <a className="flex flex-col items-center gap-2 text-blue-500 underline" href="https://mail.google.com/mail/?view=cm&fs=1&to=murilo.camargo.morais@gmail.com" target="blank"><MdEmail className="text-amber-500" size={60} />
                                    E-mail
                                </a>
                            </div>

                        </div>
                        <div className="flex flex-col gap-2">
                        <p>Todos os direitos reservados - Murilo © {new Date().getFullYear()}</p>
                        </div>

                    </div>
                    <div className="text-4xl font-black bg-linear-to-tr from-blue-600 via-white to-blue-600 bg-clip-text text-transparent">
                        {`</Murilo>`}
                    </div>
                </div>
            </div >
        </footer >
    )
}