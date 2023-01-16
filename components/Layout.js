import Head from "next/head";
import {Box} from '@chakra-ui/react'
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const Layout = ({children}) => (
    <>
        <Head>
            <title>Movie viewer</title>
        </Head>
        <Box m="auto">
            {/* Navigation bar */}
            <NavigationBar>

            </NavigationBar>
        </Box>
        <main>
            {children}
        </main>
        <footer>
            footer placeholder
            <Footer />
        </footer>
    </>
)

export default Layout;