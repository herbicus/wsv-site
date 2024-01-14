import React from 'react';
import PortableText from 'react-portable-text';

interface RichTextProps {
  content: any;
  theme?: 'light' | 'dark';
  textAlign?: 'left' | 'center' | 'right';
  classes?: string;
}

const RichText: React.FC<RichTextProps> = ({
  content,
  theme = 'light',
  textAlign = 'left',
  classes,
}) => {
  const defaultClasses = `gh-richtext prose max-w-none pslate-headings:font-semibold pslate-headings:leading-tight pslate-h1:text-4xl pslate-h1:lg:text-8xl pslate-h2:text-3xl pslate-h2:lg:text-6xl pslate-h3:text-3xl pslate-h3:lg:text-5xl pslate-h4:text-xl pslate-h4:lg:text-3xl pslate-h5:text-base pslate-h5:lg:text-2xl`;

  const getTextAlignClass = (txtAlign: string): string => {
    if (txtAlign === 'right') {
      return 'text-right';
    }
    if (txtAlign === 'center') {
      return 'text-center';
    }
    return 'text-left';
  };

  const themeClass =
    theme === 'dark'
      ? 'pslate-invert pslate-li:text-white pslate-p:text-white'
      : 'pslate-neutral';
  const textAlignClass = getTextAlignClass(textAlign);

  const classNames = `${defaultClasses} ${themeClass} ${textAlignClass} ${
    classes || ''
  }`;

  return <PortableText className={classNames} content={content} />;
};

export default RichText;
