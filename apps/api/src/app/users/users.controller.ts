import { Controller, Get, Param, UseGuards, UseInterceptors } from '@nestjs/common';
import { Users } from '@ngs-market/db';
import { AuthGuard } from '../auth.guard';
import { CurrentUser } from '../current-user.decorator';
import { CurrentUserInterceptor } from '../current-user.interceptor';
import { RemovePasswordInterceptor } from '../remove-pass';
import { UsersService } from './users.service';

@UseInterceptors(CurrentUserInterceptor)
@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService
  ) {}
  @Get('/whoami')
  @UseGuards(AuthGuard)
  whoAmi(@CurrentUser() user: Users) {
    console.log(user)
  }

  @Get(':userId')
  async getProfile(@Param('userId') userId: string) {
    return await this.usersService.findOne(userId)
  }
}
