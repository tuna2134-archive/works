import Link from 'next/link'
import { ReactNode } from 'react'

interface Nav {
    name: string;
    path: string;
}

interface BoxProps {
    title: string;
    children: ReactNode;
}

function Box({ title, children }: BoxProps) {
    return (
        <div className="p-4">
            <h2 className="text-2xl p-2">{title}</h2>
            {children}
        </div>
    )
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
                <Link href="/">tuna2134&apos;s works</Link>
            </h1>
            <nav>
                <ul className="flex bg-green-500 py-4 px-4">
                    {navs.map((data: Nav, index: number) => {
                        return (
                            <li key={index}>
                                <Link href={data.path} className="text-2xl mx-2 bg-green-400 px-2 py-1 text-white rounded-lg">{data.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}