import { LinkField } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next'
import clsx from 'clsx';


type Props = {
    buttonLink: LinkField;
    buttonText: string | null;
    className?: string;
  };

export default function Button({buttonLink, buttonText, className}: Props) {
    return (
        <PrismicNextLink
          className={clsx(
            "rounded-xl bg-purple-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-purple-700 md:text-2xl",
            className,
          )}
          field={buttonLink}
        >
          {buttonText}
        </PrismicNextLink>
      );
}


// from Prismic slices
// <PrismicNextLink field={slice.primary.button_link}> 
// {slice.primary.button_text}
// </PrismicNextLink>