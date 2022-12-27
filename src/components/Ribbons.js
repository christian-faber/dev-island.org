import { AboutRibbon } from "./Ribbons/AboutRibbon";
import { BidRibbon } from "./Ribbons/BidRibbon";
import { ContactRibbon } from "./Ribbons/ContactRibbon";
import { FAQRibbon } from "./Ribbons/FAQRibbon";
import { SupportRibbon } from "./Ribbons/SupportRibbon";

export const Ribbons = ({ isOpen, setOpen }) => {
  return (
    <div>
      <AboutRibbon isOpen={isOpen} setOpen={setOpen} />
      <SupportRibbon setOpen={setOpen} />
      <BidRibbon setOpen={setOpen} />
      <ContactRibbon setOpen={setOpen} />
      <FAQRibbon setOpen={setOpen} />
    </div>
  );
};
