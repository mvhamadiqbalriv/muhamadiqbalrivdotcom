import Image from 'next/image';

export const Education = () => {

    const educations = [
        {
            university: "Universitas Sebelas April",
            university_url: "https://unsap.ac.id",
            university_logo: "/unsap.png",
            degree: "Bachelor's degree, Informatics Engineering",
            duration: "2018 - 2022"
        },
        {
            university: "SMKN 1 Sumedang",
            university_url: "https://smkn1sumedang.sch.id",
            university_logo: "/nesas.png",
            degree: "Software Engineering",
            duration: "2015 - 2018"
        }
    ]

    return (
        <section id="education" className="py-5">
            <div>
                <span>Here i start to learn.</span>
                <h1 className="font-bold text-4xl">Education</h1>
            </div>
            <div className="py-2">
                {
                    educations.map((education, index) => (
                        <div key={index} className="flex justify-between py-2">
                            <div className="flex">
                                <div className="hidden md:flex mt-1 justify-center pl-4">
                                    <a href={education.university_url} target="_blank">
                                        <Image width={500} height={500} src={education.university_logo} alt="Universitas Sebelas April" className="min-w-16 max-w-16 min-h-16 max-h-16 object-contain"  />
                                    </a>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">
                                        <a href={education.university_url} target="_blank">
                                            {education.university}
                                        </a>
                                    </h2>
                                    <div className="items-center">
                                        <p className="text-lg">{education.degree}</p>
                                        <p className="text-lg">{education.duration}</p>
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