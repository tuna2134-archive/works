import { ReactNode } from "react"

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

export default function Page() {
    return (
        <>
            <Box title="僕の作品集">
                <p>今まで、ぼくは色々作ってきました。しかし</p>
                <p>最近あまりみてくれる人が少ないので、紹介がてら</p>
                <p>ここにまとめてあります。</p>
            </Box>

            <Box title="最近の活動">
                <p>まだ何もない</p>
            </Box>
        </>
    )
}