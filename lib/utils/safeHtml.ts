import sanitizeHtml from "sanitize-html";

export function sanitizeSupportHtml(input: string): string {
  return sanitizeHtml(input, {
    allowedTags: ["h1", "h2", "h3", "p", "b", "i", "strong", "a", "ul", "ol", "li", "br", "span"],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      span: ["style"],
    },
    allowedSchemes: ["http", "https", "mailto"],

    transformTags: {
      a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer" }),
    },
  });
}
