import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

// Partial type extends the class and sets all the properties to optional?:
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
