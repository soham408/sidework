import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=jP7iQMjU5YPPeKqwQqo71ZhxpPKUiEuQuCyeBBT3'); // external API URL
    const data = await response.json();

    res.status(200).json(data); // return the data to frontend
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
