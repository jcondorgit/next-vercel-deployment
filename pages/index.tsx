/* import { Inter } from "next/font/google";
import Link from "next/link";
import { Mainlayout } from '../components/layouts/MainLayout';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Mainlayout>
        <h1 className={ 'title' }>
          Ir a <Link href="/about">About</Link>
        </h1>
        <br />
        <p className={'description'}>
          Get started by editing&nbsp;
          <code className={'code'}>pages/index.tsx</code>
        </p>
      </Mainlayout>
    </>
  );
}

 */

import type { ReactElement } from 'react'
import {MainLayout} from '../components/layouts/MainLayout'
import {WhiteLayout} from '../components/layouts/WhiteLayout'
import Link from 'next/link'
 
export default function Home() {
  return(
    <>
      <h1 className={ 'title' }>
          Ir a <Link href="/about">About</Link>
        </h1>
        <br />
        <h3>Home</h3>
        <p className={'description'}>
          Get started by editing&nbsp;
          <code className={'code'}>pages/index.tsx</code>
        </p>
    </>
  )
}
 
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <WhiteLayout>{page}</WhiteLayout>
    </MainLayout>
  )
}
 
