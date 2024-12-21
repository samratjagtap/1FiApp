import { useState, useEffect } from 'react';
import axios from 'axios';

const GOOGLE_SHEET_API_URL =
  'https://sheets.googleapis.com/v4/spreadsheets/1tPXJij8qrILRpEvg3n9vrgbYNYYp0IbFeORLDw-D9do/values/Sheet1!A1:B6?key=AIzaSyArXR3mgKiQ2gON4TBaUUD5GXaofvNEQkU';

const useGoogleSheetData = () => {
  const [data, setData] = useState<{ metric: string; value: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(GOOGLE_SHEET_API_URL);
        if (response.data && response.data.values) {
          const rows = response.data.values.slice(1); 
          const formattedData = rows.map(([metric, value]: string[]) => ({ metric, value }));
          setData(formattedData);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err: any) {
        console.error('Error fetching Google Sheet data:', err.message);
        setError('Failed to fetch data from Google Sheets');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useGoogleSheetData;
