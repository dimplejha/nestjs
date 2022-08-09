import { Controller , Get,Body,Post} from '@nestjs/common';
import {BlogsService} from '../blogs/blogs.service'
@Controller('users')
export class UsersController {

    constructor(private blogService :BlogsService){}

    @Get()
    dimple():string{
        return "user page"
    }

    @Get("history")
    a():object{
        return {id:1,Name:"sdfghjk"};
    }

    @Post('userFiles')
    blogAdd(@Body() record:any){
        //console.log(record)
        this.blogService.create(record);
        //return "user passesd gthe follwing data i.es "
    }


    @Get('blog-list')
    async blogList():Promise<any[]>{
        console.log("aaabbb")
        return this.blogService.findData();

    }
}
