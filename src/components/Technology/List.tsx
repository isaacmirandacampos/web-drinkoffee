import React, { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const variant = tv({
  base: "transition-all duration-1000 grid grid-cols-2 gap-1 py-9 mx-1 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6 lg:gap-4 xl:grid-cols-8 2xl:grid-cols-10 md:mx-[8rem]",
  variants: {
    isVisible: { true: "opacity-100", false: "opacity-0" },
  },
  defaultVariants: {
    isVisible: false,
  },
});

type ListProps = ComponentProps<"ul"> & VariantProps<typeof variant>;

export const List = React.forwardRef<HTMLUListElement, ListProps>(
  (props, ref) => {
    const { isVisible, ...rest } = props;
    return (
      <ul
        ref={ref}
        className={variant({ isVisible: isVisible })}
        {...rest}
      ></ul>
    );
  },
);
