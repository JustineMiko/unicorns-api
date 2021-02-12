import { IsString, IsNumber, IsOptional, isNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUnicornDto {

    @ApiProperty({type: Number})
    @IsOptional()
    @IsNumber()
    readonly id?: number;
  
    @ApiProperty({type: String})
    @isNotEmpty()
    @IsString()
    readonly name: string;
  
    @ApiProperty({type: String})
    @isNotEmpty()
    @IsString()
    readonly color: string;
  
    @ApiProperty({type: String, isArray: true})
    @IsString({ each: true })
    readonly powers: string[];
}
