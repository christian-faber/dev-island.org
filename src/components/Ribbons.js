import { AboutRibbon } from "./Ribbons/AboutRibbon";
import { BidRibbon } from "./Ribbons/BidRibbon";
import { ContactRibbon } from "./Ribbons/ContactRibbon";
import { FAQRibbon } from "./Ribbons/FAQRibbon";
import { SupportRibbon } from "./Ribbons/SupportRibbon";

export const Ribbons = () => {
  return (
    <div>
      <AboutRibbon />
      <SupportRibbon />
      <BidRibbon />
      <ContactRibbon />
      <FAQRibbon />
    </div>
  );
};
