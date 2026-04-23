import Link from "next/link";
import { getCategoryTree } from "@/lib/content";

type Props = {
    children: React.ReactNode;
    params: Promise<{
        category: string;
    }>;
};

export default async function DevNoteLayout({ children, params }: Props) {

    const { category } = await params;

    const posts = getCategoryTree("dev-notes",category);

    return (
        <div className="flex">
            <aside className="w-1/4">
                <div>{ category }</div>
                <ul>
                    {posts.map(post=>(
                        <li key={post.slug}><Link href={post.href}>{post.title}</Link></li>
                    ))}
                </ul>
            </aside>
            <main className="3/4">{children}</main>
        </div>
    )
}