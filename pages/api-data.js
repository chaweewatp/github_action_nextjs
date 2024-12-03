import { useEffect, useState } from 'react';

const ApiDataPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from Golang API
    fetch('http://localhost:8080/api/hello')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Error loading data</p>;

  return (
    <div>
      <h1>API Data</h1>
      <p>Message: {data.message}</p>
    </div>
  );
};

export default ApiDataPage;

