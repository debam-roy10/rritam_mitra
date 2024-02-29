import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export function Socials () {
  return (
    <div className='hidden xl:flex ml-24'>
      <ul className='flex gap-x-4'>
        <li className='text-secondary hover:text-primary transition'>
          <a href="https://www.facebook.com/rritam.mitra?mibextid=ZbWKwL" target='_blank' rel="noreferrer"><FiFacebook /></a>
        </li>
        <li className='text-secondary hover:text-primary transition'>
          <a href="https://twitter.com/?lang=en" target='_blank' rel="noreferrer"><FaXTwitter /></a>
        </li>
        <li className='text-secondary hover:text-primary transition'>
          <a href="https://www.instagram.com/rritamsphotographyofficial?igsh=OW94bmJmdGZzZWN0" target='_blank' rel="noreferrer"><BsInstagram /></a>
        </li>
      </ul>
    </div>
  );
};