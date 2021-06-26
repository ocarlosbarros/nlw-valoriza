import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository";

class ListTagService {

  async execute() {
    const tagsRepository = getCustomRepository(TagRepository);

    const tags = await tagsRepository.find();

    return tags;
  }
}

export { ListTagService };