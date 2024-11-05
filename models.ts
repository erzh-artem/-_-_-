import { prop, Ref } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

class UserModel extends TimeStamps {
  @prop({ unique: true, maxlength: 50 })
  email: string;

  @prop({ maxlength: 30 })
  password: string;

  @prop({ default: false })
  isAdmin: boolean;

  @prop({ default: [], ref: () => CourseModel })
  favourites?: Ref<CourseModel>[];
}

class CourseModel extends TimeStamps {
  @prop({ maxlength: 100 })
  title: string;

  @prop({ maxlength: 1000 })
  description: string;

  @prop({ maxlength: 50 })
  author: string;

  @prop({ default: [], ref: () => MaterialModel })
  materials?: Ref<MaterialModel>[];

  @prop({ default: [], ref: () => TaskModel })
  tasks?: Ref<TaskModel>[];
}

class MaterialModel extends TimeStamps {
  @prop({ maxlength: 100 })
  title: string;

  @prop({ maxlength: 30 })
  type: string;

  @prop({ maxlength: 300 })
  link: string;

  @prop({ ref: () => CourseModel })
  courseId: Ref<CourseModel>;
}

class TaskModel extends TimeStamps {
  @prop({ maxlength: 100 })
  title: string;

  @prop({ maxlength: 1000 })
  description: string;

  @prop()
  deadline: Date;

  @prop({ ref: () => CourseModel })
  courseId: Ref<CourseModel>;
}

class GradeModel extends TimeStamps {
  @prop({ ref: () => TaskModel })
  taskId: Ref<TaskModel>;

  @prop({ ref: () => UserModel })
  userId: Ref<UserModel>;

  @prop()
  grade: number;
}
