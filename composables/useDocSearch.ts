export const useDocSearch = () => {
  const { $algoliaSearch } = useNuxtApp();

  if (!$algoliaSearch) {
    return {
      hasDocSearch: ref(false),
    };
  }

  return $algoliaSearch;
};
