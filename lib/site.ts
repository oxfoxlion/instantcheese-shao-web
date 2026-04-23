//網站主要資訊 

type siteSetting = {
    title: string;
    description: string;
    seo: seoSetting;
    footer: string;
}

type seoSetting = {
    title: string;
    description: string;
}

export const site: siteSetting = {
    title: "即溶啟思 | Shao",
    description: "練習用簡單的方式記錄啟發思考的這些那些",
    seo: {
        title: "即溶啟思 | Shao",
        description: "練習用簡單的方式記錄啟發思考的這些那些"
    },
    footer: "Instantcheest.shao"

}

// 導覽列
type naviationItem = {
    href: string;
    label: string;
    child?: naviationItem[];
};

export const navigation: naviationItem[] = [
    {
        href: "/projects",
        label: "我的專案"
    },
    {
        href: "/dev-notes",
        label: "技術筆記"
    },
    {
        href: "/reading-notes",
        label: "閱讀筆記"
    },
    {
        href: "/life",
        label: "生活紀錄"
    },
];