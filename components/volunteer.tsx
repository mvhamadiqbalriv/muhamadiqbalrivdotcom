import Image from 'next/image';

export const Volunteer = () => {

    const volunteers = [
        {
            company: "Rumah Creativepreneur Indonesia",
            company_url: "https://rumahcreativepreneur.or.id",
            company_logo: "/rci.png",
            role: "IT Support Specialist",
            duration: "2022",
            present: false,
            description: [
                "Build profile company website."
            ]
        },
        {
            company: "TAHUNGODING",
            company_url: "https://tahungoding.id",
            company_logo: "/tahungoding.png",
            role: "Instructor / Mentor",
            duration: "2019 - 2022",
            present: false,
            description: [
                "Developed an application for the Sumedang Government to monitor traffic, share real-time important information, etc called Sumedang Lebaran Real Time (SLRT) (2022)",
                "Helping to teach in the iot, front-end developer and back-end developer divisions",
                "Helps to create materials iot, for the front-end developer and back-end developer divisions"
            ]
        }
    ]

    return (
        <section className="py-5">
            <div>
                <span>I would love to share my knowledge if I have free time and opportunity.</span>
                <h1 className="font-bold text-4xl">Volunteering</h1>
            </div>
            <div className="py-2">
                {
                    volunteers.map((volunteer, index) => (
                        <div key={index} className="flex justify-between py-2">
                            <div className="flex space-x-5">
                                <div className="flex mt-1 justify-center pl-4">
                                    <a href={volunteer.company_url} target="_blank">
                                        <Image width={500} height={500} src={volunteer.company_logo} alt="Rumah Creativepreneur Indonesia" className="min-w-16 max-w-16 min-h-16 max-h-16"  />
                                    </a>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">
                                        <a href={volunteer.company_url} target="_blank">
                                            {volunteer.company}
                                        </a>
                                    </h2>
                                    <p className="text-lg">
                                        <a href={volunteer.company_url} target="_blank">
                                            {volunteer.company}
                                        </a>&nbsp;| {volunteer.duration}
                                    </p>
                                    <ul className="list-disc">
                                        {
                                            volunteer.description.map((desc, index) => (
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