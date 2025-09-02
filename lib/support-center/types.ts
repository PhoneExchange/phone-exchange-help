export type SupportCategory = {
  id: string;

  title: string;
  slug: string;

  description?: string | null;
  sort: number;
};

export type SupportArticle = {
  id: string;

  title: string;
  slug: string;

  category_id: string;

  content: TipTapDoc;
  content_html: string;

  status: "draft" | "published" | "archived";

  helpful_count: number;
  not_helpful_count: number;

  created_at: string;
  updated_at: string;
};

export type TipTapTextNode = {
  type: "text";
  text: string;
  marks?: { type: string; attrs?: Record<string, string | number | boolean | null> }[];
};

type TipTapAttrValue = string | number | boolean | null;

export type TipTapNode = {
  type: string;
  attrs?: Record<string, TipTapAttrValue>;
  content?: TipTapNode[];
  text?: string;
};

export type TipTapDoc = {
  type: "doc";
  content: TipTapNode[];
};
