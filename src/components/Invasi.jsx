import NavigationBar from './Navbar';
import HeaderInvasi from './Header';
import ContentTentangKami from './ContentTentangKami';
import ContentLomba from './ContentLomba';
import ContentTesti from './ContentTesti';
import FooterContent from './Footer';
import SosialMedia from './SosialMedia';
import FormMsg from './FormMsg';

export default function Invasi() {
    return (
        <>
            <NavigationBar />
            <HeaderInvasi />
            <ContentTentangKami />
            <ContentLomba />
            <ContentTesti />
            <SosialMedia />
            <FormMsg />
            <FooterContent />
        </>
    );
}