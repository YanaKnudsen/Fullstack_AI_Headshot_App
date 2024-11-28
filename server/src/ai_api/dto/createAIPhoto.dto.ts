import {IsString} from "class-validator";

export class CreateAIPhotoDto {
    @IsString()
    prompt:string;

    @IsString()
    base64_image:string;
}