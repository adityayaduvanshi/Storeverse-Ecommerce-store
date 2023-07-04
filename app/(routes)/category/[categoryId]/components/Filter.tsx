'use client';

import qs from 'query-string';

import { Color, Size } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import Button from '@/components/ui/button';
import { cn } from '@/libs/utils';

interface FilterProps {
  valueKey: string;
  data: Size[] | Color[];
  name: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );
    router.push(url);
  };
  return (
    <div className="mb-8 ">
      <h3 className="font-semibold text-lg">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((item) => (
          <div key={item.id} className="flex items-center">
            <Button
              onClick={() => onClick(item.id)}
              className={cn(
                'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
                selectedValue === item.id && 'bg-black text-white'
              )}
            >
              {item.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
