interface Hotel {
  id: number;
  title: string;
  location: {
    latitude: number;
    longitude: number;
  };
  rating: number;
  images: string[];
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
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/617955378.jpg?k=486c8506754f91c2aad2bf8637db7bf7df5d8d7ae9562a56c0d6ef85aedc2281&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max500/617955416.jpg?k=2e0a5a21545f4ad85eb2c4c79ca51768f3f8ae8e578c2bf9a41f3191de3c40db&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max500/617955428.jpg?k=91cc4dcb507d21e271b3ab92bf01f023d00fb10793701a87eba6b06b8c194a4c&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/617955123.jpg?k=bb774e08683272d0222c619ac1cca4e1f0d4c50f49ab38ce9aa504c40cd6ce92&o=",
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
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/516536187.jpg?k=b6810ba6286decc628ec28b75b3c1fcd4aaf48bed05ea203dc977147f6fc6ef4&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max500/503638554.jpg?k=8a7dc313d7038b8aeddf928a9f471d9fb30967046b3b5f90b67b542f0ced9307&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max300/605022777.jpg?k=52c29bc6d3903282034ad3628192d74383fb5d8c79ca3eb937026b0e363a099a&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/698002980.jpg?k=2b4f1ffce63a0bafa75bf652480987f1bdf3ffd9f975bb5c8b9c8e51a10feaa6&o=",
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
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/565573191.jpg?k=3aff6d0212562cca5be1a77d56e7c49cce2f5f2f52a89c2d947c2d85c2ac9f15&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max500/565644730.jpg?k=20ea632cd0b17ab88ccf974a780f43e379d001a12869c7eba9e577b26c0a859c&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max300/565573454.jpg?k=1b0bce9f21634328988976bea5c50497038d73b3bde5f080e0e46adb91550ab9&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/565573153.jpg?k=be2e857a9d47cc2ecc173574ee83bd08024e89ec6aded4d9cf990387b33a8446&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/565642505.jpg?k=c9e764dc2334490679be73d5911b1c552e5d6efffab99b8fce663389f1310515&o=",
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
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/347366498.jpg?k=f7c51d8a884a9b05129b77dd52f5a4fccf7a9a66dfc53f0f438f97787d5195e2&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max300/361547495.jpg?k=0283039bbfa49b8c1aaa304c85d0b0cf2fab8483f5306659e806f73d53ab1912&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max500/347366513.jpg?k=59d1feedbbdf0f2b0b4e5c185bf943372f1a1db0432bf8a7c67d9258cbe0bea8&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max300/347366511.jpg?k=ebb0f8e369065d6847a994b191b96a2406f7dfafa36346870f84ac1eac67e47d&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max300/491391913.jpg?k=849fb8557a4ebc0eea398fca7f68c461fe5be30add4e81acc64d85fcd57835cd&o=",
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
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/501482809.jpg?k=2de09e131631771bec27d6d2146961d094a7138ac92d68a072b5a85872915268&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/651446530.jpg?k=12f3b829dc1d291f53f0261b11f0e005694af8c261a7af512de5420a8961d6ee&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/24607406.jpg?k=2b100ef2ec876f0a6a26e64f8fc267fe219a83c33aaccc16cf752aa33b353d89&o=",
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
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/191785874.jpg?k=b2a5b4654811bba85b7255aacf7176ed3e07c3c584bc91f52daee6c3423b2481&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max500/79745737.jpg?k=097c306b5d2cad8747c9363927d0884b01554edbb30c04b6de65981956fea8e0&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max300/89155110.jpg?k=2fec6b4dfc7f150d2966552fa5816fef7291f9de8ea3a19bed4f3ed66bbded72&o=",
    ],
  },
];
