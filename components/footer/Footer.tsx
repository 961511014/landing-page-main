import FooterLinks from "@/components/footer/FooterLinks";
import FooterProducts from "@/components/footer/FooterProducts";
import LangLinks from "@/components/footer/LangLinks";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  const { authors } = siteConfig;

  return (
    <footer>
      <div className="mt-16 space-y-2 pt-6 pb-4 flex flex-col items-center bg-black text-sm text-gray-400 border-t">
        <FooterLinks />
        <FooterProducts />
        <LangLinks />
        <div className="flex space-x-2">
          <div>{`©${currentYear} weijunext. All rights reserved.`}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
