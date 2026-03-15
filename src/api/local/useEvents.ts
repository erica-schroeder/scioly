import { fetchLevels } from './eventsApi';

export const useEvents = () => {
  return {
    data: fetchLevels(),
    isLoading: false,
    isError: false,
  };
};