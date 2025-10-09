import type { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="p-6 rounded-2xl bg-neutral-50 drop-shadow-sm/25 drop-shadow-neutral-500">
      {children}
    </div>
  );
}

export default Card;
