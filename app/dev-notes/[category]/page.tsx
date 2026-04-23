import { notFound } from "next/navigation";
import { getCategory } from '@/lib/content';
import type { Metadata } from "next";

type Props = {
    params: Promise<{
        category: string;
    }>;
};

export default async function DevNote({ params }: Props) {

    const { category } = await params;
    const categoryPage = await getCategory("dev-notes", category);
    const Content = categoryPage?.Content;

    if (!categoryPage) notFound();

    return (
        <article className="max-w-3xl mx-auto py-10">
            <Content />
        </article>
    )
}
