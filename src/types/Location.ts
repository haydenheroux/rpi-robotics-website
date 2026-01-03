export default interface Location {
  building: {
    name: string;
    code: string;
    mapsLink: string;
  };
  room: string;
}

export const locationText = (location: Location) =>
  `${location.building.code} ${location.room}`;

export const locationHover = (location: Location) =>
  `${location.building.name} - Room ${location.room}`;

export const locationLink = (location: Location) =>
  `${location.building.mapsLink}`;

export const LOW = (room: string) => ({
  building: {
    name: "Low Center for Industrial Innovation",
    code: "LOW",
    mapsLink: "https://maps.app.goo.gl/CyCqQqmS8nAz2JXi8",
  },
  room,
});

export const LOW_8214: Location = LOW("8214");

export const LOW_4040: Location = LOW("4040");

export const JEC = (room: string) => ({
  building: {
    name: "Jonsson Engineering Center",
    code: "JEC",
    mapsLink: "https://maps.app.goo.gl/VAeHeyyCHbr4cRDDA",
  },
  room,
});

export const JEC_3210: Location = JEC("3210");
