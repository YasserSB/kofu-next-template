'use client';

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useCallback, useEffect, useState } from 'react';
import { Icons } from '../../atoms';
import { ChangeLocaleOptionLoading } from './ChangeLocaleOption.loading';
import { TChangeLocaleOption } from './ChangeLocaleOption.type';

const locales = [
  { code: 'en', label: 'English', flag: '/flags/united-kingdom.jpeg' },
  { code: 'id', label: 'Bahasa Indonesia', flag: '/flags/indonesia.jpeg' },
];

const getLocaleByCode = (code?: string) => locales.find((l) => l.code === code);

type TSelectedLocale = (typeof locales)[number];

export const ChangeLocaleOption: FC<TChangeLocaleOption> = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [selectedLocale, setSelectedLocale] = useState<
    TSelectedLocale | undefined
  >(undefined);

  useEffect(() => {
    const locale = Cookies.get('locale');
    setSelectedLocale(getLocaleByCode(locale));
  }, []);

  const handleLocaleChange = useCallback(
    (locale: TSelectedLocale) => {
      Cookies.set('locale', locale.code);

      // ganti segment pertama di path jadi locale baru
      const segments = pathname.split('/');
      segments[1] = locale.code;
      const newPath = segments.join('/');

      router.replace(newPath);
    },
    [pathname, router],
  );

  if (!selectedLocale) {
    return <ChangeLocaleOptionLoading />;
  }

  return (
    <Listbox value={selectedLocale} onChange={handleLocaleChange}>
      <div className="relative cursor-pointer">
        <ListboxButton
          type="button"
          className="gap-md flex cursor-pointer items-center"
        >
          <Image src={selectedLocale.flag} width={28} height={17} alt="" />
          <span className="ml-1">{selectedLocale.label}</span>
          <Icons
            name="uilAngleDown"
            className="fill-text-invert min-h-3.5 min-w-3.5"
            size={14}
          />
        </ListboxButton>
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-75"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-2"
        >
          <ListboxOptions className="bg-surface-invert border-border-secondary absolute left-0 z-10 mt-2 min-w-max rounded border shadow-lg">
            {locales.map((locale) => (
              <ListboxOption
                key={locale.code}
                value={locale}
                className="hover:bg-text-invert/5 flex cursor-pointer items-center gap-2 px-4 py-2 whitespace-nowrap"
              >
                <Image src={locale.flag} width={28} height={17} alt="" />
                <span>{locale.label}</span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  );
};
