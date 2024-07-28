'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import styles from './page.module.css';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main>
      <div>{t('helloWorld')}</div>
    </main>
  );
}
