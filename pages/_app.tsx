import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import Footer from '../components/footer'
import { AnimatePresence, motion } from 'framer-motion'

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <AnimatePresence mode="wait">
                <Header />
                <motion.main
                    className="mx-12 my-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Component key={router.asPath} {...pageProps} />
                </motion.main>
                <Footer />
            </AnimatePresence>
        </>
    )
}
