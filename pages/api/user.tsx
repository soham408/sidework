import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === 'GET') {
    res.status(200).json({ name: 'Soham', role: 'Developer' });
  } else if (method === 'POST') {
    const data = req.body;
    res.status(201).json({ message: 'User created', data });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
