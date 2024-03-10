import React from "react";

type HeaderLinkProps = {
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const HeaderLink = ({ className, children, href, ...rest }: HeaderLinkProps) => {
  const current_path = window.location.pathname;
  const subpath = href.match(/[^\/]+/g);
  const isActive = current_path === href || current_path === "/" + subpath?.[0];

  const isSelected = isActive ? "font-bold text-orange-700 dark:text-orange-600" : "";

  return (<a
    {...rest}
    className={`text-zinc-900 dark:text-zinc-50 ${isSelected} transition-colors`}
  >
    {children}
  </a>)
}
