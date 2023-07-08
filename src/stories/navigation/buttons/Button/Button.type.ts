import type { PropsWithChildren } from "react";

import { BaseButtonProps } from "../ButtonBase";

export type ButtonProps = BaseButtonProps & PropsWithChildren<{ fullWidth?: boolean }>;
