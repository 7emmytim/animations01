import { FC } from "react";

export function withLayout<D>(Layout: FC<D>, props: any) {
  return () => <Layout {...props} />;
}
