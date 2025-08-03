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

export function expt_recursive(b, n) {
  return n === 0 ? 1 : b * expt_recursive(b, n - 1);
}

export function expt_iter(b, n) {
  function iter(b, counter, product) {
    return counter === 0 ? product : iter(b, counter - 1, product * b);
  }

  return iter(b, n, 1);
}

export function fast_expt(b, n) {
  function is_even(n) {
    return n % 2 === 0;
  }

  function square(x) {
    return x * x;
  }

  return n === 0
    ? 1
    : is_even(n)
      ? square(fast_expt(b, n / 2))
      : b * fast_expt(b, n - 1);
}

export function fast_expt_iter(b, n) {
  function is_even(n) {
    return n % 2 === 0;
  }

  function iter(a, b, n) {
    return n === 0
      ? a
      : is_even(n)
        ? iter(a, b * b, n / 2)
        : iter(a * b, b, n - 1);
  }

  return iter(1, b, n);
}

export function fast_times(a, b) {
  function double(x) {
    return x + x;
  }

  function halve(x) {
    return x / 2;
  }

  function is_even(n) {
    return n % 2 === 0;
  }

  return b === 1
    ? a
    : a === 0 || b === 0
      ? 0
      : is_even(b)
        ? double(fast_times(a, halve(b)))
        : a + fast_times(a, b - 1);
}

export function times(a, b) {
  function double(x) {
    return x + x;
  }

  function half(x) {
    return x / 2;
  }

  function is_even(n) {
    return n % 2 === 0;
  }

  function iter(total, a, b) {
    return b === 1
      ? total + a
      : a === 0 || b === 0
        ? 0
        : is_even(b)
          ? iter(total, double(a), half(b))
          : iter(total + a, a, b - 1);
  }

  return iter(0, a, b);
}

export function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

export function sum_integers1(a, b) {
  return a > b ? 0 : a + sum_integers1(a + 1, b);
}

function cube(n) {
  return n * n * n;
}

export function sum_cubes1(a, b) {
  return a > b ? 0 : cube(a) + sum_cubes1(a + 1, b);
}

export function sum(term, a, next, b) {
  return a > b ? 0 : term(a) + sum(term, next(a), next, b);
}

export function sum_cubes(a, b) {
  function inc(n) {
    return n + 1;
  }
  return sum(cube, a, inc, b);
}

export function sum_integers(a, b) {
  function identity(x) {
    return x;
  }

  function inc(n) {
    return n + 1;
  }
  return sum(identity, a, inc, b);
}

export function pi_sum(a, b) {
  function term(x) {
    return 1 / (x * (x + 2));
  }

  function next(x) {
    return x + 4;
  }

  return sum(term, a, next, b);
}

function inc(k) {
  return k + 1;
}

// Simpson’s Rule을 이용한 적분 함수
export function simpsons_rule_integral(f, a, b, n) {
  function helper(h) {
    function y(k) {
      return f(k * h + a); // yₖ = f(a + k * h)
    }

    // 각 항의 가중치 계산
    function term(k) {
      return k === 0 || k === n
        ? y(k) // 양 끝은 1배
        : k % 2 === 0
          ? 2 * y(k) // 짝수 번째는 2배
          : 4 * y(k); // 홀수 번째는 4배
    }

    // sum(term, 0, inc, n)은 k = 0부터 n까지 term(k)를 모두 더함
    return sum(term, 0, inc, n) * (h / 3);
  }

  return helper((b - a) / n); // h = (b - a) / n
}

export function sum_iter(term, a, next, b) {
  function iter(a, result) {
    return a > b ? result : iter(next(a), result + term(a));
  }
  return iter(a, 0);
}

function product_r(term, a, next, b) {
  return a > b ? 1 : term(a) * product_r(term, next(a), next, b);
}

function product_i(term, a, next, b) {
  function iter(a, result) {
    return a > b ? result : iter(next(a), term(a) * result);
  }
  return iter(a, 1);
}

export function factorial(n) {
  return product_i(
    (x) => x,
    1,
    (x) => x + 1,
    n
  );
}

