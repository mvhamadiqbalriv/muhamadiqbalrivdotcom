import { Github, LinkedinIcon, Mail  } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
    const links = [
        {
            href: 'https://github.com/mvhamadiqbalriv',
            icon: <Github className='h-8 w-8' />,
        },
        {
            href: 'https://www.linkedin.com/in/muhamadiqbalriv/',
            icon: <LinkedinIcon className='h-8 w-8' />,
            
        },
        {
            href: 'mailto:muhamadiqbalrivaldi03@gmail.com',
            icon: <Mail className='h-8 w-8' />,
        }
    ]
    return (
        <div id="footer" className="text-center">
            <span className="font-bold py-3">Contact me at:</span>
            <div className="flex items-center justify-center space-x-4">
                {links.map((link, index) => (
                    <Link key={index} href={link.href} className="text-primary-500 hover:text-primary-600 transition-colors duration-150 ease-in-out">
                            {link.icon}
                    </Link>
                ))}
            </div>
            <p className='text-small'>muhamadiqbalrivaldi03@gmail.com</p>
            <p>{new Date().getFullYear()} &copy; All rights reserved</p>
        </div>
    )
}