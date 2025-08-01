/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from 'react-hot-toast';
import { getPromoCodes } from '../queries/cartQueries';
import { useQuery } from '@tanstack/react-query';

export const usePromoCodes = () => {
  const list: Array<{ value: string; label: string }> = [];
  const { data, isLoading, isError } = useQuery({
    queryKey: ['promos', 'list'],
    queryFn: async () => {
      try {
        const data = await getPromoCodes();
        return data;
      } catch (error: any) {
        toast.error(error?.message);
      }
    },
    ...{
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  });
  if (isError) {
    return { list };
  } else {
    const getSelectData = (
      data: Array<{ name: string; id: string; status: string }>
    ) => {
      const list: Array<{ value: string; label: string }> = [];
      if (data?.length == 0) return [];
      data?.map((item) => list.push({ value: item.id, label: item.name }));
      return list;
    };

    return {
      list: isLoading ? [] : getSelectData(data),
    };
  }
};
