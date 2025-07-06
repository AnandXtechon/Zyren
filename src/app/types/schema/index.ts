// src/types/schema/index.ts

export interface ArticleSchemaData {
  title: string;
  description: string;
  publishedDate: string;
  modifiedDate: string;
  url: string;
}

export interface ServiceSchemaData {
  name: string;
  description: string;
  serviceType: string;
}

export interface SchemaMarkupProps {
  type: "article" | "service";
  data: ArticleSchemaData | ServiceSchemaData;
}
