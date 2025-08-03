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
  expt_recursive,
  expt_iter,
  fast_expt,
  fast_expt_iter,
  times,
  sum_integers1,
  sum_cubes1,
  sum_cubes,
  sum_integers,
  pi_sum,
  pi_approx,
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

  it('연습문제 1.11', () => {
    function f_iterative(n) {
      function impl(a, b, c, count) {
        return count === 0 ? a : impl(a + 2 * b + 3 * c, a, b, count - 1);
      }
      return n < 3 ? n : impl(2, 1, 0, n - 2);
    }

    function f_recursive(n) {
      return n < 3
        ? n
        : f_recursive(n - 1) + 2 * f_recursive(n - 2) + 3 * f_recursive(n - 3);
    }

    expect(f_iterative(10)).toBe(1892);
    expect(f_recursive(10)).toBe(1892);
  });

  it('연습문제 1.12', () => {
    function pascal_triangle(row, index) {
      return index > row
        ? false
        : index === 1 || index === row
          ? 1
          : pascal_triangle(row - 1, index - 1) +
            pascal_triangle(row - 1, index);
    }

    expect(pascal_triangle(3, 2)).toBe(2);
    expect(pascal_triangle(5, 2)).toBe(4);
  });

  it('거듭제곱', () => {
    expect(expt_recursive(2, 10)).toBe(1024);
    expect(expt_iter(2, 10)).toBe(1024);
    expect(fast_expt(2, 10)).toBe(1024);
    expect(fast_expt_iter(2, 10)).toBe(1024);
    expect(times(2, 10)).toBe(20);
  });

  it('고차 함수를 이용한 추상의 정식화', () => {
    expect(sum_integers1(1, 3)).toBe(6);
    expect(sum_cubes1(1, 3)).toBe(36);
    expect(sum_cubes(1, 3)).toBe(36);
    expect(sum_integers(1, 5)).toBe(15);
    expect(8 * pi_sum(1, 1000)).toBeCloseTo(3.138582655);
    expect(factorial(5)).toBe(120);
    expect(pi_approx(1000)).toBeCloseTo(3.14);
  });
});
