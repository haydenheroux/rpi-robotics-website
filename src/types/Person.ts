export default interface Person {
  name: string;
  email?: string;
  discord?: string;
  position?: string;
  projects?: string[];
}

export const personText = (person: Person) => person.name;

export const personHover = (person: Person) => person.email ?? person.name;
