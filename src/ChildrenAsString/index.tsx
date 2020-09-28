import React, { ReactElement } from "react";

export interface ChildrenAsStringProps {
  /** I would expect this to be string */
  children: string;
}

export const ChildrenAsString: React.FC<ChildrenAsStringProps> = ({
  children,
}) => <div>{children}</div>;
