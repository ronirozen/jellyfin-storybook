import { ReactNode } from "react";
import { ActionItem } from "@storybook/components";

import { SourceStateProps } from "storybook-docs/components/Source";

export interface PreviewProps {
  isLoading?: true;
  layout?: Layout;
  columns?: number;
  isColumn?: boolean;
  className?: string;
  isExpanded?: boolean;
  children?: ReactNode;
  withToolbar?: boolean;
  withSource?: SourceStateProps;
  additionalActions?: ActionItem[];
}

export type Layout = "padded" | "fullscreen" | "centered";
