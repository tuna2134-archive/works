import { ReactNode } from "react"
import Seo from "../components/seo"
import { Timeline } from 'react-twitter-widgets'

interface BoxProps {
    title: string;
    children: ReactNode;
}

function Box({ title, children }: BoxProps) {
    return (
        <div className="p-4">
            <h2 className="text-2xl p-2 font-semibold">{title}</h2>
            {children}
        </div>
    )
}

export default function Page() {
    return (
        <div className="px-4">
            <Seo title="ホーム" description="tuna2134の作品集のホームページです。" />
            <Box title="僕の作品集">
                <p>今まで、ぼくは色々作ってきました。しかし</p>
                <p>最近あまりみてくれる人が少ないので、紹介がてら</p>
                <p>ここにまとめてあります。</p>
            </Box>

            <Box title="最近の活動">
                <p>まだ何もない</p>
            </Box>

            <Box title="ツイッター">
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'fdc_tuna2134'
                    }}
                    options={{
                        width: '430',
                        height: '460'
                    }}
                />
            </Box>
        </div>
    )
}