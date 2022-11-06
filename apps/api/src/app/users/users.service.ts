import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Users } from "@ngs-market/db";


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: EntityRepository<Users>,
  ){}

    async findOne(userId: string) {
      const user = await this.userRepository.findOne({id: userId})
      return user
    }

    async create(username: string, password: string): Promise<Users> {
      const createUser = new Users()
      createUser.username = username
      createUser.password = password
      await this.userRepository.persistAndFlush(createUser)
      return createUser
    }
}
