import { Controller, Get } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';


@Controller('check-velidity')
export class CheckVelidityController {

    @Get()
    isEmailValid(@Query('email') email:any){
        
        var emailExistence = require('email-existence');

        emailExistence.check(email, function(err: any,res: string){
            console.log('res: '+res);
        });

    }
}
