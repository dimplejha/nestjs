import { Controller , Get} from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    dimple():string{
        return "user page"
    }

    @Get("history")
    a():object{
        return {id:1,Name:"sdfghjk"};
    }
}
