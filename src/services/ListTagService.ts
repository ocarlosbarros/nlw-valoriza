import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository";
import { classToPlain } from "class-transformer";
class ListTagService {

  async execute() {
    const tagsRepository = getCustomRepository(TagRepository);

    const tags = await tagsRepository.find();

    return classToPlain(tags);
  }
}

export { ListTagService };