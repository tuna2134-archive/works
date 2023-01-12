import Head from "next/head"

interface SeoProps {
    title: string;
    description: string;
}

export default function Seo({ title, description}: SeoProps) {
    return (
        <Head>
            <title>{`${title} | tuna2134の作品集`}</title>
            <meta name="description" content={description} />
        </Head>
    )
}