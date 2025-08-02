import { describe, expect, it } from 'vitest';
import {
  abs,
  cube_root,
  factorial1,
  factorial,
  sqrt,
  square,
  sum_of_squares,
  fib,
  count_change,
} from '.';

describe('Chapter 01', () => {
  it('프로그래밍의 기본 요소', () => {
    expect(square(21)).toBe(441);
    expect(square(2 + 5)).toBe(49);
    expect(square(square(3))).toBe(81);
    expect(sum_of_squares(3, 4)).toBe(25);
    expect(abs(1)).toBe(1);
    expect(abs(0)).toBe(0);
    expect(abs(-1)).toBe(1);
  });

  it('연습문제 1.3', () => {
    function f(x, y, z) {
      return (
        square(x) +
        square(y) +
        square(z) -
        square(x > y ? (y > z ? z : y) : x > z ? z : x)
      );
    }

    expect(f(1, 2, 3)).toBe(13);
    expect(f(2, 1, 3)).toBe(13);
    expect(f(3, 1, 2)).toBe(13);
    expect(f(3, 2, 1)).toBe(13);
    expect(f(1, 3, 2)).toBe(13);
    expect(f(2, 3, 1)).toBe(13);
  });

  it('예제: 뉴턴방법으로 제곱근 구하기', () => {
    expect(sqrt(9)).toBeCloseTo(3.000009155413138);
    expect(sqrt(100 + 37)).toBeCloseTo(11.704699917758145);
    expect(sqrt(sqrt(2) + sqrt(3))).toBeCloseTo(1.7739279023207892);
    expect(square(sqrt(1000))).toBeCloseTo(1000.000369924366);
  });

  it('연습문제 1.8 세제곱근', () => {
    expect(cube_root(8)).toBeCloseTo(2);
    expect(cube_root(27)).toBeCloseTo(3);
    expect(cube_root(1e-6)).toBeCloseTo(0.01);
    expect(cube_root(1e6)).toBeCloseTo(100);
  });

  it('함수와 과정(함수가 생성하는)', () => {
    expect(factorial1(6)).toBe(720);
    expect(factorial(6)).toBe(720);
    expect(fib(8)).toBe(21);
  });

  it('예제: 잔돈 만들기', () => {
    expect(count_change(100)).toBe(292);
  });
});
