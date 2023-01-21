import { factorial } from './factorial';

export class Permuter {

  public calc(numbersCount: number, combinationLength: number): number {
    return factorial(numbersCount) / factorial(numbersCount - combinationLength);
  }

}
