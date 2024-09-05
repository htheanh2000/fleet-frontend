import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FetchUserInfo = () => {
    const { jwtToken } = useParams();
    console.log("Hello");
    useEffect(() => {
      async function fetchUserData() {
        try {
          const response = await fetch('http://localhost:4000/api/auth/profile', {
            headers: {
              'Authorization': `Bearer ${jwtToken}`
            }
          });
          const data = await response.json();
          localStorage.setItem('jwt', jwtToken);
          localStorage.setItem('user', JSON.stringify(data));
        } catch (error) {
          console.error('Error fetching user info:', error);
        }
      }
  
      fetchUserData();
    }, [jwtToken]);
  
    return <div>Loading user info...</div>;
  }

  export default FetchUserInfo;