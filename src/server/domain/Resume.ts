export type Resume = {
  name: string;
  start: string;
  end?: string;
  descriptions: string[];
  achievements: string[];
  uses: string[];
};

export type Resumes = {
  items: Resume[];
};
