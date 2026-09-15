export enum category {
  "School",
  "Home",
  "Work",
}

export interface Todo {
  id: string;

  text: string;

  category: category;

  date: Date;

  status: "Pending" | "Done" | "Late";
}
