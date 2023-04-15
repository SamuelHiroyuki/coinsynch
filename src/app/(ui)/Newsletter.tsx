"use client"

import Button from "@/components/Button"
import { Container } from "@/components/Container"
import { FormLabel } from "@/components/FormLabel"
import Input from "@/components/Input"
import { sleep } from "@/utils/sleep"
import Image from "next/image"
import { useCallback, useState } from "react"

const Newsletter = () => {
    const [value, setValue] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = useCallback(async () => {
        setIsSubmitting(true)
        await sleep(2000)
        setIsSubmitting(false)
        setValue("")
    }, []);

    return (
        <div className="bg-lg-primary relative sm:py-6 md:py-32">
            <Container className="relative z-10 sm:gap-10">
                <div className="col-span-4 xl:col-start-2">
                    <h4 className="sm:p md:h4 !font-bold !text-primary-200 mb-1">Lorem ipsum</h4>
                    <h2 className="sm:h4 md:h2 !font-bold !text-white">Lorem ipsum</h2>
                    <p className="sm:label md:p mt-4 !text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                </div>
                <div className="col-span-4 xl:col-end-12">
                    <FormLabel label="Teste" twColor="text-white">
                        <Input disabled={isSubmitting} placeholder="Email" value={value} onChange={event => setValue(event.target.value)} />
                    </FormLabel>
                    <Button isLoading={isSubmitting} className="w-full" onClick={handleSubmit}>Subscribe</Button>
                </div>
            </Container>
            <Image
                src="/waves2.svg"
                alt="waves"
                fill
                className="object-cover object-center z-0"
            />
        </div>
    )
}

export default Newsletter