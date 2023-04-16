"use client"

import { Container } from "@/components/Container";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Icon } from "@/components/Icon";
import { PillCard } from "@/components/PillCard";
import { SideMenu } from "@/components/SideMenu";
import { wallet } from "@/stores/wallet";
import { Suspense, useMemo } from "react";
import DailyVariation from "../(ui)/DailyVariation";
import Image from "next/image";


const Dashboard = () => {
    const balance = wallet(state => state.balance)

    const formattedBalance = useMemo(() => balance.toLocaleString("en-US", {
        style: "currency", currency: "USD", maximumFractionDigits: 2
    }), [balance])

    return (
        <main className="min-h-screen bg-secondary-200 flex flex-col">
            <DashboardHeader />

            <div className="flex flex-1">
                <SideMenu />

                <div className="flex-1">
                    <Container className="xl:py-14 md:py-10 sm:py-6">
                        <PillCard
                            className="col-span-6"
                            left={
                                <div className="p-6 flex gap-4">
                                    <Icon
                                        name="legal-scale"
                                        className="w-16 h-16 p-3 bg-primary-100 rounded-full"
                                    />
                                    <div className="flex flex-col justify-center">
                                        <h4>Balance in US$</h4>
                                        <p className="text-secondary-500">(approximately)</p>
                                    </div>
                                </div>
                            }
                            right={
                                <div className="flex-1 bg-primary-100 flex items-center justify-center ">
                                    <h3 className="!font-bold">{formattedBalance}</h3>
                                </div>
                            }
                        />

                        <Suspense fallback={
                            <div className="h-28 col-span-3 animate-pulse bg-primary-300 rounded-lg" />
                        }>
                            {/* @ts-expect-error Async Server Component */}
                            <DailyVariation crypto="ethereum" />
                        </Suspense>

                        <PillCard
                            className="col-span-3"
                            left={
                                <div className="w-1/2 p-4 flex flex-col gap-2">
                                    <p className="label !font-bold">NFT’s NEWS</p>
                                    <p className="small-label text-secondary-500">New ElephantX NFT to be lauched!</p>
                                    <p className="small-label text-primary-500 mt-auto">Read more +</p>
                                </div>
                            }
                            right={
                                <div className="w-1/2">
                                    <Image
                                        src="/elephant.svg"
                                        alt="elephant"
                                        fill
                                        className="!static object-cover object-center"
                                    />
                                </div>
                            }
                        />

                        <div className="bg-white col-span-full">

                        </div>
                    </Container>
                </div>
            </div>
        </main>
    );
}

export default Dashboard