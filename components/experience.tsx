import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export const Experience = () => {

    const experiences = [
        {
            company: "Hashmicro",
            company_url: "https://hashmicro.com",
            company_logo: "/hashmicro.png",
            role: "Laravel Developer",
            duration: "2023 - 2025",
            present: true,
            description: [
                "Developed and maintained middleware system between accounting system and banking system like BCA, Permata, CIMB, Mandiri, etc.",
                "Developed and maintained system to integrate carers / job from many client company to job portal website."
            ]
        },
        {
            company: "Gizalab",
            company_url: "https://gizalab.co",
            company_logo: "/gizalab.png",
            role: "Fullstack Developer",
            duration: "2023",
            present: false,
            description: [
                "Developed and maintained learning management system website called Mentify."
            ]
        },
        {
            company: "Diskominfosanditik Kab. Sumedang",
            company_url: "https://sumedangkab.go.id",
            company_logo: "/diskominfo.png",
            role: "Programmer",
            duration: "2021 - 2023",
            present: false,
            description: [
                "Developed and maintained Sumedang official goverment website.",
                "Developed and maintained some feature in super apps E-Office like SIMANJA (Sistem Analisis Jabatan), SIKOMPLIT (Sistem Informasi Kompilasi Inovasi Terintegrasi), etc."
            ]
        },
        {
            company: "NOIU TECH",
            company_url: "https://noiu-tech.com",
            company_logo: "/noiu.png",
            role: "Project Manager",
            duration: "2022 - 2024",
            present: false,
            description: [
                "Developed and maintained portal website event for United in Diversity (2024)",
                "Developed and maintained E-Office United in Diversity with some feature like management employee, leave request, attendance, etc. (2022)"
            ]
        },
        {
            company: "IM Creative Studio",
            company_url: "https://imcreativestudio.com",
            company_logo: "/imcreative.png",
            role: "Fullstack Developer",
            duration: "2022 - 2023",
            present: false,
            description: [
                "Developed and maintained mobile apps SIMPATI JITU (Sistem Pencegahan Stunting Generasi Kedua) with some feature like management health care, management measurement balita (baby), integration with Minister Health (ASIK / SATU SEHAT), etc. (2023)",
                "Developed and maintained company profile website for Rumah Sakit Umum Daerah (RSUD) Kab. Sumedang (2022)",
                "Developed and maintained website for UMKM (Usaha Mikro Kecil Menengah) with some feature like management UMKM, management catalog, geomaps, etc. (2022)"
            ]
        }
    ]

    return (
        <section id="experience" className="py-5">
            <div>
                <span>Here we go to explore my professional</span>
                <h1 className="font-bold text-4xl">Experience</h1>
            </div>
            <div className="py-2">
                {
                    experiences.map((experience, index) => (
                        <div key={index} className="flex justify-between py-2">
                            <div className="flex md:space-x-5">
                                <div className="hidden md:flex mt-1 justify-center pl-4">
                                    <a href={experience.company_url} target="_blank">
                                        <Image width={500} height={500} src={experience.company_logo} alt="Hashmicro" className="min-w-16 max-w-16 min-h-16 max-h-16"  />
                                    </a>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">{experience.role}</h2>
                                    <p className="text-lg">
                                        <a href={experience.company_url} target="_blank">
                                            {experience.company}
                                        </a>&nbsp;| Contract</p>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-lg">{experience.duration}</p>
                                        {
                                            experience.present &&
                                            <Badge variant="outline">Present</Badge>
                                        }
                                    </div>
                                    <ul className="list-disc">
                                        {
                                            experience.description.map((desc, index) => (
                                                <li key={index}>
                                                    <span>{desc}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}