import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
	@ApiProperty({ example: 'email@email.ru', description: 'email' })
	@IsString({ message: 'Only string' })
	@IsEmail({}, { message: 'Incorrect email' })
	readonly email: string;

	@IsString({ message: 'Only string' })
	@Length(4, 16, { message: "4 to 16 characters" })
	@ApiProperty({ example: '1234', description: 'password' })
	readonly password: string;
};