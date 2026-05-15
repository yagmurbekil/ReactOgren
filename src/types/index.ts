export interface NavLinkProps {
  href: string;
  label: string;
}

export interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export interface CodeSnippetProps {
  code: string;
  language?: string;
}

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabMenuProps {
  tabs: TabItem[];
}
