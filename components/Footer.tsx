import Link from "next/link"
import { site,navigation, social } from "@/lib/site"

export default function Footer() {
    return (
        <div className="bg-[#17726a] text-white p-5">
            <h2 className="text-2xl mb-3">{site.title}</h2>
            <div className="flex justify-between ">
                <div>
                    <div className="mb-3">
                        <h3 className="text-lg font-semibold">聯絡我</h3>
                        <ul>
                            <li>email：oxfoxlion@gmail.com</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <h3 className="text-lg font-semibold">專案</h3>
                        <ul>
                            <li><Link href="/projects/advent">倒數日曆工具</Link></li>
                            <li><Link href="/projects/goodthing">好事日曆</Link></li>
                            <li><Link href="/projects/notetool">卡片筆記工具</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="flex gap-7">
                    <ul className="flex flex-col gap-5">
                        {navigation.map(item => <li key={item.label} className="w-auto"><Link href={item.href} className="block">{item.label}</Link></li>)}
                    </ul>
                    <ul className="flex flex-col gap-5">
                        {social.map(item => <li key={item.label} className="w-auto"><Link href={item.href} className="block">{item.label}</Link></li>)}
                    </ul>
                </div>
            </div>
            <div className="text-center">
                InstantCheese Shao | 2026<br></br>
                Copyright © 2026 InstantCheese Shao. All Rights Reserved.
            </div>
        </div>


    )
}