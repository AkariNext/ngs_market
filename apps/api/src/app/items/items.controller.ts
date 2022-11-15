import { Get, Query } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(
        private itemsService: ItemsService
    ) {}

    @Get('/')
    async getItems(@Query('type') type: string) {
        return await this.itemsService.getItems(type)
    }
}
