import { Request, Response } from 'express';
import { ListTagService } from '../services/ListTagService';

class ListTagController {

  async handle(resquest: Request, response: Response) {
    const listTagsService = new ListTagService();

    const tags = await listTagsService.execute();

    return response.json(tags);
  }
}

export { ListTagController };