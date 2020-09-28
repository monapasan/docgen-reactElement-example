import React, { ReactElement } from "react";

export interface ChildrenAsReactElementProps {
  /** I would expect this to be as ReactElement or a parsable entity*/
  children: ReactElement;
}

export const ChildrenAsReactElement: React.FC<ChildrenAsReactElementProps> = ({
  children,
}) => <div>{children}</div>;
