import { IsEmail, IsNotEmpty, IsNumberString, ValidateNested } from "class-validator";
import { CreateAdressDTO } from "./CreateAddress.dto";
import { Type } from "class-transformer";

export class CreateCustomerDTO {
  @IsNumberString()
  @IsNotEmpty()
  id: number;

  @IsEmail()
  email: string;
  
  @IsNotEmpty()
  name: string;

  @ValidateNested()
  @Type(() => CreateAdressDTO)
  @IsNotEmpty()
  address: CreateAdressDTO;
}