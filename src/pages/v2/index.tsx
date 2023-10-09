import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { ArrowDown, ArrowRight, Bot, DollarSign, File, Flame, Laptop, Monitor, PersonStanding, SearchCheck, ShoppingBasket, User } from "lucide-react"

import { api } from "@/utils/api";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import Navbar from "@/components/Nav";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const features = [
    {
        name: 'Website Analysis',
        description:
            'Submit your website for a comprehensive analysis. Our AI will thoroughly examine your site for performance issues, text typos, and areas of improvement.',
        icon: SearchCheck, // You can use an appropriate icon here
    },
    {
        name: 'AI Recommendations',
        description:
            'Receive personalized recommendations based on the analysis. Our AI will suggest fixes and enhancements to make your website better.',
        icon: User, // Use a relevant icon
    },
    {
        name: 'Screenshot Reports',
        description:
            'Get detailed screenshot reports of the identified problem areas. Visualize the issues our AI found on your website.',
        icon: Monitor, // Choose an icon that represents screenshots
    },


];
const steps = [
    {
        name: 'Website Analysis',
        description:
            'Submit your website for a comprehensive analysis. Our AI will thoroughly examine your site for performance issues, text typos, and areas of improvement.',
    },
    {
        name: 'AI Recommendations',
        description:
            'Receive personalized recommendations based on the analysis. Our AI will suggest fixes and enhancements to make your website better.',
    },
    {
        name: 'Screenshot Reports',
        description:
            'Get detailed screenshot reports of the identified problem areas. Visualize the issues our AI found on your website.',
    },


];

