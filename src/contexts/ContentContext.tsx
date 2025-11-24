import { createContext, useContext, useState, type ReactNode } from "react";
import type Content from "../types/Content";
import defaultContent from "../defaultContent";

export interface ContentContextType {
	content: Content;
  setContent: (content: Content) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({children}) => {
	const [content, setContent] = useState<Content>(defaultContent);

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export const useContent = (): ContentContextType => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used inside a ContentProvider");
  }
  return context;
}
