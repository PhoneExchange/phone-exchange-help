import type { TipTapDoc, TipTapNode, SupportArticle } from "@/lib/support-center/types";

function normalizeSpaces(s: string) {
  return s.replace(/\s+/g, " ").trim();
}

export function truncateText(input: string, max = 160, keepWord = true) {
  const s = normalizeSpaces(input);
  if (s.length <= max) return s;
  if (!keepWord) return s.slice(0, max).trimEnd() + "…";

  const cut = s.slice(0, max + 1);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : s.slice(0, max)).trimEnd() + "…";
}

function nodeToText(node?: TipTapNode): string {
  if (!node) return "";

  const joinChildren = () => (node.content ?? []).map(nodeToText).filter(Boolean).join(" ");

  switch (node.type) {
    case "text":
      return node.text ?? "";
    case "hardBreak":
      return " ";
    case "paragraph":
    case "blockquote":
      return joinChildren();

    case "heading":
      return joinChildren();
    case "bulletList":
    case "orderedList":
      return (node.content ?? [])
        .map((li) => nodeToText(li))
        .filter(Boolean)
        .join(" ");

    case "listItem":
      return joinChildren();

    case "codeBlock":
    case "code":
    case "link":
      return joinChildren();
    case "image":
    case "horizontalRule":
      return "";

    default:
      return joinChildren();
  }
}

export function tiptapToPlainText(doc?: TipTapDoc): string {
  if (!doc || doc.type !== "doc") return "";
  const flat = (doc.content ?? []).map(nodeToText).filter(Boolean).join(" ");
  return normalizeSpaces(flat);
}

export function getArticleExcerpt(article: Pick<SupportArticle, "content" | "content_html">, max = 160) {
  let text = tiptapToPlainText(article.content);
  if (!text) {
    text = normalizeSpaces(article.content_html.replace(/<[^>]+>/g, " "));
  }
  return truncateText(text, max, true);
}
