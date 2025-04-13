"use client";

import type { ScrollShadowProps } from "@nextui-org/react";

import { cn } from "@/lib/utils";
import { ScrollShadow } from "@nextui-org/react";
import React from "react";

interface ScrollingBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  isReverse?: boolean;
  showShadow?: boolean;
  shouldPauseOnHover?: boolean;
  isVertical?: boolean;
  gap?: string;
  duration?: number; // in seconds
}

const ScrollingBanner = React.forwardRef<HTMLDivElement, ScrollingBannerProps>(
  (
    {
      className,
      isReverse,
      isVertical = false,
      gap = "1rem",
      showShadow = true,
      shouldPauseOnHover = true,
      duration = 40,
      children,
      ...props
    },
    ref
  ) => {
    const shadowProps: ScrollShadowProps = {
      isEnabled: showShadow,
      offset: -20,
      size: 300,
      orientation: isVertical ? "vertical" : "horizontal",
      visibility: "both",
    };

    return null;
  }
);

ScrollingBanner.displayName = "ScrollingBanner";

export default ScrollingBanner;
