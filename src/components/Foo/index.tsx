import * as React from "react";

export interface FooProps {
  slogan?: React.ReactNode;
}

function Foo(props: React.PropsWithChildren<FooProps>) {
  const { children } = props;
  return (
    <>
      <div className="my-slogan">
        <p>魔法师正在进行最后的仪式，为您带来一项惊艳功能</p>
        <strong>TBD: The Brilliant Discovery!</strong>
      </div>
      {children}
      {/* This is index.tsx} */}
    </>
  );
}

export { Foo };
