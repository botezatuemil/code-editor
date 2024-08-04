import { auth, clerkClient } from '@clerk/nextjs/server';
import { getTranslations } from 'next-intl/server';

const Page = async () => {
  const t = await getTranslations('Home');

  const { userId } = auth().protect();

  const user = await clerkClient.users.getUser(userId);

  if (!user) return null;
  return (
    <main>
      <p>{t('helloWorld')}</p>
    </main>
  );
};

export default Page;
