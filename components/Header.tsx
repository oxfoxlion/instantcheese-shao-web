import Image from "next/image"
import Link from "next/link"
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { site, navigation } from "@/lib/site"

export default function Header() {
    return (
        <div className="flex justify-between items-center p-5 border-b-2 border-gray-200">
            <Link className="flex items-center gap-2" href="/">
                <Image
                    src='/instantcheese.jpg'
                    alt="instantcheese.shao"
                    width={50}
                    height={50}>
                </Image>
                <div>
                    <h2 className="text-lg md:text-2xl">{site.title}</h2>
                    <p className="text-base hidden md:block none">{site.description}</p>
                </div>
            </Link>

            {/* 手機版 Menu */}
            <Sheet>
                <SheetTrigger className="md:hidden"><Menu /></SheetTrigger>
                <SheetContent className="data-[side=right]:w-32">
                    <SheetHeader>
                        <SheetTitle>
                            <Link className="flex items-center gap-2" href="/">
                                <Image
                                    src='/instantcheese.jpg'
                                    alt="instantcheese.shao"
                                    width={50}
                                    height={50}
                                    className="mb-2">
                                </Image>
                            </Link>
                        </SheetTitle>
                        <SheetDescription className="flex flex-col gap-2">
                            {navigation.map(item => <Link href={item.href} key={item.label}>{item.label}</Link>)}
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>


            {/* 電腦版 Menu */}
            <ul className="hidden md:flex gap-2 ">
                {navigation.map(item =>
                    <li key={item.label} className="relative group">
                        <Link href={item.href} >{item.label}</Link>
                        <div className="absolute hidden group-hover:block top-full right-0 w-auto">
                            <ul>
                                {item.child?.map(child=><li key={child.label} className="w-auto"><Link href={child.href} className="block">{child.label}</Link></li>)}
                            </ul>
                        </div>
                    </li>
                )}
            </ul>

        </div>
    )
}