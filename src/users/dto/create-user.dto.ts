import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
	@ApiProperty({ example: 'email@email.ru', description: 'email' })
	readonly email: string;
	@ApiProperty({ example: '1234', description: 'password' })
	readonly password: string;
};