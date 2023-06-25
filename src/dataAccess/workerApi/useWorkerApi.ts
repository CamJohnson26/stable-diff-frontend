import {useEffect, useState} from "react";

export const useWorkerApi = ({url}: { url: string }) => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          cache: 'no-store',
        });
        const textData = await response.text();
        setData(textData);
      } catch (error) {
        console.error('Error:', error);
      }
      setLoading(false)
    };

    void fetchData();
  }, [url]); // Empty dependency array means it only runs once when the component mounts

  return {
    data,
    loading
  }
}