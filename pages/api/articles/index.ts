import type { NextApiRequest, NextApiResponse } from 'next'
import {articles} from '../../../data'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    // mocking a fetch, or DB query here
    res.status(200).json(articles);
}

export default handler;
