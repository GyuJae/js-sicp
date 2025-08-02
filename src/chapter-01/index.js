export function square(x) {
  return x * x;
}

export function sum_of_squares(x, y) {
  return square(x) + square(y);
}

export function abs(x) {
  return x > 0 ? x : x === 0 ? 0 : -x;
}

export function greater_or_equal(x, y) {
  return x > y || x == y; // return !( x < y );
}

export function sqrt(x) {
  const relative_tolerance = 0.0001;

  function square(n) {
    return n * n;
  }

  function is_good_enough(guess) {
    return abs(square(guess) - x) < guess * relative_tolerance;
  }

  function improve(guess) {
    return (guess + x / guess) / 2;
  }

  function sqrt_iter(guess) {
    return is_good_enough(guess) ? guess : sqrt_iter(improve(guess));
  }

  return sqrt_iter(1.0);
}

export function cube_root(x) {
  const relative_tolerance = 0.0001;

  function cube(n) {
    return n * n * n;
  }

  function is_good_enough(guess) {
    return abs(cube(guess) - x) < guess * relative_tolerance;
  }

  function improve(guess) {
    return (x / (guess * guess) + 2 * guess) / 3;
  }

  function cube_root_iter(guess) {
    return is_good_enough(guess) ? guess : cube_root_iter(improve(guess));
  }

  return cube_root_iter(1.0);
}

// 선형 재귀적 과정
export function factorial1(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}

// 선형 반복적 과정
export function factorial(n) {
  function iter(product, counter) {
    return counter > n ? product : iter(counter * product, counter + 1);
  }
  return iter(1, 1);
}

export function fib(n) {
  function iter(a, b, count) {
    return count === 0 ? b : iter(a + b, a, count - 1);
  }
  return iter(1, 0, n);
}

export function count_change(amount) {
  function cc(amount, kinds_of_coins) {
    return amount === 0
      ? 1
      : amount < 0 || kinds_of_coins === 0
        ? 0
        : cc(amount, kinds_of_coins - 1) +
          cc(amount - first_denomination(kinds_of_coins), kinds_of_coins);
  }

  function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1
      ? 1
      : kinds_of_coins === 2
        ? 5
        : kinds_of_coins === 3
          ? 10
          : kinds_of_coins === 4
            ? 25
            : kinds_of_coins === 5
              ? 50
              : 0;
  }

  return cc(amount, 5);
}
