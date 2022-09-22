export interface TextProps {
  variant?:
    | 'texting1'
    | 'texting2'
    | 'texting3'
    | 'texting4'
    | 'texting5'
    | 'texting6'
    | 'texting8'
    | 'texting7';

  color?: string;
  weight?: 800 | 700 | 600 | 500 | 400 | 300 | number;
  size?: string;
  mw?: string;
  align?: 'right' | 'left' | 'center';
  transform?: 'uppercase' | 'lowercase';
  padding?: string;
}

export interface SpanProps {
  color?: string;
  weight?: number;
  variant?:
    | 'texting1'
    | 'texting2'
    | 'texting3'
    | 'texting4'
    | 'texting5'
    | 'texting6'
    | 'texting8'
    | 'texting7';

  size?: string;
}
