import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import Button from "./reusable/Button";
import resume from "../images/surfingDeveloper.png"; // Can be replaced with PDF if needed
const HireMeModal = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0  z-30 flex items-center justify-center font-general-medium"
    >
      {/* Modal Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-20"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="z-30 bg-secondary-light dark:bg-primary-dark rounded-lg shadow-lg w-auto max-w-full h-auto max-h-full flex flex-col relative overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-ternary-light dark:border-ternary-dark">
          <h5 className="text-xl text-primary-dark dark:text-primary-light">
            Resume Preview
          </h5>
          <button
            onClick={onClose}
            className="text-primary-dark dark:text-primary-light"
          >
            <FiX className="text-3xl" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-grow flex justify-center items-center p-4 overflow-auto">
          <div className="border border-gray-400 shadow-md">
            <iframe
              src="/files/MichaelLoffResume2.pdf"
              title="Resume Preview"
              className="w-[612px] h-[792px] !max-w-none !max-h-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-ternary-light dark:border-ternary-dark flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-600 text-white dark:bg-gray-300 dark:text-gray-900 hover:bg-gray-700 rounded-md transition duration-300"
          >
            <Button title="Close" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HireMeModal;
