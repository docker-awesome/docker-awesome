export default class IdCard {
  // 18位身份证号码的正则表达式
  private static readonly reg =
    /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$/;

  static readonly verify = (id: string) => {
    if (!id || !this.reg.test(id)) return false;

    let index, sum;

    for (sum = index = 0; index < 17; index++) {
      sum += (Math.pow(2, 17 - index) % 11) * (id.charCodeAt(index) - 48);
    }

    const num = (12 - (sum % 11)) % 11;

    if (num < 10) {
      return num === parseInt(id.charAt(17), 10);
    } else {
      return id.charAt(17).toUpperCase() === 'X';
    }
  };

  static readonly info = (
    id: string,
    options?: {
      separator?: string;
    },
  ) => {
    if (!this.verify(id)) {
      return {
        valid: false,
      };
    }

    const { separator = '-' } = options || {};

    const num = +id.charAt(16);

    const year = id.substring(6, 10);
    const month = id.substring(10, 12);
    const day = id.substring(12, 14);
    const birthday = [year, month, day].join(separator);

    const current = new Date(new Date().setHours(0, 0, 0, 0));
    const birth = new Date(new Date(birthday).setHours(0, 0, 0, 0));
    const birthdayThisYear = new Date(
      new Date(
        current.getFullYear(),
        birth.getMonth(),
        birth.getDate(),
      ).setHours(0, 0, 0, 0),
    );
    const diff = current.getFullYear() - birth.getFullYear();
    const age =
      current.getTime() < birthdayThisYear.getTime() ? diff - 1 : diff;

    return {
      valid: true,
      gender: num % 2,
      birthday,
      age,
    };
  };
}
