import { Badge } from "@/components/ui/badge"

export const Education = () => {
    return (
        <section id="education" className="py-5">
            <div>
                <span>Here i start to learn.</span>
                <h1 className="font-bold text-4xl">Education</h1>
            </div>
            <div className="py-2">
                <div className="flex justify-between py-2">
                    <div className="flex space-x-5">
                        <div className="flex mt-1 justify-center pl-4">
                            <a href="https://unsap.ac.id" target="_blank">
                                <img src="/unsap.png" alt="Universitas Sebelas April" className="min-w-16 max-w-16 min-h-16 max-h-16"  />
                            </a>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">
                                <a href="https://unsap.ac.id" target="_blank">
                                    Universitas Sebelas April
                                </a>
                            </h2>
                            <div className="flex items-center space-x-2">
                                <p className="text-lg">Bachelor's degree, Informatics Engineering</p>
                                <p className="text-lg">2018 - 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                    </div>
                </div>
                <div className="flex justify-between py-2">
                    <div className="flex space-x-5">
                        <div className="flex mt-1 justify-center pl-4">
                            <img src="/nesas.png" alt="SMKN 1 Sumedang" className="min-w-16 max-w-16 min-h-16 max-h-16 object-contain" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">SMKN 1 Sumedang</h2>
                            <div className="flex items-center space-x-2">
                                <p className="text-lg">Software Engineering</p>
                                <p className="text-lg">2015 - 2018</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                    </div>
                </div>
            </div>
        </section>
    );
}