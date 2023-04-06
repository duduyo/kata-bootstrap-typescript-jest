type NumberOrError = number | Error;

export default class Bidon {

  addValues(x: number, y: number): NumberOrError {
    if (x > 0 && y > 0) {
      return x + y;
    }

    throw new Error('Parameters must be greater than zero!');
  }
}