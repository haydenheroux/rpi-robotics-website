import { renderToString } from "react-dom/server";
import fs from "fs";
import path from "path";

import type { PageContextServer } from "vite-plugin-ssr/types";
import { ContentProvider } from "../contexts/ContentContext";
import { dangerouslySkipEscape } from "vite-plugin-ssr/server";

import "../../assets/index.css";

export { render };

async function render(pageContext: PageContextServer) {
  const { Page } = pageContext;
  const PageComponent = Page as React.FC;

  const templatePath = path.resolve("index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const pageHtml = renderToString(
    <ContentProvider>
      <PageComponent />
    </ContentProvider>,
  );

  return {
    documentHtml: dangerouslySkipEscape(
      template.replace(
        '<div id="root"></div>',
        `<div id="root">${pageHtml}</div>`,
      ),
    ),
  };
}
