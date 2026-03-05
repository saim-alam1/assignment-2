import twitterImg from "../../assets/twitter.png";
import facebookImg from "../../assets/facebook.png";
import linkedInImg from "../../assets/linkedIn.png";
import emailImg from "../../assets/email.png";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#000000] text-white p-10 flex flex-col lg:flex-row justify-between">
      <aside>
        <h5 className="text-2xl font-bold">CS — Ticket System</h5>
        <p className="w-87.5 text-[#A1A1AA]">
          A ticketing system is software that centralizes, manages, and tracks
          customer or internal support requests, turning inquiries from email,
          chat, or phone into structured "tickets".
        </p>
      </aside>
      <nav>
        <h6 className="text-white font-medium text-xl">Company</h6>
        <a className="text-[16px] text-[#A1A1AA]">About Us</a>
        <a className="text-[16px] text-[#A1A1AA]">Our Mission</a>
        <a className="text-[16px] text-[#A1A1AA]">Contact Saled</a>
      </nav>
      <nav>
        <h6 className="text-white font-medium text-xl">Services</h6>
        <a className="text-[16px] text-[#A1A1AA]">Products & Services</a>
        <a className="text-[16px] text-[#A1A1AA]">Customer Stories</a>
        <a className="text-[16px] text-[#A1A1AA]">Download Apps</a>
      </nav>
      <nav>
        <h6 className="text-white font-medium text-xl">Information</h6>
        <a className="text-[16px] text-[#A1A1AA]">Privacy Policy</a>
        <a className="text-[16px] text-[#A1A1AA]">Terms & Conditions</a>
        <a className="text-[16px] text-[#A1A1AA]">Join Us</a>
      </nav>
      <nav>
        <h6 className="text-white font-medium text-xl">Social Links</h6>
        <a className="text-[16px] text-[#A1A1AA] flex items-center gap-1.5">
          <span>
            <img src={twitterImg} alt="Twitter Image" />
          </span>{" "}
          @CS — Ticket System
        </a>
        <a className="text-[16px] text-[#A1A1AA] flex items-center gap-1.5">
          <span>
            <img src={linkedInImg} alt="LinkedIn Image" />
          </span>{" "}
          @CS — Ticket System
        </a>
        <a className="text-[16px] text-[#A1A1AA] flex items-center gap-1.5">
          <span>
            <img src={facebookImg} alt="Facebook Image" />
          </span>{" "}
          @CS — Ticket System
        </a>
        <a className="text-[16px] text-[#A1A1AA] flex items-center gap-1.5">
          <span>
            <img src={emailImg} alt="Email Image" />
          </span>{" "}
          support@cst.com
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
