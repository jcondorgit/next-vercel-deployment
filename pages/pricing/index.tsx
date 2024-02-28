import { MainLayout } from "@/components/layouts/MainLayout";
import { WhiteLayout } from "@/components/layouts/WhiteLayout";
import Link from "next/link";
import { ReactElement } from "react";

const index = () => {
    return (
        <>
          <h1 className={ 'title' }>
            Ir a <Link href="/">la Home</Link>
          </h1>
          <br />
          <h3>Pricing</h3>
          <p className={'description'}>
            Get started by editing&nbsp;
            <code className={'code'}>pages/pricing.tsx</code>
          </p>
        </>
      );
}

index.getLayout = function getLayout(page: ReactElement) {
    return (
      <MainLayout>
        <WhiteLayout>{page}</WhiteLayout>
      </MainLayout>
    )
  }

export default index
