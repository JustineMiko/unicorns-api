import  { Document } from 'mongoose';

export interface IUnicorn extends Document {
    name: string;
    color: string;
    powers: string[];

}