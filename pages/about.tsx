import { ReactElement } from "react";
import { MainLayout } from '../components/layouts/MainLayout';
import { WhiteLayout } from "@/components/layouts/WhiteLayout";
import Link from "next/link";

export default function About() {
  return (
    <>
      <h1 className={ 'title' }>
        Ir a <Link href="/">la Home</Link>
      </h1>
      <br />
      <h3>About</h3>
      <p className={'description'}>
        Get started by editing&nbsp;
        <code className={'code'}>pages/about.tsx</code>
      </p>
    </>
  );
}

About.getLayout = function getLayout( page:ReactElement ){
  return(
    <MainLayout>
      <WhiteLayout>
        {page}
      </WhiteLayout>
    </MainLayout>
  )
}