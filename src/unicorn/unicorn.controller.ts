import { ApiConsumes, ApiOperation, ApiProduces, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { UnicornService } from './unicorn.service';
import { CreateUnicornDto } from './dto/create-unicorn.dto';
import { Unicorn } from './entities/unicorn.entity';

@ApiTags('unicorn')
@Controller('music')
@ApiProduces('application/json')
@ApiConsumes('application.json')

@Controller('unicorn')
export class UnicornController {
  
  /**
   * @name constructor
   * @param { UnicornService } service
   */
  constructor(private readonly service: UnicornService) {}

  /**
   * @name findAll
   * @description fetch all unicorns.
   * @return { Promise<CreateUnicornDto[]>}
   */
  @HttpCode(HttpStatus.OK)
  @Get()
  @ApiOperation({
    summary: 'Fetch all unicorns',
    description: 'Fetch all unicorns.',
  })
  @ApiResponse({ status: 200, description: 'Unicorns found.' })
  async findAll(): Promise<Unicorn[]> {
    return await this.service.findAll();
  }

  /**
   * @name findById
   * @description fetch one unicorn from id.
   * @param { string } id : Unicorns's id
   * @return { CreateUnicornDto }
   */
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  @ApiOperation({
    summary: 'Fetch one unicorn from id',
    description: 'Fetch one unicorn from id.',
  })
  @ApiResponse({ status: 200, description: 'Unicorn found.' })
  async findById(@Param('id') id: string): Promise<Unicorn> {
    return await this.service.findById(id);
  }

  /**
   * @name create
   * @description create new unicorn.
   * @param { CreateUnicornDto } unicorn : Unicorn's object
   */
  @HttpCode(HttpStatus.CREATED)
  @Post()
  @ApiOperation({
    summary: 'Create new unicorn',
    description: 'Create new unicorn.',
  })
  @ApiResponse({
    status: 200,
    description: 'Unicorn has been successfully created..',
  })
  async create(@Body() unicorn: CreateUnicornDto) {
    try {
      return await this.service.create(unicorn);
    } catch (err) {
      throw new Error(`Error during the creation ${err}`);
    }
  }

  /**
   * @name update
   * @description update unicorn from id.
   * @param { string } id
   * @param { CreateUnicornDto } unicorn : Unicorn's object
   */
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  @ApiOperation({
    summary: 'Update one unicorn from id.',
    description: 'Update one unicorn from id.',
  })
  @ApiResponse({
    status: 200,
    description: 'This unicorn has been successfully updated.',
  })
  async update(@Param('id') id: string, @Body() unicorn: CreateUnicornDto) {
    return await this.service.update(id, unicorn);
  }

  /**
   * @name delete
   * @description delete unicorn from id.
   * @param { string } id : Unicorn's id
   */
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @ApiOperation({
    summary: 'Delete one uniorn from id',
    description: 'Delete one unicorn from id.',
  })
  @ApiResponse({
    status: 200,
    description: 'Unicorn has been successfully deleted.',
  })
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
  
}
