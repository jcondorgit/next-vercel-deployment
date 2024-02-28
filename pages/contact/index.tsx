import { ReactElement } from "react";
import { MainLayout } from '../../components/layouts/MainLayout';
import { WhiteLayout } from "../../components/layouts/WhiteLayout";
import { NextPageWithLayout } from "../_app";
import Link from "next/link";
import { BlackLayout } from "@/components/layouts/DarkLayout";

const index: NextPageWithLayout = () => {
  return (
    <>
      <h1 className={ 'title' }>
        Ir a <Link href="/">la Home</Link>
      </h1>
      <br />
      <h3>Contact</h3>
      <p className={'description'}>
        Get started by editing&nbsp;
        <code className={'code'}>pages/contact.tsx</code>
      </p>
    </>
  );
}

index.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <BlackLayout>{page}</BlackLayout>
    </MainLayout>
  )
}

export default index;