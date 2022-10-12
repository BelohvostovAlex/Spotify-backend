import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    TrackModule,
    MongooseModule.forRoot(
      'mongodb+srv://Alex:alex2308@cluster0.iduhji2.mongodb.net/?retryWrites=true&w=majority',
    ),
    FileModule,
  ],
})
export class AppModule {}