export function pi_approx(n) {
  const numerator = product_i(
    (x) => x * 2 * (x * 2),
    1,
    (x) => x + 1,
    n
  );
  const denominator = product_i(
    (x) => (2 * x + 1) * (2 * x + 1),
    1,
    (x) => x + 1,
    n
  );
  return (numerator / denominator) * 4;
}

function accumulate_r(combiner, null_value, term, a, next, b) {
  return a > b
    ? null_value
    : combiner(
        term(a),
        accumulate_r(combiner, null_value, term, next(a), next, b)
      );
}

function sum_r(term, a, next, b) {
  function plus(x, y) {
    return x + y;
  }
  return accumulate_r(plus, 0, term, a, next, b);
}

function product_r(term, a, next, b) {
  function times(x, y) {
    return x * y;
  }
  return accumulate_r(times, 1, term, a, next, b);
}

function accumulate_i(combiner, null_value, term, a, next, b) {
  function iter(a, result) {
    return a > b ? result : iter(next(a), combiner(term(a), result));
  }
  return iter(a, null_value);
}

function sum_i(term, a, next, b) {
  function plus(x, y) {
    return x + y;
  }
  return accumulate_i(plus, 0, term, a, next, b);
}

function product_i(term, a, next, b) {
  function times(x, y) {
    return x * y;
  }
  return accumulate_i(times, 1, term, a, next, b);
}

function filtered_accumulate(combiner, null_value, term, a, next, b, filter) {
  return a > b
    ? null_value
    : filter(a)
      ? combiner(
          term(a),
          filtered_accumulate(
            combiner,
            null_value,
            term,
            next(a),
            next,
            b,
            filter
          )
        )
      : filtered_accumulate(
          combiner,
          null_value,
          term,
          next(a),
          next,
          b,
          filter
        );
}

// a ~ b 사이의 소수들의 제곱을 더함
function sum_of_squares_of_primes(a, b) {
  return filtered_accumulate(
    (x, y) => x + y, // combiner: 덧셈
    0, // null_value: 덧셈이므로 0
    square, // term: 제곱
    a, // 시작 값
    inc, // 다음 항
    b, // 끝 값
    is_prime // 필터 조건: 소수인지
  );
}

// n보다 작은 서로소 수들의 곱
function product_of_relatively_prime(n) {
  return filtered_accumulate(
    (x, y) => x * y, // combiner: 곱셈
    1, // null_value: 곱셈이므로 1
    (x) => x, // term: 항 자체
    1, // 시작 값 (0 제외)
    inc, // 다음 항
    n - 1, // n 미만까지
    (x) => gcd(x, n) === 1 // 필터 조건: 서로소 여부
  );
}

function close_enough(x, y) {
  return abs(x - y) < 0.001;
}

function error(message) {
  throw new Error(message);
}

function half_interval_method(f, a, b) {
  const a_value = f(a);
  const b_value = f(b);
  return negative(a_value) && positive(b_value)
    ? search(f, a, b)
    : negative(b_value) && positive(a_value)
      ? search(f, b, a)
      : error('values are not of opposite sign');
}

const tolerance = 0.00001;
function fixed_point(f, first_guess) {
  function close_enough(x, y) {
    return abs(x - y) < tolerance;
  }
  function try_with(guess) {
    const next = f(guess);
    return close_enough(guess, next) ? next : try_with(next);
  }
  return try_with(first_guess);
}

function sqrt(x) {
  return fixed_point((y) => x / y, 1);
}

function compose(f, g) {
  return (x) => f(g(x));
}

function repeated(f, n) {
  return n === 0 ? (x) => x : compose(f, repeated(f, n - 1));
}

function iterative_improve(is_good_enough, improve) {
  function iterate(guess) {
    return is_good_enough(guess) ? guess : iterate(improve(guess));
  }
  return iterate;
}

function sqrt(x) {
  return iterative_improve(
    (guess) => Math.abs(guess * guess - x) < 0.00001,
    (guess) => (guess + x / guess) / 2
  )(1.0);
}

function fixed_point(f, first_guess) {
  return iterative_improve(
    (guess) => Math.abs(guess - f(guess)) < 0.00001,
    f
  )(first_guess);
}
