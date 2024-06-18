import FooterCopyright from "./footer-copyright";
import FooterResume from "./footer-resume";

function Footer() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
      <footer className="flex w-full items-center justify-between border-t px-6 py-5 sm:px-8">
        <FooterResume />
        <FooterCopyright />
      </footer>
    </div>
  );
}

export default Footer;
