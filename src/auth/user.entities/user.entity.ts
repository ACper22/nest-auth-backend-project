import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";




@Schema()
export class User {
    // Crear modelo y esquema de como lucen los objetos en DB "Usuarios"
    
    _id?: string;

    @Prop({unique: true, required: true })
    email: string;
   
    @Prop({ required: true })
    name: string;

    @Prop({ minlength: 6, required: true })
    password?: string;

    @Prop({ default: true })
    isActve: boolean;

    @Prop({ type: [String], default: ['User']  }) // User, Admin, etc.
    roles: string[];


}


export const UserSchema = SchemaFactory.createForClass(User);