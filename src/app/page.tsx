import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Container className="container grid-layout">
        <div className="col-span-6 flex flex-col gap-6 pt-40 pb-16">
          <h1 className="text-primary-500 font-bold">Lorem ipsum dolor sit amet, consectetur</h1>
          <h5 className="text-default">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</h5>
          <Button className="w-1/2 mt-2 mb-14">
            SIGN NOW
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
      <Footer />
    </main>
  )
}
