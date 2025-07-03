interface Hotel {
  id: number;
  title: string;
  location: {
    latitude: number;
    longitude: number;
  };
  rating: number;
  images: number[];
}

export const hotels: Hotel[] = [
  {
    id: 1,
    title: "Idea Hotel",
    location: {
      latitude: 42.4664024,
      longitude: 59.6201121,
    },
    rating: 5,
    images: [
      require("@/assets/images/hotels/hotel1.jpg"),
      require("@/assets/images/hotels/hotel11.jpg"),
      require("@/assets/images/hotels/hotel111.jpg"),
      require("@/assets/images/hotels/hotel1111.jpg"),
    ],
  },
  {
    id: 2,
    title: "Damir Hotel",
    location: {
      latitude: 42.4604872,
      longitude: 59.6145405,
    },
    rating: 5,
    images: [
      require("@/assets/images/hotels/hotel2.jpg"),
      require("@/assets/images/hotels/hotel22.jpg"),
      require("@/assets/images/hotels/hotel222.jpg"),
      require("@/assets/images/hotels/hotel2222.jpg"),
    ],
  },
  {
    id: 3,
    title: "Fayz Hotel",
    location: {
      latitude: 42.4574178,
      longitude: 59.6116045,
    },
    rating: 5,
    images: [
      require("@/assets/images/hotels/hotel3.jpg"),
      require("@/assets/images/hotels/hotel33.jpg"),
      require("@/assets/images/hotels/hotel333.jpg"),
      require("@/assets/images/hotels/hotel3333.jpg"),
      require("@/assets/images/hotels/hotel33333.jpg"),
    ],
  },
  {
    id: 4,
    title: "Pana Hotel",
    location: {
      latitude: 42.4809236,
      longitude: 59.6147105,
    },
    rating: 5,
    images: [
      require("@/assets/images/hotels/hotel4.jpg"),
      require("@/assets/images/hotels/hotel44.jpg"),
      require("@/assets/images/hotels/hotel444.jpg"),
      require("@/assets/images/hotels/hotel4444.jpg"),
      require("@/assets/images/hotels/hotel44444.jpg"),
    ],
  },
  {
    id: 5,
    title: "Hotel Jipek Joli",
    location: {
      latitude: 42.4657536,
      longitude: 59.6097336,
    },
    rating: 5,
    images: [
      require("@/assets/images/hotels/hotel5.jpg"),
      require("@/assets/images/hotels/hotel55.jpg"),
      require("@/assets/images/hotels/hotel555.jpg"),
    ],
  },
  {
    id: 6,
    title: "Jipek Joli Inn",
    location: {
      latitude: 42.4664973,
      longitude: 59.6080485,
    },
    rating: 5,
    images: [
      require("@/assets/images/hotels/hotel6.jpg"),
      require("@/assets/images/hotels/hotel66.jpg"),
      require("@/assets/images/hotels/hotel666.jpg"),
    ],
  },
];
