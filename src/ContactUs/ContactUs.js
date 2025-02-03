import "./ContactUs.css";
import AppFooter from "../AppFooter/AppFooter";
import ContactDetails from "./ContactDetails/ContactDetails";
import SocialHandle from "../Utilities/SocialHandle/socialhandle";

function ContactUs() {
  return (
    <>
      <ContactDetails />
      <SocialHandle />
      <AppFooter />
    </>
  );
}

export default ContactUs;
