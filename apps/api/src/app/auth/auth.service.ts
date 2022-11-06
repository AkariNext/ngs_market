import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Users } from '@ngs-market/db';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { UsersService } from '../users/users.service';
const scrypt = promisify(_scrypt);


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: EntityRepository<Users>,
    private usersService: UsersService
  ) { }

  async signup(username: string, password: string) {
    const searchUserResult = await this.usersRepository.findOne({ username })
    if (searchUserResult) throw new HttpException('username is already used', HttpStatus.BAD_REQUEST)
    const salt = randomBytes(8).toString('hex')
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    const sultHash = salt + '.' + hash.toString('hex')
    const user = await this.usersService.create(username, sultHash)
    return user
  }

  async signin(username: string, password: string) {
    const searchUserResult = await this.usersRepository.findOne({username: username})
    if (!searchUserResult) {
      throw new NotFoundException('user not found')
    }

    const [salt, storedHash] = searchUserResult.password.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('incorrept password');
    }

    return searchUserResult
  }
}