export default function Home() {
    return (
        <main className="">
            <MaxWidthWrapper className="flex py-4   justify-between">
                <h1 className="font-bold text-2xl">PageOven</h1>
                <Button>Increase conversion</Button>
            </MaxWidthWrapper>
            <div className="flex flex-col items-center  px-4 pb-[60px] md:mt-20 ">
                <div className="relative my-4 rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 ">
                    Powered by AI.                </div>
                <h1 className="max-w-[880px] items-center text-center space-y-3  text-[40px] leading-none sm:text-[64px]">
                    <span className="inline-flex items-center">
                        Roast
                        <span className="ml-1 mr-1 ">

                            <div><Flame className="w-14 h-14 text-orange-600" />
                            </div>
                        </span>
                        your site

                    </span>
                    <br className="hidden sm:block" />
                    <span className="inline-flex items-center">
                        with

                        <span className="ml-1 mr-1 ">
                            <div><Bot className="w-14 h-14 text-blue-600" />
                            </div>
                        </span>
                        AI powered

                        <span className="ml-3 mr-2 inline-flex items-center">
                            reports
                            <div><File className="w-12 h-12 text-yellow-400" />
                            </div>

                        </span>


                    </span>
                </h1>
                <p className="mb-8 mt-6 max-w-[588px]  text-center text-[17px] font-medium text-[#333331] ">
                    Elevate your website's success with PageOven's AI-Powered reports. Boost conversions, gain leads, and create exceptional websites.                    </p>
                <Button>Get your report <ArrowDown className="ml-2 w-5"></ArrowDown></Button>
                <MaxWidthWrapper className="mt-20">

                    <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                        Featured on
                    </h2>
                    <div className="flex flex-col space-y-5 sm:flex-row  items-center justify-around mx-auto mt-10 ">
                        <img
                            className="saturate-0 max-h-12 w-full object-contain"
                            src="/product_hunt.svg"
                            alt="ProductHunt"
                            width="128"
                            height="128"
                        />
                        <img
                            className="saturate-0 max-h-12 w-full object-contain"
                            src="/reddit.svg"
                            alt="Reddit"
                            width="128"
                            height="128"
                        />
                        <img
                            className="invert saturate-0 overflow-hidden max-h-12 w-full object-contain"
                            src="/twitter.svg"
                            alt="X.com"
                            width="128"
                            height="128"
                        />
                    </div>

                </MaxWidthWrapper>
                <section className=" my-20 flex w-full sm:mt-[100px]">
                    <div className="w-full max-w-[1078px] m-auto overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0px_94px_38px_rgba(0,0,0,0.01),0px_53px_32px_rgba(0,0,0,0.02),0px_24px_24px_rgba(0,0,0,0.03),0px_6px_13px_rgba(0,0,0,0.04),0px_0px_0px_rgba(0,0,0,0.04)] sm:rounded-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                            alt="Photo by Drew Beamer"
                            width={1080}
                            height={642}
                            className="rounded-md w-full aspect-video"
                        />

                    </div>
                </section>

            </div>
            <MaxWidthWrapper>

                {steps.map((step, index) => (
                    <div className="flex justify-between mt-6" key={step.name}>
                        <div className="flex flex-col gap-3">
                            <h1 className="items-center space-y-3 text-[20px] leading-none sm:text-[44px]">
                                <span className="text-indigo-600 font-extrabold text-6xl">{index + 1}.</span> {step.name}
                            </h1>
                            <p className="max-w-sm">{step.description}</p>
                        </div>
                        <div className="flex flex-col">
                            <img
                                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                                alt="Photo by Drew Beamer"
                                className="rounded-md w-full max-w-md"
                            />
                            <img
                                src="/arrow.png"
                                alt="Arrow Icon"
                                className="rounded-md max-h-36 mx-auto w-7 my-9" ></img>

                        </div>

                    </div>
                ))}

            </MaxWidthWrapper>
            <MaxWidthWrapper>
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base leading-7 text-primary">Deploy faster</h2>
                    <p className="mt-2 text-3xl  tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to deploy your app
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                        pulvinar et feugiat blandit at. In mi viverra elit nunc.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </MaxWidthWrapper>

            <MaxWidthWrapper >

                <div className="mx-auto mt-16 max-w-2xl rounded-lg ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Get Your Report</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">Why hold your site back? Let PageOven roast your site. </p>

                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-primary">What’s included</h4>
                            <div className="h-px flex-auto bg-gray-100"></div>
                        </div>
                        <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Actionable Recommendations
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Comprehensive Performance Analytics
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                PDF format
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Emailed with 30 minutes
                            </li>
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                {/* <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p> */}
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-gray-900">$50</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                                </p>
                                <Link
                                    className={buttonVariants({
                                        size: 'lg',
                                        className: 'mt-5',
                                    })}
                                    href='/dashboard'
                                    target='_blank'>
                                    <ShoppingBasket className='mr-2 h-5 w-5' />

                                    Get your roast{' '}
                                </Link>                <p className="mt-6 text-xs leading-5 text-gray-600">Conversions not increasing? We'll reimburse you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
            <div className="py-8 px-4 mx-auto  sm:py-16 lg:px-6"
                style={{
                    backgroundImage: 'radial-gradient(#C6C6C6 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}>
                <div className="mx-10 max-w-screen-lg ">
                    <h2 className="text-4xl mb-9 md:text-6xl tracking-tight  leading-tight text-gray-900 dark:text-white">Increase your conversion in record time with one report.</h2>
                    <Link
                        className={buttonVariants({
                            size: 'lg',

                        })}
                        href='/dashboard'
                        target='_blank'>
                        <ShoppingBasket className='mr-2 h-5 w-5' />

                        Get your roast{' '}
                    </Link>                </div>



            </div >
            <div className="w-full h-full " style={{
                backgroundImage: 'radial-gradient(#C6C6C6 1px, transparent 0)',
                backgroundSize: '40px 40px'
            }}>
                <div className="w-full h-[300px] bg-repeat-x bg-center relative" style={{ backgroundImage: 'url(/flame.png)' }}>

                    {/* Your content goes here */}
                </div>
            </div>


        </main>


    )
}
