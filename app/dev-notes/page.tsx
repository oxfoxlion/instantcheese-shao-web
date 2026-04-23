import { getSectionTree } from "@/lib/content";
import Link from "next/link";

type Props = {
    children: React.ReactNode;
};

export default async function Dev({ children }: Props) {

    // 取得 dev-notes 底下的 category 與 文章 slug
    const tree = getSectionTree("dev-notes");
    return (
        <div className="mx-auto text-center">

            <h2>技術筆記</h2>

            {tree.map(item =>
            (
                <div key={item.category}>
                    <Link href={`/dev-notes/${item.category}`}>{item.category}</Link>
                </div>
            )
            )}
        </div>
    )
}