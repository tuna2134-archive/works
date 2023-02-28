import axios from 'axios'
import useSWR from 'swr'
import Seo from '../components/seo'
import codes from "../code.json"

const colors: ColorType = {
    'library': 'yellow-300',
    'web': 'blue-500',
    'bot': 'violet-500',
}

interface BoxProps {
    title: string;
    description: string;
    url: string;
    tags: string[];
    image?: string;
}

interface ColorType {
    [key: string]: string;
}

function Box({ title, description, url, tags, image }: BoxProps) {
    return (
        <div className="p-2 flex border rounded m-2 justify-between">
            <div>
                <h2 className="text-2xl p-2">
                    <a href={url}>{title}</a>
                </h2>
                <p>{description}</p>
            </div>
            <div className='pl-2 justify-end'>
                {tags.map((tag: string, index: number) => {
                    return (
                        <p
                            className={`border rounded-full px-1 py-0.5 bg-${colors[tag]} text-center`}
                            key={index}
                        >
                            {tag}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export default function Code() {
    return (
        <>
            <Seo title="コード集" description="tuna2134が今まで書いたコードたちです。" />
            <div className="grid grid-cols-2">
                {codes.map((data: BoxProps, index: number) => {
                    return (
                        <Box
                            key={index}
                            title={data.title}
                            description={data.description}
                            url={data.url}
                            tags={data.tags}
                            image={data.image}
                        />
                    )
                })}
            </div>
        </>
    )
}
