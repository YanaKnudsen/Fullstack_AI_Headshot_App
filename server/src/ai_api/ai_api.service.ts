import { Injectable } from '@nestjs/common';
import Replicate from "replicate";
import {CreateAIPhotoDto} from "./dto/createAIPhoto.dto";

@Injectable()
export class AiApiService {
  private replicate:Replicate;
  constructor() {
    this.replicate=new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    });
  }
  async generateImage(generateImg:CreateAIPhotoDto){
    const output = await this.replicate.run(
        "tencentarc/photomaker:ddfc2b08d209f9fa8c1eca692712918bd449f695dabb4a958da31802a9570fe4",
        {
          input: {
            //prompt: "A professional headshot of a woman img as for a Linkedin page",
            prompt: generateImg.prompt,
            num_steps: 50,
            style_name: "Photographic (Default)",
            input_image: generateImg.base64_image,
            num_outputs: 1,
            guidance_scale: 5,
            negative_prompt: "nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry",
            style_strength_ratio: 20
          }
        }
    );
    console.log(output);
    return output;
  }


}
