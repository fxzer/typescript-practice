type Letters = "A" | "B" | "C";

type RemoveMember<T> = T extends "C" ? never : T;
type ReplaceMember<T> = T extends "C" ? "D" : T;

type RemainingLetters = RemoveMember<Letters>; // "A" | "B"
type ReplacedLetters = ReplaceMember<Letters>; // "A" | "B" | "D"