import { auth, clerkClient } from '@clerk/nextjs/server';
import { getTranslations } from 'next-intl/server';

const Page = async () => {
  const t = await getTranslations('Home');

  const { userId } = auth().protect();

  const user = await clerkClient.users.getUser(userId);

  if (!user) return null;
  return (
    <main>
      <div>{t('helloWorld')}</div>
    </main>
  );
};

export default Page;
