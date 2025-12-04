import { useContent } from "../contexts/ContentContext";
import Layout from "../layouts/Layout";

function Page() {
  const { content } = useContent();

  return (
    <Layout>
      <div className="overflow-scroll card">
        <iframe src={content.calendar} className="w-256 lg:w-full h-160" />
      </div>
    </Layout>
  );
}

export default {
  Page,
  route: "/calendar",
};
