import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentsRepository } from './comments.repository';

@Injectable()
export class CommentsService {
  constructor(private readonly commentsRepository: CommentsRepository) {}

  async create(createCommentDto: CreateCommentDto) {
    const createOne = await this.commentsRepository.createOne(createCommentDto);
    return createOne;
  }

  async findOne(id: string) {
    const findOne = await this.commentsRepository.findOne(id);
    return { message: "success", item: findOne };
  }

  async findAll() {
    const findAll = await this.commentsRepository.findAll();
    return findAll?.length ? { message: "success" ,items: findAll }: {message:" no data found"};;
  }
}
