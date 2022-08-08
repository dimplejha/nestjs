import { Controller ,Get} from '@nestjs/common';

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


}
