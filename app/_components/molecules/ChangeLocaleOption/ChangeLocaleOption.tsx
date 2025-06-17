'use client';

import React, { FC, useCallback, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import { useLocalStorage } from '@/app/_hooks';
import { Icons } from '../../atoms';
import { ChangeLocaleOptionLoading } from './ChangeLocaleOption.loading';
import { TChangeLocaleOption } from './ChangeLocaleOption.type';

const locales = [
  { code: 'en', label: 'English', flag: '/flags/united-kingdom.jpeg' },
  { code: 'id', label: 'Bahasa Indonesia', flag: '/flags/indonesia.jpeg' },
];

const getLocaleByCode = (code: string) =>
  locales.find((l) => l.code === code) ?? locales[0];

export const ChangeLocaleOption: FC<TChangeLocaleOption> = () => {
  const [localeCode, setLocaleCode] = useLocalStorage<null | string>(
    'locale',
    null,
  );
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = useCallback(
    (locale: (typeof locales)[number]) => {
      setLocaleCode(locale.code ?? 'en');
      document.cookie = `locale=${locale.code}; path=/; max-age=31536000`;
      const newPath = pathname.replace(/^\/(en|id)/, `/${locale.code}`);
      router.replace(newPath);
    },
    [pathname, setLocaleCode, router],
  );

  const selectedLocale = useMemo(
    () => getLocaleByCode(localeCode ?? 'en'),
    [localeCode],
  );

  if (localeCode === null) {
    return <ChangeLocaleOptionLoading />;
  }

  return (
    <Listbox value={selectedLocale} onChange={handleLocaleChange}>
      <div className="relative w-fit cursor-pointer">
        <ListboxButton
          type="button"
          className="flex cursor-pointer items-center gap-3"
        >
          <Image src={selectedLocale.flag} width={28} height={17} alt="" />
          <span>{selectedLocale.label}</span>
          <Icons name="uilAngleDown" className="fill-gray-900" />
        </ListboxButton>
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-75"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-2"
        >
          <ListboxOptions className="absolute z-10 mt-2 min-w-max rounded border border-gray-50 bg-gray-900 shadow-lg">
            {locales.map((locale) => (
              <ListboxOption
                key={locale.code}
                value={locale}
                className="flex cursor-pointer items-center gap-2 px-4 py-2 whitespace-nowrap hover:bg-gray-100/5"
              >
                <Image src={locale.flag} width={28} height={17} alt="" />
                <span className="text-neutral-100">{locale.label}</span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  );
};
