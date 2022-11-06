import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(
        private itemsService: ItemsService
    ) {}

    @Get('/')
    async getItems() {
        return await this.itemsService.getItems()
    }
}
