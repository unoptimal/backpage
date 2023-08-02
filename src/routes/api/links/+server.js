import axios from 'axios';
import Papa from 'papaparse';

export async function GET() {
  try {
    const response = await axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vSa2FsdXf5lcUEAey6GwGsdDBKup2NZ9JIPAdp8utqucZtA8VlaecUO8tNhdNCB7EoojHJHu-DpoooO/pub?gid=0&single=true&output=csv');
    const data = Papa.parse(response.data, { header: true });
    const storedData = data.data;

    return new Response(JSON.stringify({ data: storedData }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', 
      },
    });
  } catch (error) {
    console.error('Error fetching data', error);
    return new Response(JSON.stringify({ error: 'Error fetching data' }), {
      status: 500,
    });
  }
}
