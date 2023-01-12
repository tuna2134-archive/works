import axios from 'axios';
import useSWR from 'swr'

const fetcher = async (url: string) => {
    const res = await axios.get(url)
    return res.data
}

interface BoxProps {
    title: string;
    description: string;
    url: string;
    tags: string[];
    image?: string;
}

function Box({ title, description, url, tags, image }: BoxProps) {
    return (
        <div className="p-2 flex border rounded m-2">
            <div>
                <h2 className="text-2xl p-2">
                    <a href={url}>{title}</a>
                </h2>
                <p>{description}</p>
            </div>
            <div className='pl-2'>
                <img src={image} width={70} height={70} />
            </div>
        </div>
    )
}

export default function Code() {
    let { data, error } = useSWR<BoxProps[], Error>('/works/code.json', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <>
            <div className="grid grid-cols-2">
                {data.map((data: BoxProps, index: number) => {
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