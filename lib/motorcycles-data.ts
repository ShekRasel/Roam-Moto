export const motorcycles = [
  {
    id: "ktm-rc",
    slug: "ktm-rc",
    model: "KTM RC",
    type: "Sport",
    image: "/images/motorcycles/velocity-V1-1.avif",
    imagePosition: "center",
    price: 2500,
    color: "White & orange",
    tagline: "A little more adrenaline.",
    description:
      "A sharp-looking sport bike for riders who enjoy an engaging day on the road. Pick the RC for a focused, energetic weekend escape.",
    bestFor: "Day trips & spirited rides",
    ridingStyle: "Sport-focused",
    label: "The weekend favorite",
  },
  {
    id: "bmw-r-ninet",
    slug: "bmw-r-ninet",
    model: "BMW R nineT",
    type: "Roadster",
    image: "/images/motorcycles/velocity-C1-2.avif",
    imagePosition: "center 60%",
    price: 4500,
    color: "Silver & black",
    tagline: "Take the scenic way home.",
    description:
      "Classic character with a relaxed sense of adventure. A roadster for slow mornings, coastal roads, and stopping whenever the view deserves it.",
    bestFor: "Scenic routes & weekend escapes",
    ridingStyle: "Classic roadster",
    label: "For the open road",
  },
  {
    id: "ducati-panigale",
    slug: "ducati-panigale",
    model: "Ducati Panigale",
    type: "Sport",
    image: "/images/motorcycles/velocity-C1-3.avif",
    imagePosition: "center",
    price: 6500,
    color: "Ducati red",
    tagline: "Make the ride the occasion.",
    description:
      "An unmistakable Italian sport bike for experienced riders. Choose the Panigale when a memorable motorcycle is the reason for the trip.",
    bestFor: "Experienced sport-bike riders",
    ridingStyle: "Performance-focused",
    label: "Something extraordinary",
  },
] as const;
export type RideMotorcycle = (typeof motorcycles)[number];
export const locations = ["Mumbai", "Goa"] as const;
export const ridePackages = [
  {
    id: "day",
    name: "Day escape",
    days: 1,
    description: "One day to make your own.",
  },
  {
    id: "weekend",
    name: "Weekend away",
    days: 2,
    description: "Two days. A little further.",
  },
  {
    id: "long",
    name: "Long weekend",
    days: 3,
    description: "Three days with no rush home.",
  },
] as const;
// Preserve links from the original concept collection.
export const legacySlugs: Record<string, string> = {
  "velocity-v1": "ktm-rc",
  "velocity-v2": "bmw-r-ninet",
  "velocity-c1": "bmw-r-ninet",
  "velocity-a1": "ducati-panigale",
  "velocity-e1": "ktm-rc",
};
