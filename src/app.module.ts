import { Module, NestModule ,MiddlewareConsumer,RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { EmployeeModule } from './employee/employee.module';
import { BlogsService } from './blogs/blogs.service';

import {AuthMiddleware} from './middleware/auth';
@Module({
  imports: [EmployeeModule],
  controllers: [AppController, UsersController],
  providers: [AppService, BlogsService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware)
    // .forRoutes('posts')
    .forRoutes({
      path:'posts/post-list',method:RequestMethod.GET
    })
  }


  

}
