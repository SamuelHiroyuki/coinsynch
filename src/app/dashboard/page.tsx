"use client"

import { Container } from "@/components/Container";
import DashboardHeader from "@/components/DashboardHeader";
import { Icon } from "@/components/Icon";
import { PillCard } from "@/components/PillCard";
import SideMenu from "@/components/SideMenu";
import { wallet } from "@/stores/wallet";
import { Suspense, useMemo } from "react";
import DailyVariation from "../(ui)/DailyVariation";
import Image from "next/image";
import WalletTable from "@/components/WalletTable";
import { Footer } from "@/components/Footer";

const Dashboard = () => {
    const balance = wallet(state => state.balance)

    const formattedBalance = useMemo(() => balance.toLocaleString("en-US", {
        style: "currency", currency: "USD", maximumFractionDigits: 2
    }), [balance])

    return (
        <main className="min-h-screen sm:bg-white md:bg-grey flex flex-col">
            <DashboardHeader />

            <div className="flex flex-1">
                <SideMenu />

                <div className="flex-1">
                    <Container className="xl:py-14 md:py-10 sm:py-6">
                        <PillCard
                            className="xl:col-span-6 md:col-span-8 sm:col-span-4 xl:h-28 md:h-16 sm:h-12"
                            left={
                                <div className="xl:p-6 sm:px-4 sm:py-2 flex gap-4 items-center">
                                    <Icon
                                        name="legal-scale"
                                        className="xl:w-16 xl:h-16 xl:p-3 md:w-12 md:h-12 md:p-2 sm:w-8 sm:h-8 sm:p-1 bg-primary-100 rounded-full"
                                    />
                                    <div className="flex flex-col justify-center">
                                        <h4 className="xl:h4 md:h5 md:inline sm:hidden">Balance in US$</h4>
                                        <p className="xl:p md:label md:inline sm:hidden text-secondary-500">(approximately)</p>
                                        <h4 className="md:hidden label">Balance</h4>
                                        <p className="md:hidden small-label text-secondary-500">in US$</p>
                                    </div>
                                </div>
                            }
                            right={
                                <div className="flex-1 bg-primary-100 flex items-center justify-center">
                                    <h3 className="xl:h3 md:h4 sm:p !font-bold">{formattedBalance}</h3>
                                </div>
                            }
                        />

                        <Suspense fallback={
                            <div className="h-28 max-md:h-36 xl:col-span-3 md:col-span-4 sm:col-span-2 animate-pulse bg-primary-300 rounded-lg" />
                        }>
                            {/* @ts-expect-error Async Server Component */}
                            <DailyVariation crypto="ethereum" />
                        </Suspense>

                        <PillCard
                            className="xl:col-span-3 md:col-span-4 sm:col-span-2  max-md:flex-col max-md:h-36"
                            left={
                                <div className="md:w-1/2 sm:w-full max-md:h-1/2 md:p-4 sm:p-2 flex flex-col gap-2">
                                    <p className="label !font-bold">NFT’s NEWS</p>
                                    <p className="small-label text-secondary-500">New ElephantX NFT to be lauched!</p>
                                    <p className="max-md:hidden small-label text-primary-500 mt-auto">Read more +</p>
                                </div>
                            }
                            right={
                                <div className="md:w-1/2 sm:w-full max-md:h-1/2">
                                    <Image
                                        src="/elephant.svg"
                                        alt="elephant"
                                        fill
                                        className="!static object-cover object-center"
                                    />
                                </div>
                            }
                        />

                        <div className="col-span-full">
                            <WalletTable />
                        </div>
                    </Container>
                </div>
            </div>

            <Footer hideLogo />
        </main>
    );
}

export default Dashboard