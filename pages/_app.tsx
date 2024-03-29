/* import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  //return <Component {...pageProps} />;

} */
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import {MainLayout} from '../components/layouts/MainLayout'
import { WhiteLayout } from '@/components/layouts/WhiteLayout';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout ) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
 
  return getLayout(<Component {...pageProps} />)
}