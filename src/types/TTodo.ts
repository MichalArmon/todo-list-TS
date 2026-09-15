export enum category {
  "School",
  "Home",
  "Work",
}

export type Task = {
  id: string;

  text: string;

  category: category;

  date: Date;

  status: "Pending" | "Done" | "Late";
};
