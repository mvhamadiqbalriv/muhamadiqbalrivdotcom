import Image from "next/image";

export const Hero = () => {
    return (
        //typograpghy with hero
        <section>
            <div className="items-center justify-center">
                <div className="">
                    <h1 className="text-2xl sm:text-6xl">
                        <span className="font-bold font-playwrite">
                        Hallo,
                        </span> let&apos;s collaborate with me to build amazing digital products.
                    </h1>
                    <Image src="/profile.jpg" width={1080} height={0} className="py-4 min-h-60 max-h-60 w-full object-cover rounded-lg" alt="" layout="responsive" blurDataURL="/profile.jpg" />
                    <p className="text-xl py-4">
                        I&apos;m a software engineer based in Indonesia. I specialize in building high-quality websites and applications with modern technologies.
                    </p>
                </div>
            </div>
        </section>
    );
}