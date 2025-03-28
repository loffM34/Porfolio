import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const contacts = [
  {
    id: 1,
    name: "Hoboken, New Jersey",
    icon: <FiMapPin />,
  },
  {
    id: 2,
    name: "loffm300334@gmail.com",
    icon: <FiMail />,
  },
  {
    id: 3,
    name: "732 865 2186",
    icon: <FiPhone />,
  },
];

const ContactDetails = () => {
  return (
    <div className="w-full lg:w-1/2" id="contactSection">
      <div className="text-left max-w-100%">
        <ul className="font-general-regular max-w-100% flex flex-row items-center justify-center gap-10 mt-10">
          {contacts.map((contact) => (
            <li className="flex " key={contact.id}>
              <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                {contact.icon}
              </i>
              <span className="w-250px text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                {contact.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
