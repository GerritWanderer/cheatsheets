# TypeScript Cheatsheet

> Core syntax: types, interfaces, generics, and utility types.

<!-- statusbar: TS | tsc --strict | tsconfig.json | type reference -->
<!-- footer: unknown → narrow → known — never trust, always check -->
<!-- layout:
  4-column grid.
  row 1: Basic Types, Interfaces & Type Aliases, Functions, Generics
  row 2: Union, Intersection & Narrowing (wide, full width)
  row 3: Utility Types (wide, full width)
  row 4: Classes (wide, full width)
  row 5: Modules & Misc (wide, full width)
-->
<!-- source: compiled from the TypeScript handbook, no personal config -->

## Basic Types

| Keys | Action |
|---|---|
| `string` `number` `boolean` | primitive types |
| `string[]` | array of a type |
| `[string, number]` | tuple: fixed length, fixed types |
| `enum Color { Red, Green }` | enum type |
| `any` | disables type checking |
| `unknown` | safe top type — must narrow before use |
| `never` | a value that never occurs |
| `void` | no meaningful return value |

## Interfaces & Type Aliases

| Keys | Action |
|---|---|
| `interface X { a: string }` | object shape (interface) |
| `type X = { a: string }` | object shape (type alias) |
| `interface B extends A` | interface extends another |
| `a?: string` | optional property |
| `readonly a: string` | read-only property |
| `[key: string]: number` | index signature |
| `interface X { (a: string): void }` | callable interface |

## Functions

| Keys | Action |
|---|---|
| `function f(a: string): number` | typed parameter and return |
| `(a: string) => number` | arrow function type |
| `a?: string` | optional parameter |
| `a: string = "x"` | default parameter |
| `...rest: string[]` | rest parameter |
| `function f(): void` | no return value |
| `function f(): never` | never returns (throws or loops) |
| `function f(a: unknown): a is Foo` | type predicate (type guard) |

## Generics

| Keys | Action |
|---|---|
| `function f<T>(a: T): T` | generic function |
| `class Box<T> { value: T }` | generic class |
| `<T extends object>` | constrain generic to a shape |
| `<T = string>` | default generic type |
| `Map<string, number>` | generic type instantiation |
| `<T, K extends keyof T>` | constrain generic to keys of another |

## Union, Intersection & Narrowing

| Keys | Action |
|---|---|
| `string \| number` | union: one of several types |
| `A & B` | intersection: combines all members |
| `typeof x === "string"` | narrow via typeof guard |
| `x instanceof Foo` | narrow via instanceof guard |
| `"a" in x` | narrow via property presence |
| `if (x) { ... }` | narrow by truthiness |
| `{ kind: "a" } \| { kind: "b" }` | discriminated union |
| `x as Foo` | type assertion (trust override) |

## Utility Types

| Keys | Action |
|---|---|
| `Partial<T>` | all properties optional |
| `Required<T>` | all properties required |
| `Readonly<T>` | all properties read-only |
| `Pick<T, "a" \| "b">` | subset of properties |
| `Omit<T, "a">` | all properties except listed |
| `Record<string, number>` | object type with key/value types |
| `Exclude<T, U>` | remove members assignable to U |
| `Extract<T, U>` | keep members assignable to U |
| `ReturnType<typeof f>` | return type of a function |
| `Parameters<typeof f>` | parameter tuple of a function |
| `Awaited<T>` | unwrap a Promise type |
| `NonNullable<T>` | remove null / undefined |

## Classes

| Keys | Action |
|---|---|
| `class Foo implements Bar` | class implements an interface |
| `class Foo extends Base` | class inheritance |
| `private a: string` | accessible only within the class |
| `protected a: string` | accessible in class and subclasses |
| `public a: string` | accessible anywhere (default) |
| `readonly a: string` | settable once, in the constructor |
| `abstract class Foo` | cannot be instantiated directly |
| `abstract method(): void` | must be implemented by subclass |
| `static a: string` | belongs to the class, not instances |
| `constructor(private a: string)` | parameter property shorthand |

## Modules & Misc

| Keys | Action |
|---|---|
| `import { a } from "./mod"` | named import |
| `import type { A } from "./mod"` | type-only import (erased at runtime) |
| `export default Foo` | default export |
| `declare const x: Foo` | declare a value with no implementation |
| `x as const` | narrow literal to its exact read-only value |
| `x satisfies Foo` | check type without widening or casting |
| `keyof T` | union of a type's property keys |
| `T[K]` | indexed access type |
