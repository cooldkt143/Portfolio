import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="deepakkumartripathy1008@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 96924 13929" Image={FiPhone} />
      <SingleInfo text="Balaji Nagar, Gosainnuagaon, Berhampur, Ganjam, Odisha, pin-76003" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
