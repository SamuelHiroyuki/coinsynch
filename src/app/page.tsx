import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import { Container } from "@/components/Container";
import { FancyCard } from "@/components/FancyCard";
import { Footer } from "@/components/Footer";
import { FormLabel } from "@/components/FormLabel";
import { Header } from "@/components/Header";
import Input from "@/components/Input";
import TopCryptosTable from "@/components/TopCryptosTable";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header hideShadow />

      <Container className="sm:mt-16">
        <div className="xl:col-span-6 md:col-span-4 sm:col-span-4 flex flex-col gap-6 xl:pt-40 xl:pb-16 md:pt-16">
          <h1 className="xl:h1 md:h3 sm:h5 sm:text-center md:text-start !font-bold !text-primary-500">Lorem ipsum dolor sit amet, consectetur</h1>
          <h5 className="xl:h5 md:p sm:label sm:text-center md:text-start !text-default">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</h5>
          <Button className="xl:w-1/2 md:w-3/4 mt-2 xl:mb-14 mb-5" suffix="arrow-right">
            SIGN UP NOW
          </Button>

          <div className="flex gap-8">
            <h5 className="max:xl:p chip sm:small-label">Cryptos</h5>
            <h5 className="max:xl:p chip sm:small-label">NFTs</h5>
            <h5 className="max:xl:p chip sm:small-label">Games</h5>
          </div>
        </div>

        <Carousel />
      </Container>

      <div className='w-full h-64'>
        <Image
          src="/waves.svg"
          alt="waves"
          fill
          className="!static object-cover object-center"
        />
      </div>

      <div id="about" className="bg-lg-white-contrast w-full sm:mt-14">
        <Container className="xl:py-32 md:py-20 md:gap-10">
          <div className="xl:col-span-7 md:col-span-8 sm:col-span-4 sm:mb-14 flex md:flex-wrap overflow-x-auto scroll-hidden gap-8 xl:order-1 order-2">
            <FancyCard
              iconName="bitcoin"
              title="For your company"
              subtitle="Crypto Solutions"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"
            />
            <FancyCard
              iconName="crypto"
              title="For your company"
              subtitle="Crypto Solutions"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"
            />
            <FancyCard
              className="ml-auto"
              iconName="increase-chart"
              title="For your company"
              subtitle="Crypto Solutions"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"
            />
            <FancyCard
              iconName="laptop-mobile"
              title="For your company"
              subtitle="Crypto Solutions"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"
            />
          </div>

          <div className="xl:col-span-4 md:col-span-6 sm:col-span-4 md:col-start-2 self-center xl:order-2 order-1">
            <h5 className="xl:h5 md:p !font-bold !text-primary-500 mb-1">Lorem ipsum</h5>
            <h2 className="xl:h2 md:h3 !font-bold">Lorem ipsum</h2>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
            <Button className="w-1/2 mt-10 hidden xl:visible">Sign up now</Button>
          </div>
        </Container>
      </div>

      <Container id="top-cryptos" className="md:py-32 sm:py-14">
        <h3 className="sm:h5 md:h3 col-span-full text-center !font-bold mb-12">Top Cryptos</h3>
        <Suspense fallback={
          <div className="col-span-full flex flex-col gap-14">
            <div className="animate-pulse rounded w-full h-14 bg-secondary-200"></div>
            <div className="animate-pulse rounded w-full h-14 bg-secondary-200"></div>
            <div className="animate-pulse rounded w-full h-14 bg-secondary-200"></div>
          </div>
        }>
          {/* @ts-expect-error Async Server Component */}
          <TopCryptosTable />
        </Suspense>
      </Container>

      <div className="bg-lg-primary relative sm:py-6 md:py-32">
        <Container className="relative z-10 sm:gap-10">
          <div className="col-span-4 xl:col-start-2">
            <h4 className="sm:p md:h4 !font-bold !text-primary-200 mb-1">Lorem ipsum</h4>
            <h2 className="sm:h4 md:h2 !font-bold !text-white">Lorem ipsum</h2>
            <p className="sm:label md:p mt-4 !text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
          </div>
          <div className="col-span-4 xl:col-end-12">
            <FormLabel label="Teste" twColor="text-white">
              <Input placeholder="Email" />
            </FormLabel>
            <Button className="w-full">Subscribe</Button>
          </div>
        </Container>
        <Image
          src="/waves2.svg"
          alt="waves"
          fill
          className="object-cover object-center z-0"
        />
      </div>

      <Footer />
    </main>
  )
}
