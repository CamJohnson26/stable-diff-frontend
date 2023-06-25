import {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import axios from "axios";

export const useWorkerApiAuthorizedPost = ({url}: { url: string }) => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true)

  const {getAccessTokenSilently, isAuthenticated, isLoading: auth0Loading} = useAuth0();


    const postData = async (body: unknown) => {
      if (auth0Loading || !url || !isAuthenticated) {
        return;
      }
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: process.env.REACT_APP_WORKER_API_AUDIENCE,
          }
        })

        const response = await axios.post(`${url}/api/stablediff/generate`,body, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })

        return response.data
      } catch (error) {
        console.error('Error:', error);
      }
      setLoading(false)
    };
    return {
      postData,
      loading
    }
}