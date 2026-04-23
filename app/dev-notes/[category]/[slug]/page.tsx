import { notFound } from "next/navigation";
import { getPost } from "@/lib/content";

type Props = {
    params: Promise<{
        category: string;
        slug: string;
        }>;
}

export default async function DevNoteSinglePage({ params }: Props) {
    const { category,slug } = await params;

        const post = await getPost("dev-notes",category,slug);
        const Content = post?.Content;

        if(!post) notFound();

        return (
            <article className="max-w-3xl mx-auto py-10">
                <h1 className="text-3xl font-bold mb-6">
                    {post?.metadata?.title ?? slug}
                </h1>
                <Content />
            </article>
        );
}