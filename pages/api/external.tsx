import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch('https://api.github.com/users/soham408'); // external API URL
    const data = await response.json();

    res.status(200).json(data); // return the data to frontend
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
