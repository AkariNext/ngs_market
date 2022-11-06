import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { Users } from '@ngs-market/db';
import { AuthGuard } from '../auth.guard';
import { CurrentUser } from '../current-user.decorator';
import { CurrentUserInterceptor } from '../current-user.interceptor';

@UseInterceptors(CurrentUserInterceptor)
@Controller('users')
export class UsersController {
  @Get('/:whoami')
  @UseGuards(AuthGuard)
  whoAmi(@CurrentUser() user: Users) {
    console.log(user)
  }
}
