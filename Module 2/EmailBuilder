class Validator {
  static checkEmail(email: string) {
    if (email.length === 0) throw new Error('Enter your email address');
    const validation = /^\S+@\S+\.\S+$/.test(email);
    if (!validation) throw new Error('Enter valid email');
  }
  static checkArrayWithArrays(arrays: string[]) {
    if (arrays.length === 0) throw new Error('Enter array with emails');
    const regexp = /^\S+@\S+\.\S+$/;
    const validation = !arrays.every((el) => regexp.test(el));
    if (validation) throw new Error('Enter array with emails');
  }
}

interface IEmailBuilder {
  setFrom(from: string): void;
  setTo(to: string): void;
  setCC(to: string[]): void;
  setBCC(to: string[]): void;
  setHtml(to: string): void;
  build(): void;
}

// konstruktor teleskopowy
type input = { type: 'CC'; payload: string[] };
const fn = (input: input) => {};
fn({ type: 'CC', payload: ['abc'] });

export class EmailBuilder implements IEmailBuilder {
  private from: string | null = null;
  private to: string | null = null;
  private cc: string[] | null = null;
  private bcc: string[] | null = null;
  private html: string | null = null;

  constructor() {}

  public setFrom(from: string) {
    Validator.checkEmail(from);
    this.from = from;
    return this;
  }

  public setTo(to: string) {
    Validator.checkEmail(to);
    this.to = to;
    return this;
  }

  public setCC(cc: string[]) {
    Validator.checkArrayWithArrays(cc);
    this.cc = cc;
    return this;
  }
  public setBCC(bcc: string[]) {
    Validator.checkArrayWithArrays(bcc);
    this.bcc = bcc;
    return this;
  }

  public setHtml(html: string) {
    if (html.length === 0) throw new Error('Enter message');
    this.html = html;
    return this;
  }
  public build() {
    const output = {
      from: this.from,
      to: this.to,
      cc: this.cc,
      bcc: this.bcc,
      html: this.html,
    };

    this.reset();

    return output;
  }
  private reset() {
    this.from = '';
    this.to = '';
    this.bcc = [];
    this.cc = [];
    this.html = '';
  }
}
const email = new EmailBuilder();

email
  .setFrom('blewa@sadsa.pl')
  .setTo('asdas@asdas.pl')
  .setBCC(['asdsa@asd.pl', 'asdasdsa@gmail.com'])
  .setCC(['asdsa@asd.pl', 'asdasdsa@gmail.com'])
  .setHtml('asdasdasdasdas');

console.log(email.build());
console.log(email.build());
