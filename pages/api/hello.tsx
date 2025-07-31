import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  _req: NextApiRequest, // underscore to indicate it's unused
  res: NextApiResponse
) {
  res.status(200).json({ message: 'Hello from Next.js API!' });
}
