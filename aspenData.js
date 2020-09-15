// Listing Attributes:
// Fields:
// title [String},
//     Example: "Cozy loft apartment"
// state [String},
// price [String},
//          Example: "32"
// guestAmount [String},
// Bedroom amount [String]
// bathAmount [String]
// parking Y/N [String]
//          Example: "Y"
// image [String]
// city [String]
// rating [String]
//          Example : "4.5"
// description [String]
// fireExtinguisher Y/N [String]
//          Example: "Y"

const listings = [
  {
    title:
      "Loft condo with mountain view, ski-in/ski-out access and shared pool/hot tub",
    state: "Colorado",
    price: "422",
    guestAmount: "5",
    bedAmount: "3",
    bathAmount: "2",
    parking: "y",
    image:
      "https://a0.muscache.com/im/pictures/25d5c39b-24d3-461c-8c72-3beeabd64a12.jpg?aki_policy=xx_large",
    city: "Aspen",
    rating: "4.54",
    description:
      "Located in the gorgeous area of Snowmass, Colorado, Woodrun Place is a beautiful, newly renovated ski-in/ski-out property up on Fanny Hill. Within this property sits Woodrun 35, an exceptional one bedroom plus loft condominium with 1.5 bathrooms. The unit can sleep four people, with bedding and gorgeous furnishings that would be perfect for a romantic getaway, or for a small family ski trip!",
    fireExtinguisher: "n",
  },

  {
    title: "Entire condominium",
    state: "Colorado",
    price: "201",
    guestAmount: "6",
    bedAmount: "5",
    bathAmount: "2",
    parking: "y",
    image:
      "https://a0.muscache.com/im/pictures/a0588338-d484-4037-b35c-e94de3f5d69f.jpg?aki_policy=xx_large",
    city: "Aspen",
    rating: "4.96",
    description:
      "Slope 405. The spacious condominiums at Top of The Village provide the vacation of a lifetime in both summer and winter. This unit has a touch of a Southwest décor with prominent red and green colors. With a sense of seclusion, the views of the slopes of Snowmass Mountain are the only indication that civilization is close by. An on call shuttle service will transport you to restaurants and shops in Snowmass Village.",
    fireExtinguisher: "y",
  },

  {
    title: "Assay Hill ski-in/ski-out condo with a shared pool and hot tub",
    state: "Colorado",
    price: "401",
    guestAmount: "4",
    bedAmount: "2",
    bathAmount: "3",
    parking: "y",
    image:
      "https://a0.muscache.com/im/pictures/040afd38-2ade-4b81-87bc-c3cc17feda89.jpg?aki_policy=large",
    city: "Aspen",
    rating: "4",
    description:
      "This 2 bedroom, 2 bath condominium is located at our Enclave property and allows a maximum of 4 people in the unit. This condominium is 1170 square feet and offers a king bed and twin beds. The Enclave is a deluxe ski-in, ski-out property located directly on Assay Hill, near the Gondola and Base Village. The Enclave features a warm and inviting Arrival Center. These condominiums each have a private balcony or patio, some with outstanding mountain views and others right on the ski slope. his property offers a heated pool, spacious, newly designed whirlpool spa and complimentary covered parking.",
    fireExtinguisher: "y",
  },

  {
    title:
      "Ski-in/ski-out condo w/shared hot tub, outdoor pool, gym, & free airport shuttle",
    state: "Colorado",
    price: "416",
    guestAmount: "6",
    bedAmount: "3",
    bathAmount: "2",
    parking: "y",
    image:
      "https://a0.muscache.com/im/pictures/da3631b5-db98-4ce0-91ee-56a148724f42.jpg?aki_policy=xx_large",
    city: "Aspen",
    rating: "5",
    description:
      "This newly-remodeled, ski-in/ski-out condo is ready to be your home base to explore Snowmass and experience the getaway of a lifetime! The steel gas fireplace and reclaimed wood throughout add elegance and warmth while the large towering window in the solarium captures views of the snow-capped Rocky Mountain peaks. The kitchen is fully equipped with all the modern appliances and utensils needed to surprise your guests with homemade meals after shredding powder at the slopes. The Sonos Sound System in the living room and in both bedrooms are all wireless and can be integrated with smartphones to play from your digital collection. Take advantage of the shared outdoor pool to cool off during summer months, or use the shared hot tub to soothe your tired muscles, especially after snowboarding and skiing.",
    fireExtinguisher: "n",
  },

  {
    title:
      "Large ski-in/ski-out condo with shared pool and hot tub on Assay Hill",
    state: "Colorado",
    price: "492",
    guestAmount: "10",
    bedAmount: "8",
    bathAmount: "4",
    parking: "y",
    image:
      "https://a0.muscache.com/im/pictures/a3f6ddac-3fb7-4f0f-81bb-83448a366ce8.jpg?aki_policy=xx_large",
    city: "Aspen",
    rating: "5",
    description:
      "This 4 bedroom, 4 bath condominium, is located at our Enclave property. This condominium is 1860 square feet and offers a king bed, a king bed, 2 twin beds, 2 twins beds and one bunk bed. The Enclave is a deluxe ski-in, ski-out property located directly on Assay Hill, near the Gondola and Base Village. The Enclave features a warm and inviting Arrival Center. These condominiums each have a private balcony or patio, some with outstanding mountain views and others right on the ski slope. This property offers a heated pool, spacious, newly designed whirlpool spa and complimentary covered parking. Condominiums offer fully equipped kitchens, washer/dryers, fireplaces, and complimentary internet access. ",
    fireExtinguisher: "y",
  },

  {
    title: "The Cozy Room",
    state: "Colorado",
    price: "48",
    guestAmount: "2",
    bedAmount: "1",
    bathAmount: "1",
    parking: "n",
    image:
      "https://a0.muscache.com/im/pictures/4bde85c1-bf08-4aef-b223-fbca2ad49071.jpg?aki_policy=xx_large",
    city: "Aspen",
    rating: "4.95",
    description:
      "The cozy room is a room in our three bedroom, 2 bathroom 1,532 sq/ft single level mobile home built in 1992. The floor plan is split so the two guest bedrooms are on opposite end of house with separate bathroom. Your room has a full size bed and the bathroom is shared with the other guest room.",
    fireExtinguisher: "n",
  },

  {
    title:
      "Cozy, waterfront, mountainview cabin w/prime location & shared hot springs!",
    state: "Colorado",
    price: "191",
    guestAmount: "4",
    bedAmount: "2",
    bathAmount: "1",
    parking: "y",
    image:
      "https://a0.muscache.com/im/pictures/eb6f342c-5d39-4e5a-8593-cd0c6dfb9f1f.jpg?aki_policy=xx_large",
    city: "Aspen",
    rating: "4.2",
    description:
      "Surrounded by sun-filled wildflower meadows and fireflies at night, this Redstone retreat gives you the chance to unwind in peace. Soak in the on-site shared hot springs, or explore what the great outdoors has to offer while you stay at this one-bedroom cabin for four.",
    fireExtinguisher: "y",
  },

  {
    title: "DowntownAspen Historical Charm",
    state: "Colorado",
    price: "201",
    guestAmount: "2",
    bedAmount: "2",
    bathAmount: "1",
    parking: "n",
    image:
      "https://a0.muscache.com/im/pictures/dbd4c3f1-a1ef-41f1-9469-ab1bd72e0392.jpg?aki_policy=xx_large",
    city: "Aspen",
    rating: "5.0",
    description:
      "Location, location, location! Step outside your door into the ultimate heart of downtown Aspen in a beautiful historic building 1/2 block to the gondola. Just steps away from incredible nightlife, world-class restaurants, fine shopping and all the best that Aspen has to offer. Exquisite panoramic Aspen mountain views from the roof top deck.",
    fireExtinguisher: "n",
  },

  {
    title:
      "Chic hotel room near bike path w/elevator, shared hot tub, pool, gym, & firepit",
    state: "Colorado",
    price: "221",
    guestAmount: "4",
    bedAmount: "2",
    bathAmount: "1",
    parking: "y",
    image:
      "https://a0.muscache.com/im/pictures/79b68868-9d40-4d8a-a6d7-5c7d1ef0ba3b.jpg?aki_policy=xx_large",
    city: "Aspen",
    rating: "4.40",
    description:
      "Vacation in style and experience a memorable getaway to Aspen at the Inn at Aspen! The Inn features sleek and well-equipped hotel rooms with access to shared amenities such as an outdoor pool for warm months, hot tub, fitness center, firepit, lounge area, restaurant and bar on-site, and even a courtesy airport shuttle. This charming room boasts two queen beds, a private bathroom with shower and bath, and even your own small cooking station equipped with a minifridge, sink, microwave, and a coffee maker. Watch your favorite shows on the flatscreen TV or head outside to the private patio area to take in the marvelous valley views.",
    fireExtinguisher: "n",
  },

  {
    title: "Downtown Aspen Condo",
    state: "Colorado",
    price: "450",
    guestAmount: "6",
    bedAmount: "3",
    bathAmount: "3",
    parking: "y",
    image:
      "https://a0.muscache.com/im/pictures/96a7b103-04d0-455d-9296-38047b8ec85f.jpg?aki_policy=xx_large",
    city: "Aspen",
    rating: "5.0",
    description:
      "Aspen Alps is a true Ski In/Ski Out condo complex. The unit is 2 stories. Upstairs includes kitchen, living and dining room. Dining room has a Murphy Bed for additional sleeping. The exterior of the building is classic Aspen, with the interior of the space cozy and spacious. This location can't be beat. As this is listed on AirBnB and not booked through the Aspen Alps you won't have access to the Concierge/Valet service. But there are significant savings, and free town shuttle service.    ",
    fireExtinguisher: "n",
  },
  {
    title: "A treehouse in the sky. A home in the redwoods.",
    state: "New York",
    price: "$400 / night",
    guestAmount: "8 guests",
    bedAmount: "4 bedrooms",
    bathAmount: "3 baths",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/b79fb3f2-70a2-4fcd-a207-db3124d01e8b.jpg?aki_policy=x_large",
    city: "Woodacre",
    rating: "5.0",
    description:
      "Wake up among the Redwood trees and morning sunlight of this forest retreat...",
    fireExtinguisher: "Y",
  },
  {
    title: "Treetop Hideaways: Luna Loft",
    state: "Georgia",
    price: "$320 / night",
    guestAmount: "3 guests",
    bedAmount: "1 bedroom / 2 beds",
    bathAmount: "1 bath",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/d0ff50fe-5145-409a-a8b7-6204ca27d296.jpg?im_w=960",
    city: "Flintstone",
    rating: "4.97",
    description:
      "This rustic and refined treehouse provides a comfortable treetop retreat.",
    fireExtinguisher: "Y",
  },
  {
    title: "Asheville's luxury treehouse!",
    state: "North Carolina",
    price: "463 / night",
    guestAmount: "4 guests",
    bedAmount: "1bedroom / 2beds",
    bathAmount: "2.5 baths",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/bcdda6ab-cc16-4b16-b544-bf0d99a12e2e.jpg?aki_policy=x_large",
    city: "Asheville",
    rating: "5.0",
    description:
      "The Treehouse is close to all that Asheville has and is only minutes from the Blue Ridge Parkway",
    fireExtinguisher: "Y",
  },
  {
    title: "Meadowlark Treehouse at Montana Treehouse Retreat",
    state: "Montana",
    price: "$432 / night",
    guestAmount: "4 guests",
    bedAmount: "1 bedroom / 1 bed",
    bathAmount: "1.5 baths",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/5694b105-e2f2-4b7d-b52f-ea2cb2885008.jpg?im_w=960",
    city: "Columbia Falls",
    rating: "4.97",
    description:
      "Nestled on 5 wooded acres, this artistically designed two story treehouse has all the luxury amenities.",
    fireExtinguisher: "Y",
  },
  {
    title: "Willow Treehouse",
    state: "New York",
    price: "$360 / night",
    guestAmount: "2 guests",
    bedAmount: "1 bedroom / 1 bed",
    bathAmount: "1 bath",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/6ced5146-900a-4e51-9c0a-e5ab5a5b5afe.jpg?aki_policy=x_large",
    city: "Willow",
    rating: "4.95",
    description:
      "The Willow Treehouse is settled among the trees, overlooking a small, swimmable pond, on a wooded property 15min away from the town of woodstock.",
    fireExtinguisher: "Y",
  },
  {
    title: "Victoria",
    state: "France",
    price: "$196 / night",
    guestAmount: "4 guests",
    bedAmount: "1 bedroom / 2 beds",
    bathAmount: "1 bath",
    parking: "N",
    image:
      "https://a0.muscache.com/im/pictures/0188d591-a81e-49a9-bad1-b33fffe7df97.jpg?aki_policy=x_large",
    city: "Crac'h, Bretagne",
    rating: "4.97",
    description:
      "Spend an unforgettable night in an unusual secluded cabin by a pond!",
    fireExtinguisher: "Y",
  },
  {
    title: "House boat",
    state: "Sweden",
    price: "$264 / night",
    guestAmount: "5 guests",
    bedAmount: "2 bedrooms / 2 beds",
    bathAmount: "1 bath",
    parking: "N",
    image:
      "https://a0.muscache.com/im/pictures/c372da45-2814-444e-bf8b-7125287631e4.jpg?im_w=960",
    city: "Lidingo, Stockholms Ian",
    rating: "4.89",
    description:
      "This small house boat has everything you need to enjoy the tranquility of the bay where its located.",
    fireExtinguisher: "Y",
  },
  {
    title: "Floating tiny home escape.",
    state: "Florida",
    price: "$160 / night",
    guestAmount: "2",
    bedAmount: "1 bed",
    bathAmount: "1 bath",
    parking: "N",
    image:
      "https://afar-production.imgix.net/uploads/images/post_images/images/LWG8pA4ieZ/original_florida_keys.jpg?auto=compress,format&lossless=true&w=845",
    city: "Key Largo",
    rating: "N/A",
    description:
      "Crank up the Beach Boys and linger by the Florida Keys in this adorable, quirky houseboat.",
    fireExtinguisher: "Y",
  },
  {
    title: "Unique, romantic, motorless floating island.",
    state: "Maine",
    price: "$307 / night",
    guestAmount: "4",
    bedAmount: "2 bedrooms / 2 beds",
    bathAmount: "1 bath",
    parking: "N",
    image:
      "https://afar-production.imgix.net/uploads/images/post_images/images/kfih8Q6MJG/original_maine.jpg?auto=compress,format&lossless=true&w=845",
    city: "Georgetown",
    rating: "N/A",
    description:
      "Moored in Robinhood Cove, the Tessie Ann is exactly the kind of New England maritime experience you may have dreamed of.",
    fireExtinguisher: "Y",
  },
  {
    title: "Shasta Marina's Sumerset houseboat",
    state: "California",
    price: "$905 / night",
    guestAmount: "20 guests",
    bedAmount: "6 bedrooms / 9 beds",
    bathAmount: "N/A",
    parking: "N",
    image:
      "https://afar-production.imgix.net/uploads/images/post_images/images/iLG8sLwM4j/original_shasta1.jpg?auto=compress,format&lossless=true&w=845",
    city: "Lakehead",
    rating: "N/A",
    description:
      "Lake Shasta is one of the most popular places in the country for houseboat vacations and here, its all about the party.",
    fireExtinguisher: "Y",
  },
  {
    title: "Lux tugboat on private lake",
    state: "Virginia",
    price: "$300 / night",
    guestAmount: "5",
    bedAmount: "1 bedroom / 2 beds",
    bathAmount: "1 bathroom",
    parking: "N",
    image:
      "https://afar-production.imgix.net/uploads/images/post_images/images/kE4AssGNRX/original_virginia_1.jpg?auto=compress,format&lossless=true&w=845",
    city: "Charlottesville",
    rating: "N/A",
    description:
      "The interior of this red tugboat has all the elegance of aboutique inn, with exposed beam ceilings, old-fashioned lighting fixtures, and plenty of plush throw pillows.",
    fireExtinguisher: "Y",
  },
  {
    title: "Cheery Modern Basement Apartment",
    state: "Oregon",
    price: "32",
    guestAmount: "4",
    bedAmount: "1",
    bathAmount: "2",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/a68a1fbb-2eba-4627-bb47-4aa23021a909.jpg?aki_policy=large",
    city: "Portland",
    rating: "4.8",
    description:
      "The best of both worlds: Close to mass transit to city + Columbia Gorge parks + hikes. Easy 15-20 minute airport access. The space is cool on hot summer nights, cozy in cold weather + the backyard feels like countryside with hens + gardens.",
    fireExtinguisher: "Y",
  },
  {
    title: "Saul Zaik Treehouse!",
    state: "Oregon",
    price: "215",
    guestAmount: "2",
    bedAmount: "1",
    bathAmount: "1",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/ce10f00b-e9e3-4a93-8a60-69459536080d.jpg?aki_policy=large",
    city: "Portland",
    rating: "4.88",
    description:
      "This is Officially the Coolest Treehouse in the World -Condé Nast Traveler",
    fireExtinguisher: "n",
  },
  {
    title: "Great Space in Heart of Hawthorne",
    state: "Oregon",
    price: "45",
    guestAmount: "2",
    bedAmount: "1",
    bathAmount: "1",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/40f30ff5-8a20-47d9-a546-5be280a5c02c.jpg?aki_policy=xx_large",
    city: "Portland",
    rating: "4.7",
    description:
      "Ours is a welcoming and fully permitted family home in Portland's close-to-everything Hawthorne District",
    fireExtinguisher: "Y",
  },
  {
    title: "Cozy mud hut with big bridge view",
    state: "Oregon",
    price: "72",
    guestAmount: "2",
    bedAmount: "1",
    bathAmount: "1",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/22623807/9dbebaee_original.jpg?aki_policy=large",
    city: "Portland",
    rating: "4.3",
    description:
      "Nestled in the private backyard of our family home, a neighborhood hub. The round, rustic, romantic MudHut hides in a secret garden overlooking the St. Johns bridge and sparkling river, near Cathedral Park, Forest Park, downtown St. Johns, canoe and hiking trails... Firepit, permaculture gardens, loaner bikes, community life, view!",
    fireExtinguisher: "N",
  },
  {
    title: "Woodland Garden Guest Suite with Private Entrance",
    state: "Oregon",
    price: "86",
    guestAmount: "3",
    bedAmount: "1",
    bathAmount: "1",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/555ca2d5-fea8-4d3c-b565-9345fda3ccc9.jpg?aki_policy=large",
    city: "Portland",
    rating: "4.9",
    description:
      "New, spacious 600 sq ft detached, private suite. Features bedroom, bathroom & living area looking out into our woodland garden with deck and walking path. Includes a Cal king bed, and a twin-sized sofa bed with a fully-tiled bathroom. Living area with large screen TV, Netflix, Prime, cable and WiFi. Mini-fridge, microwave, and Nespresso coffee maker. You can relax in the back yard or play ping-pong on the deck. Only 10-mins to downtown.",
    fireExtinguisher: "Y",
  },
  {
    title: "Quarantine Retreat",
    state: "Oregon",
    price: "92",
    guestAmount: "4",
    bedAmount: "1",
    bathAmount: "1",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/4d8c9bce-a2a0-44bc-9ea0-ae0a7cf356d1.jpg?aki_policy=large",
    city: "Portland",
    rating: "4.2",
    description:
      "Enjoy our newly built, charming 750 sq/ft apartment with old growth wooden beams, lots of natural light, and an original kitchen sink that my grandma used for canning her garden fruits. Guests have a private entrance, equipped kitchen, extra large bathroom with tub, queen bed, plush linens, full size pull out couch, storage closet and a 50 TV with Apple TV. We've turned this studio into a mini-oasis and can't wait to share it with you. We live in the main house, available for any questions or needs that may arise during your stay.",
    fireExtinguisher: "Y",
  },
  {
    title: "West Hills Guest Suite",
    state: "Oregon",
    price: "70",
    guestAmount: "2",
    bedAmount: "1",
    bathAmount: "1",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/2e17b6d7-c1cc-48a9-a642-d9afc9f74103.jpg?aki_policy=large",
    city: "Portland",
    rating: "3.9",
    description:
      "The space is at the lower level of our home. It is located in Forest Park walking distance to NW 23rd, and about 5-7min drive to the Pearl District. 10mins to downtown. 10 minutes to OHSU. Less than a mile from Legacy Good Samaritan hospital. Lots of free street parking in front of the home.",
    fireExtinguisher: "Y",
  },
  {
    title: "Tranquil Little House (Private)-Pets Stay for Free",
    state: "Oregon",
    price: "98",
    guestAmount: "4",
    bedAmount: "2",
    bathAmount: "1",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/aaa0d7a1-c86d-4a89-8dc0-1259800430c1.jpg?aki_policy=large",
    city: "Portland",
    rating: "4.9",
    description:
      "Very quiet, well designed, cute & private studio in desirable S.E Portland. All new furniture and fixtures in this mini house that's great for couples. On & off street parking. We LOVE your pets and welcome them to stay ! 1 min drive to Trader Joes & Starbucks, 2 min to Woodstock Blvd with restaurants, bars, ice-cream parlors, supermarkets & more. 15 min to downtown, 5 min to Division St. 3 blocks from a great dog park. Very close to everything but In a very peaceful and relaxing neighborhood .",
    fireExtinguisher: "Y",
  },
  {
    title: "Modern Studio w/ Patio in Quirky Kenton",
    state: "Oregon",
    price: "70",
    guestAmount: "2",
    bedAmount: "1",
    bathAmount: "1",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/5b55dcc8-3a22-4f69-89e7-9c89a7b439db.jpg?aki_policy=large",
    city: "Portland",
    rating: "4.8",
    description:
      "This modern, vibrant studio is detached from the main house and offers a private, quiet getaway for two that is in walking distance to Kenton neighborhood attractions and 10 min drive from Portland city center. All visitors from near and far are welcome, and we look forward to hosting you!",
    fireExtinguisher: "Y",
  },
  {
    title: "Creative & Clean Bungalow in Portland Hot Spot",
    state: "Oregon",
    price: "133",
    guestAmount: "4",
    bedAmount: "1",
    bathAmount: "2",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/b7a99c79-0550-4af9-af73-e1393bb1d016.jpg?aki_policy=xx_large",
    city: "Portland",
    rating: "4.9",
    description:
      "Accepting guests and implementing extra cleaning protocols. Excellent wireless internet speeds! Welcome to The ArtHaus. Soak up the sun on the patio of this creatively crafted home. Inside, polished concrete floors combine with classic finishes and attention to detail, including a sliding timber door. Vibrant color pops abound, not least from the original artworks.",
    fireExtinguisher: "Y",
  },
  {
    title: "Safe and Clean in Artsy WAVL",
    state: "North Carolina",
    price: "141",
    guestAmount: "2",
    bedAmount: "1",
    bathAmount: "1",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/e673ddbe-5cf5-4099-baba-aadb2e5d4e29.jpg?aki_policy=x_large",
    city: "Asheville",
    description: "Entire guest suite hosted by Bradlee",
    fireExtinguisher: "Y",
    rating: "5",
  },
  {
    title: "Near Asheville, Biltmore Estate and AVL airport",
    state: "North Carolina",
    price: "85",
    guestAmount: "4",
    bedAmount: "2",
    bathAmount: "1",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/fe411351-53dc-497d-bbee-f5abaf146fa3.jpg?im_w=960",
    city: "Fletcher",
    description: "Entire guest suite by Caroline",
    fireExtinguisher: "Y",
    rating: "5",
  },
  {
    title: "Cottage in the Trees",
    state: "North Carolina",
    price: "94",
    guestAmount: "2",
    bedAmount: "1",
    bathAmount: "1",
    parking: "N",
    image:
      "https://a0.muscache.com/im/pictures/5197e996-ff89-4e68-9d08-f93b58f80772.jpg?im_w=480",
    city: "Asheville",
    description: "Entire house hosted by Brett",
    fireExtinguisher: "Y",
    rating: "5",
  },
  {
    title: "Mountain View Cottage with Hot Tub",
    state: "North Carolina",
    price: "221",
    guestAmount: "7",
    bedAmount: "3",
    bathAmount: "1",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/43ee30b8-667b-47b4-b1a6-40da3c586567.jpg?im_w=480",
    city: "Candler",
    description: "Entire cottage hosted by Lisa",
    fireExtinguisher: "Y",
    title: "Safe and Clean in Artsy WAVL",
    rating: "5",
  },
  {
    title: "Cottage Under the Blue Ridge",
    state: "North Carolina",
    price: "125",
    guestAmount: "6",
    bedAmount: "2",
    bathAmount: "2",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/ca0bc85d-8215-4f1c-8714-25ab770db7b1.jpg?im_w=960",
    city: "Asheville",
    description: "Entire cottage hosted by Becky",
    fireExtinguisher: "Y",
    rating: "5",
  },
  {
    title: "The Big House on the Farm",
    state: "North Carolina",
    price: "259",
    guestAmount: "16",
    bedAmount: "6",
    bathAmount: "4.5",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/3e1171e6-57d2-453f-94b9-d985a324454c.jpg?im_w=960",
    city: "Asheville",
    description: "Entire house hosted by Asheville Abode",
    fireExtinguisher: "Y",
    rating: "5",
  },
  {
    title: "The Hive",
    state: "North Carolina",
    price: "283",
    guestAmount: "16",
    bedAmount: "6",
    bathAmount: "3.5",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/d4fb5359-187f-447d-ab83-b213ad246cdd.jpg?im_w=480",
    city: "Asheville",
    description: "Entire house hosted by Andrea",
    fireExtinguisher: "Y",
    rating: "5",
  },
  {
    title: "Country Setting",
    state: "North Carolina",
    price: "209",
    guestAmount: "12",
    bedAmount: "4",
    bathAmount: "2",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-22317485-unapproved/original/3958e4a2-eda7-45c9-88f4-f9fc69636aa8.JPEG?im_w=480",
    city: "Candler",
    description: "Entire house hosted by Tia",
    fireExtinguisher: "N",
    rating: "5",
  },
  {
    title: "The Snookery",
    state: "North Carolina",
    price: "407",
    guestAmount: "12",
    bedAmount: "4",
    bathAmount: "4.5",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/5d2f5cc4-7d7c-4dd5-a586-734c0ad1c1a2.jpg?im_w=960",
    city: "Asheville",
    description: "Entire cabin hosted by Aaron",
    fireExtinguisher: "N",
    rating: "5",
  },
  {
    title: "Chic Mountain Forest Getaway",
    state: "North Carolina",
    price: "305",
    guestAmount: "10",
    bedAmount: "4",
    bathAmount: "3",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/13d3ca36-7c4f-484b-ab33-ee91f52f145b.jpg?im_w=480",
    city: "Asheville",
    description: "Entire house hosted by Tiff",
    fireExtinguisher: "Y",
    rating: "5",
  },
  {
    title: "Entire bungalow hosted by Erwan",
    state: "Tahiti",
    price: "150",
    guestAmount: "5",
    bedAmount: "2",
    bathAmount: "2",
    parking: "N",
    image:
      "https://a0.muscache.com/im/pictures/617aa755-ef05-4d6e-bd34-ddb42ebe130b.jpg?im_w=1200",
    city: "Teahupo'o",
    rating: "5",
    description:
      "Dreamy bungalow nested on a lush property with a 180° ocean view over the iconic village of Teahupo'o.",
    fireExtinguisher: "N",
  },
  {
    title: "TEAHUPOO SHELTER",
    state: "Tahiti",
    price: "42",
    guestAmount: "3",
    bedAmount: "2",
    bathAmount: "1",
    parking: "N",
    image:
      "https://a0.muscache.com/im/pictures/1b902a1c-8c79-42e1-a8c0-2e10dbf77d43.jpg?aki_policy=large",
    city: "Teahupo'o",
    rating: "4",
    description:
      "Un refuge dans la simplicité, avec un espace pour dormir, un espace pour cuisiner et un espace pour le bain. Une terrasse pour admirer la mer.",
    fireExtinguisher: "N",
  },
  {
    title: "HITIHERE LODGE - Teahupoo",
    state: "Tahiti",
    price: "154",
    guestAmount: "5",
    bedAmount: "3",
    bathAmount: "3",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/0deb6cb4-195b-4a4a-9e93-9ffa63301e3f.jpg?aki_policy=large",
    city: "Teahupo'o",
    rating: "5",
    description: `notre maison est situé au pk 15.800 coté montagne , jardin arboré et clôturé,avec piscine, garage, climatisée, 3 chambres, 2 salles de bain, à 2 minutes du spot de surf, et au delà la partie sauvage de l'île appelé "le FENUA AIHERE" , un magasin d'alimentation est à proximité puis à 15 minutes en voiture vous trouverez des commerces et des restaurants ( direction TARAVAO).`,
    fireExtinguisher: "N",
  },
  {
    title: "La vague bleue bungalow 02 'jardin",
    state: "Tahiti",
    price: "60",
    guestAmount: "4",
    bedAmount: "1",
    bathAmount: "1",
    parking: "N",
    image:
      "https://a0.muscache.com/im/pictures/dbfd90ea-518f-40dd-b1f5-b3ca4b0b9a21.jpg?aki_policy=large",
    city: "Teahupo'o",
    rating: "4",
    description: `Les bungalows sont situés à 100m de la route principale en bord mer au calme.
Vous pourrez profiter des kayaks mis à disposition gratuitement ou juste profiter du coucher de soleil en bord de mer.`,
    fireExtinguisher: "N",
  },
  {
    title: "Moana@teahupoo CAMPING place",
    state: "Tahiti",
    price: "15",
    guestAmount: "1",
    bedAmount: "1",
    bathAmount: "1",
    parking: "N",
    image:
      "https://a0.muscache.com/im/pictures/463ef39f-4f31-4261-82e9-8626ec115231.jpg?aki_policy=x_large",
    city: "Teahupo'o",
    rating: "4",
    description: `Private property (~ 2 000 m2), right on the shore, where you can place your tent. Located near the end of the road (PK0). At 3 min by bike you will find a store where you can buy everything you need to eat. You will enjoy the ocean view from the place and a lookout to the famous wave of Teahupo'o. I'm located at around 300 meter and At 5 min by boat to the famous pass of Teahupo'o. My family & I will be happy to welcome you in our Place. Hope you'll enjoy it ^_^*`,
    fireExtinguisher: "N",
  },
  {
    title: "Bungalow dans l' arbre au bord du lagon de Vairao",
    state: "Tahiti",
    price: "142",
    guestAmount: "2",
    bedAmount: "1",
    bathAmount: "1",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/ee332c1c-5857-44ca-848b-da9fbd3ac533.jpg?aki_policy=large",
    city: "Teahupo'o",
    rating: "5",
    description: `Au bord du lagon, ce bungalow "tout bambou" est perché dans son arbre à 6m de haut, face à l'océan et à la passe de surf de Vairao. Solide,résistant ; stable ;calme et aéré la chambre de 30m2 est équipée d'un lit'`,
    fireExtinguisher: "N",
  },
  {
    title: "Romantic overwater tahitien bungalow",
    state: "Tahiti",
    price: "165",
    guestAmount: "6",
    bedAmount: "2",
    bathAmount: "1.5",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/3c9b6c55-ce2b-4cb3-899a-7e7bd1c6815d.jpg?aki_policy=large",
    city: "Teahupo'o",
    rating: "5",
    description: `We will be happy to receive you in Vairao, in a wonderful small and quiet village at 8 km from Teahupoo, next to a beautiful white sand beach. Facing the lagoon, watersports lovers will be happy : surf (5 surf spot), whales excusions, diving, snorkeling, kayak, va'a (polynesian pirogue), aquabike, .. At the center of Taxi-boat "tahitiititourandsurf", you will be able to enjoy the different excursions that we offer. Come and discover this little spot of paradise.`,
    fireExtinguisher: "N",
  },
  {
    title: "Face the Wave",
    state: "Tahiti",
    price: "101",
    guestAmount: "2",
    bedAmount: "1",
    bathAmount: "1",
    parking: "N",
    image:
      "https://a0.muscache.com/im/pictures/6dcf7457-efe2-40fd-bd40-1a2a585a30f8.jpg?im_w=960",
    city: "Teahupo'o",
    rating: "4",
    description: `In front of the mythic wave of Teahupoo, A nice house surrounding by Nature and animals.
A confortable room with a beautiful sea side view`,
    fireExtinguisher: "N",
  },
  {
    title: "King's lodge teahupoo",
    state: "Tahiti",
    price: "60",
    guestAmount: "4",
    bedAmount: "2",
    bathAmount: "1",
    parking: "N",
    image:
      "https://a0.muscache.com/im/pictures/5874acb9-0b04-43c8-b0a0-357ec3131940.jpg?im_w=960",
    city: "Teahupo'o",
    rating: "5",
    description: `Le logement est situé près d'une rivière, ou vous aurais la possibilité de vous rafraîchir.De la terrasse vous avez une vue splendide sur la montagne envahi d'une fraîcheur de verdure.l'acces à la plage de situé a 5min à pieds.le magasin ce situe a 5min a vélo.`,
    fireExtinguisher: "N",
  },
  {
    title: "VILLA PUROTUNUI",
    state: "Tahiti",
    price: "186",
    guestAmount: "6",
    bedAmount: "2",
    bathAmount: "1",
    parking: "Y",
    image:
      "https://a0.muscache.com/im/pictures/e5613bc7-7f5e-47b9-af53-96b9b2cd3d63.jpg?im_w=960",
    city: "Teahupo'o",
    rating: "5",
    description:
      "Ma maison est très belle et propre .Elle est située au célèbre spot de Teahupoo dans un cadre unique et calme entre la mer et les montagnes dans un domaine familial et sécurisant idéal pour une sortie en famille en privé....",
    fireExtinguisher: "N",
  },
];

module.exports = listings;
