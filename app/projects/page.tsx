import Link from "next/link"

export default function Projects(){
    return(
        <div className="mx-auto">
            <h2>我的專案</h2>
            <ul>
                <li><Link href="/projects/advent">倒數日曆工具</Link></li>
                <li><Link href="/projects/goodthing">好事日曆</Link></li>
                <li><Link href="/projects/notetool">卡片筆記工具</Link></li>
            </ul>
        </div>
    )
}