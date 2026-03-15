import { fetchFlashcardsForSets } from './flashcardsApi';
import { Flashcard } from '@/types/domain';
import { useState } from 'react';

export const useFlashcards = () => {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  const mutateAsync = async (setIds: string[]): Promise<Flashcard[]> => {
    setIsPending(true);
    setIsError(false);
    try {
      return await fetchFlashcardsForSets(setIds);
    } catch (e) {
      setIsError(true);
      return [];
    } finally {
      setIsPending(false);
    }
  };

  return { mutateAsync, isPending, isError };
};