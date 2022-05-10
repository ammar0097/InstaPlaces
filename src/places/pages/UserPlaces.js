import React from "react";
import {useParams} from "react-router-dom";
import PlaceList from "../components/PlaceList";


const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Tunis",
    description:
      "Tunis is the sprawling capital of Tunisia, a country in North Africa. It sits along Lake Tunis, just inland from the Mediterranean Sea’s Gulf of Tunis. It’s home to a centuries-old medina and the Bardo, an archaeology museum where celebrated Roman mosaics are displayed in a 15th-century palace complex. The parklike ruins of ancient Carthage sit in the city’s northern suburbs.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/55/TunisAveHabibBourguiba.jpg",
    address: "tunis av hbib bourgiba",
    location: {
      lat: "36.806389",
      lng: "10.181667",
    },
    creator: 'u1'
  },
  {
    id: "p2",
    title: "Tunis",
    description:
      "Tunis is the sprawling capital of Tunisia, a country in North Africa. It sits along Lake Tunis, just inland from the Mediterranean Sea’s Gulf of Tunis. It’s home to a centuries-old medina and the Bardo, an archaeology museum where celebrated Roman mosaics are displayed in a 15th-century palace complex. The parklike ruins of ancient Carthage sit in the city’s northern suburbs.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/55/TunisAveHabibBourguiba.jpg",
    address: "tunis av hbib bourgiba",
    location: {
      lat: "36.806389",
      lng: "10.181667",
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const LoadedPlaces = DUMMY_PLACES.filter(place=>place.creator === userId)
    return <PlaceList items={LoadedPlaces }/>
};

export default UserPlaces;
