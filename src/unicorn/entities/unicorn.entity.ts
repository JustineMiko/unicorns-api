
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UnicornDocument = Unicorn & Document;

@Schema()
export class Unicorn extends Document {
  @Prop()
  name: string;

  @Prop()
  color: string;

  @Prop([String])
  powers: string[];
}

export const UnicornSchema = SchemaFactory.createForClass(Unicorn);