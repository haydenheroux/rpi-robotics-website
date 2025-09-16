export default interface Location {
  building: {
    name: string;
    code: string;
  };
  room: string;
}

export const locationText = (location: Location) => `${location.building.code} ${location.room}`;

export const locationHover = (location: Location) => `${location.building.name} - Room ${location.room}`;

export const LOW = (room: string) => ({
  building: {
    name: "Low Center for Industrial Innovation",
    code: "LOW",
  },
  room,
});

export const LOW_8214 = LOW("8214");

export const JEC = (room: string) => ({
  building: {
    name: "Jonsson Engineering Center",
    code: "JEC",
  },
  room,
});

export const JEC_3210 = JEC("3210");

