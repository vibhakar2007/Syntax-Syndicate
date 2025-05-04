import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="container flex h-extended items-center justify-center flex-col gap-4 mx-auto mt-20">
            <h1 className="lg:text-5xl text-3xl text-center font-bold leading-normal">
                We Build the Website Your
                <br /> Competitors Wish They
                <br /> Had.
            </h1>
            <div className="flex items-center justify-center flex-row gap-4 pt-5">
                <Button
                    color="gray"
                    size={'lg'}
                    variant={'default'}
                    className="bg-white text-black"
                >
                    <Link href={'/work'}>Our Projects</Link>
                </Button>
                <Button variant={'outline'} size={'lg'} asChild>
                    <Link href={'/contact'}>Hire Us</Link>
                </Button>
            </div>
        </div>
    )
}
