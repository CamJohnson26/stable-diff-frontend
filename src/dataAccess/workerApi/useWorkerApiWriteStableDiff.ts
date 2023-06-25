import {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";

export const useWorkerApiWriteStableDiff = ({url}: { url: string }) => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true)

  const {getAccessTokenSilently, isAuthenticated, isLoading: auth0Loading} = useAuth0();


  useEffect(() => {
    const fetchData = async () => {
      if (auth0Loading || !url || !isAuthenticated) {
        return;
      }
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: process.env.REACT_APP_WORKER_API_AUDIENCE,
          }
        })

        console.log('Token: ', token)

        const response = await fetch(`${url}/api/stablediff/generate`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          cache: 'no-store',
        })
        console.log('Response: ', response)
        const textData = await response.json();

        setData(textData);
      } catch (error) {
        console.error('Error:', error);
      }
      setLoading(false)
    };

    void fetchData();
  }, [auth0Loading, url, isAuthenticated, getAccessTokenSilently]); // Empty dependency array means it only runs once when the component mounts

  return {
    data,
    loading
  }
}