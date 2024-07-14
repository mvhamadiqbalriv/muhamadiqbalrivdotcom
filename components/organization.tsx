import Image from 'next/image';

export const Organization = () => {

    const organizations = [
        {
            name: "TAHUNGODING",
            position: "Co-Founder, Chairman",
            year: "2019 - 2021",
            link: "https://tahungoding.id",
            logo: "/tahungoding.png"
        },
        {
            name: "Senat Mahasiswa STMIK Sumedang",
            position: "Member",
            year: "2019 - 2020",
            link: "https://stmik-sumedang.ac.id",
            logo: "/stmik.png"
        }
    ]

    return (
        <section className="py-5">
            <div>
                <span>Last but not least, Gathering with people with the same interests can expand your network and gain new insights.</span>
                <h1 className="font-bold text-4xl">Organization</h1>
            </div>
            <div className="py-2">
                {
                    organizations.map((organization, index) => (
                        <div key={index} className="flex justify-between py-2">
                            <div className="flex space-x-5">
                                <div className="flex mt-1 justify-center pl-4">
                                    <a href={organization.link} target="_blank">
                                        <Image width={500} height={500} src={organization.logo} alt={organization.name} className="min-w-16 max-w-16 min-h-16 max-h-16"  />
                                    </a>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">
                                        <a href={organization.link} target="_blank">
                                            {organization.name}
                                        </a>
                                    </h2>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-lg">{organization.position}</p>
                                        <p className="text-lg">{organization.year}</p>
                                    </div>
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