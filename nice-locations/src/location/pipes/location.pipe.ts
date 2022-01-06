import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class LocationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException(`Name is: '${value}'. It's null.`)
    }
    return value
  }
}
