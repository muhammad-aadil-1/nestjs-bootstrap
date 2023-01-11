import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './cats.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto) {
    return this.catsRepository.save(createCatDto);
  }

  async findAll() {
    return this.catsRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
