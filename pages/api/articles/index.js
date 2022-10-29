import {articles} from '../../../data'

const handler = (req, res) => {
    // mocking a fetch, or DB query here
    res.status(200).json(articles);
}

export default handler;
