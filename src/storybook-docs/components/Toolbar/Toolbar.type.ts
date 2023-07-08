export interface ZoomProps {
  resetZoom: () => void;
  zoom: (val: number) => void;
}

export interface EjectProps {
  storyId?: string;
  baseUrl?: string;
}

export interface BarProps {
  border?: boolean;
}

export interface LoadingProps {
  isLoading?: boolean;
}

export type ToolbarProps = BarProps & ZoomProps & EjectProps & LoadingProps;
