import { Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.model';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { AuthModule } from './auth/auth.module';

const env = process.env;

@Module({
	controllers: [],
	providers: [],
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.${env.NODE_ENV}.env`
		}),
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: env.POSTGRES_HOST,
			port: Number(env.POSTGRAS_PORT),
			username: env.POSTGRES_USER,
			password: env.POSTGRES_PASSWORD,
			database: env.POSTGRES_DB,
			models: [User, Role, UserRoles],
			autoLoadModels: true,
		}),
		UsersModule,
		RolesModule,
		AuthModule,
	]
})
export class AppModule {

}