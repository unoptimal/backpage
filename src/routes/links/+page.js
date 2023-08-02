export const load = async ({fetch}) => {
  const fetchLinks = async () => {
    const res = await fetch('/api/links');
    const data = await res.json();
    return data.data; // Ensure data is returned here instead of a Promise
  };

  const data = await fetchLinks(); // Wait for the data to be fetched

  return {
    data: data // Pass the resolved data as the `data` prop
  };

  };