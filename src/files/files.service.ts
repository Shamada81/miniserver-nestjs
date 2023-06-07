import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import fs from 'fs';
import path from 'path';
import uuid from 'uuid';

@Injectable()
export class FilesService {
	async createFile(file): Promise<string> {
		try {
			const fileName = uuid.v4();
			const filePath = path.resolve(__dirname, '..', 'static');
			if (!fs.existsSync(filePath)) {
				fs.mkdirSync(filePath, { recursive: true });
			}
			fs.writeFileSync(path.join(filePath, fileName), file.buffer)
			return fileName;
		} catch (e) {
			throw new HttpException('An error occurred while writing to file', HttpStatus.INTERNAL_SERVER_ERROR)
		}
	}
}
