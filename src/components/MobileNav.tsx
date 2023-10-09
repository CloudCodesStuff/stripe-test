'use client'

import { ArrowRight, Menu, ShoppingBasket } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { buttonVariants } from './ui/button'

const MobileNav = ({ isAuth }: { isAuth: boolean }) => {
    const [isOpen, setOpen] = useState<boolean>(false)

    const toggleOpen = () => setOpen((prev) => !prev)

    const pathname = usePathname()

    useEffect(() => {
        if (isOpen) toggleOpen()
    }, [pathname])

    const closeOnCurrent = (href: string) => {
        if (pathname === href) {
            toggleOpen()
        }
    }

    return (
        <div className='sm:hidden z-50'>
            <Menu
                onClick={toggleOpen}
                className='relative z-50 h-5 w-5 text-zinc-700'
            />

            {isOpen ? (
                <div className='absolute animate-in slide-in-from-top-5 fade-in-20 inset-0  w-full'>
                    <ul className='absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8'>
                        <Link
                            className={buttonVariants({
                                size: 'sm',
                                className: " rounded-full"

                            })}
                            href='/dashboard'
                            target='_blank'>
                            <ShoppingBasket className='mr-2 h-5 w-5' />

                            Get your roast for 50${' '}
                        </Link>
                    </ul>
                </div>
            ) : null}
        </div>
    )
}

export default MobileNav