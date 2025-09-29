import { createContext, useState } from "react";

export const IsCopiedContext = createContext();

const IsCopiedProvider = ({ children }) => {
  const [copied, setCopied] = useState(false);
  const userUniqueCode = "unseen.app/u/yourname";

  const handleCopy = () => {
    navigator.clipboard.writeText(userUniqueCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copiedText = [copied && (
    <span className="absolute top-2 right-2 text-indigo-800 bg-white py-2 px-6 rounded-xl shadow-xl text-sm md:text-base font-medium">
      تم النسخ!
    </span>
  )];

  return (
    <IsCopiedContext.Provider value={{ copiedText, handleCopy, userUniqueCode }}>
      {children}
    </IsCopiedContext.Provider>
  );
};

export default IsCopiedProvider;
