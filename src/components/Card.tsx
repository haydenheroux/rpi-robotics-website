import type { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="p-6 bg-neutral-50 card">
      {children}
    </div>
  );
}

export default Card;
