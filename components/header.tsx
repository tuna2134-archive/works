import Link from 'next/link'

interface Nav {
    name: string;
    path: string;
}

export default function Header() {
    let navs: Nav[] = [{
        name: "コード",
        path: "/code",
    }, {
        name: "その他",
        path: "/other",
    }]
    return (
        <header>
            <h1 className="text-[40px] text-center pt-4 pb-3">
                <Link href="/">tuna2134's works</Link>
            </h1>
            <nav>
                <ul className="flex bg-green-500 py-4 px-4">{navs.map((data: Nav) => {
                    return (
                        <li>
                            <Link href={data.path} className="text-2xl mx-2 bg-green-400 px-2 py-1 text-white rounded-lg">{data.name}</Link>
                        </li>
                    )
                })}</ul>
            </nav>
        </header>
    )
}