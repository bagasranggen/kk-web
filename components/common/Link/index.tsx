import React from 'react';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';

import { BaseComponentProps } from '@/libs/@types';

export type LinkProps = BaseComponentProps<
    HTMLAnchorElement,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & NextLinkProps
>;

const hrefReplacer = (href: NextLinkProps['href']) => {
    let hrefUpdate: NextLinkProps['href'] = href;
    // if (typeof href === 'string' && replaceHref && replaceHref.length > 1 && href.includes(replaceHref[0])) {
    //     hrefUpdate = href.replace(replaceHref[0], replaceHref[1]);
    // }

    return hrefUpdate;
};

const Link = ({ ref, href, ...props }: LinkProps): React.ReactElement => {
    return (
        <NextLink
            ref={ref}
            href={hrefReplacer(href)}
            {...props}
        />
    );
};

export default Link;
