export interface DocumentState {
  documentList: Document[] | [];
  documentDetail: Document | null;
}

export interface Document {
  slug: string | null;
  title: string;
  excerpt: string | null;
  createdAt: string;
  content: string;
}
