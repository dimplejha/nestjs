import { Controller ,Get,All,Post, Body,Param} from '@nestjs/common';

@Controller('roles')
export class RolesController {
    @Get()
    userRoles(){
        return "hi am user role function"
    }

    @Get("userData")
    userRolesData(){
        return "hi am userData function"
    }


    @All("employeeSalary")
    employeeSalary(){
        return "please enter the month"
    }


    @Post("employeeSalary1")
    employeeSalary1(@Body() record:any):string{
        console.log(record,"===")
        return "please enter the month"
    }


    @Get("month/:date")
    monthDate(@Param() a:any){
        console.log("hii is is" + a.date)
        return "hii the date is " + a.date


    }


}
