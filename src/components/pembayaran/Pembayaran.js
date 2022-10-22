import NavigationBar from "../Navbar";
import Pembayaran from "./PembayaranInvasi";
import FooterContent from "../Footer";
import PembayaranForm from "./PembayaranForm";

export default function PembayaranApp(){
    return(
        <>
            <NavigationBar />
            <Pembayaran />
            <PembayaranForm />
            <FooterContent />
        </>
    );
}