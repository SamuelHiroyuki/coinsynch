import { Button } from "@/components/Button";
import { Carousel } from "@/components/Carousel";
import { Container } from "@/components/Container";
import { FancyCard } from "@/components/FancyCard";
import { Footer } from "@/components/Footer";
import { FormLabel } from "@/components/FormLabel";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header hideShadow />
      <Container>
        <div className="col-span-6 flex flex-col gap-6 pt-40 pb-16">
          <h1 className="text-primary-500 font-bold">Lorem ipsum dolor sit amet, consectetur</h1>
          <h5 className="text-default">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</h5>
          <Button className="w-1/2 mt-2 mb-14">
            SIGN UP NOW
          </Button>

          <div className="flex gap-8">
            <h5 className="chip">Cryptos</h5>
            <h5 className="chip">NFTs</h5>
            <h5 className="chip">Games</h5>
          </div>
        </div>
      </Container>

      <div className='w-full h-64'>
        <Image
          src="/waves.svg"
          alt="waves"
          fill
          className="!static object-cover object-center"
        />
      </div>

      <div className="bg-lg-white-contrast w-full">
        <Container className="py-32">
          <div className="col-span-7 flex flex-wrap gap-8">
            <FancyCard
              iconName="bitcoin"
              title="For your company"
              subtitle="Crypto Solutions"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"
            />
            <FancyCard
              iconName="nft"
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

          <div className="col-span-4 self-center">
            <h5 className="font-bold text-primary-500 mb-1">Lorem ipsum</h5>
            <h2 className="font-bold">Lorem ipsum</h2>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
            <Button className="w-1/2 mt-10">Sign up now</Button>
          </div>
        </Container>
      </div>

      <div className="bg-lg-primary relative py-32">
        <Container className="relative z-10">
          <div className="col-span-4 col-start-2">
            <h4 className="font-bold text-primary-200 mb-1">Lorem ipsum</h4>
            <h2 className="font-bold text-white">Lorem ipsum</h2>
            <p className="mt-4 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
          </div>
          <div className="col-span-4 col-end-12">
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
