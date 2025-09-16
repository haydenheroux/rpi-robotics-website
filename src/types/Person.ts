export default interface Person {
  name: string;
  email?: string;
};

export const personText = (person: Person) => person.name;

export const personHover = (person: Person) => person.email ?? person.name;

