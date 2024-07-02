# Roman Numerals Kata

This Kata is about implementing a converter that takes arabic numerals and converts them to roman numerals.

Arabic numerals: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
Roman numerals: I, V, X, L, C, D, M

In case you aren't familiar, here's some examples.

- 1: I
- 2: II
- 3: III
- 4: IV
- 5: V
- 6: VI
- 7: VII
- 8: VIII
- 9: IX
- 10: X
- 40: XL
- 50: L
- 90: XC
- 100: X
- 400: CD
- 500: D
- 900: CM
- 1000: M
- 2024: MMXXIV (M + M = 2000, X + X = 20, IV = 4 => 2024)
- 1990: MCMXC (M = 1000, CM = 900, XC = 90 => 1000 + 900 + 90 = 1990)

The roman numbering system doesn't really support anything larger than 3999, so neither should your implementation.

## The Task
Build a system that can recieve arabic numerals as input (1234) and return the roman numerals string as an output (MCCXXIV)