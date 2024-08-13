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
          text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget. Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format.\n\n\n\n\n\n\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotels": [\n    {\n      "hotelName": "The D Las Vegas",\n      "hotelAddress": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "$50-$100 per night",\n      "hotelImageUrl": "https://www.theD.com/media/images/hotel-exterior-night.jpg",\n      "geoCoordinates": "36.1688, -115.1430",\n      "rating": 4.0,\n      "description": "A budget-friendly hotel located in downtown Las Vegas, offering a classic casino experience and convenient access to Fremont Street."\n    },\n    {\n      "hotelName": "Circus Circus Hotel & Casino",\n      "hotelAddress": "2880 Las Vegas Blvd S, Las Vegas, NV 89109",\n      "price": "$40-$80 per night",\n      "hotelImageUrl": "https://www.circuscircus.com/media/images/hotel-exterior.jpg",\n      "geoCoordinates": "36.1230, -115.1724",\n      "rating": 3.5,\n      "description": "A family-friendly hotel known for its circus theme and affordable accommodations, located on the Strip."\n    },\n    {\n      "hotelName": "Golden Nugget Hotel & Casino",\n      "hotelAddress": "129 E Fremont St, Las Vegas, NV 89101",\n      "price": "$60-$120 per night",\n      "hotelImageUrl": "https://www.goldennugget.com/media/images/hotel-exterior.jpg",\n      "geoCoordinates": "36.1674, -115.1418",\n      "rating": 4.5,\n      "description": "A luxurious hotel with a historic charm, featuring a world-class casino, restaurants, and a shark tank."\n    }\n  ],\n  "itinerary": {\n    "day1": {\n      "morning": {\n        "placeName": "Fremont Street Experience",\n        "placeDetails": "A pedestrian-friendly street in downtown Las Vegas, featuring a canopy of lights, street performers, and free concerts.",\n        "placeImageUrl": "https://www.fremontstreetexperience.com/media/images/fremont-street-experience.jpg",\n        "geoCoordinates": "36.1692, -115.1424",\n        "ticketPricing": "Free",\n        "timeToTravel": "2 hours"\n      },\n      "afternoon": {\n        "placeName": "The Mob Museum",\n        "placeDetails": "A museum dedicated to the history of organized crime in America, featuring exhibits on famous gangsters and law enforcement.",\n        "placeImageUrl": "https://www.themobmuseum.org/media/images/mob-museum.jpg",\n        "geoCoordinates": "36.1687, -115.1407",\n        "ticketPricing": "$25-$35",\n        "timeToTravel": "2 hours"\n      },\n      "evening": {\n        "placeName": "Downtown Las Vegas",\n        "placeDetails": "Explore the historic casinos and bars of Fremont Street, enjoy live music and entertainment.",\n        "placeImageUrl": "https://www.visitlasvegas.com/media/images/downtown-las-vegas.jpg",\n        "geoCoordinates": "36.1692, -115.1424",\n        "ticketPricing": "Free",\n        "timeToTravel": "3 hours"\n      }\n    },\n    "day2": {\n      "morning": {\n        "placeName": "Hoover Dam",\n        "placeDetails": "A massive dam on the Colorado River, a marvel of engineering and a popular tourist destination.",\n        "placeImageUrl": "https://www.hooverdam.com/media/images/hoover-dam.jpg",\n        "geoCoordinates": "36.0000, -114.7600",\n        "ticketPricing": "$30",\n        "timeToTravel": "4 hours (round trip)"\n      },\n      "afternoon": {\n        "placeName": "Red Rock Canyon National Conservation Area",\n        "placeDetails": "A scenic park with stunning rock formations, hiking trails, and panoramic views.",\n        "placeImageUrl": "https://www.nps.gov/redr/planyourvisit/media/images/red-rock-canyon.jpg",\n        "geoCoordinates": "36.1700, -115.4000",\n        "ticketPricing": "$15",\n        "timeToTravel": "3 hours"\n      },\n      "evening": {\n        "placeName": "Las Vegas Strip",\n        "placeDetails": "Walk along the Strip and see the iconic casinos and hotels, enjoy free shows and entertainment.",\n        "placeImageUrl": "https://www.visitlasvegas.com/media/images/las-vegas-strip.jpg",\n        "geoCoordinates": "36.1146, -115.1726",\n        "ticketPricing": "Free",\n        "timeToTravel": "3 hours"\n      }\n    },\n    "day3": {\n      "morning": {\n        "placeName": "Bellagio Conservatory & Botanical Garden",\n        "placeDetails": "A stunning display of flowers and plants, showcasing seasonal themes throughout the year.",\n        "placeImageUrl": "https://www.bellagio.com/media/images/conservatory-botanical-garden.jpg",\n        "geoCoordinates": "36.1171, -115.1745",\n        "ticketPricing": "Free",\n        "timeToTravel": "1 hour"\n      },\n      "afternoon": {\n        "placeName": "The Venetian and The Palazzo",\n        "placeDetails": "Explore the Grand Canal Shoppes and enjoy the romantic atmosphere of a Venetian-style canal.",\n        "placeImageUrl": "https://www.venetian.com/media/images/grand-canal-shoppes.jpg",\n        "geoCoordinates": "36.1235, -115.1705",\n        "ticketPricing": "Free",\n        "timeToTravel": "2 hours"\n      },\n      "evening": {\n        "placeName": "Free Show on the Strip",\n        "placeDetails": "Catch a free show at one of the casinos, such as the Bellagio Fountains or the Mirage Volcano.",\n        "placeImageUrl": "https://www.bellagio.com/media/images/fountains-of-bellagio.jpg",\n        "geoCoordinates": "36.1171, -115.1745",\n        "ticketPricing": "Free",\n        "timeToTravel": "1 hour"\n      }\n    }\n  }\n}\n```\n\n**Notes:**\n\n* This itinerary is just a suggestion and can be customized to your interests.\n* You can find free shows and entertainment on the Strip and in downtown Las Vegas.\n* The prices for attractions and hotels are approximate and can vary depending on the season and availability.\n* Be sure to check the opening hours of attractions and restaurants before you go. \n\n**Tips for saving money in Las Vegas:**\n\n* **Eat off-Strip:** Restaurants off the Strip tend to be more affordable.\n* **Take advantage of free activities:** Many casinos offer free shows, concerts, and attractions.\n* **Drink water:** Bottled water can be expensive, so bring your own reusable bottle and fill it up at water fountains.\n* **Pack snacks:** Bringing snacks from home can save you money on food.\n* **Consider a casino card:** Many casinos offer rewards programs that can earn you free meals, drinks, and other perks.\n* **Look for discounts and deals:** Many websites offer discounts on attractions, shows, and hotels.\n',
        },
      ],
    },
  ],
});
