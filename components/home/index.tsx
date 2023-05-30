import { Fragment } from 'react';
import { NextSeo } from 'next-seo';
import { withoutAuth } from 'auth';

export default function Home() {
   return (
      <Fragment>
         <NextSeo description='Home Page' title='Home Page' />

         <main className='m-10 text-5xl font-semibold text-blue-500'>
            Hello World
         </main>
      </Fragment>
   );
}

export const getServerSideProps = withoutAuth(async () => ({ props: {} }));
