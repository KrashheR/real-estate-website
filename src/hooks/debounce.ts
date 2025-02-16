import { useRef } from 'react';

export default function useDebouncedFunction<
  T extends (...args: any[]) => void,
>(func: T, delay: number): (...args: Parameters<T>) => void {
  const ref = useRef<NodeJS.Timeout | null>(null);

  return (...args: Parameters<T>) => {
    if (ref.current) {
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
