import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/deepak-kumar-tripathy-81446128b/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/cooldkt143" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/cool_dkt.143/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
