interface Point {
  readonly x: number
  y?: number
}

type Mapped<T> = {
  readonly [key in keyof T]: T[key]
}

type Result = Mapped<Point>
/*
 type Result = {
    readonly x: number;
    readonly y: number;
}
*/
type Mapped1<T> = {
  -readonly [key in keyof T]: T[key]
}

type Result1 = Mapped1<Point>

type Mapped2<T> = {
  readonly [key in keyof T]?: T[key]
}

type Result2 = Mapped2<Point>

/*
type Result2 = {
    readonly x?: number | undefined;
    readonly y?: number | undefined;
}
*/

// type PointR = Readonly<Point>
