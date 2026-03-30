import Header from "../common/Header"
import Fotter from "../common/Footer"

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Fotter />
        </>
    );
}
export default Layout;