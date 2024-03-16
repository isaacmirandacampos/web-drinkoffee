export type AsyncData<T> =
  | { status: "loading" }
  | { status: "not-loaded" }
  | { status: "error" }
  | { status: "loaded"; data: T };
