import Footer from "./Footer/Footer";
import Navigation from "./Navigation";

export default function PageWrapper({ children }) {
    return (
        <div style={{ background: "linear-gradient(#e66325, #9198e5)" }}
        >

            <Navigation />
            {children}
            <Footer />
        </div>
    )
}