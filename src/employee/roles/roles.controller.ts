import { Controller ,Get,All,Post, Body} from '@nestjs/common';

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
    employeeSalary1(@Body() record:any){
        console.log(record,"===")
        return "please enter the month"
    }


}
