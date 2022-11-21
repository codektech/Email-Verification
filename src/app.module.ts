import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NodemailerController } from './nodemailer/nodemailer.controller';
import { CheckVelidityController } from './check_velidity/check_velidity.controller';

@Module({
  imports: [],
  controllers: [AppController, NodemailerController, CheckVelidityController],
  providers: [AppService],
})
export class AppModule {}
