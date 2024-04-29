import * as React from "react";
import './style.less'
import styles from  './style.module.less'
import styles2 from  './style.module.css'

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
      <div className="foo-cls">
        123
      </div>
      <div className={[styles.moduleFoo,styles2.moduleFoo].join(' ')}>
        234
      </div>
      {children}
      {/* This is index.tsx} */}
    </>
  );
}

export { Foo };
