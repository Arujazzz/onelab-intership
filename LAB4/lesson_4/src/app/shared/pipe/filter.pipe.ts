import { Pipe, PipeTransform } from '@angular/core';
import { users } from 'src/app/users';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  users = users;

  transform(value: string, ...args: unknown[]): unknown {
     let result = value;

    const findUser = this.users.find(user => user.username === value);

    if (findUser) {
      result = findUser.fullName;

      // Если есть параметр со значением short, то показываем shortName
      if (args.length && args[0] === 'short') {
        result = findUser.shortName;
      }
      if (args.length && args[0] === 'full') {
        result = findUser.fullName;
      }
    }

    return result;

  }

}
