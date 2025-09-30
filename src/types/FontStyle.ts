export interface FontStyle {
  name: string;
  category: string;
  transform: (text: string) => string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string | number;
  fontStyle?: string;
  textDecoration?: string;
  textShadow?: string;
  color?: string;
  background?: string;
}