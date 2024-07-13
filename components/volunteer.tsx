import { Badge } from "@/components/ui/badge"

export const Volunteer = () => {
    return (
        <section className="py-5">
            <div>
                <span>I would love to share my knowledge if I have free time and opportunity.</span>
                <h1 className="font-bold text-4xl">Volunteering</h1>
            </div>
            <div className="py-2">
                <div className="flex justify-between py-2">
                    <div className="flex space-x-5">
                        <div className="flex mt-1 justify-center pl-4">
                            <a href="https://rumahcreativepreneur.or.id" target="_blank">
                                <img src="/rci.png" alt="Rumah Creativepreneur Indonesia" className="min-w-16 max-w-16 min-h-16 max-h-16"  />
                            </a>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">
                            IT Support Specialist</h2>
                            <p className="text-lg">
                                <a href="https://rumahcreativepreneur.or.id" target="_blank">
                                Rumah Creativepreneur Indonesia 
                                </a>&nbsp;| 2022</p>
                            <ul className="list-disc">
                                <li>
                                    <span>Build profile company website.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                    </div>
                </div>
                <div className="flex justify-between py-2">
                    <div className="flex space-x-5">
                        <div className="flex mt-1 justify-center pl-4">
                            <a href="https://tahungoding.id" target="_blank">
                                <img src="/tahungoding.png" alt="Giza Lab" className="min-w-16 max-w-16 min-h-16 max-h-16" />
                            </a>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Instructor / Mentor</h2>
                            <p className="text-lg">
                                <a href="https://tahungoding.id" target="_blank">
                                    TAHUNGODING
                                </a>&nbsp;| 2019 - 2022</p>
                            <ul className="list-disc">
                                <li>
                                    <span>
                                        Developed an application for the Sumedang Government to monitor traffic, share real-time important information, etc called Sumedang Lebaran Real Time (SLRT) (2022)
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Helping to teach in the iot, front-end developer and back-end developer divisions
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Helps to create materials iot, for the front-end developer and back-end developer divisions
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                    </div>
                </div>
            </div>
        </section>
    );
}