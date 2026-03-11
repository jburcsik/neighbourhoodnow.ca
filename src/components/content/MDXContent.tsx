import { remark } from "remark";
import html from "remark-html";

interface MDXContentProps {
  content: string;
}

export async function MDXContent({ content }: MDXContentProps) {
  const result = await remark().use(html).process(content);
  return (
    <div dangerouslySetInnerHTML={{ __html: result.toString() }} />
  );
}
