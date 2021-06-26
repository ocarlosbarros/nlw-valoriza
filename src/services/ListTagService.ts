import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository";

class ListTagService {

  async execute() {
    const tagsRepository = getCustomRepository(TagRepository);

    let tags = await tagsRepository.find();
    tags = tags.map((tag) => ({ ...tag, nameCustom: `#${tag.name}` }));

    return tags;
  }
}

export { ListTagService };