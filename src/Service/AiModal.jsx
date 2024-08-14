/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget. Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for 3 days with each day plan with best time to visit in JSON format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: JSON.stringify(
            {
              hotels: [
                {
                  hotelName: "The D Las Vegas",
                  hotelAddress: "301 Fremont Street, Las Vegas, NV 89101",
                  price: "$50-$100 per night",
                  hotelImageUrl:
                    "https://www.theD.com/media/images/hotel-exterior-night.jpg",
                  geoCoordinates: "36.1688, -115.1430",
                  rating: 4.0,
                  description:
                    "A budget-friendly hotel located in downtown Las Vegas, offering a classic casino experience and convenient access to Fremont Street.",
                },
                {
                  hotelName: "Circus Circus Hotel & Casino",
                  hotelAddress: "2880 Las Vegas Blvd S, Las Vegas, NV 89109",
                  price: "$40-$80 per night",
                  hotelImageUrl:
                    "https://www.circuscircus.com/media/images/hotel-exterior.jpg",
                  geoCoordinates: "36.1230, -115.1724",
                  rating: 3.5,
                  description:
                    "A family-friendly hotel known for its circus theme and affordable accommodations, located on the Strip.",
                },
                {
                  hotelName: "Golden Nugget Hotel & Casino",
                  hotelAddress: "129 E Fremont St, Las Vegas, NV 89101",
                  price: "$60-$120 per night",
                  hotelImageUrl:
                    "https://www.goldennugget.com/media/images/hotel-exterior.jpg",
                  geoCoordinates: "36.1674, -115.1418",
                  rating: 4.5,
                  description:
                    "A luxurious hotel with a historic charm, featuring a world-class casino, restaurants, and a shark tank.",
                },
              ],
              itinerary: [
                {
                  day: 1,
                  activities: [
                    {
                      timeOfDay: "morning",
                      placeName: "Fremont Street Experience",
                      placeDetails:
                        "A pedestrian-friendly street in downtown Las Vegas, featuring a canopy of lights, street performers, and free concerts.",
                      placeImageUrl:
                        "https://www.fremontstreetexperience.com/media/images/fremont-street-experience.jpg",
                      geoCoordinates: "36.1692, -115.1424",
                      ticketPricing: "Free",
                      timeToTravel: "2 hours",
                    },
                    {
                      timeOfDay: "afternoon",
                      placeName: "The Mob Museum",
                      placeDetails:
                        "A museum dedicated to the history of organized crime in America, featuring exhibits on famous gangsters and law enforcement.",
                      placeImageUrl:
                        "https://www.themobmuseum.org/media/images/mob-museum.jpg",
                      geoCoordinates: "36.1687, -115.1407",
                      ticketPricing: "$25-$35",
                      timeToTravel: "2 hours",
                    },
                    {
                      timeOfDay: "evening",
                      placeName: "Downtown Las Vegas",
                      placeDetails:
                        "Explore the historic casinos and bars of Fremont Street, enjoy live music and entertainment.",
                      placeImageUrl:
                        "https://www.visitlasvegas.com/media/images/downtown-las-vegas.jpg",
                      geoCoordinates: "36.1692, -115.1424",
                      ticketPricing: "Free",
                      timeToTravel: "3 hours",
                    },
                  ],
                },
                {
                  day: 2,
                  activities: [
                    {
                      timeOfDay: "morning",
                      placeName: "Hoover Dam",
                      placeDetails:
                        "A massive dam on the Colorado River, a marvel of engineering and a popular tourist destination.",
                      placeImageUrl:
                        "https://www.hooverdam.com/media/images/hoover-dam.jpg",
                      geoCoordinates: "36.0000, -114.7600",
                      ticketPricing: "$30",
                      timeToTravel: "4 hours (round trip)",
                    },
                    {
                      timeOfDay: "afternoon",
                      placeName: "Red Rock Canyon National Conservation Area",
                      placeDetails:
                        "A scenic park with stunning rock formations, hiking trails, and panoramic views.",
                      placeImageUrl:
                        "https://www.nps.gov/redr/planyourvisit/media/images/red-rock-canyon.jpg",
                      geoCoordinates: "36.1700, -115.4000",
                      ticketPricing: "$15",
                      timeToTravel: "3 hours",
                    },
                    {
                      timeOfDay: "evening",
                      placeName: "Las Vegas Strip",
                      placeDetails:
                        "Walk along the Strip and see the iconic casinos and hotels, enjoy free shows and entertainment.",
                      placeImageUrl:
                        "https://www.visitlasvegas.com/media/images/las-vegas-strip.jpg",
                      geoCoordinates: "36.1146, -115.1726",
                      ticketPricing: "Free",
                      timeToTravel: "3 hours",
                    },
                  ],
                },
                {
                  day: 3,
                  activities: [
                    {
                      timeOfDay: "morning",
                      placeName: "Bellagio Conservatory & Botanical Garden",
                      placeDetails:
                        "A stunning display of flowers and plants, showcasing seasonal themes throughout the year.",
                      placeImageUrl:
                        "https://www.bellagio.com/media/images/conservatory-botanical-garden.jpg",
                      geoCoordinates: "36.1171, -115.1745",
                      ticketPricing: "Free",
                      timeToTravel: "1 hour",
                    },
                    {
                      timeOfDay: "afternoon",
                      placeName: "The Venetian and The Palazzo",
                      placeDetails:
                        "Explore the Grand Canal Shoppes and enjoy the romantic atmosphere of a Venetian-style canal.",
                      placeImageUrl:
                        "https://www.venetian.com/media/images/grand-canal-shoppes.jpg",
                      geoCoordinates: "36.1235, -115.1705",
                      ticketPricing: "Free",
                      timeToTravel: "2 hours",
                    },
                    {
                      timeOfDay: "evening",
                      placeName: "Free Show on the Strip",
                      placeDetails:
                        "Catch a free show at one of the casinos, such as the Bellagio Fountains or the Mirage Volcano.",
                      placeImageUrl:
                        "https://www.bellagio.com/media/images/fountains-of-bellagio.jpg",
                      geoCoordinates: "36.1171, -115.1745",
                      ticketPricing: "Free",
                      timeToTravel: "1 hour",
                    },
                  ],
                },
              ],
            },
            null,
            2
          ), // Added formatting for readability
        },
      ],
    },
  ],
});
