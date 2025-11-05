import { useEffect } from "react";

interface CopiedModalProps {
  message: string;
  show: boolean;
  duration?: number;
  onClose: () => void;
}

function CopiedModal({
  message,
  show,
  duration = 2000,
  onClose,
}: CopiedModalProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 bottom-6 z-32 ${show ? "opacity-100" : "opacity-0"} px-4 py-2 flex items-center justify-center bg-standard card transition-all duration-150 ease-in-out`}
    >
      <p className="type-large-bold text-standard">{message}</p>
    </div>
  );
}

export default CopiedModal;
