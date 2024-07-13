import { Badge } from "@/components/ui/badge"

export const Organization = () => {
    return (
        <section className="py-5">
            <div>
                <span>Last but not least, Gathering with people with the same interests can expand your network and gain new insights.</span>
                <h1 className="font-bold text-4xl">Organization</h1>
            </div>
            <div className="py-2">
                <div className="flex justify-between py-2">
                    <div className="flex space-x-5">
                        <div className="flex mt-1 justify-center pl-4">
                            <a href="https://tahungoding.id" target="_blank">
                                <img src="/tahungoding.png" alt="TAHUNGODING" className="min-w-16 max-w-16 min-h-16 max-h-16"  />
                            </a>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">
                                <a href="https://tahungoding.id" target="_blank">
                                    TAHUNGODING
                                </a>
                            </h2>
                            <div className="flex items-center space-x-2">
                                <p className="text-lg">Co-Founder, Chairman</p>
                                <p className="text-lg">2019 - 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                    </div>
                </div>
                <div className="flex justify-between py-2">
                    <div className="flex space-x-5">
                        <div className="flex mt-1 justify-center pl-4">
                            <a href="https://stmik-sumedang.ac.id" target="_blank">
                                <img src="/stmik.png" alt="Senat Mahasiswa STMIK Sumedang" className="min-w-16 max-w-16 min-h-16 max-h-16"  />
                            </a>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">
                                <a href="https://stmik-sumedang.ac.id" target="_blank">
                                    Senat Mahasiswa STMIK Sumedang
                                </a>
                            </h2>
                            <div className="flex items-center space-x-2">
                                <p className="text-lg">Member</p>
                                <p className="text-lg">2019 - 2020</p>
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