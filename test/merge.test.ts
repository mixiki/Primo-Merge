import { merge } from '../src/merge';

describe('merge function', () => {
  test('merges three sorted arrays correctly', () => {
    const collection_1 = [1, 4, 7];
    const collection_2 = [2, 5, 8];
    const collection_3 = [9, 6, 3];

    expect(merge(collection_1, collection_2, collection_3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('works with empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
    expect(merge([], [4, 5, 6], [])).toEqual([4, 5, 6]);
    expect(merge([], [], [9, 8, 7])).toEqual([7, 8, 9]);
  });

  test('handles arrays with duplicates', () => {
    const collection_1 = [1, 2, 2, 3];
    const collection_2 = [2, 3, 4];
    const collection_3 = [4, 3, 2];

    expect(merge(collection_1, collection_2, collection_3)).toEqual([1, 2, 2, 2, 2, 3, 3, 3, 4, 4]);
  });

  test('handles negative numbers', () => {
    const collection_1 = [-5, -2, 0];
    const collection_2 = [-3, 1, 4];
    const collection_3 = [5, 2, -1];

    expect(merge(collection_1, collection_2, collection_3)).toEqual([-5, -3, -2, -1, 0, 1, 2, 4, 5]);
  });
});
