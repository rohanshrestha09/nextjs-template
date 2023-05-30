import { Fragment } from 'react';
import { NextSeo } from 'next-seo';
import { useAuth, withAuth } from 'auth';
import { getAuth } from 'api/auth';
import { queryKeys } from 'utils';
import { AUTH } from 'constants/queryKeys';

export default function Home() {
   const { authUser } = useAuth();

   return (
      <Fragment>
         <NextSeo description='Profile Page' title='Profile' />

         <main className='m-10 text-5xl font-semibold text-blue-500'>
            Hello {authUser?.name}
         </main>
      </Fragment>
   );
}

export const getServerSideProps = withAuth(async (_, queryClient) => {
   await queryClient.prefetchQuery({
      queryFn: getAuth,
      queryKey: queryKeys(AUTH).details(),
   });

   return {
      props: {},
   };
});
