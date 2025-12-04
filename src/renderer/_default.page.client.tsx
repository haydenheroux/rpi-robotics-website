import { createRoot, hydrateRoot } from "react-dom/client";
import type { PageContextClient } from "vite-plugin-ssr/types";
import { ContentProvider } from "../contexts/ContentContext";

import "../../assets/index.css";

export { render };

function render(pageContext: PageContextClient) {
  const { Page, isHydration } = pageContext;

  if (!Page) throw new Error("Page is undefined");

  const PageComponent = Page as React.FC;

  const rootElem = document.getElementById("root");
  if (!rootElem) throw new Error("Cannot find #root");

  const page = (
    <ContentProvider>
      <PageComponent />
    </ContentProvider>
  );

  if (isHydration) {
    // Hydrate the existing SSR content
    hydrateRoot(rootElem, page);
  } else {
    // Normal client-side render (for client-only navigation)
    createRoot(rootElem).render(page);
  }
}
