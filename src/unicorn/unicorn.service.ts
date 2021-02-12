import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUnicornDto } from './dto/create-unicorn.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Unicorn, UnicornDocument } from './entities/unicorn.entity';

@Injectable()
export class UnicornService {

  constructor(@InjectModel(Unicorn.name) 
  private unicornModel: Model<UnicornDocument>
  ) {}

  private unicorns: CreateUnicornDto[] = [
    {
      id: 1,
      name: 'Star',
      color: 'yellow',
      powers: ['throwing stars in the sky', 'fly', 'speed'],
    },

    {
      id: 2,
      name: 'Cherry',
      color: 'red',
      powers: ['creates lollipops', 'spread love', 'speed'],
    },

    {
      id: 3,
      name: 'White Queen',
      color: 'white',
      powers: ['controlls weather', 'fly', 'freeze'],
    },

    {
      id: 4,
      name: 'Pink lady',
      color: 'pink',
      powers: ['spreading perfume', 'fly'],
    },

    {
      id: 5,
      name: 'Badass',
      color: 'black',
      powers: ['horn hitting', 'strengh', 'speed', 'fly']
    },

  ];


  /**
   * @name findById
   * @description fetch one unicorn from id.
   * @param { string } id : Unicorn's id
   * @return { Promise<Unicorn> }
   */
  
  async findById(id: string): Promise<Unicorn> {
    const result: Unicorn = await this.unicornModel
    .findOne({_id: id })
    .exec();

    if (!result) {
      throw new NotFoundException(`Unicorn ${id} not found.`);
    }

    return result;
  }

  async findAll(): Promise<Unicorn[]> {
    return this.unicornModel.find().exec();
  }

  /**
   * @name create
   * @description create new unicorn.
   * @param { CreateUnicornDto } unicorn : Unicorn's object
   */
  async create(unicorn: CreateUnicornDto) {
    const model: Unicorn = await new this.unicornModel()
    return model.save();
  }
  /**
   * @name update
   * @description update one unicorn from id.
   * @param { string } id : Unicorn's id
   * @param { CreateUnicornDto } unicorn : Unicorn's object
   */
  async update(id: string, unicorn: CreateUnicornDto) {
    const result: Unicorn = await this.unicornModel
    .findOneAndUpdate({_id: id}, { $set: unicorn }, { new: true })
    .exec();

    if (result) {
      throw new NotFoundException(`Unicorn #${id} not found`);
    }
    return result;
  }

  /**
   * @name delete
   * @description delete one unicorn from id.
   * @param { string } id : Unicorn's id
   */
  async delete(id: string) {
    const model: Unicorn = await this.findById(id);
    return model.remove();

    }

}