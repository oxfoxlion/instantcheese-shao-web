import fs from "node:fs";
import path from "node:path";

// 找到 content 資料夾
const contentDir = path.join(process.cwd(), "content");

// 讀 Section 底下的分類、文章
// 傳入 section 名稱
export function getSectionTree(section: string) {
    const sectionDir = path.join(contentDir, section);

    // 資料夾不存在的話回傳空陣列
    if (!fs.existsSync(sectionDir)) return [];

    // 獲得 categories 名稱陣列
    const categories = fs
        .readdirSync(sectionDir, { withFileTypes: true }) // 取得這個 section 內所有資料
        .filter(item => item.isDirectory()) // 只留下資料夾
        .map(item => item.name); //只留下名字

    // 拿個別 category 去逐一找內文
    return categories.map(category => {
        const categoryDir = path.join(sectionDir, category);
        const posts = fs
            .readdirSync(categoryDir)
            .filter(file => file.endsWith(".mdx"))
            .map(file => {
                const slug = file.replace(/\.mdx$/, "");
                return {
                    section,
                    category,
                    slug,
                    title: slug, //之後要改成真正的 title
                    href: `/${section}/${category}/${slug}`
                };
            });

        return {
            category,
            posts,
        };
    });

}

// 讀 Category 底下有哪些文章
export function getCategoryTree(section: string, category: string) {
    const categoryDir = path.join(contentDir, section, category);
    if (!fs.existsSync(categoryDir)) return [];
    // 拿文章名稱
    const posts = fs
        .readdirSync(categoryDir)
        .filter(file => file.endsWith(".mdx")&& file !== "index.mdx")
        .map(file => {
            const slug = file.replace(/\.mdx$/, "");
            return {
                section,
                category,
                slug,
                title: slug, //之後要改成真正的 title
                href: `/${section}/${category}/${slug}`
            };
        });

    return posts;
}

// 讀 Category Index.mdx ->用於渲染 Category 頁面
export async function getCategory(section:string,category:string){
    const categoryPage = await import (`@/content/${section}/${category}/index.mdx`);
    return{
        Content: categoryPage.default,
        metadata: categoryPage.metadata ?? {},
    }
}

// 讀單篇文章
export async function getPost(section: string, category: string, slug: string) {
    try {
        // 取得文章檔案
        const post = await import(`@/content/${section}/${category}/${slug}.mdx`);
        return {
            Content: post.default,
            metadata: post.metadata ?? {},
        };
    } catch {
        return null;
    }
}