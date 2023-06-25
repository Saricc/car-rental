import Footer from "./Footer/Footer";
import Navigacija from "./Navigacija";

export default function PageWrapper({ children }) {
    return (
        <div style={{ backgroundImage: "url(slikeSve/background.jpg)" }}>

            <Navigacija boja="Crvena" />


            {children}
        </div>
    )
}