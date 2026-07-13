/**
 * TV Deal Finder - Data Model
 *
 * Designed to support multiple retailers and price history tracking.
 * Each TV has a unique ID and can have prices from multiple sources.
 *
 * Generated: 2026-01-23 21:08:14
 * Total TVs: 96
 */

const TV_DATA = {
  "lastUpdated": "2026-07-13T15:27:15Z",
  "retailers": {
    "bestbuy": {
      "id": "bestbuy",
      "name": "Best Buy",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Best_Buy_Logo.svg",
      "color": "#0046be"
    },
    "amazon": {
      "id": "amazon",
      "name": "Amazon",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      "color": "#ff9900"
    },
    "walmart": {
      "id": "walmart",
      "name": "Walmart",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
      "color": "#0071dc"
    },
    "costco": {
      "id": "costco",
      "name": "Costco",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/5/59/Costco_Wholesale_logo_2010-10-26.svg",
      "color": "#e31837"
    },
    "target": {
      "id": "target",
      "name": "Target",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg",
      "color": "#cc0000"
    },
    "macys": {
      "id": "macys",
      "name": "Macy's",
      "logo": "",
      "color": "#e21a2c"
    },
    "hsn": {
      "id": "hsn",
      "name": "HSN",
      "logo": "",
      "color": "#00a3e0"
    }
  },
  "tvs": [
    {
      "id": "lg-b4-55",
      "brand": "LG",
      "model": "B4",
      "fullName": "LG 55\" B4 OLED 4K Smart TV",
      "size": 55,
      "year": 2024,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8.1,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/b4-oled",
      "fairValue": 787.3,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/650450e3-ca5b-40a5-8aa7-389076a50964.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/650450e3-ca5b-40a5-8aa7-389076a50964.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 989.99,
          "retailPrice": 1099.99,
          "url": "https://www.bestbuy.com/site/6578057.p",
          "sku": "6578057",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:32Z",
          "originalUrl": "https://www.bestbuy.com/site/6578057.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 989.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 989.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.4,
        "mixedUsageScore": 8.1,
        "movieScore": 8.3,
        "brightRoomScore": 6.9
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision",
        "smartPlatform": "webOS"
      },
      "description": "The LG B4 is LG's entry-level OLED, making OLED technology more accessible. It sits below the flagship C4. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. At 55 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/b4-oled",
        "scrapedAt": "2026-01-22T18:48:36"
      }
    },
    {
      "id": "lg-b4-78",
      "brand": "LG",
      "model": "B4",
      "fullName": "LG 78\" B4 OLED 4K Smart TV",
      "size": 78,
      "year": 2024,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8.1,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/b4-oled",
      "fairValue": 2149.68,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/51f637c5-fa87-4086-a1e1-9b382e37246a.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/51f637c5-fa87-4086-a1e1-9b382e37246a.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1529.99,
          "retailPrice": 1599.99,
          "url": "https://www.bestbuy.com/site/6578055.p",
          "sku": "6578055",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:32Z",
          "originalUrl": "https://www.bestbuy.com/site/6578055.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1529.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1529.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.4,
        "mixedUsageScore": 8.1,
        "movieScore": 8.3,
        "brightRoomScore": 6.9
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision",
        "smartPlatform": "webOS"
      },
      "description": "The LG B4 is LG's entry-level OLED, making OLED technology more accessible. It sits below the flagship C4. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. At 78 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/b4-oled",
        "scrapedAt": "2026-01-22T18:48:36"
      }
    },
    {
      "id": "lg-b5-48",
      "brand": "LG",
      "model": "B5",
      "fullName": "LG 48\" B5 OLED 4K Smart TV",
      "size": 48,
      "year": 2025,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/b5-oled",
      "fairValue": 570.57,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/21afec55-4335-4253-8147-06dd44a6f68b.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/21afec55-4335-4253-8147-06dd44a6f68b.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 599.99,
          "retailPrice": 1299.99,
          "url": "https://www.bestbuy.com/site/6635292.p",
          "sku": "6635292",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:53Z",
          "originalUrl": "https://www.bestbuy.com/site/6635292.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 599.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 599.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.5
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision",
        "smartPlatform": "webOS"
      },
      "description": "The LG B5 is LG's entry-level OLED for 2025, making OLED technology more accessible. It sits below the flagship C5. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at sports. The compact 48-inch screen is perfect for bedrooms, offices, kitchens, or as a secondary TV.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/b5-oled",
        "scrapedAt": "2026-01-22T18:51:21"
      }
    },
    {
      "id": "lg-b5-55",
      "brand": "LG",
      "model": "B5",
      "fullName": "LG 55\" B5 OLED 4K Smart TV",
      "size": 55,
      "year": 2025,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/b5-oled",
      "fairValue": 781.14,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/7ee07db2-07be-4b3b-8891-3d5594e3bf5b.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/7ee07db2-07be-4b3b-8891-3d5594e3bf5b.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 899.99,
          "retailPrice": 1499.99,
          "url": "https://www.bestbuy.com/site/6635751.p",
          "sku": "6635751",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:54Z",
          "originalUrl": "https://www.bestbuy.com/site/6635751.p",
          "staleHidden": true
        },
        {
          "retailerId": "amazon",
          "currentPrice": 889.95,
          "retailPrice": null,
          "url": "https://www.amazon.com/dp/B0FLYPMZNJ?tag=tvschool-20",
          "originalUrl": "https://www.amazon.com/dp/B0FLYPMZNJ",
          "sku": "B0FLYPMZNJ",
          "asin": "B0FLYPMZNJ",
          "inStock": false,
          "onSale": false,
          "lastChecked": "2026-07-13T15:30:00Z",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 899.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 899.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.5
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision",
        "smartPlatform": "webOS"
      },
      "description": "The LG B5 is LG's entry-level OLED for 2025, making OLED technology more accessible. It sits below the flagship C5. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at sports. At 55 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/b5-oled",
        "scrapedAt": "2026-01-22T18:51:21"
      }
    },
    {
      "id": "lg-b5-65",
      "brand": "LG",
      "model": "B5",
      "fullName": "LG 65\" B5 OLED 4K Smart TV",
      "size": 65,
      "year": 2025,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/b5-oled",
      "fairValue": 1324.54,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/d236d583-02bd-4006-9a7e-a4fad1013423.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/d236d583-02bd-4006-9a7e-a4fad1013423.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 986.99,
          "retailPrice": 1999.99,
          "url": "https://www.bestbuy.com/site/6633087.p",
          "sku": "6633087",
          "inStock": false,
          "lastChecked": "2026-01-22T20:30:13Z",
          "originalUrl": "https://www.bestbuy.com/site/6633087.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 986.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.5
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision",
        "smartPlatform": "webOS"
      },
      "description": "The LG B5 is LG's entry-level OLED for 2025, making OLED technology more accessible. It sits below the flagship C5. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at sports. The 65-inch size is the most popular choice, ideal for average living rooms with 6-8 feet of viewing distance.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/b5-oled",
        "scrapedAt": "2026-01-22T18:51:21"
      }
    },
    {
      "id": "lg-b5-77",
      "brand": "LG",
      "model": "B5",
      "fullName": "LG 77\" B5 OLED 4K Smart TV",
      "size": 77,
      "year": 2025,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/b5-oled",
      "fairValue": 2058.13,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/da0eadbd-4d4d-4ac8-9ff8-43f8c88c8355.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/da0eadbd-4d4d-4ac8-9ff8-43f8c88c8355.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1499.99,
          "retailPrice": 2999.99,
          "url": "https://www.bestbuy.com/site/6621813.p",
          "sku": "6621813",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:52Z",
          "originalUrl": "https://www.bestbuy.com/site/6621813.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1499.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1499.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.5
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision",
        "smartPlatform": "webOS"
      },
      "description": "The LG B5 is LG's entry-level OLED for 2025, making OLED technology more accessible. It sits below the flagship C5. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at sports. At 77 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/b5-oled",
        "scrapedAt": "2026-01-22T18:51:21"
      }
    },
    {
      "id": "lg-b5-84",
      "brand": "LG",
      "model": "B5",
      "fullName": "LG 84\" B5 OLED 4K Smart TV",
      "size": 84,
      "year": 2025,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/b5-oled",
      "fairValue": 2581.15,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/e1e6cabe-c122-4dae-9256-d41484c1f22d.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/e1e6cabe-c122-4dae-9256-d41484c1f22d.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 4499.99,
          "retailPrice": 4499.99,
          "url": "https://www.bestbuy.com/site/6621823.p",
          "sku": "6621823",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:53Z",
          "originalUrl": "https://www.bestbuy.com/site/6621823.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 4499.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 4499.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.5
      },
      "description": "The LG B5 is LG's entry-level OLED for 2025, making OLED technology more accessible. It sits below the flagship C5. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at sports. At 84 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/b5-oled",
        "scrapedAt": "2026-01-22T18:51:21"
      }
    },
    {
      "id": "lg-c4-65",
      "brand": "LG",
      "model": "C4",
      "fullName": "LG 65\" C4 OLED 4K Smart TV",
      "size": 65,
      "year": 2024,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8.3,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/c4-oled",
      "fairValue": 1355.91,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6944bb15-f509-4fba-9434-5eb440029c22.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6944bb15-f509-4fba-9434-5eb440029c22.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1274.99,
          "retailPrice": 1499.99,
          "url": "https://www.bestbuy.com/site/6578042.p",
          "sku": "6578042",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:30Z",
          "originalUrl": "https://www.bestbuy.com/site/6578042.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1274.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1274.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.4,
        "mixedUsageScore": 8.3,
        "movieScore": 8.5,
        "brightRoomScore": 6.9
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision",
        "smartPlatform": "webOS"
      },
      "description": "The LG C4 is LG's most popular OLED, the sweet spot of price and performance. It sits above the B4 and below the G4 in LG's lineup. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at movies. The 65-inch size is the most popular choice, ideal for average living rooms with 6-8 feet of viewing distance.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/c4-oled",
        "scrapedAt": "2026-01-22T18:48:30"
      }
    },
    {
      "id": "lg-c4-77",
      "brand": "LG",
      "model": "C4",
      "fullName": "LG 77\" C4 OLED 4K Smart TV",
      "size": 77,
      "year": 2024,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8.3,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/c4-oled",
      "fairValue": 2106.87,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/e320237f-bdd7-4f65-a532-60e3df47bf74.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/e320237f-bdd7-4f65-a532-60e3df47bf74.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1975.99,
          "retailPrice": 2499.99,
          "url": "https://www.bestbuy.com/site/6578044.p",
          "sku": "6578044",
          "inStock": false,
          "lastChecked": "2026-01-22T18:48:30Z",
          "originalUrl": "https://www.bestbuy.com/site/6578044.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1975.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.4,
        "mixedUsageScore": 8.3,
        "movieScore": 8.5,
        "brightRoomScore": 6.9
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision",
        "smartPlatform": "webOS"
      },
      "description": "The LG C4 is LG's most popular OLED, the sweet spot of price and performance. It sits above the B4 and below the G4 in LG's lineup. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at movies. At 77 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/c4-oled",
        "scrapedAt": "2026-01-22T18:48:30"
      }
    },
    {
      "id": "lg-c4-84",
      "brand": "LG",
      "model": "C4",
      "fullName": "LG 84\" C4 OLED 4K Smart TV",
      "size": 84,
      "year": 2024,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8.3,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/c4-oled",
      "fairValue": 2642.28,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/12e4ada0-d656-44ff-8ebe-df224df40409.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/12e4ada0-d656-44ff-8ebe-df224df40409.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 2999.99,
          "retailPrice": 3499.99,
          "url": "https://www.bestbuy.com/site/6578043.p",
          "sku": "6578043",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:31Z",
          "originalUrl": "https://www.bestbuy.com/site/6578043.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 2999.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 2999.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.4,
        "mixedUsageScore": 8.3,
        "movieScore": 8.5,
        "brightRoomScore": 6.9
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision",
        "smartPlatform": "webOS"
      },
      "description": "The LG C4 is LG's most popular OLED, the sweet spot of price and performance. It sits above the B4 and below the G4 in LG's lineup. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at movies. At 84 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/c4-oled",
        "scrapedAt": "2026-01-22T18:48:30"
      }
    },
    {
      "id": "lg-c5-42",
      "brand": "LG",
      "model": "C5",
      "fullName": "LG 42\" C5 OLED 4K Smart TV",
      "size": 42,
      "year": 2025,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8.6,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/c5-oled",
      "fairValue": 469.54,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/16a4f218-282f-4b60-a928-14e893dbbb15.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/16a4f218-282f-4b60-a928-14e893dbbb15.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 899.99,
          "retailPrice": 1399.99,
          "url": "https://www.bestbuy.com/site/6621833.p",
          "sku": "6621833",
          "inStock": false,
          "lastChecked": "2026-01-22T20:30:11Z",
          "originalUrl": "https://www.bestbuy.com/site/6621833.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 899.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.2,
        "mixedUsageScore": 8.6,
        "movieScore": 8.8,
        "brightRoomScore": 7.7
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision, HDR10",
        "smartPlatform": "webOS"
      },
      "description": "The LG C5 is LG's most popular OLED for 2025, the sweet spot of price and performance. It sits above the B5 and below the G5 in LG's lineup. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at movies. The compact 42-inch screen is perfect for bedrooms, offices, kitchens, or as a secondary TV.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/c5-oled",
        "scrapedAt": "2026-01-22T18:51:15"
      }
    },
    {
      "id": "lg-c5-48",
      "brand": "LG",
      "model": "C5",
      "fullName": "LG 48\" C5 OLED 4K Smart TV",
      "size": 48,
      "year": 2025,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8.6,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/c5-oled",
      "fairValue": 597.6,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/8914e0f2-583f-43dc-82b6-e950c45ef05a.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/8914e0f2-583f-43dc-82b6-e950c45ef05a.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 999.99,
          "retailPrice": 1599.99,
          "url": "https://www.bestbuy.com/site/6621817.p",
          "sku": "6621817",
          "inStock": false,
          "lastChecked": "2026-01-22T20:30:09Z",
          "originalUrl": "https://www.bestbuy.com/site/6621817.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 999.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.2,
        "mixedUsageScore": 8.6,
        "movieScore": 8.8,
        "brightRoomScore": 7.7
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision, HDR10",
        "smartPlatform": "webOS"
      },
      "description": "The LG C5 is LG's most popular OLED for 2025, the sweet spot of price and performance. It sits above the B5 and below the G5 in LG's lineup. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at movies. The compact 48-inch screen is perfect for bedrooms, offices, kitchens, or as a secondary TV.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/c5-oled",
        "scrapedAt": "2026-01-22T18:51:15"
      }
    },
    {
      "id": "lg-c5-55",
      "brand": "LG",
      "model": "C5",
      "fullName": "LG 55\" C5 OLED 4K Smart TV",
      "size": 55,
      "year": 2025,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8.6,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/c5-oled",
      "fairValue": 818.14,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/d5256fab-a1dd-46af-b882-6c76d7747dbd.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/d5256fab-a1dd-46af-b882-6c76d7747dbd.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1199.99,
          "retailPrice": 1999.99,
          "url": "https://www.bestbuy.com/site/6621828.p",
          "sku": "6621828",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:51Z",
          "originalUrl": "https://www.bestbuy.com/site/6621828.p",
          "staleHidden": true
        },
        {
          "retailerId": "amazon",
          "currentPrice": 1196.99,
          "retailPrice": null,
          "url": "https://www.amazon.com/dp/B0DYQF1Q3Z?tag=tvschool-20",
          "originalUrl": "https://www.amazon.com/dp/B0DYQF1Q3Z",
          "sku": "B0DYQF1Q3Z",
          "asin": "B0DYQF1Q3Z",
          "inStock": false,
          "onSale": false,
          "lastChecked": "2026-07-13T15:30:00Z",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1199.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1199.99
        },
        {
          "date": "2026-07-04",
          "price": 1099
        },
        {
          "date": "2026-07-07",
          "price": 1196.99
        },
        {
          "date": "2026-07-08",
          "price": 1196.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.2,
        "mixedUsageScore": 8.6,
        "movieScore": 8.8,
        "brightRoomScore": 7.7
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision",
        "smartPlatform": "webOS"
      },
      "description": "The LG C5 is LG's most popular OLED for 2025, the sweet spot of price and performance. It sits above the B5 and below the G5 in LG's lineup. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at movies. At 55 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/c5-oled",
        "scrapedAt": "2026-01-22T18:51:15"
      }
    },
    {
      "id": "lg-c5-65",
      "brand": "LG",
      "model": "C5",
      "fullName": "LG 65\" C5 OLED 4K Smart TV",
      "size": 65,
      "year": 2025,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8.6,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/c5-oled",
      "fairValue": 1387.28,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/180a34c7-337b-4f52-827e-294d5cc718c2.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/180a34c7-337b-4f52-827e-294d5cc718c2.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1399.99,
          "retailPrice": 2699.99,
          "url": "https://www.bestbuy.com/site/6621824.p",
          "sku": "6621824",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:50Z",
          "originalUrl": "https://www.bestbuy.com/site/6621824.p",
          "staleHidden": true
        },
        {
          "retailerId": "amazon",
          "currentPrice": 1399.99,
          "retailPrice": null,
          "url": "https://www.amazon.com/dp/B0DYQM4BDB?tag=tvschool-20",
          "originalUrl": "https://www.amazon.com/dp/B0DYQM4BDB",
          "sku": "B0DYQM4BDB",
          "asin": "B0DYQM4BDB",
          "inStock": false,
          "onSale": false,
          "lastChecked": "2026-07-13T15:30:00Z",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1399.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1399.99
        },
        {
          "date": "2026-07-04",
          "price": 1299
        },
        {
          "date": "2026-07-09",
          "price": 1399.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.2,
        "mixedUsageScore": 8.6,
        "movieScore": 8.8,
        "brightRoomScore": 7.7
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision",
        "smartPlatform": "webOS"
      },
      "description": "The LG C5 is LG's most popular OLED for 2025, the sweet spot of price and performance. It sits above the B5 and below the G5 in LG's lineup. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at movies. The 65-inch size is the most popular choice, ideal for average living rooms with 6-8 feet of viewing distance.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/c5-oled",
        "scrapedAt": "2026-01-22T18:51:15"
      }
    },
    {
      "id": "lg-c5-77",
      "brand": "LG",
      "model": "C5",
      "fullName": "LG 77\" C5 OLED 4K Smart TV",
      "size": 77,
      "year": 2025,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8.6,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/c5-oled",
      "fairValue": 2155.62,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/dc180891-5b63-403c-85da-1a8787daa18b.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/dc180891-5b63-403c-85da-1a8787daa18b.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1999.99,
          "retailPrice": 3699.99,
          "url": "https://www.bestbuy.com/site/6621825.p",
          "sku": "6621825",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:51Z",
          "originalUrl": "https://www.bestbuy.com/site/6621825.p",
          "staleHidden": true
        },
        {
          "retailerId": "amazon",
          "currentPrice": 1999.99,
          "retailPrice": null,
          "url": "https://www.amazon.com/dp/B0DYQFW6TR?tag=tvschool-20",
          "originalUrl": "https://www.amazon.com/dp/B0DYQFW6TR",
          "sku": "B0DYQFW6TR",
          "asin": "B0DYQFW6TR",
          "inStock": false,
          "onSale": false,
          "lastChecked": "2026-07-13T15:30:00Z",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1999.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1999.99
        },
        {
          "date": "2026-07-07",
          "price": 1799.99
        },
        {
          "date": "2026-07-08",
          "price": 1799.99
        },
        {
          "date": "2026-07-10",
          "price": 2199
        },
        {
          "date": "2026-07-11",
          "price": 1999.99
        },
        {
          "date": "2026-07-12",
          "price": 1999.99
        },
        {
          "date": "2026-07-13",
          "price": 1999.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.2,
        "mixedUsageScore": 8.6,
        "movieScore": 8.8,
        "brightRoomScore": 7.7
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision",
        "smartPlatform": "webOS"
      },
      "description": "The LG C5 is LG's most popular OLED for 2025, the sweet spot of price and performance. It sits above the B5 and below the G5 in LG's lineup. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at movies. At 77 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/c5-oled",
        "scrapedAt": "2026-01-22T18:51:15"
      }
    },
    {
      "id": "lg-c5-84",
      "brand": "LG",
      "model": "C5",
      "fullName": "LG 84\" C5 OLED 4K Smart TV",
      "size": 84,
      "year": 2025,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8.6,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/c5-oled",
      "fairValue": 2703.42,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/a7ebdde2-7142-4306-854c-47104a4ef303.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/a7ebdde2-7142-4306-854c-47104a4ef303.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 3299.99,
          "retailPrice": 5399.99,
          "url": "https://www.bestbuy.com/site/6621822.p",
          "sku": "6621822",
          "inStock": false,
          "lastChecked": "2026-01-22T20:30:09Z",
          "originalUrl": "https://www.bestbuy.com/site/6621822.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 3299.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.2,
        "mixedUsageScore": 8.6,
        "movieScore": 8.8,
        "brightRoomScore": 7.7
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision",
        "smartPlatform": "webOS"
      },
      "description": "The LG C5 is LG's most popular OLED for 2025, the sweet spot of price and performance. It sits above the B5 and below the G5 in LG's lineup. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at movies. At 84 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/c5-oled",
        "scrapedAt": "2026-01-22T18:51:15"
      }
    },
    {
      "id": "lg-g4-65",
      "brand": "LG",
      "model": "G4",
      "fullName": "LG 65\" G4 OLED 4K Smart TV",
      "size": 65,
      "year": 2024,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8.6,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/g4-oled",
      "fairValue": 1387.28,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/bd8cd47c-84d6-43bb-aeb3-f5757315179f.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/bd8cd47c-84d6-43bb-aeb3-f5757315179f.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 2279.99,
          "retailPrice": 2399.99,
          "url": "https://www.bestbuy.com/site/6578150.p",
          "sku": "6578150",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:29Z",
          "originalUrl": "https://www.bestbuy.com/site/6578150.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 2279.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 2279.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.1,
        "mixedUsageScore": 8.6,
        "movieScore": 8.7,
        "brightRoomScore": 7.7
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision",
        "smartPlatform": "webOS"
      },
      "description": "The LG G4 is LG's flagship Gallery OLED, designed to mount flush against the wall. It sits above the C4. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at movies. The 65-inch size is the most popular choice, ideal for average living rooms with 6-8 feet of viewing distance.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/g4-oled",
        "scrapedAt": "2026-01-22T18:48:24"
      }
    },
    {
      "id": "lg-g4-77",
      "brand": "LG",
      "model": "G4",
      "fullName": "LG 77\" G4 OLED 4K Smart TV",
      "size": 77,
      "year": 2024,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8.6,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/g4-oled",
      "fairValue": 2155.62,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/ae5953f7-abfc-4fcf-8fba-9a39b483f504.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/ae5953f7-abfc-4fcf-8fba-9a39b483f504.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 2804.99,
          "retailPrice": 3299.99,
          "url": "https://www.bestbuy.com/site/6578047.p",
          "sku": "6578047",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:30Z",
          "originalUrl": "https://www.bestbuy.com/site/6578047.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 2804.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 2804.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.1,
        "mixedUsageScore": 8.6,
        "movieScore": 8.7,
        "brightRoomScore": 7.7
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision",
        "smartPlatform": "webOS"
      },
      "description": "The LG G4 is LG's flagship Gallery OLED, designed to mount flush against the wall. It sits above the C4. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at movies. At 77 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/g4-oled",
        "scrapedAt": "2026-01-22T18:48:24"
      }
    },
    {
      "id": "lg-g5-55",
      "brand": "LG",
      "model": "G5",
      "fullName": "LG 55\" G5 OLED 4K Smart TV",
      "size": 55,
      "year": 2025,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 9,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/g5-oled",
      "fairValue": 842.81,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/7ee07db2-07be-4b3b-8891-3d5594e3bf5b.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/7ee07db2-07be-4b3b-8891-3d5594e3bf5b.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 899.99,
          "retailPrice": 1499.99,
          "url": "https://www.bestbuy.com/site/6635751.p",
          "sku": "6635751",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:49Z",
          "originalUrl": "https://www.bestbuy.com/site/6635751.p",
          "staleHidden": true
        },
        {
          "retailerId": "amazon",
          "currentPrice": 1899.99,
          "retailPrice": 1699,
          "url": "https://www.amazon.com/dp/B0DYQGRHX3?tag=tvschool-20",
          "originalUrl": "https://www.amazon.com/dp/B0DYQGRHX3",
          "sku": "B0DYQGRHX3",
          "asin": "B0DYQGRHX3",
          "inStock": true,
          "onSale": true,
          "lastChecked": "2026-07-13T15:30:00Z"
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 899.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 899.99
        },
        {
          "date": "2026-07-07",
          "price": 1899.96
        },
        {
          "date": "2026-07-08",
          "price": 1899.99
        },
        {
          "date": "2026-07-09",
          "price": 1899.96
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.8,
        "mixedUsageScore": 9,
        "movieScore": 9,
        "brightRoomScore": 8.7
      },
      "description": "The LG G5 is LG's flagship Gallery OLED for 2025, designed to mount flush against the wall. It sits above the C5. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at movies and sports. At 55 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/g5-oled",
        "scrapedAt": "2026-01-22T18:51:08"
      }
    },
    {
      "id": "lg-g5-65",
      "brand": "LG",
      "model": "G5",
      "fullName": "LG 65\" G5 OLED 4K Smart TV",
      "size": 65,
      "year": 2025,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 9,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/g5-oled",
      "fairValue": 1429.11,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/b00c5738-798c-478f-968e-b4208cb73043.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/b00c5738-798c-478f-968e-b4208cb73043.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 2299.99,
          "retailPrice": 3399.99,
          "url": "https://www.bestbuy.com/site/6621810.p",
          "sku": "6621810",
          "inStock": false,
          "lastChecked": "2026-01-22T20:30:06Z",
          "originalUrl": "https://www.bestbuy.com/site/6621810.p",
          "staleHidden": true
        },
        {
          "retailerId": "amazon",
          "currentPrice": 2299,
          "retailPrice": null,
          "url": "https://www.amazon.com/dp/B0DYQR8R98?tag=tvschool-20",
          "originalUrl": "https://www.amazon.com/dp/B0DYQR8R98",
          "sku": "B0DYQR8R98",
          "asin": "B0DYQR8R98",
          "inStock": false,
          "onSale": false,
          "lastChecked": "2026-07-13T15:30:00Z",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 2299.99
        },
        {
          "date": "2026-07-07",
          "price": 2299
        },
        {
          "date": "2026-07-08",
          "price": 2299
        },
        {
          "date": "2026-07-10",
          "price": 2299
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.8,
        "mixedUsageScore": 9,
        "movieScore": 9,
        "brightRoomScore": 8.7
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision",
        "smartPlatform": "webOS"
      },
      "description": "The LG G5 is LG's flagship Gallery OLED for 2025, designed to mount flush against the wall. It sits above the C5. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at movies and sports. The 65-inch size is the most popular choice, ideal for average living rooms with 6-8 feet of viewing distance.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/g5-oled",
        "scrapedAt": "2026-01-22T18:51:08"
      }
    },
    {
      "id": "lg-g5-77",
      "brand": "LG",
      "model": "G5",
      "fullName": "LG 77\" G5 OLED 4K Smart TV",
      "size": 77,
      "year": 2025,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 9,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/g5-oled",
      "fairValue": 2220.61,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/fd4b1da9-f8c9-43e9-a5aa-9eb355092874.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/fd4b1da9-f8c9-43e9-a5aa-9eb355092874.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 3499.99,
          "retailPrice": 4499.99,
          "url": "https://www.bestbuy.com/site/6621819.p",
          "sku": "6621819",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:48Z",
          "originalUrl": "https://www.bestbuy.com/site/6621819.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 3499.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 3499.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.8,
        "mixedUsageScore": 9,
        "movieScore": 9,
        "brightRoomScore": 8.7
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision",
        "smartPlatform": "webOS"
      },
      "description": "The LG G5 is LG's flagship Gallery OLED for 2025, designed to mount flush against the wall. It sits above the C5. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at movies and sports. At 77 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/g5-oled",
        "scrapedAt": "2026-01-22T18:51:08"
      }
    },
    {
      "id": "lg-g5-84",
      "brand": "LG",
      "model": "G5",
      "fullName": "LG 84\" G5 OLED 4K Smart TV",
      "size": 84,
      "year": 2025,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 9,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/g5-oled",
      "fairValue": 2784.93,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/fb7fa580-a991-452c-b4e0-cdcb09fa340b.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/fb7fa580-a991-452c-b4e0-cdcb09fa340b.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 4999.99,
          "retailPrice": 6499.99,
          "url": "https://www.bestbuy.com/site/6621830.p",
          "sku": "6621830",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:49Z",
          "originalUrl": "https://www.bestbuy.com/site/6621830.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 4999.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 4999.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.8,
        "mixedUsageScore": 9,
        "movieScore": 9,
        "brightRoomScore": 8.7
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision",
        "smartPlatform": "webOS"
      },
      "description": "The LG G5 is LG's flagship Gallery OLED for 2025, designed to mount flush against the wall. It sits above the C5. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at movies and sports. At 84 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/g5-oled",
        "scrapedAt": "2026-01-22T18:51:08"
      }
    },
    {
      "id": "lg-g5-97",
      "brand": "LG",
      "model": "G5",
      "fullName": "LG 97\" G5 OLED 4K Smart TV",
      "size": 97,
      "year": 2025,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 9,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/lg/g5-oled",
      "fairValue": 4360.61,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/18ae24d3-7d4a-4589-b707-dcce45b15402.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/18ae24d3-7d4a-4589-b707-dcce45b15402.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 22996.99,
          "retailPrice": 24999.99,
          "url": "https://www.bestbuy.com/site/6621820.p",
          "sku": "6621820",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:48Z",
          "originalUrl": "https://www.bestbuy.com/site/6621820.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 22996.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 22996.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.8,
        "mixedUsageScore": 9,
        "movieScore": 9,
        "brightRoomScore": 8.7
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision",
        "smartPlatform": "webOS"
      },
      "description": "The LG G5 is LG's flagship Gallery OLED for 2025, designed to mount flush against the wall. It sits above the C5. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at movies and sports. The 97-inch screen is designed for large living rooms or home theaters with seating 8-12 feet away.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/lg/g5-oled",
        "scrapedAt": "2026-01-22T18:51:08"
      }
    },
    {
      "id": "samsung-q60d-42",
      "brand": "Samsung",
      "model": "Q60D",
      "fullName": "Samsung 42\" Q60D QLED 4K Smart TV",
      "size": 42,
      "year": 2024,
      "panelType": "QLED",
      "resolution": "4K",
      "rtingsScore": 3,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/q60d",
      "fairValue": 246.67,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/5bfb7708-2ac5-45f1-9958-2df8d1e0739f.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/5bfb7708-2ac5-45f1-9958-2df8d1e0739f.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 549.99,
          "retailPrice": 549.99,
          "url": "https://www.bestbuy.com/site/6611507.p",
          "sku": "6611507",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:28Z",
          "originalUrl": "https://www.bestbuy.com/site/6611507.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 549.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 549.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 5.6
      },
      "specs": {
        "refreshRate": "60Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung Q60D is Samsung's entry-level QLED, their most affordable quantum dot TV. It sits below the flagship Q70D. It uses QLED technology (Quantum Dot LED) for enhanced color volume and brightness compared to standard LED. The compact 42-inch screen is perfect for bedrooms, offices, kitchens, or as a secondary TV.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/q60d",
        "scrapedAt": "2026-01-22T18:48:18"
      }
    },
    {
      "id": "samsung-q60d-50",
      "brand": "Samsung",
      "model": "Q60D",
      "fullName": "Samsung 50\" Q60D QLED 4K Smart TV",
      "size": 50,
      "year": 2024,
      "panelType": "QLED",
      "resolution": "4K",
      "rtingsScore": 3,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/q60d",
      "fairValue": 336.38,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/5bfb7708-2ac5-45f1-9958-2df8d1e0739f.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/5bfb7708-2ac5-45f1-9958-2df8d1e0739f.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 649.99,
          "retailPrice": 649.99,
          "url": "https://www.bestbuy.com/site/6611508.p",
          "sku": "6611508",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:29Z",
          "originalUrl": "https://www.bestbuy.com/site/6611508.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 649.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 649.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 5.6
      },
      "specs": {
        "refreshRate": "60Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung Q60D is Samsung's entry-level QLED, their most affordable quantum dot TV. It sits below the flagship Q70D. It uses QLED technology (Quantum Dot LED) for enhanced color volume and brightness compared to standard LED. The compact 50-inch screen is perfect for bedrooms, offices, kitchens, or as a secondary TV.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/q60d",
        "scrapedAt": "2026-01-22T18:48:18"
      }
    },
    {
      "id": "samsung-q60d-65",
      "brand": "Samsung",
      "model": "Q60D",
      "fullName": "Samsung 65\" Q60D QLED 4K Smart TV",
      "size": 65,
      "year": 2024,
      "panelType": "QLED",
      "resolution": "4K",
      "rtingsScore": 3,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/q60d",
      "fairValue": 728.81,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/5bfb7708-2ac5-45f1-9958-2df8d1e0739f.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/5bfb7708-2ac5-45f1-9958-2df8d1e0739f.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 999.99,
          "retailPrice": 999.99,
          "url": "https://www.bestbuy.com/site/6611505.p",
          "sku": "6611505",
          "inStock": false,
          "lastChecked": "2026-01-22T20:29:44Z",
          "originalUrl": "https://www.bestbuy.com/site/6611505.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 999.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 5.6
      },
      "specs": {
        "refreshRate": "60Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung Q60D is Samsung's entry-level QLED, their most affordable quantum dot TV. It sits below the flagship Q70D. It uses QLED technology (Quantum Dot LED) for enhanced color volume and brightness compared to standard LED. The 65-inch size is the most popular choice, ideal for average living rooms with 6-8 feet of viewing distance.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/q60d",
        "scrapedAt": "2026-01-22T18:48:18"
      }
    },
    {
      "id": "samsung-q60d-75",
      "brand": "Samsung",
      "model": "Q60D",
      "fullName": "Samsung 75\" Q60D QLED 4K Smart TV",
      "size": 75,
      "year": 2024,
      "panelType": "QLED",
      "resolution": "4K",
      "rtingsScore": 3,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/q60d",
      "fairValue": 1065.19,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/5bfb7708-2ac5-45f1-9958-2df8d1e0739f.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/5bfb7708-2ac5-45f1-9958-2df8d1e0739f.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 999.99,
          "retailPrice": 999.99,
          "url": "https://www.bestbuy.com/site/6575029.p",
          "sku": "6575029",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:27Z",
          "originalUrl": "https://www.bestbuy.com/site/6575029.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 999.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 999.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 5.6
      },
      "specs": {
        "refreshRate": "60Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung Q60D is Samsung's entry-level QLED, their most affordable quantum dot TV. It sits below the flagship Q70D. It uses QLED technology (Quantum Dot LED) for enhanced color volume and brightness compared to standard LED. At 75 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/q60d",
        "scrapedAt": "2026-01-22T18:48:18"
      }
    },
    {
      "id": "samsung-q60d-85",
      "brand": "Samsung",
      "model": "Q60D",
      "fullName": "Samsung 85\" Q60D QLED 4K Smart TV",
      "size": 85,
      "year": 2024,
      "panelType": "QLED",
      "resolution": "4K",
      "rtingsScore": 3,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/q60d",
      "fairValue": 1461.36,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/5bfb7708-2ac5-45f1-9958-2df8d1e0739f.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/5bfb7708-2ac5-45f1-9958-2df8d1e0739f.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1299.99,
          "retailPrice": 1299.99,
          "url": "https://www.bestbuy.com/site/6575099.p",
          "sku": "6575099",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:27Z",
          "originalUrl": "https://www.bestbuy.com/site/6575099.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1299.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1299.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 5.6
      },
      "description": "The Samsung Q60D is Samsung's entry-level QLED, their most affordable quantum dot TV. It sits below the flagship Q70D. It uses QLED technology (Quantum Dot LED) for enhanced color volume and brightness compared to standard LED. The 85-inch screen is designed for large living rooms or home theaters with seating 8-12 feet away.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/q60d",
        "scrapedAt": "2026-01-22T18:48:18"
      }
    },
    {
      "id": "samsung-q70d-55",
      "brand": "Samsung",
      "model": "Q70D",
      "fullName": "Samsung 55\" Q70D QLED 4K Smart TV",
      "size": 55,
      "year": 2024,
      "panelType": "QLED",
      "resolution": "4K",
      "rtingsScore": 6.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/q70d",
      "fairValue": 626.03,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/8489ece4-7085-4ad2-bbe0-2c35dc7d2909.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/8489ece4-7085-4ad2-bbe0-2c35dc7d2909.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 799.99,
          "retailPrice": 999.99,
          "url": "https://www.bestbuy.com/site/6576592.p",
          "sku": "6576592",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:27Z",
          "originalUrl": "https://www.bestbuy.com/site/6576592.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 799.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 799.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 6.8
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung Q70D is Samsung's mid-range QLED, solid all-around performance. It sits above the Q60D and below the Q80D in Samsung's lineup. It uses QLED technology (Quantum Dot LED) for enhanced color volume and brightness compared to standard LED. At 55 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/q70d",
        "scrapedAt": "2026-01-22T18:48:11"
      }
    },
    {
      "id": "samsung-q70d-64",
      "brand": "Samsung",
      "model": "Q70D",
      "fullName": "Samsung 64\" Q70D QLED 4K Smart TV",
      "size": 64,
      "year": 2024,
      "panelType": "QLED",
      "resolution": "4K",
      "rtingsScore": 6.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/q70d",
      "fairValue": 1017.98,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/8489ece4-7085-4ad2-bbe0-2c35dc7d2909.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/8489ece4-7085-4ad2-bbe0-2c35dc7d2909.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 799.99,
          "retailPrice": 999.99,
          "url": "https://www.bestbuy.com/site/6576591.p",
          "sku": "6576591",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:26Z",
          "originalUrl": "https://www.bestbuy.com/site/6576591.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 799.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 799.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 6.8
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung Q70D is Samsung's mid-range QLED, solid all-around performance. It sits above the Q60D and below the Q80D in Samsung's lineup. It uses QLED technology (Quantum Dot LED) for enhanced color volume and brightness compared to standard LED. At 64 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/q70d",
        "scrapedAt": "2026-01-22T18:48:11"
      }
    },
    {
      "id": "samsung-q80d-55",
      "brand": "Samsung",
      "model": "Q80D",
      "fullName": "Samsung 55\" Q80D QLED 4K Smart TV",
      "size": 55,
      "year": 2024,
      "panelType": "QLED",
      "resolution": "4K",
      "rtingsScore": 6.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/q80d",
      "fairValue": 626.03,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/eda1e2ee-f797-4626-b3a0-3cc7defc1989.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/eda1e2ee-f797-4626-b3a0-3cc7defc1989.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 999.99,
          "retailPrice": 999.99,
          "url": "https://www.bestbuy.com/site/6576599.p",
          "sku": "6576599",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:25Z",
          "originalUrl": "https://www.bestbuy.com/site/6576599.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 999.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 999.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.2
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung Q80D is Samsung's premium QLED without Mini LED, great brightness and color. It sits above the Q70D and below the QN85D in Samsung's lineup. It uses QLED technology (Quantum Dot LED) for enhanced color volume and brightness compared to standard LED. At 55 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/q80d",
        "scrapedAt": "2026-01-22T18:48:05"
      }
    },
    {
      "id": "samsung-q80d-64",
      "brand": "Samsung",
      "model": "Q80D",
      "fullName": "Samsung 64\" Q80D QLED 4K Smart TV",
      "size": 64,
      "year": 2024,
      "panelType": "QLED",
      "resolution": "4K",
      "rtingsScore": 6.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/q80d",
      "fairValue": 1017.98,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/eda1e2ee-f797-4626-b3a0-3cc7defc1989.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/eda1e2ee-f797-4626-b3a0-3cc7defc1989.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1139.99,
          "retailPrice": 1199.99,
          "url": "https://www.bestbuy.com/site/6576589.p",
          "sku": "6576589",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:24Z",
          "originalUrl": "https://www.bestbuy.com/site/6576589.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1139.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1139.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.2
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung Q80D is Samsung's premium QLED without Mini LED, great brightness and color. It sits above the Q70D and below the QN85D in Samsung's lineup. It uses QLED technology (Quantum Dot LED) for enhanced color volume and brightness compared to standard LED. At 64 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/q80d",
        "scrapedAt": "2026-01-22T18:48:05"
      }
    },
    {
      "id": "samsung-q80d-74",
      "brand": "Samsung",
      "model": "Q80D",
      "fullName": "Samsung 74\" Q80D QLED 4K Smart TV",
      "size": 74,
      "year": 2024,
      "panelType": "QLED",
      "resolution": "4K",
      "rtingsScore": 6.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/q80d",
      "fairValue": 1502.48,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/eda1e2ee-f797-4626-b3a0-3cc7defc1989.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/eda1e2ee-f797-4626-b3a0-3cc7defc1989.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1139.99,
          "retailPrice": 1199.99,
          "url": "https://www.bestbuy.com/site/6576597.p",
          "sku": "6576597",
          "inStock": false,
          "lastChecked": "2026-01-22T18:48:05Z",
          "originalUrl": "https://www.bestbuy.com/site/6576597.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1139.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.2
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung Q80D is Samsung's premium QLED without Mini LED, great brightness and color. It sits above the Q70D and below the QN85D in Samsung's lineup. It uses QLED technology (Quantum Dot LED) for enhanced color volume and brightness compared to standard LED. The 74-inch size is the most popular choice, ideal for average living rooms with 6-8 feet of viewing distance.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/q80d",
        "scrapedAt": "2026-01-22T18:48:05"
      }
    },
    {
      "id": "samsung-q80d-84",
      "brand": "Samsung",
      "model": "Q80D",
      "fullName": "Samsung 84\" Q80D QLED 4K Smart TV",
      "size": 84,
      "year": 2024,
      "panelType": "QLED",
      "resolution": "4K",
      "rtingsScore": 6.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/q80d",
      "fairValue": 2068.62,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/eda1e2ee-f797-4626-b3a0-3cc7defc1989.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/eda1e2ee-f797-4626-b3a0-3cc7defc1989.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 2199.99,
          "retailPrice": 2199.99,
          "url": "https://www.bestbuy.com/site/6576600.p",
          "sku": "6576600",
          "inStock": false,
          "lastChecked": "2026-01-22T18:48:05Z",
          "originalUrl": "https://www.bestbuy.com/site/6576600.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 2199.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.2
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung Q80D is Samsung's premium QLED without Mini LED, great brightness and color. It sits above the Q70D and below the QN85D in Samsung's lineup. It uses QLED technology (Quantum Dot LED) for enhanced color volume and brightness compared to standard LED. At 84 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/q80d",
        "scrapedAt": "2026-01-22T18:48:05"
      }
    },
    {
      "id": "samsung-qn80f-55",
      "brand": "Samsung",
      "model": "QN80F",
      "fullName": "Samsung 55\" QN80F QLED 4K Smart TV",
      "size": 55,
      "year": 2025,
      "panelType": "QLED",
      "resolution": "4K",
      "rtingsScore": 6.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/qn80f",
      "fairValue": 626.03,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/1aeb1c81-1aba-49dd-9ea5-0258f7f669a7.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/1aeb1c81-1aba-49dd-9ea5-0258f7f669a7.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1099.99,
          "retailPrice": 1299.99,
          "url": "https://www.bestbuy.com/site/6613502.p",
          "sku": "6613502",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:47Z",
          "originalUrl": "https://www.bestbuy.com/site/6613502.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1099.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1099.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.1
      },
      "description": "The Samsung QN80F is Samsung's Neo QLED for 2025 with Mini LED backlighting. It sits above the Q80D and below the QN90D in Samsung's lineup. It uses QLED technology (Quantum Dot LED) for enhanced color volume and brightness compared to standard LED. At 55 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/qn80f",
        "scrapedAt": "2026-01-22T18:50:56"
      }
    },
    {
      "id": "samsung-qn80f-64",
      "brand": "Samsung",
      "model": "QN80F",
      "fullName": "Samsung 64\" QN80F QLED 4K Smart TV",
      "size": 64,
      "year": 2025,
      "panelType": "QLED",
      "resolution": "4K",
      "rtingsScore": 6.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/qn80f",
      "fairValue": 1017.98,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/1aeb1c81-1aba-49dd-9ea5-0258f7f669a7.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/1aeb1c81-1aba-49dd-9ea5-0258f7f669a7.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1199.99,
          "retailPrice": 1799.99,
          "url": "https://www.bestbuy.com/site/6613493.p",
          "sku": "6613493",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:46Z",
          "originalUrl": "https://www.bestbuy.com/site/6613493.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1199.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1199.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.1
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung QN80F is Samsung's Neo QLED for 2025 with Mini LED backlighting. It sits above the Q80D and below the QN90D in Samsung's lineup. It uses QLED technology (Quantum Dot LED) for enhanced color volume and brightness compared to standard LED. At 64 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/qn80f",
        "scrapedAt": "2026-01-22T18:50:56"
      }
    },
    {
      "id": "samsung-qn80f-74",
      "brand": "Samsung",
      "model": "QN80F",
      "fullName": "Samsung 74\" QN80F QLED 4K Smart TV",
      "size": 74,
      "year": 2025,
      "panelType": "QLED",
      "resolution": "4K",
      "rtingsScore": 6.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/qn80f",
      "fairValue": 1502.48,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/1aeb1c81-1aba-49dd-9ea5-0258f7f669a7.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/1aeb1c81-1aba-49dd-9ea5-0258f7f669a7.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1499.99,
          "retailPrice": 2299.99,
          "url": "https://www.bestbuy.com/site/6613449.p",
          "sku": "6613449",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:45Z",
          "originalUrl": "https://www.bestbuy.com/site/6613449.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1499.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1499.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.1
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung QN80F is Samsung's Neo QLED for 2025 with Mini LED backlighting. It sits above the Q80D and below the QN90D in Samsung's lineup. It uses QLED technology (Quantum Dot LED) for enhanced color volume and brightness compared to standard LED. The 74-inch size is the most popular choice, ideal for average living rooms with 6-8 feet of viewing distance.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/qn80f",
        "scrapedAt": "2026-01-22T18:50:56"
      }
    },
    {
      "id": "samsung-qn80f-84",
      "brand": "Samsung",
      "model": "QN80F",
      "fullName": "Samsung 84\" QN80F QLED 4K Smart TV",
      "size": 84,
      "year": 2025,
      "panelType": "QLED",
      "resolution": "4K",
      "rtingsScore": 6.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/qn80f",
      "fairValue": 2068.62,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/1aeb1c81-1aba-49dd-9ea5-0258f7f669a7.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/1aeb1c81-1aba-49dd-9ea5-0258f7f669a7.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 2199.99,
          "retailPrice": 3499.99,
          "url": "https://www.bestbuy.com/site/6613460.p",
          "sku": "6613460",
          "inStock": false,
          "lastChecked": "2026-01-22T18:50:56Z",
          "originalUrl": "https://www.bestbuy.com/site/6613460.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 2199.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.1
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung QN80F is Samsung's Neo QLED for 2025 with Mini LED backlighting. It sits above the Q80D and below the QN90D in Samsung's lineup. It uses QLED technology (Quantum Dot LED) for enhanced color volume and brightness compared to standard LED. At 84 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/qn80f",
        "scrapedAt": "2026-01-22T18:50:56"
      }
    },
    {
      "id": "samsung-qn80f-100",
      "brand": "Samsung",
      "model": "QN80F",
      "fullName": "Samsung 100\" QN80F QLED 4K Smart TV",
      "size": 100,
      "year": 2025,
      "panelType": "QLED",
      "resolution": "4K",
      "rtingsScore": 6.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/qn80f",
      "fairValue": 3516.66,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/95aac80c-6a9e-44fc-84d1-a3cec7c4c336.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/95aac80c-6a9e-44fc-84d1-a3cec7c4c336.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 4999.99,
          "retailPrice": 5999.99,
          "url": "https://www.bestbuy.com/site/6618847.p",
          "sku": "6618847",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:47Z",
          "originalUrl": "https://www.bestbuy.com/site/6618847.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 4999.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 4999.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.1
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung QN80F is Samsung's Neo QLED for 2025 with Mini LED backlighting. It sits above the Q80D and below the QN90D in Samsung's lineup. It uses QLED technology (Quantum Dot LED) for enhanced color volume and brightness compared to standard LED. At 100 inches, this is a home theater centerpiece—best for dedicated media rooms or very large living spaces with seating 10+ feet away.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/qn80f",
        "scrapedAt": "2026-01-22T18:50:56"
      }
    },
    {
      "id": "samsung-qn85d-74",
      "brand": "Samsung",
      "model": "QN85D",
      "fullName": "Samsung 74\" QN85D Mini LED 4K Smart TV",
      "size": 74,
      "year": 2024,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 7.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/qn85d",
      "fairValue": 1637.03,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6576/6576434_sd.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6576/6576434_sd.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1874.99,
          "retailPrice": 2499.99,
          "url": "https://www.bestbuy.com/site/6576434.p",
          "sku": "6576434",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:24Z",
          "originalUrl": "https://www.bestbuy.com/site/6576434.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1874.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1874.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.9,
        "mixedUsageScore": 7.5,
        "movieScore": 7.5,
        "brightRoomScore": 7.9
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung QN85D is Samsung's mid-range Neo QLED with Mini LED backlighting. It sits above the Q80D and below the QN90D in Samsung's lineup. It uses Mini LED backlighting with thousands of tiny LEDs for better contrast than standard LED TVs. The 74-inch size is the most popular choice, ideal for average living rooms with 6-8 feet of viewing distance.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/qn85d",
        "scrapedAt": "2026-01-22T18:47:58"
      }
    },
    {
      "id": "samsung-qn85d-84",
      "brand": "Samsung",
      "model": "QN85D",
      "fullName": "Samsung 84\" QN85D Mini LED 4K Smart TV",
      "size": 84,
      "year": 2024,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 7.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/qn85d",
      "fairValue": 2253.88,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6576/6576433_sd.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6576/6576433_sd.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 2089.99,
          "retailPrice": 2199.99,
          "url": "https://www.bestbuy.com/site/6576433.p",
          "sku": "6576433",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:24Z",
          "originalUrl": "https://www.bestbuy.com/site/6576433.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 2089.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 2089.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.9,
        "mixedUsageScore": 7.5,
        "movieScore": 7.5,
        "brightRoomScore": 7.9
      },
      "description": "The Samsung QN85D is Samsung's mid-range Neo QLED with Mini LED backlighting. It sits above the Q80D and below the QN90D in Samsung's lineup. It uses Mini LED backlighting with thousands of tiny LEDs for better contrast than standard LED TVs. At 84 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/qn85d",
        "scrapedAt": "2026-01-22T18:47:58"
      }
    },
    {
      "id": "samsung-qn90d-55",
      "brand": "Samsung",
      "model": "QN90D",
      "fullName": "Samsung 55\" QN90D Mini LED 4K Smart TV",
      "size": 55,
      "year": 2024,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 8.1,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/qn90d",
      "fairValue": 787.3,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6576/6576429_sd.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6576/6576429_sd.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1999.99,
          "retailPrice": 1999.99,
          "url": "https://www.bestbuy.com/site/6611509.p",
          "sku": "6611509",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:22Z",
          "originalUrl": "https://www.bestbuy.com/site/6611509.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1999.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1999.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.4,
        "mixedUsageScore": 8.1,
        "movieScore": 8.2,
        "brightRoomScore": 8.5
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung QN90D is Samsung's flagship Neo QLED (Mini LED), their brightest TV. It sits above the QN85D. It uses Mini LED backlighting with thousands of tiny LEDs for better contrast than standard LED TVs. It excels at bright rooms. At 55 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/qn90d",
        "scrapedAt": "2026-01-22T18:47:51"
      }
    },
    {
      "id": "samsung-qn90d-74",
      "brand": "Samsung",
      "model": "QN90D",
      "fullName": "Samsung 74\" QN90D Mini LED 4K Smart TV",
      "size": 74,
      "year": 2024,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 8.1,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/qn90d",
      "fairValue": 1889.53,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6576/6576427_sd.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6576/6576427_sd.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1799.99,
          "retailPrice": 2599.99,
          "url": "https://www.bestbuy.com/site/6576427.p",
          "sku": "6576427",
          "inStock": false,
          "lastChecked": "2026-01-22T18:47:51Z",
          "originalUrl": "https://www.bestbuy.com/site/6576427.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1799.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.4,
        "mixedUsageScore": 8.1,
        "movieScore": 8.2,
        "brightRoomScore": 8.5
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung QN90D is Samsung's flagship Neo QLED (Mini LED), their brightest TV. It sits above the QN85D. It uses Mini LED backlighting with thousands of tiny LEDs for better contrast than standard LED TVs. It excels at bright rooms. The 74-inch size is the most popular choice, ideal for average living rooms with 6-8 feet of viewing distance.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/qn90d",
        "scrapedAt": "2026-01-22T18:47:51"
      }
    },
    {
      "id": "samsung-qn90d-84",
      "brand": "Samsung",
      "model": "QN90D",
      "fullName": "Samsung 84\" QN90D Mini LED 4K Smart TV",
      "size": 84,
      "year": 2024,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 8.1,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/qn90d",
      "fairValue": 2601.53,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6576/6576424_sd.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6576/6576424_sd.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 2799.99,
          "retailPrice": 2799.99,
          "url": "https://www.bestbuy.com/site/6576424.p",
          "sku": "6576424",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:23Z",
          "originalUrl": "https://www.bestbuy.com/site/6576424.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 2799.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 2799.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.4,
        "mixedUsageScore": 8.1,
        "movieScore": 8.2,
        "brightRoomScore": 8.5
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung QN90D is Samsung's flagship Neo QLED (Mini LED), their brightest TV. It sits above the QN85D. It uses Mini LED backlighting with thousands of tiny LEDs for better contrast than standard LED TVs. It excels at bright rooms. At 84 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/qn90d",
        "scrapedAt": "2026-01-22T18:47:51"
      }
    },
    {
      "id": "samsung-s85d-55",
      "brand": "Samsung",
      "model": "S85D",
      "fullName": "Samsung 55\" S85D OLED 4K Smart TV",
      "size": 55,
      "year": 2024,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 7.8,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/s85d-oled",
      "fairValue": 908.59,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/854b2148-900f-4456-ba70-0723d54f4e08.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/854b2148-900f-4456-ba70-0723d54f4e08.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1699.99,
          "retailPrice": 1699.99,
          "url": "https://www.bestbuy.com/site/6578061.p",
          "sku": "6578061",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:22Z",
          "originalUrl": "https://www.bestbuy.com/site/6578061.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1699.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1699.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.3,
        "mixedUsageScore": 7.8,
        "movieScore": 8,
        "brightRoomScore": 6.8
      },
      "description": "The Samsung S85D is Samsung's entry-level OLED, bringing self-emitting pixels to a more accessible price. It sits below the flagship S90D. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. At 55 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/s85d-oled",
        "scrapedAt": "2026-01-22T18:47:45"
      }
    },
    {
      "id": "samsung-s85d-64",
      "brand": "Samsung",
      "model": "S85D",
      "fullName": "Samsung 64\" S85D OLED 4K Smart TV",
      "size": 64,
      "year": 2024,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 7.8,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/s85d-oled",
      "fairValue": 1477.44,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6578/6578059_sd.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6578/6578059_sd.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1619.99,
          "retailPrice": 1799.99,
          "url": "https://www.bestbuy.com/site/6578059.p",
          "sku": "6578059",
          "inStock": false,
          "lastChecked": "2026-01-22T18:47:45Z",
          "originalUrl": "https://www.bestbuy.com/site/6578059.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1619.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.3,
        "mixedUsageScore": 7.8,
        "movieScore": 8,
        "brightRoomScore": 6.8
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung S85D is Samsung's entry-level OLED, bringing self-emitting pixels to a more accessible price. It sits below the flagship S90D. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. At 64 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/s85d-oled",
        "scrapedAt": "2026-01-22T18:47:45"
      }
    },
    {
      "id": "samsung-s90d-42",
      "brand": "Samsung",
      "model": "S90D",
      "fullName": "Samsung 42\" S90D QD-OLED 4K Smart TV",
      "size": 42,
      "year": 2024,
      "panelType": "QD-OLED",
      "resolution": "4K",
      "rtingsScore": 8.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/s90d-oled",
      "fairValue": 614.27,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/9828e3b0-d87b-441e-9b90-fb8489546401.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/9828e3b0-d87b-441e-9b90-fb8489546401.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 999.99,
          "retailPrice": 999.99,
          "url": "https://www.bestbuy.com/site/6578067.p",
          "sku": "6578067",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:21Z",
          "originalUrl": "https://www.bestbuy.com/site/6578067.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 999.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 999.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.6,
        "mixedUsageScore": 8.5,
        "movieScore": 8.7,
        "brightRoomScore": 7.2
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung S90D is Samsung's mid-range QD-OLED, offering flagship-level picture at a lower price. It sits above the S85D and below the S95D in Samsung's lineup. It uses Quantum Dot OLED technology—combining the perfect blacks of OLED with enhanced color brightness from quantum dots. It excels at movies. The compact 42-inch screen is perfect for bedrooms, offices, kitchens, or as a secondary TV.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/s90d-oled",
        "scrapedAt": "2026-01-22T18:47:38"
      }
    },
    {
      "id": "samsung-s90d-64",
      "brand": "Samsung",
      "model": "S90D",
      "fullName": "Samsung 64\" S90D QD-OLED 4K Smart TV",
      "size": 64,
      "year": 2024,
      "panelType": "QD-OLED",
      "resolution": "4K",
      "rtingsScore": 8.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/s90d-oled",
      "fairValue": 1740.44,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6576/6576598_sd.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6576/6576598_sd.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1399.99,
          "retailPrice": 1399.99,
          "url": "https://www.bestbuy.com/site/6576598.p",
          "sku": "6576598",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:20Z",
          "originalUrl": "https://www.bestbuy.com/site/6576598.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1399.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1399.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.6,
        "mixedUsageScore": 8.5,
        "movieScore": 8.7,
        "brightRoomScore": 7.2
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung S90D is Samsung's mid-range QD-OLED, offering flagship-level picture at a lower price. It sits above the S85D and below the S95D in Samsung's lineup. It uses Quantum Dot OLED technology—combining the perfect blacks of OLED with enhanced color brightness from quantum dots. It excels at movies. At 64 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/s90d-oled",
        "scrapedAt": "2026-01-22T18:47:38"
      }
    },
    {
      "id": "samsung-s90d-77",
      "brand": "Samsung",
      "model": "S90D",
      "fullName": "Samsung 77\" S90D QD-OLED 4K Smart TV",
      "size": 77,
      "year": 2024,
      "panelType": "QD-OLED",
      "resolution": "4K",
      "rtingsScore": 8.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/s90d-oled",
      "fairValue": 2820.08,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6578/6578065_sd.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6578/6578065_sd.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1299.99,
          "retailPrice": 1299.99,
          "url": "https://www.bestbuy.com/site/6578065.p",
          "sku": "6578065",
          "inStock": false,
          "lastChecked": "2026-07-11T15:34:11Z",
          "originalUrl": "https://www.bestbuy.com/site/6578065.p",
          "onSale": false,
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1999.99
        },
        {
          "date": "2026-07-09",
          "price": 1299.99
        },
        {
          "date": "2026-07-11",
          "price": 1299.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.6,
        "mixedUsageScore": 8.5,
        "movieScore": 8.7,
        "brightRoomScore": 7.2
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung S90D is Samsung's mid-range QD-OLED, offering flagship-level picture at a lower price. It sits above the S85D and below the S95D in Samsung's lineup. It uses Quantum Dot OLED technology—combining the perfect blacks of OLED with enhanced color brightness from quantum dots. It excels at movies. At 77 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/s90d-oled",
        "scrapedAt": "2026-01-22T18:47:38"
      }
    },
    {
      "id": "samsung-s90d-82",
      "brand": "Samsung",
      "model": "S90D",
      "fullName": "Samsung 82\" S90D QD-OLED 4K Smart TV",
      "size": 82,
      "year": 2024,
      "panelType": "QD-OLED",
      "resolution": "4K",
      "rtingsScore": 8.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/s90d-oled",
      "fairValue": 3331.97,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6578/6578064_sd.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6578/6578064_sd.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 3299.99,
          "retailPrice": 3299.99,
          "url": "https://www.bestbuy.com/site/6578064.p",
          "sku": "6578064",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:20Z",
          "originalUrl": "https://www.bestbuy.com/site/6578064.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 3299.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 3299.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.6,
        "mixedUsageScore": 8.5,
        "movieScore": 8.7,
        "brightRoomScore": 7.2
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung S90D is Samsung's mid-range QD-OLED, offering flagship-level picture at a lower price. It sits above the S85D and below the S95D in Samsung's lineup. It uses Quantum Dot OLED technology—combining the perfect blacks of OLED with enhanced color brightness from quantum dots. It excels at movies. At 82 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/s90d-oled",
        "scrapedAt": "2026-01-22T18:47:38"
      }
    },
    {
      "id": "samsung-s90f-42",
      "brand": "Samsung",
      "model": "S90F",
      "fullName": "Samsung 42\" S90F QD-OLED 4K Smart TV",
      "size": 42,
      "year": 2025,
      "panelType": "QD-OLED",
      "resolution": "4K",
      "rtingsScore": 8.6,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/s90f-oled",
      "fairValue": 618.94,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/764ac784-37bd-4ff8-85a4-8fdaface6e02.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/764ac784-37bd-4ff8-85a4-8fdaface6e02.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 899.99,
          "retailPrice": 1299.99,
          "url": "https://www.bestbuy.com/site/6613495.p",
          "sku": "6613495",
          "inStock": false,
          "lastChecked": "2026-01-22T20:30:03Z",
          "originalUrl": "https://www.bestbuy.com/site/6613495.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 899.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.1,
        "mixedUsageScore": 8.6,
        "movieScore": 8.8,
        "brightRoomScore": 7.6
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "HDR10",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung S90F is Samsung's mid-range QD-OLED for 2025, offering flagship-level picture at a lower price. It sits above the S85D and below the S95F in Samsung's lineup. It uses Quantum Dot OLED technology—combining the perfect blacks of OLED with enhanced color brightness from quantum dots. It excels at movies. The compact 42-inch screen is perfect for bedrooms, offices, kitchens, or as a secondary TV.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/s90f-oled",
        "scrapedAt": "2026-01-22T18:49:57"
      }
    },
    {
      "id": "samsung-s90f-48",
      "brand": "Samsung",
      "model": "S90F",
      "fullName": "Samsung 48\" S90F QD-OLED 4K Smart TV",
      "size": 48,
      "year": 2025,
      "panelType": "QD-OLED",
      "resolution": "4K",
      "rtingsScore": 8.6,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/s90f-oled",
      "fairValue": 787.74,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/8626ea98-390c-4c52-b812-2de92649ccf8.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/8626ea98-390c-4c52-b812-2de92649ccf8.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 999.99,
          "retailPrice": 1499.99,
          "url": "https://www.bestbuy.com/site/6613499.p",
          "sku": "6613499",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:44Z",
          "originalUrl": "https://www.bestbuy.com/site/6613499.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 999.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 999.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.1,
        "mixedUsageScore": 8.6,
        "movieScore": 8.8,
        "brightRoomScore": 7.6
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "HDR10",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung S90F is Samsung's mid-range QD-OLED for 2025, offering flagship-level picture at a lower price. It sits above the S85D and below the S95F in Samsung's lineup. It uses Quantum Dot OLED technology—combining the perfect blacks of OLED with enhanced color brightness from quantum dots. It excels at movies. The compact 48-inch screen is perfect for bedrooms, offices, kitchens, or as a secondary TV.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/s90f-oled",
        "scrapedAt": "2026-01-22T18:49:57"
      }
    },
    {
      "id": "samsung-s90f-55",
      "brand": "Samsung",
      "model": "S90F",
      "fullName": "Samsung 55\" S90F QD-OLED 4K Smart TV",
      "size": 55,
      "year": 2025,
      "panelType": "QD-OLED",
      "resolution": "4K",
      "rtingsScore": 8.6,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/s90f-oled",
      "fairValue": 1078.46,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/f7dde5bf-8c67-4256-bfac-c269192a994b.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/f7dde5bf-8c67-4256-bfac-c269192a994b.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1199.99,
          "retailPrice": 1799.99,
          "url": "https://www.bestbuy.com/site/6613501.p",
          "sku": "6613501",
          "inStock": false,
          "lastChecked": "2026-01-22T20:30:04Z",
          "originalUrl": "https://www.bestbuy.com/site/6613501.p",
          "staleHidden": true
        },
        {
          "retailerId": "amazon",
          "currentPrice": 997.99,
          "retailPrice": 1397.99,
          "url": "https://www.amazon.com/dp/B0DXN7PBFC?tag=tvschool-20",
          "originalUrl": "https://www.amazon.com/dp/B0DXN7PBFC",
          "sku": "B0DXN7PBFC",
          "asin": "B0DXN7PBFC",
          "inStock": false,
          "onSale": true,
          "lastChecked": "2026-07-13T15:30:00Z",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1199.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.1,
        "mixedUsageScore": 8.6,
        "movieScore": 8.8,
        "brightRoomScore": 7.6
      },
      "description": "The Samsung S90F is Samsung's mid-range QD-OLED for 2025, offering flagship-level picture at a lower price. It sits above the S85D and below the S95F in Samsung's lineup. It uses Quantum Dot OLED technology—combining the perfect blacks of OLED with enhanced color brightness from quantum dots. It excels at movies. At 55 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/s90f-oled",
        "scrapedAt": "2026-01-22T18:49:57"
      }
    },
    {
      "id": "samsung-s90f-64",
      "brand": "Samsung",
      "model": "S90F",
      "fullName": "Samsung 64\" S90F QD-OLED 4K Smart TV",
      "size": 64,
      "year": 2025,
      "panelType": "QD-OLED",
      "resolution": "4K",
      "rtingsScore": 8.6,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/s90f-oled",
      "fairValue": 1753.66,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/43e02786-2337-4bcb-aba0-2d0bfd1f58b3.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/43e02786-2337-4bcb-aba0-2d0bfd1f58b3.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1399.99,
          "retailPrice": 2499.99,
          "url": "https://www.bestbuy.com/site/6613491.p",
          "sku": "6613491",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:44Z",
          "originalUrl": "https://www.bestbuy.com/site/6613491.p",
          "staleHidden": true
        },
        {
          "retailerId": "amazon",
          "currentPrice": 1299.99,
          "retailPrice": 1697.99,
          "url": "https://www.amazon.com/dp/B0DXMJGQWC?tag=tvschool-20",
          "originalUrl": "https://www.amazon.com/dp/B0DXMJGQWC",
          "sku": "B0DXMJGQWC",
          "asin": "B0DXMJGQWC",
          "inStock": false,
          "onSale": true,
          "lastChecked": "2026-07-13T15:30:00Z",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1399.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1399.99
        },
        {
          "date": "2026-07-04",
          "price": 1197.99
        },
        {
          "date": "2026-07-07",
          "price": 1208.33
        },
        {
          "date": "2026-07-08",
          "price": 1299.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.1,
        "mixedUsageScore": 8.6,
        "movieScore": 8.8,
        "brightRoomScore": 7.6
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "HDR10",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung S90F is Samsung's mid-range QD-OLED for 2025, offering flagship-level picture at a lower price. It sits above the S85D and below the S95F in Samsung's lineup. It uses Quantum Dot OLED technology—combining the perfect blacks of OLED with enhanced color brightness from quantum dots. It excels at movies. At 64 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/s90f-oled",
        "scrapedAt": "2026-01-22T18:49:57"
      }
    },
    {
      "id": "samsung-s90f-77",
      "brand": "Samsung",
      "model": "S90F",
      "fullName": "Samsung 77\" S90F QD-OLED 4K Smart TV",
      "size": 77,
      "year": 2025,
      "panelType": "QD-OLED",
      "resolution": "4K",
      "rtingsScore": 8.6,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/s90f-oled",
      "fairValue": 2841.5,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/f7dde5bf-8c67-4256-bfac-c269192a994b.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/f7dde5bf-8c67-4256-bfac-c269192a994b.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1999.99,
          "retailPrice": 3499.99,
          "url": "https://www.bestbuy.com/site/6613462.p",
          "sku": "6613462",
          "inStock": true,
          "lastChecked": "2026-07-13T15:27:15Z",
          "originalUrl": "https://www.bestbuy.com/site/6613462.p",
          "onSale": false
        },
        {
          "retailerId": "amazon",
          "currentPrice": 1997.99,
          "retailPrice": 2497.99,
          "url": "https://www.amazon.com/dp/B0DXN1QNFW?tag=tvschool-20",
          "originalUrl": "https://www.amazon.com/dp/B0DXN1QNFW",
          "sku": "B0DXN1QNFW",
          "asin": "B0DXN1QNFW",
          "inStock": false,
          "onSale": true,
          "lastChecked": "2026-07-13T15:30:00Z",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1999.99
        },
        {
          "date": "2026-07-04",
          "price": 1799.99
        },
        {
          "date": "2026-07-07",
          "price": 1897.99
        },
        {
          "date": "2026-07-08",
          "price": 1997.99
        },
        {
          "date": "2026-07-09",
          "price": 1999.99
        },
        {
          "date": "2026-07-10",
          "price": 1997.99
        },
        {
          "date": "2026-07-11",
          "price": 1999.99
        },
        {
          "date": "2026-07-12",
          "price": 1999.99
        },
        {
          "date": "2026-07-13",
          "price": 1999.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.1,
        "mixedUsageScore": 8.6,
        "movieScore": 8.8,
        "brightRoomScore": 7.6
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "HDR10",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung S90F is Samsung's mid-range QD-OLED for 2025, offering flagship-level picture at a lower price. It sits above the S85D and below the S95F in Samsung's lineup. It uses Quantum Dot OLED technology—combining the perfect blacks of OLED with enhanced color brightness from quantum dots. It excels at movies. At 77 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/s90f-oled",
        "scrapedAt": "2026-01-22T18:49:57"
      }
    },
    {
      "id": "samsung-s90f-82",
      "brand": "Samsung",
      "model": "S90F",
      "fullName": "Samsung 82\" S90F QD-OLED 4K Smart TV",
      "size": 82,
      "year": 2025,
      "panelType": "QD-OLED",
      "resolution": "4K",
      "rtingsScore": 8.6,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/s90f-oled",
      "fairValue": 3357.28,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/f7dde5bf-8c67-4256-bfac-c269192a994b.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/f7dde5bf-8c67-4256-bfac-c269192a994b.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 3299.99,
          "retailPrice": 5399.99,
          "url": "https://www.bestbuy.com/site/6613461.p",
          "sku": "6613461",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:43Z",
          "originalUrl": "https://www.bestbuy.com/site/6613461.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 3299.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 3299.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.1,
        "mixedUsageScore": 8.6,
        "movieScore": 8.8,
        "brightRoomScore": 7.6
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "HDR10",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung S90F is Samsung's mid-range QD-OLED for 2025, offering flagship-level picture at a lower price. It sits above the S85D and below the S95F in Samsung's lineup. It uses Quantum Dot OLED technology—combining the perfect blacks of OLED with enhanced color brightness from quantum dots. It excels at movies. At 82 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/s90f-oled",
        "scrapedAt": "2026-01-22T18:49:57"
      }
    },
    {
      "id": "samsung-s95f-55",
      "brand": "Samsung",
      "model": "S95F",
      "fullName": "Samsung 55\" S95F QD-OLED 4K Smart TV",
      "size": 55,
      "year": 2025,
      "panelType": "QD-OLED",
      "resolution": "4K",
      "rtingsScore": 8.9,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/s95f-oled",
      "fairValue": 1102.84,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/8c2ab699-9081-4253-bd5d-54bbab350d3a.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/8c2ab699-9081-4253-bd5d-54bbab350d3a.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1899.99,
          "retailPrice": 2299.99,
          "url": "https://www.bestbuy.com/site/6613500.p",
          "sku": "6613500",
          "inStock": false,
          "lastChecked": "2026-01-22T20:29:59Z",
          "originalUrl": "https://www.bestbuy.com/site/6613500.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1899.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.8,
        "mixedUsageScore": 8.9,
        "movieScore": 9,
        "brightRoomScore": 8.8
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "HDR10",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung S95F is Samsung's flagship QD-OLED for 2025, their absolute best picture quality. It sits above the S90F. It uses Quantum Dot OLED technology—combining the perfect blacks of OLED with enhanced color brightness from quantum dots. It excels at movies and sports. At 55 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/s95f-oled",
        "scrapedAt": "2026-01-22T18:49:49"
      }
    },
    {
      "id": "samsung-s95f-64",
      "brand": "Samsung",
      "model": "S95F",
      "fullName": "Samsung 64\" S95F QD-OLED 4K Smart TV",
      "size": 64,
      "year": 2025,
      "panelType": "QD-OLED",
      "resolution": "4K",
      "rtingsScore": 8.9,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/s95f-oled",
      "fairValue": 1793.32,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/8c2ab699-9081-4253-bd5d-54bbab350d3a.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/8c2ab699-9081-4253-bd5d-54bbab350d3a.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 2299.99,
          "retailPrice": 3299.99,
          "url": "https://www.bestbuy.com/site/6613492.p",
          "sku": "6613492",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:41Z",
          "originalUrl": "https://www.bestbuy.com/site/6613492.p",
          "staleHidden": true
        },
        {
          "retailerId": "amazon",
          "currentPrice": 2097.99,
          "retailPrice": null,
          "url": "https://www.amazon.com/dp/B0DXMJFJ7W?tag=tvschool-20",
          "originalUrl": "https://www.amazon.com/dp/B0DXMJFJ7W",
          "sku": "B0DXMJFJ7W",
          "asin": "B0DXMJFJ7W",
          "inStock": false,
          "onSale": false,
          "lastChecked": "2026-07-13T15:30:00Z",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 2299.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 2299.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.8,
        "mixedUsageScore": 8.9,
        "movieScore": 9,
        "brightRoomScore": 8.8
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "HDR10",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung S95F is Samsung's flagship QD-OLED for 2025, their absolute best picture quality. It sits above the S90F. It uses Quantum Dot OLED technology—combining the perfect blacks of OLED with enhanced color brightness from quantum dots. It excels at movies and sports. At 64 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/s95f-oled",
        "scrapedAt": "2026-01-22T18:49:49"
      }
    },
    {
      "id": "samsung-s95f-77",
      "brand": "Samsung",
      "model": "S95F",
      "fullName": "Samsung 77\" S95F QD-OLED 4K Smart TV",
      "size": 77,
      "year": 2025,
      "panelType": "QD-OLED",
      "resolution": "4K",
      "rtingsScore": 8.9,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/s95f-oled",
      "fairValue": 2905.75,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/8c2ab699-9081-4253-bd5d-54bbab350d3a.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/8c2ab699-9081-4253-bd5d-54bbab350d3a.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 3499.99,
          "retailPrice": 4499.99,
          "url": "https://www.bestbuy.com/site/6613459.p",
          "sku": "6613459",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:41Z",
          "originalUrl": "https://www.bestbuy.com/site/6613459.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 3499.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 3499.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.8,
        "mixedUsageScore": 8.9,
        "movieScore": 9,
        "brightRoomScore": 8.8
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "HDR10",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung S95F is Samsung's flagship QD-OLED for 2025, their absolute best picture quality. It sits above the S90F. It uses Quantum Dot OLED technology—combining the perfect blacks of OLED with enhanced color brightness from quantum dots. It excels at movies and sports. At 77 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/s95f-oled",
        "scrapedAt": "2026-01-22T18:49:49"
      }
    },
    {
      "id": "samsung-s95f-82",
      "brand": "Samsung",
      "model": "S95F",
      "fullName": "Samsung 82\" S95F QD-OLED 4K Smart TV",
      "size": 82,
      "year": 2025,
      "panelType": "QD-OLED",
      "resolution": "4K",
      "rtingsScore": 8.9,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/samsung/s95f-oled",
      "fairValue": 3433.2,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/f1d2a674-3de2-4e79-9542-63477dbf525b.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/f1d2a674-3de2-4e79-9542-63477dbf525b.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 4999.99,
          "retailPrice": 6499.99,
          "url": "https://www.bestbuy.com/site/6614339.p",
          "sku": "6614339",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:42Z",
          "originalUrl": "https://www.bestbuy.com/site/6614339.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 4999.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 4999.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.8,
        "mixedUsageScore": 8.9,
        "movieScore": 9,
        "brightRoomScore": 8.8
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "HDR10",
        "smartPlatform": "Tizen"
      },
      "description": "The Samsung S95F is Samsung's flagship QD-OLED for 2025, their absolute best picture quality. It sits above the S90F. It uses Quantum Dot OLED technology—combining the perfect blacks of OLED with enhanced color brightness from quantum dots. It excels at movies and sports. At 82 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/samsung/s95f-oled",
        "scrapedAt": "2026-01-22T18:49:49"
      }
    },
    {
      "id": "sony-a95l-77",
      "brand": "Sony",
      "model": "A95L",
      "fullName": "Sony 77\" A95L QD-OLED 4K Smart TV",
      "size": 77,
      "year": 2024,
      "panelType": "QD-OLED",
      "resolution": "4K",
      "rtingsScore": 8,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/sony/a95l-oled",
      "fairValue": 2921.68,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/b8703cf8-9eb9-48ab-bae2-a42ba21a8910.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/b8703cf8-9eb9-48ab-bae2-a42ba21a8910.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 3499.99,
          "retailPrice": 4999.99,
          "url": "https://www.bestbuy.com/site/6553380.p",
          "sku": "6553380",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:33Z",
          "originalUrl": "https://www.bestbuy.com/site/6553380.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 3499.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 3499.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.8
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Google TV"
      },
      "description": "The Sony A95L is Sony's flagship QD-OLED with their Cognitive Processor XR. It sits above the Bravia 8. It uses Quantum Dot OLED technology—combining the perfect blacks of OLED with enhanced color brightness from quantum dots. It excels at sports. At 77 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/sony/a95l-oled",
        "scrapedAt": "2026-01-22T18:48:52"
      }
    },
    {
      "id": "sony-bravia-8-55",
      "brand": "Sony",
      "model": "Bravia 8",
      "fullName": "Sony 55\" Bravia 8 OLED 4K Smart TV",
      "size": 55,
      "year": 2024,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 7.9,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/sony/bravia-8-oled",
      "fairValue": 986.33,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/a20e1edc-ec74-4ebb-8d9e-5a52b9d3234a.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/a20e1edc-ec74-4ebb-8d9e-5a52b9d3234a.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1199.99,
          "retailPrice": 1699.99,
          "url": "https://www.bestbuy.com/site/6578569.p",
          "sku": "6578569",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:33Z",
          "originalUrl": "https://www.bestbuy.com/site/6578569.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1199.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1199.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.4,
        "mixedUsageScore": 7.9,
        "movieScore": 8.2,
        "brightRoomScore": 7
      },
      "description": "The Sony Bravia 8 is Sony's mid-range OLED, excellent picture with Sony's processing. It sits above the X90L and below the Bravia 9 in Sony's lineup. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. At 55 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/sony/bravia-8-oled",
        "scrapedAt": "2026-01-22T18:48:58"
      }
    },
    {
      "id": "sony-bravia-8-64",
      "brand": "Sony",
      "model": "Bravia 8",
      "fullName": "Sony 64\" Bravia 8 OLED 4K Smart TV",
      "size": 64,
      "year": 2024,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 7.9,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/sony/bravia-8-oled",
      "fairValue": 1603.85,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/a20e1edc-ec74-4ebb-8d9e-5a52b9d3234a.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/a20e1edc-ec74-4ebb-8d9e-5a52b9d3234a.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1499.99,
          "retailPrice": 2299.99,
          "url": "https://www.bestbuy.com/site/6578577.p",
          "sku": "6578577",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:34Z",
          "originalUrl": "https://www.bestbuy.com/site/6578577.p",
          "staleHidden": true
        },
        {
          "retailerId": "amazon",
          "currentPrice": 1599.99,
          "retailPrice": null,
          "url": "https://www.amazon.com/dp/B0CVQ6YLH7?tag=tvschool-20",
          "originalUrl": "https://www.amazon.com/dp/B0CVQ6YLH7",
          "sku": "B0CVQ6YLH7",
          "asin": "B0CVQ6YLH7",
          "inStock": false,
          "onSale": false,
          "lastChecked": "2026-07-13T15:30:00Z",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1499.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1499.99
        },
        {
          "date": "2026-07-04",
          "price": 1598
        },
        {
          "date": "2026-07-07",
          "price": 1599.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.4,
        "mixedUsageScore": 7.9,
        "movieScore": 8.2,
        "brightRoomScore": 7
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Google TV"
      },
      "description": "The Sony Bravia 8 is Sony's mid-range OLED, excellent picture with Sony's processing. It sits above the X90L and below the Bravia 9 in Sony's lineup. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. At 64 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/sony/bravia-8-oled",
        "scrapedAt": "2026-01-22T18:48:58"
      }
    },
    {
      "id": "sony-bravia-8-77",
      "brand": "Sony",
      "model": "Bravia 8",
      "fullName": "Sony 77\" Bravia 8 OLED 4K Smart TV",
      "size": 77,
      "year": 2024,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 7.9,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/sony/bravia-8-oled",
      "fairValue": 2598.76,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/a20e1edc-ec74-4ebb-8d9e-5a52b9d3234a.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/a20e1edc-ec74-4ebb-8d9e-5a52b9d3234a.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 2199.99,
          "retailPrice": 3199.99,
          "url": "https://www.bestbuy.com/site/6578574.p",
          "sku": "6578574",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:34Z",
          "originalUrl": "https://www.bestbuy.com/site/6578574.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 2199.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 2199.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.4,
        "mixedUsageScore": 7.9,
        "movieScore": 8.2,
        "brightRoomScore": 7
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Google TV"
      },
      "description": "The Sony Bravia 8 is Sony's mid-range OLED, excellent picture with Sony's processing. It sits above the X90L and below the Bravia 9 in Sony's lineup. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. At 77 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/sony/bravia-8-oled",
        "scrapedAt": "2026-01-22T18:48:58"
      }
    },
    {
      "id": "sony-bravia-8-ii-55",
      "brand": "Sony",
      "model": "Bravia 8 II",
      "fullName": "Sony 55\" Bravia 8 II OLED 4K Smart TV",
      "size": 55,
      "year": 2025,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/sony/bravia-8-ii-oled",
      "fairValue": 1033.42,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6cbbf57b-e7ec-448a-a49e-e9bba40315eb.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6cbbf57b-e7ec-448a-a49e-e9bba40315eb.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1999.99,
          "retailPrice": 2999.99,
          "url": "https://www.bestbuy.com/site/6626033.p",
          "sku": "6626033",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:55Z",
          "originalUrl": "https://www.bestbuy.com/site/6626033.p",
          "staleHidden": true
        },
        {
          "retailerId": "amazon",
          "currentPrice": 2598,
          "retailPrice": null,
          "url": "https://www.amazon.com/dp/B0DYK995S3?tag=tvschool-20",
          "originalUrl": "https://www.amazon.com/dp/B0DYK995S3",
          "sku": "B0DYK995S3",
          "asin": "B0DYK995S3",
          "inStock": false,
          "onSale": false,
          "lastChecked": "2026-07-13T15:30:00Z",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1999.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1999.99
        },
        {
          "date": "2026-07-07",
          "price": 2298
        },
        {
          "date": "2026-07-08",
          "price": 2598
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.7
      },
      "description": "The Sony Bravia 8 II is Sony's updated mid-range OLED for 2025. It sits above the X90L and below the Bravia 9 in Sony's lineup. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at sports. At 55 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/sony/bravia-8-ii-oled",
        "scrapedAt": "2026-01-22T18:51:27"
      }
    },
    {
      "id": "sony-bravia-8-ii-64",
      "brand": "Sony",
      "model": "Bravia 8 II",
      "fullName": "Sony 64\" Bravia 8 II OLED 4K Smart TV",
      "size": 64,
      "year": 2025,
      "panelType": "OLED",
      "resolution": "4K",
      "rtingsScore": 8.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/sony/bravia-8-ii-oled",
      "fairValue": 1680.43,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6cbbf57b-e7ec-448a-a49e-e9bba40315eb.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6cbbf57b-e7ec-448a-a49e-e9bba40315eb.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 2399.99,
          "retailPrice": 3499.99,
          "url": "https://www.bestbuy.com/site/6626032.p",
          "sku": "6626032",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:54Z",
          "originalUrl": "https://www.bestbuy.com/site/6626032.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 2399.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 2399.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.7
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Google TV"
      },
      "description": "The Sony Bravia 8 II is Sony's updated mid-range OLED for 2025. It sits above the X90L and below the Bravia 9 in Sony's lineup. It features OLED technology where each pixel produces its own light, enabling perfect blacks and infinite contrast. It excels at sports. At 64 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/sony/bravia-8-ii-oled",
        "scrapedAt": "2026-01-22T18:51:27"
      }
    },
    {
      "id": "sony-bravia-9-64",
      "brand": "Sony",
      "model": "Bravia 9",
      "fullName": "Sony 64\" Bravia 9 Mini LED 4K Smart TV",
      "size": 64,
      "year": 2024,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 8.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/sony/bravia-9-qled",
      "fairValue": 1551.16,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/4b8055eb-b7f0-4e5b-8899-fdc9affa5599.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/4b8055eb-b7f0-4e5b-8899-fdc9affa5599.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1999.99,
          "retailPrice": 2999.99,
          "url": "https://www.bestbuy.com/site/6578568.p",
          "sku": "6578568",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:34Z",
          "originalUrl": "https://www.bestbuy.com/site/6578568.p",
          "staleHidden": true
        },
        {
          "retailerId": "amazon",
          "currentPrice": 2799.99,
          "retailPrice": null,
          "url": "https://www.amazon.com/dp/B0CVQB2D6C?tag=tvschool-20",
          "originalUrl": "https://www.amazon.com/dp/B0CVQB2D6C",
          "sku": "B0CVQB2D6C",
          "asin": "B0CVQB2D6C",
          "inStock": false,
          "onSale": false,
          "lastChecked": "2026-07-13T15:30:00Z",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1999.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1999.99
        },
        {
          "date": "2026-07-07",
          "price": 2799.99
        },
        {
          "date": "2026-07-08",
          "price": 2799.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.7
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Google TV"
      },
      "description": "The Sony Bravia 9 is Sony's flagship Mini LED for 2025, combining brightness with Sony's legendary processing. It sits above the Bravia 8. It uses Mini LED backlighting with thousands of tiny LEDs for better contrast than standard LED TVs. At 64 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/sony/bravia-9-qled",
        "scrapedAt": "2026-01-22T18:49:04"
      }
    },
    {
      "id": "sony-bravia-9-74",
      "brand": "Sony",
      "model": "Bravia 9",
      "fullName": "Sony 74\" Bravia 9 Mini LED 4K Smart TV",
      "size": 74,
      "year": 2024,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 8.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/sony/bravia-9-qled",
      "fairValue": 2289.42,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/4b8055eb-b7f0-4e5b-8899-fdc9affa5599.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/4b8055eb-b7f0-4e5b-8899-fdc9affa5599.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 2599.99,
          "retailPrice": 3499.99,
          "url": "https://www.bestbuy.com/site/6578575.p",
          "sku": "6578575",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:35Z",
          "originalUrl": "https://www.bestbuy.com/site/6578575.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 2599.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 2599.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.7
      },
      "description": "The Sony Bravia 9 is Sony's flagship Mini LED for 2025, combining brightness with Sony's legendary processing. It sits above the Bravia 8. It uses Mini LED backlighting with thousands of tiny LEDs for better contrast than standard LED TVs. The 74-inch size is the most popular choice, ideal for average living rooms with 6-8 feet of viewing distance.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/sony/bravia-9-qled",
        "scrapedAt": "2026-01-22T18:49:04"
      }
    },
    {
      "id": "sony-bravia-9-85",
      "brand": "Sony",
      "model": "Bravia 9",
      "fullName": "Sony 85\" Bravia 9 Mini LED 4K Smart TV",
      "size": 85,
      "year": 2024,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 8.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/sony/bravia-9-qled",
      "fairValue": 3243.34,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/4b8055eb-b7f0-4e5b-8899-fdc9affa5599.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/4b8055eb-b7f0-4e5b-8899-fdc9affa5599.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 2999.99,
          "retailPrice": 4799.99,
          "url": "https://www.bestbuy.com/site/6578576.p",
          "sku": "6578576",
          "inStock": false,
          "lastChecked": "2026-01-22T20:29:52Z",
          "originalUrl": "https://www.bestbuy.com/site/6578576.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 2999.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.7
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Google TV"
      },
      "description": "The Sony Bravia 9 is Sony's flagship Mini LED for 2025, combining brightness with Sony's legendary processing. It sits above the Bravia 8. It uses Mini LED backlighting with thousands of tiny LEDs for better contrast than standard LED TVs. The 85-inch screen is designed for large living rooms or home theaters with seating 8-12 feet away.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/sony/bravia-9-qled",
        "scrapedAt": "2026-01-22T18:49:04"
      }
    },
    {
      "id": "sony-x90l-55",
      "brand": "Sony",
      "model": "X90L",
      "fullName": "Sony 55\" X90L LED 4K Smart TV",
      "size": 55,
      "year": 2024,
      "panelType": "LED",
      "resolution": "4K",
      "rtingsScore": 8,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/sony/x90l",
      "fairValue": 688.28,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/1c3ecf81-a19e-4f5b-9f10-634048dfa77e.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/1c3ecf81-a19e-4f5b-9f10-634048dfa77e.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 977.99,
          "retailPrice": 1149.99,
          "url": "https://www.bestbuy.com/site/6544734.p",
          "sku": "6544734",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:37Z",
          "originalUrl": "https://www.bestbuy.com/site/6544734.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 977.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 977.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.2
      },
      "description": "The Sony X90L is Sony's Full Array LED, great value with premium Sony processing. It sits below the flagship Bravia 8. It uses LED backlighting, a proven technology offering good value. At 55 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/sony/x90l",
        "scrapedAt": "2026-01-22T18:49:11"
      }
    },
    {
      "id": "sony-x90l-64",
      "brand": "Sony",
      "model": "X90L",
      "fullName": "Sony 64\" X90L LED 4K Smart TV",
      "size": 64,
      "year": 2024,
      "panelType": "LED",
      "resolution": "4K",
      "rtingsScore": 8,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/sony/x90l",
      "fairValue": 1119.19,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/1c3ecf81-a19e-4f5b-9f10-634048dfa77e.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/1c3ecf81-a19e-4f5b-9f10-634048dfa77e.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 849.99,
          "retailPrice": 1199.99,
          "url": "https://www.bestbuy.com/site/6544733.p",
          "sku": "6544733",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:37Z",
          "originalUrl": "https://www.bestbuy.com/site/6544733.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 849.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 849.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.2
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Google TV"
      },
      "description": "The Sony X90L is Sony's Full Array LED, great value with premium Sony processing. It sits below the flagship Bravia 8. It uses LED backlighting, a proven technology offering good value. At 64 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/sony/x90l",
        "scrapedAt": "2026-01-22T18:49:11"
      }
    },
    {
      "id": "sony-x90l-74",
      "brand": "Sony",
      "model": "X90L",
      "fullName": "Sony 74\" X90L LED 4K Smart TV",
      "size": 74,
      "year": 2024,
      "panelType": "LED",
      "resolution": "4K",
      "rtingsScore": 8,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/sony/x90l",
      "fairValue": 1651.86,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/211a19be-1d31-4553-b884-b0caecacaee2.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/211a19be-1d31-4553-b884-b0caecacaee2.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1189.99,
          "retailPrice": 1699.99,
          "url": "https://www.bestbuy.com/site/6544735.p",
          "sku": "6544735",
          "inStock": false,
          "lastChecked": "2026-01-22T20:29:54Z",
          "originalUrl": "https://www.bestbuy.com/site/6544735.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1189.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.2
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Google TV"
      },
      "description": "The Sony X90L is Sony's Full Array LED, great value with premium Sony processing. It sits below the flagship Bravia 8. It uses LED backlighting, a proven technology offering good value. The 74-inch size is the most popular choice, ideal for average living rooms with 6-8 feet of viewing distance.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/sony/x90l",
        "scrapedAt": "2026-01-22T18:49:11"
      }
    },
    {
      "id": "sony-x90l-85",
      "brand": "Sony",
      "model": "X90L",
      "fullName": "Sony 85\" X90L LED 4K Smart TV",
      "size": 85,
      "year": 2024,
      "panelType": "LED",
      "resolution": "4K",
      "rtingsScore": 8,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/sony/x90l",
      "fairValue": 2340.13,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/211a19be-1d31-4553-b884-b0caecacaee2.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/211a19be-1d31-4553-b884-b0caecacaee2.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1994.99,
          "retailPrice": 2099.99,
          "url": "https://www.bestbuy.com/site/6544732.p",
          "sku": "6544732",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:36Z",
          "originalUrl": "https://www.bestbuy.com/site/6544732.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1994.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1994.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.2
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Google TV"
      },
      "description": "The Sony X90L is Sony's Full Array LED, great value with premium Sony processing. It sits below the flagship Bravia 8. It uses LED backlighting, a proven technology offering good value. The 85-inch screen is designed for large living rooms or home theaters with seating 8-12 feet away.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/sony/x90l",
        "scrapedAt": "2026-01-22T18:49:11"
      }
    },
    {
      "id": "sony-x90l-98",
      "brand": "Sony",
      "model": "X90L",
      "fullName": "Sony 98\" X90L LED 4K Smart TV",
      "size": 98,
      "year": 2024,
      "panelType": "LED",
      "resolution": "4K",
      "rtingsScore": 8,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/sony/x90l",
      "fairValue": 3662.82,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/3a158c98-8967-46a6-9caa-5f195e8256f3.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/3a158c98-8967-46a6-9caa-5f195e8256f3.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 3499.99,
          "retailPrice": 6199.99,
          "url": "https://www.bestbuy.com/site/6544731.p",
          "sku": "6544731",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:36Z",
          "originalUrl": "https://www.bestbuy.com/site/6544731.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 3499.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 3499.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.2
      },
      "specs": {
        "refreshRate": "120Hz",
        "smartPlatform": "Google TV"
      },
      "description": "The Sony X90L is Sony's Full Array LED, great value with premium Sony processing. It sits below the flagship Bravia 8. It uses LED backlighting, a proven technology offering good value. At 98 inches, this is a home theater centerpiece—best for dedicated media rooms or very large living spaces with seating 10+ feet away.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/sony/x90l",
        "scrapedAt": "2026-01-22T18:49:11"
      }
    },
    {
      "id": "tcl-q7-55",
      "brand": "TCL",
      "model": "Q7",
      "fullName": "TCL 55\" Q7 QLED 4K Smart TV",
      "size": 55,
      "year": 2024,
      "panelType": "QLED",
      "resolution": "4K",
      "rtingsScore": 7.9,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/q7-q750g-qled",
      "fairValue": 541.94,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/1aed3f44-1a86-4cd9-a5eb-be9cf76fbe4d.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/1aed3f44-1a86-4cd9-a5eb-be9cf76fbe4d.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 427.99,
          "retailPrice": 449.99,
          "url": "https://www.bestbuy.com/site/6538130.p",
          "sku": "6538130",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:40Z",
          "originalUrl": "https://www.bestbuy.com/site/6538130.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 427.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 427.99
        }
      ],
      "useCaseScores": {
        "movieScore": 8.5,
        "tvShowScore": 7.3,
        "sportsScore": 7.4,
        "gamingScore": 8.6,
        "hdrGamingScore": 8.5,
        "mixedUsageScore": 7.9,
        "pcMonitorScore": 8.3
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision, HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL Q7 is TCL's step-down from Mini LED, using standard QLED technology. It sits below the flagship QM5. It uses QLED technology (Quantum Dot LED) for enhanced color volume and brightness compared to standard LED. It excels at gaming and movies. At 55 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "dimmingZones": 200,
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/q7-q750g-qled",
        "scrapedAt": "2026-01-22T18:49:24"
      }
    },
    {
      "id": "tcl-q7-65",
      "brand": "TCL",
      "model": "Q7",
      "fullName": "TCL 65\" Q7 QLED 4K Smart TV",
      "size": 65,
      "year": 2024,
      "panelType": "QLED",
      "resolution": "4K",
      "rtingsScore": 7.9,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/q7-q750g-qled",
      "fairValue": 918.94,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/a20598fa-cf90-4021-8504-a4b02ad1ecd6.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/a20598fa-cf90-4021-8504-a4b02ad1ecd6.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 649.99,
          "retailPrice": 599.99,
          "url": "https://www.bestbuy.com/site/6538137.p",
          "sku": "6538137",
          "inStock": false,
          "lastChecked": "2026-07-04T19:11:07Z",
          "originalUrl": "https://www.bestbuy.com/site/6538137.p",
          "onSale": false,
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 569.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 569.99
        },
        {
          "date": "2026-07-04",
          "price": 649.99
        }
      ],
      "useCaseScores": {
        "movieScore": 8.5,
        "tvShowScore": 7.3,
        "sportsScore": 7.4,
        "gamingScore": 8.6,
        "hdrGamingScore": 8.5,
        "mixedUsageScore": 7.9,
        "pcMonitorScore": 8.3
      },
      "specs": {
        "refreshRate": "120Hz",
        "hdr": "Dolby Vision, HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL Q7 is TCL's step-down from Mini LED, using standard QLED technology. It sits below the flagship QM5. It uses QLED technology (Quantum Dot LED) for enhanced color volume and brightness compared to standard LED. It excels at gaming and movies. The 65-inch size is the most popular choice, ideal for average living rooms with 6-8 feet of viewing distance.",
      "performanceSpecs": {
        "dimmingZones": 200,
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/q7-q750g-qled",
        "scrapedAt": "2026-01-22T18:49:24"
      }
    },
    {
      "id": "tcl-qm5k-50",
      "brand": "TCL",
      "model": "QM5K",
      "fullName": "TCL 50\" QM5K Mini LED 4K Smart TV",
      "size": 50,
      "year": 2025,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 6.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm5k",
      "fairValue": 376.88,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6dc1044b-824d-47e6-aa91-39b719a248d4.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6dc1044b-824d-47e6-aa91-39b719a248d4.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 299.99,
          "retailPrice": 649.99,
          "url": "https://www.bestbuy.com/site/6625833.p",
          "sku": "6625833",
          "inStock": false,
          "lastChecked": "2026-01-23T21:05:01Z",
          "originalUrl": "https://www.bestbuy.com/site/6625833.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 299.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 299.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 6.5
      },
      "description": "The TCL QM5K is TCL's entry-level Mini LED for 2025, offering premium features at a budget price. It sits below the flagship QM7K. It uses Mini LED backlighting with thousands of tiny LEDs for better contrast than standard LED TVs. The compact 50-inch screen is perfect for bedrooms, offices, kitchens, or as a secondary TV.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm5k",
        "scrapedAt": "2026-01-22T18:51:47"
      }
    },
    {
      "id": "tcl-qm5k-55",
      "brand": "TCL",
      "model": "QM5K",
      "fullName": "TCL 55\" QM5K Mini LED 4K Smart TV",
      "size": 55,
      "year": 2025,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 6.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm5k",
      "fairValue": 481.56,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/ca23e32a-24ef-429a-8142-8aca9a83acc0.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/ca23e32a-24ef-429a-8142-8aca9a83acc0.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 399.99,
          "retailPrice": 699.99,
          "url": "https://www.bestbuy.com/site/6625835.p",
          "sku": "6625835",
          "inStock": true,
          "lastChecked": "2026-07-13T15:27:15Z",
          "originalUrl": "https://www.bestbuy.com/site/6625835.p",
          "onSale": false
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 329.99
        },
        {
          "date": "2026-07-04",
          "price": 349.99
        },
        {
          "date": "2026-07-07",
          "price": 399.99
        },
        {
          "date": "2026-07-08",
          "price": 399.99
        },
        {
          "date": "2026-07-09",
          "price": 399.99
        },
        {
          "date": "2026-07-10",
          "price": 399.99
        },
        {
          "date": "2026-07-11",
          "price": 399.99
        },
        {
          "date": "2026-07-12",
          "price": 399.99
        },
        {
          "date": "2026-07-13",
          "price": 399.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 6.5
      },
      "specs": {
        "refreshRate": "60Hz",
        "hdr": "HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL QM5K is TCL's entry-level Mini LED for 2025, offering premium features at a budget price. It sits below the flagship QM7K. It uses Mini LED backlighting with thousands of tiny LEDs for better contrast than standard LED TVs. At 55 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm5k",
        "scrapedAt": "2026-01-22T18:51:47"
      }
    },
    {
      "id": "tcl-qm5k-64",
      "brand": "TCL",
      "model": "QM5K",
      "fullName": "TCL 64\" QM5K Mini LED 4K Smart TV",
      "size": 64,
      "year": 2025,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 6.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm5k",
      "fairValue": 783.06,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/ca23e32a-24ef-429a-8142-8aca9a83acc0.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/ca23e32a-24ef-429a-8142-8aca9a83acc0.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 499.99,
          "retailPrice": 899.99,
          "url": "https://www.bestbuy.com/site/6625874.p",
          "sku": "6625874",
          "inStock": true,
          "lastChecked": "2026-07-13T15:27:15Z",
          "originalUrl": "https://www.bestbuy.com/site/6625874.p",
          "onSale": false
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 449.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 449.99
        },
        {
          "date": "2026-07-04",
          "price": 449.99
        },
        {
          "date": "2026-07-07",
          "price": 449.99
        },
        {
          "date": "2026-07-08",
          "price": 499.99
        },
        {
          "date": "2026-07-09",
          "price": 499.99
        },
        {
          "date": "2026-07-10",
          "price": 499.99
        },
        {
          "date": "2026-07-11",
          "price": 499.99
        },
        {
          "date": "2026-07-12",
          "price": 499.99
        },
        {
          "date": "2026-07-13",
          "price": 499.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 6.5
      },
      "specs": {
        "refreshRate": "60Hz",
        "hdr": "HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL QM5K is TCL's entry-level Mini LED for 2025, offering premium features at a budget price. It sits below the flagship QM7K. It uses Mini LED backlighting with thousands of tiny LEDs for better contrast than standard LED TVs. At 64 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm5k",
        "scrapedAt": "2026-01-22T18:51:47"
      }
    },
    {
      "id": "tcl-qm5k-74",
      "brand": "TCL",
      "model": "QM5K",
      "fullName": "TCL 74\" QM5K Mini LED 4K Smart TV",
      "size": 74,
      "year": 2025,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 6.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm5k",
      "fairValue": 1155.75,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/ca23e32a-24ef-429a-8142-8aca9a83acc0.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/ca23e32a-24ef-429a-8142-8aca9a83acc0.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 599.99,
          "retailPrice": 1199.99,
          "url": "https://www.bestbuy.com/site/6625834.p",
          "sku": "6625834",
          "inStock": true,
          "lastChecked": "2026-07-13T15:27:15Z",
          "originalUrl": "https://www.bestbuy.com/site/6625834.p",
          "onSale": false
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 599.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 599.99
        },
        {
          "date": "2026-07-04",
          "price": 599.99
        },
        {
          "date": "2026-07-07",
          "price": 599.99
        },
        {
          "date": "2026-07-08",
          "price": 599.99
        },
        {
          "date": "2026-07-09",
          "price": 599.99
        },
        {
          "date": "2026-07-10",
          "price": 599.99
        },
        {
          "date": "2026-07-11",
          "price": 599.99
        },
        {
          "date": "2026-07-12",
          "price": 599.99
        },
        {
          "date": "2026-07-13",
          "price": 599.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 6.5
      },
      "specs": {
        "refreshRate": "60Hz",
        "hdr": "HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL QM5K is TCL's entry-level Mini LED for 2025, offering premium features at a budget price. It sits below the flagship QM7K. It uses Mini LED backlighting with thousands of tiny LEDs for better contrast than standard LED TVs. The 74-inch size is the most popular choice, ideal for average living rooms with 6-8 feet of viewing distance.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm5k",
        "scrapedAt": "2026-01-22T18:51:47"
      }
    },
    {
      "id": "tcl-qm5k-84",
      "brand": "TCL",
      "model": "QM5K",
      "fullName": "TCL 84\" QM5K Mini LED 4K Smart TV",
      "size": 84,
      "year": 2025,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 6.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm5k",
      "fairValue": 1591.25,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/17a01eae-9b1b-4473-a35e-b4f17bebebf5.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/17a01eae-9b1b-4473-a35e-b4f17bebebf5.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 849.99,
          "retailPrice": 1399.99,
          "url": "https://www.bestbuy.com/site/6643446.p",
          "sku": "6643446",
          "inStock": true,
          "lastChecked": "2026-07-13T15:27:15Z",
          "originalUrl": "https://www.bestbuy.com/site/6643446.p",
          "onSale": false
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 899.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 899.99
        },
        {
          "date": "2026-07-04",
          "price": 849.99
        },
        {
          "date": "2026-07-07",
          "price": 849.99
        },
        {
          "date": "2026-07-08",
          "price": 849.99
        },
        {
          "date": "2026-07-09",
          "price": 849.99
        },
        {
          "date": "2026-07-10",
          "price": 849.99
        },
        {
          "date": "2026-07-11",
          "price": 849.99
        },
        {
          "date": "2026-07-12",
          "price": 849.99
        },
        {
          "date": "2026-07-13",
          "price": 849.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 6.5
      },
      "specs": {
        "refreshRate": "60Hz",
        "hdr": "HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL QM5K is TCL's entry-level Mini LED for 2025, offering premium features at a budget price. It sits below the flagship QM7K. It uses Mini LED backlighting with thousands of tiny LEDs for better contrast than standard LED TVs. At 84 inches, this fits well in larger living rooms where you sit 7-10 feet from the screen.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm5k",
        "scrapedAt": "2026-01-22T18:51:47"
      }
    },
    {
      "id": "tcl-qm7k-55",
      "brand": "TCL",
      "model": "QM7K",
      "fullName": "TCL 55\" QM7K Mini LED 4K Smart TV",
      "size": 55,
      "year": 2025,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 8.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm7k",
      "fairValue": 715.44,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/618fe0e9-019d-4df3-99d9-830fcecd54c1.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/618fe0e9-019d-4df3-99d9-830fcecd54c1.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 699.99,
          "retailPrice": 1299.99,
          "url": "https://www.bestbuy.com/site/6621468.p",
          "sku": "6621468",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:58Z",
          "originalUrl": "https://www.bestbuy.com/site/6621468.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 699.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 699.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.8
      },
      "specs": {
        "refreshRate": "144Hz",
        "hdr": "HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL QM7K sits in the middle of TCL's 2025 Mini LED lineup. It sits above the QM5K and below the QM8K in TCL's lineup. It uses Mini LED backlighting with over 2,500 local dimming zones for precise contrast control and excellent HDR performance. At 55 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "dimmingZones": 2500,
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm7k",
        "scrapedAt": "2026-01-22T18:51:40"
      }
    },
    {
      "id": "tcl-qm7k-64",
      "brand": "TCL",
      "model": "QM7K",
      "fullName": "TCL 64\" QM7K Mini LED 4K Smart TV",
      "size": 64,
      "year": 2025,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 8.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm7k",
      "fairValue": 1163.37,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/e41d52f4-5981-4b53-800d-2dc611a128ff.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/e41d52f4-5981-4b53-800d-2dc611a128ff.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 899.99,
          "retailPrice": 1499.99,
          "url": "https://www.bestbuy.com/site/6621470.p",
          "sku": "6621470",
          "inStock": false,
          "lastChecked": "2026-01-22T20:30:19Z",
          "originalUrl": "https://www.bestbuy.com/site/6621470.p",
          "staleHidden": true
        },
        {
          "retailerId": "amazon",
          "currentPrice": 749.99,
          "retailPrice": 798.99,
          "url": "https://www.amazon.com/dp/B0DVX8WJ7S?tag=tvschool-20",
          "originalUrl": "https://www.amazon.com/dp/B0DVX8WJ7S",
          "sku": "B0DVX8WJ7S",
          "asin": "B0DVX8WJ7S",
          "inStock": false,
          "onSale": true,
          "lastChecked": "2026-07-13T15:30:00Z",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 899.99
        },
        {
          "date": "2026-07-04",
          "price": 749.99
        },
        {
          "date": "2026-07-07",
          "price": 749.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.8
      },
      "specs": {
        "refreshRate": "144Hz",
        "hdr": "HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL QM7K sits in the middle of TCL's 2025 Mini LED lineup. It sits above the QM5K and below the QM8K in TCL's lineup. It uses Mini LED backlighting with over 2,500 local dimming zones for precise contrast control and excellent HDR performance. At 64 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "dimmingZones": 2500,
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm7k",
        "scrapedAt": "2026-01-22T18:51:40"
      }
    },
    {
      "id": "tcl-qm7k-74",
      "brand": "TCL",
      "model": "QM7K",
      "fullName": "TCL 74\" QM7K Mini LED 4K Smart TV",
      "size": 74,
      "year": 2025,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 8.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm7k",
      "fairValue": 1717.07,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/200d0ae8-541a-4dfc-b30b-4fa2d464403a.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/200d0ae8-541a-4dfc-b30b-4fa2d464403a.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1299.99,
          "retailPrice": 1299.99,
          "url": "https://www.bestbuy.com/site/6621474.p",
          "sku": "6621474",
          "inStock": true,
          "lastChecked": "2026-07-13T15:27:15Z",
          "originalUrl": "https://www.bestbuy.com/site/6621474.p",
          "onSale": false
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1198.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1198.99
        },
        {
          "date": "2026-07-07",
          "price": 1299.99
        },
        {
          "date": "2026-07-08",
          "price": 1299.99
        },
        {
          "date": "2026-07-09",
          "price": 1299.99
        },
        {
          "date": "2026-07-10",
          "price": 1299.99
        },
        {
          "date": "2026-07-11",
          "price": 1299.99
        },
        {
          "date": "2026-07-12",
          "price": 1299.99
        },
        {
          "date": "2026-07-13",
          "price": 1299.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.8
      },
      "specs": {
        "refreshRate": "144Hz",
        "hdr": "HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL QM7K sits in the middle of TCL's 2025 Mini LED lineup. It sits above the QM5K and below the QM8K in TCL's lineup. It uses Mini LED backlighting with over 2,500 local dimming zones for precise contrast control and excellent HDR performance. The 74-inch size is the most popular choice, ideal for average living rooms with 6-8 feet of viewing distance.",
      "performanceSpecs": {
        "dimmingZones": 2500,
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm7k",
        "scrapedAt": "2026-01-22T18:51:40"
      }
    },
    {
      "id": "tcl-qm7k-85",
      "brand": "TCL",
      "model": "QM7K",
      "fullName": "TCL 85\" QM7K Mini LED 4K Smart TV",
      "size": 85,
      "year": 2025,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 8.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm7k",
      "fairValue": 2432.51,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/5409d962-ebee-4af3-b9c8-c6c06690b26e.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/5409d962-ebee-4af3-b9c8-c6c06690b26e.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1499.99,
          "retailPrice": 1799.99,
          "url": "https://www.bestbuy.com/site/6621467.p",
          "sku": "6621467",
          "inStock": true,
          "lastChecked": "2026-07-13T15:27:15Z",
          "originalUrl": "https://www.bestbuy.com/site/6621467.p",
          "onSale": false
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1699.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1699.99
        },
        {
          "date": "2026-07-04",
          "price": 1499.99
        },
        {
          "date": "2026-07-07",
          "price": 1499.99
        },
        {
          "date": "2026-07-08",
          "price": 1499.99
        },
        {
          "date": "2026-07-09",
          "price": 1499.99
        },
        {
          "date": "2026-07-10",
          "price": 1499.99
        },
        {
          "date": "2026-07-11",
          "price": 1499.99
        },
        {
          "date": "2026-07-12",
          "price": 1499.99
        },
        {
          "date": "2026-07-13",
          "price": 1499.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.8
      },
      "specs": {
        "refreshRate": "144Hz",
        "hdr": "HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL QM7K sits in the middle of TCL's 2025 Mini LED lineup. It sits above the QM5K and below the QM8K in TCL's lineup. It uses Mini LED backlighting with over 2,500 local dimming zones for precise contrast control and excellent HDR performance. The 85-inch screen is designed for large living rooms or home theaters with seating 8-12 feet away.",
      "performanceSpecs": {
        "dimmingZones": 2500,
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm7k",
        "scrapedAt": "2026-01-22T18:51:40"
      }
    },
    {
      "id": "tcl-qm7k-98",
      "brand": "TCL",
      "model": "QM7K",
      "fullName": "TCL 98\" QM7K Mini LED 4K Smart TV",
      "size": 98,
      "year": 2025,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 8.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm7k",
      "fairValue": 3807.41,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/04820671-9bba-43e8-a9cf-9b8802880277.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/04820671-9bba-43e8-a9cf-9b8802880277.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1897.99,
          "retailPrice": 2799.99,
          "url": "https://www.bestbuy.com/site/6621472.p",
          "sku": "6621472",
          "inStock": true,
          "lastChecked": "2026-07-13T15:27:15Z",
          "originalUrl": "https://www.bestbuy.com/site/6621472.p",
          "onSale": false
        },
        {
          "retailerId": "amazon",
          "currentPrice": 1897.99,
          "retailPrice": null,
          "url": "https://www.amazon.com/dp/B0DVWW66H7?tag=tvschool-20",
          "originalUrl": "https://www.amazon.com/dp/B0DVWW66H7",
          "sku": "B0DVWW66H7",
          "asin": "B0DVWW66H7",
          "inStock": false,
          "onSale": true,
          "lastChecked": "2026-07-13T15:30:00Z",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1999.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1999.99
        },
        {
          "date": "2026-07-04",
          "price": 1897.99
        },
        {
          "date": "2026-07-07",
          "price": 1897.99
        },
        {
          "date": "2026-07-08",
          "price": 1897.99
        },
        {
          "date": "2026-07-09",
          "price": 1897.99
        },
        {
          "date": "2026-07-10",
          "price": 1897.99
        },
        {
          "date": "2026-07-11",
          "price": 1897.99
        },
        {
          "date": "2026-07-12",
          "price": 1897.99
        },
        {
          "date": "2026-07-13",
          "price": 1897.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.8
      },
      "specs": {
        "refreshRate": "144Hz",
        "hdr": "HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL QM7K sits in the middle of TCL's 2025 Mini LED lineup. It sits above the QM5K and below the QM8K in TCL's lineup. It uses Mini LED backlighting with over 2,500 local dimming zones for precise contrast control and excellent HDR performance. At 98 inches, this is a home theater centerpiece—best for dedicated media rooms or very large living spaces with seating 10+ feet away.",
      "performanceSpecs": {
        "dimmingZones": 2500,
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm7k",
        "scrapedAt": "2026-01-22T18:51:40"
      }
    },
    {
      "id": "tcl-qm7k-114",
      "brand": "TCL",
      "model": "QM7K",
      "fullName": "TCL 114\" QM7K Mini LED 4K Smart TV",
      "size": 114,
      "year": 2025,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 8.5,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm7k",
      "fairValue": 5499.58,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/0b85aaf1-d390-4738-bfae-5fc0d83213d0.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/0b85aaf1-d390-4738-bfae-5fc0d83213d0.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 9999.99,
          "retailPrice": 19999.99,
          "url": "https://www.bestbuy.com/site/6621473.p",
          "sku": "6621473",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:57Z",
          "originalUrl": "https://www.bestbuy.com/site/6621473.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 9999.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 9999.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 7.8
      },
      "specs": {
        "refreshRate": "144Hz",
        "hdr": "HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL QM7K sits in the middle of TCL's 2025 Mini LED lineup. It sits above the QM5K and below the QM8K in TCL's lineup. It uses Mini LED backlighting with over 2,500 local dimming zones for precise contrast control and excellent HDR performance. At 114 inches, this is a home theater centerpiece—best for dedicated media rooms or very large living spaces with seating 10+ feet away.",
      "performanceSpecs": {
        "dimmingZones": 2500,
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm7k",
        "scrapedAt": "2026-01-22T18:51:40"
      }
    },
    {
      "id": "tcl-qm8-64",
      "brand": "TCL",
      "model": "QM8",
      "fullName": "TCL 64\" QM8 Mini LED 4K Smart TV",
      "size": 64,
      "year": 2024,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 8.4,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm8-qm851g-qled",
      "fairValue": 1154.54,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/a228fcb1-ecc1-4f37-a1a0-181f1d3af4ce.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/a228fcb1-ecc1-4f37-a1a0-181f1d3af4ce.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 999.99,
          "retailPrice": 2499.99,
          "url": "https://www.bestbuy.com/site/6579452.p",
          "sku": "6579452",
          "inStock": false,
          "lastChecked": "2026-01-22T20:29:56Z",
          "originalUrl": "https://www.bestbuy.com/site/6579452.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 999.99
        }
      ],
      "useCaseScores": {
        "movieScore": 9,
        "tvShowScore": 8,
        "sportsScore": 8.1,
        "gamingScore": 8.9,
        "hdrGamingScore": 9,
        "mixedUsageScore": 8.4,
        "pcMonitorScore": 8.7
      },
      "specs": {
        "refreshRate": "144Hz",
        "hdr": "Dolby Vision, HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL QM8 is TCL's flagship Mini LED. It sits above the QM7. It uses Mini LED backlighting with over 2,300 local dimming zones for precise contrast control and excellent HDR performance. It excels at movies and HDR gaming. At 64 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "dimmingZones": 2300,
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm8-qm850g-qled",
        "scrapedAt": "2026-01-22T18:49:17"
      }
    },
    {
      "id": "tcl-qm8-74",
      "brand": "TCL",
      "model": "QM8",
      "fullName": "TCL 74\" QM8 Mini LED 4K Smart TV",
      "size": 74,
      "year": 2024,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 8.4,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm8-qm851g-qled",
      "fairValue": 1704.02,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/ccaed11e-ec04-4593-904b-974ab2566090.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/ccaed11e-ec04-4593-904b-974ab2566090.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1499.99,
          "retailPrice": 3199.99,
          "url": "https://www.bestbuy.com/site/6579442.p",
          "sku": "6579442",
          "inStock": false,
          "lastChecked": "2026-01-22T20:29:56Z",
          "originalUrl": "https://www.bestbuy.com/site/6579442.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1499.99
        }
      ],
      "useCaseScores": {
        "movieScore": 9,
        "tvShowScore": 8,
        "sportsScore": 8.1,
        "gamingScore": 8.9,
        "hdrGamingScore": 9,
        "mixedUsageScore": 8.4,
        "pcMonitorScore": 8.7
      },
      "description": "The TCL QM8 is TCL's flagship Mini LED. It sits above the QM7. It uses Mini LED backlighting with over 2,300 local dimming zones for precise contrast control and excellent HDR performance. It excels at movies and HDR gaming. The 74-inch size is the most popular choice, ideal for average living rooms with 6-8 feet of viewing distance.",
      "performanceSpecs": {
        "dimmingZones": 2300,
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm8-qm850g-qled",
        "scrapedAt": "2026-01-22T18:49:17"
      }
    },
    {
      "id": "tcl-qm8-85",
      "brand": "TCL",
      "model": "QM8",
      "fullName": "TCL 85\" QM8 Mini LED 4K Smart TV",
      "size": 85,
      "year": 2024,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 8.4,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm8-qm851g-qled",
      "fairValue": 2414.03,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/14404ea3-be3c-49b8-bffb-a3f4e5ed79e7.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/14404ea3-be3c-49b8-bffb-a3f4e5ed79e7.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1999.99,
          "retailPrice": 3799.99,
          "url": "https://www.bestbuy.com/site/6579456.p",
          "sku": "6579456",
          "inStock": false,
          "lastChecked": "2026-01-22T20:29:57Z",
          "originalUrl": "https://www.bestbuy.com/site/6579456.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1999.99
        }
      ],
      "useCaseScores": {
        "movieScore": 9,
        "tvShowScore": 8,
        "sportsScore": 8.1,
        "gamingScore": 8.9,
        "hdrGamingScore": 9,
        "mixedUsageScore": 8.4,
        "pcMonitorScore": 8.7
      },
      "specs": {
        "refreshRate": "144Hz",
        "hdr": "Dolby Vision, HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL QM8 is TCL's flagship Mini LED. It sits above the QM7. It uses Mini LED backlighting with over 2,300 local dimming zones for precise contrast control and excellent HDR performance. It excels at movies and HDR gaming. The 85-inch screen is designed for large living rooms or home theaters with seating 8-12 feet away.",
      "performanceSpecs": {
        "dimmingZones": 2300,
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm8-qm850g-qled",
        "scrapedAt": "2026-01-22T18:49:17"
      }
    },
    {
      "id": "tcl-qm8-98",
      "brand": "TCL",
      "model": "QM8",
      "fullName": "TCL 98\" QM8 Mini LED 4K Smart TV",
      "size": 98,
      "year": 2024,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 8.4,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm8-qm851g-qled",
      "fairValue": 3778.49,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/d35beb00-9a36-464d-8789-c1b224d5f726.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/d35beb00-9a36-464d-8789-c1b224d5f726.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 2999.99,
          "retailPrice": 4999.99,
          "url": "https://www.bestbuy.com/site/6579450.p",
          "sku": "6579450",
          "inStock": false,
          "lastChecked": "2026-01-22T18:49:17Z",
          "originalUrl": "https://www.bestbuy.com/site/6579450.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 2999.99
        }
      ],
      "useCaseScores": {
        "movieScore": 9,
        "tvShowScore": 8,
        "sportsScore": 8.1,
        "gamingScore": 8.9,
        "hdrGamingScore": 9,
        "mixedUsageScore": 8.4,
        "pcMonitorScore": 8.7
      },
      "specs": {
        "refreshRate": "144Hz",
        "hdr": "Dolby Vision, HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL QM8 is TCL's flagship Mini LED. It sits above the QM7. It uses Mini LED backlighting with over 2,300 local dimming zones for precise contrast control and excellent HDR performance. It excels at movies and HDR gaming. At 98 inches, this is a home theater centerpiece—best for dedicated media rooms or very large living spaces with seating 10+ feet away.",
      "performanceSpecs": {
        "dimmingZones": 2300,
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm8-qm850g-qled",
        "scrapedAt": "2026-01-22T18:49:17"
      }
    },
    {
      "id": "tcl-qm8-114",
      "brand": "TCL",
      "model": "QM8",
      "fullName": "TCL 114\" QM8 Mini LED 4K Smart TV",
      "size": 114,
      "year": 2024,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 8.4,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm8-qm850g-qled",
      "fairValue": 5457.82,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/c711ffd8-cd7f-4d0c-878f-68cf78863282.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/c711ffd8-cd7f-4d0c-878f-68cf78863282.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 14999.99,
          "retailPrice": 19999.99,
          "url": "https://www.bestbuy.com/site/6579445.p",
          "sku": "6579445",
          "inStock": false,
          "lastChecked": "2026-01-22T20:29:55Z",
          "originalUrl": "https://www.bestbuy.com/site/6579445.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 14999.99
        }
      ],
      "useCaseScores": {
        "movieScore": 9,
        "tvShowScore": 8,
        "sportsScore": 8.1,
        "gamingScore": 8.9,
        "hdrGamingScore": 9,
        "mixedUsageScore": 8.4,
        "pcMonitorScore": 8.7
      },
      "specs": {
        "refreshRate": "144Hz",
        "hdr": "Dolby Vision, HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL QM8 is TCL's flagship Mini LED. It sits above the QM7. It uses Mini LED backlighting with over 2,300 local dimming zones for precise contrast control and excellent HDR performance. It excels at movies and HDR gaming. At 114 inches, this is a home theater centerpiece—best for dedicated media rooms or very large living spaces with seating 10+ feet away.",
      "performanceSpecs": {
        "dimmingZones": 2300,
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm8-qm850g-qled",
        "scrapedAt": "2026-01-22T18:49:17"
      }
    },
    {
      "id": "tcl-qm8k-64",
      "brand": "TCL",
      "model": "QM8K",
      "fullName": "TCL 64\" QM8K Mini LED 4K Smart TV",
      "size": 64,
      "year": 2025,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 9,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm8k",
      "fairValue": 1150.05,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/a228fcb1-ecc1-4f37-a1a0-181f1d3af4ce.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/a228fcb1-ecc1-4f37-a1a0-181f1d3af4ce.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 999.99,
          "retailPrice": 2499.99,
          "url": "https://www.bestbuy.com/site/6625842.p",
          "sku": "6625842",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:55Z",
          "originalUrl": "https://www.bestbuy.com/site/6625842.p",
          "staleHidden": true
        },
        {
          "retailerId": "amazon",
          "currentPrice": 1297.99,
          "retailPrice": 1499.99,
          "url": "https://www.amazon.com/dp/B0F53CZ4WT?tag=tvschool-20",
          "originalUrl": "https://www.amazon.com/dp/B0F53CZ4WT",
          "sku": "B0F53CZ4WT",
          "asin": "B0F53CZ4WT",
          "inStock": true,
          "onSale": true,
          "lastChecked": "2026-07-13T15:30:00Z"
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 999.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 999.99
        },
        {
          "date": "2026-07-04",
          "price": 997.99
        },
        {
          "date": "2026-07-07",
          "price": 997.99
        },
        {
          "date": "2026-07-08",
          "price": 1297.99
        },
        {
          "date": "2026-07-09",
          "price": 1297.99
        },
        {
          "date": "2026-07-10",
          "price": 1297.99
        },
        {
          "date": "2026-07-11",
          "price": 1297.99
        },
        {
          "date": "2026-07-12",
          "price": 1297.99
        },
        {
          "date": "2026-07-13",
          "price": 1297.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.4
      },
      "specs": {
        "refreshRate": "144Hz",
        "hdr": "HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL QM8K is TCL's flagship Mini LED for 2025. It sits above the QM7K. It uses Mini LED backlighting with thousands of tiny LEDs for better contrast than standard LED TVs. At 64 inches, this works great in bedrooms, apartments, or living rooms with closer seating (5-7 feet).",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm8k",
        "scrapedAt": "2026-01-22T18:51:33"
      }
    },
    {
      "id": "tcl-qm8k-74",
      "brand": "TCL",
      "model": "QM8K",
      "fullName": "TCL 74\" QM8K Mini LED 4K Smart TV",
      "size": 74,
      "year": 2025,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 9,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm8k",
      "fairValue": 1697.4,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/ccaed11e-ec04-4593-904b-974ab2566090.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/ccaed11e-ec04-4593-904b-974ab2566090.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1499.99,
          "retailPrice": 3199.99,
          "url": "https://www.bestbuy.com/site/6625839.p",
          "sku": "6625839",
          "inStock": false,
          "lastChecked": "2026-01-22T18:51:33Z",
          "originalUrl": "https://www.bestbuy.com/site/6625839.p",
          "staleHidden": true
        },
        {
          "retailerId": "amazon",
          "currentPrice": 1397.99,
          "retailPrice": 1999.99,
          "url": "https://www.amazon.com/dp/B0F53HDFBR?tag=tvschool-20",
          "originalUrl": "https://www.amazon.com/dp/B0F53HDFBR",
          "sku": "B0F53HDFBR",
          "asin": "B0F53HDFBR",
          "inStock": false,
          "onSale": true,
          "lastChecked": "2026-07-13T15:30:00Z",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1499.99
        },
        {
          "date": "2026-07-04",
          "price": 1397.99
        },
        {
          "date": "2026-07-07",
          "price": 1397.99
        },
        {
          "date": "2026-07-08",
          "price": 1397.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.4
      },
      "specs": {
        "refreshRate": "144Hz",
        "hdr": "HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL QM8K is TCL's flagship Mini LED for 2025. It sits above the QM7K. It uses Mini LED backlighting with thousands of tiny LEDs for better contrast than standard LED TVs. The 74-inch size is the most popular choice, ideal for average living rooms with 6-8 feet of viewing distance.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm8k",
        "scrapedAt": "2026-01-22T18:51:33"
      }
    },
    {
      "id": "tcl-qm8k-85",
      "brand": "TCL",
      "model": "QM8K",
      "fullName": "TCL 85\" QM8K Mini LED 4K Smart TV",
      "size": 85,
      "year": 2025,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 9,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm8k",
      "fairValue": 2404.65,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/14404ea3-be3c-49b8-bffb-a3f4e5ed79e7.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/14404ea3-be3c-49b8-bffb-a3f4e5ed79e7.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 1999.99,
          "retailPrice": 3799.99,
          "url": "https://www.bestbuy.com/site/6625843.p",
          "sku": "6625843",
          "inStock": false,
          "lastChecked": "2026-01-23T21:04:57Z",
          "originalUrl": "https://www.bestbuy.com/site/6625843.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 1999.99
        },
        {
          "date": "2026-01-23",
          "retailerId": "bestbuy",
          "price": 1999.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.4
      },
      "specs": {
        "refreshRate": "144Hz",
        "hdr": "HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL QM8K is TCL's flagship Mini LED for 2025. It sits above the QM7K. It uses Mini LED backlighting with thousands of tiny LEDs for better contrast than standard LED TVs. The 85-inch screen is designed for large living rooms or home theaters with seating 8-12 feet away.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm8k",
        "scrapedAt": "2026-01-22T18:51:33"
      }
    },
    {
      "id": "tcl-qm8k-98",
      "brand": "TCL",
      "model": "QM8K",
      "fullName": "TCL 98\" QM8K Mini LED 4K Smart TV",
      "size": 98,
      "year": 2025,
      "panelType": "Mini LED",
      "resolution": "4K",
      "rtingsScore": 9,
      "rtingsUrl": "https://www.rtings.com/tv/reviews/tcl/qm8k",
      "fairValue": 3763.8,
      "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/d35beb00-9a36-464d-8789-c1b224d5f726.jpg",
      "images": [
        "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/d35beb00-9a36-464d-8789-c1b224d5f726.jpg"
      ],
      "prices": [
        {
          "retailerId": "bestbuy",
          "currentPrice": 2999.99,
          "retailPrice": 4999.99,
          "url": "https://www.bestbuy.com/site/6625840.p",
          "sku": "6625840",
          "inStock": false,
          "lastChecked": "2026-01-22T20:30:16Z",
          "originalUrl": "https://www.bestbuy.com/site/6625840.p",
          "staleHidden": true
        }
      ],
      "priceHistory": [
        {
          "date": "2026-01-22",
          "retailerId": "bestbuy",
          "price": 2999.99
        }
      ],
      "useCaseScores": {
        "sportsScore": 8.4
      },
      "specs": {
        "refreshRate": "144Hz",
        "hdr": "HDR10",
        "smartPlatform": "Google TV"
      },
      "description": "The TCL QM8K is TCL's flagship Mini LED for 2025. It sits above the QM7K. It uses Mini LED backlighting with thousands of tiny LEDs for better contrast than standard LED TVs. At 98 inches, this is a home theater centerpiece—best for dedicated media rooms or very large living spaces with seating 10+ feet away.",
      "performanceSpecs": {
        "peakBrightness": 1950,
        "vrrSupport": [
          "VRR",
          "FreeSync",
          "G-Sync"
        ]
      },
      "_dataSource": {
        "provider": "rtings",
        "url": "https://www.rtings.com/tv/reviews/tcl/qm8k",
        "scrapedAt": "2026-01-22T18:51:33"
      }
    }
  ]
};

const TVDataUtils = {
  /**
   * Get the best (lowest) price for a TV across all retailers
   */
  getBestPrice(tv) {
    if (!tv.prices || tv.prices.length === 0) return null;
    const inStockPrices = tv.prices.filter(p => p.inStock);
    if (inStockPrices.length === 0) {
      const visible = tv.prices.filter(p => !p.staleHidden);
      return visible[0] || tv.prices[0];
    }
    return inStockPrices.reduce((best, current) =>
      current.currentPrice < best.currentPrice ? current : best
    );
  },

  /**
   * Calculate deal score for a TV
   * Positive = underpriced (good deal), Negative = overpriced
   */
  calculateDealScore(tv) {
    const bestPrice = this.getBestPrice(tv);
    if (!bestPrice || !tv.fairValue || tv.fairValue <= 0) return 0;
    return (tv.fairValue - bestPrice.currentPrice) / tv.fairValue;
  },

  /**
   * Format deal score as percentage string
   */
  formatDealScore(dealScore) {
    const pct = dealScore * 100;
    if (pct >= 0) {
      return `+${pct.toFixed(1)}%`;
    }
    return `${pct.toFixed(1)}%`;
  },

  /**
   * Get verdict based on deal score
   */
  getVerdict(dealScore) {
    if (dealScore >= 0.25) return { text: "A", subtitle: "Great Deal", class: "verdict-a" };
    if (dealScore >= 0) return { text: "B", subtitle: "Good Deal", class: "verdict-b" };
    if (dealScore >= -0.10) return { text: "C", subtitle: "Fair Price", class: "verdict-c" };
    if (dealScore >= -0.25) return { text: "D", subtitle: "Not Recommended", class: "verdict-d" };
    return { text: "F", subtitle: "Not Recommended", class: "verdict-f" };
  },

  /**
   * Get retailer info by ID
   */
  getRetailer(retailerId) {
    return TV_DATA.retailers[retailerId] || null;
  },

  /**
   * Format price as currency
   */
  formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  },

  /**
   * Get all unique brands from TV data
   */
  getAllBrands() {
    return [...new Set(TV_DATA.tvs.map(tv => tv.brand))].sort();
  },

  /**
   * Get all unique sizes from TV data
   */
  getAllSizes() {
    return [...new Set(TV_DATA.tvs.map(tv => tv.size))].sort((a, b) => a - b);
  },

  /**
   * Get all unique panel types from TV data
   */
  getAllPanelTypes() {
    return [...new Set(TV_DATA.tvs.map(tv => tv.panelType))].sort();
  },

  /**
   * Sort TVs by deal score (best deals first)
   */
  sortByDealScore(tvs) {
    return [...tvs].sort((a, b) => {
      const scoreA = this.calculateDealScore(a);
      const scoreB = this.calculateDealScore(b);
      return scoreB - scoreA;
    });
  },

  /**
   * Get related TVs in the same product family (same brand and model, different sizes)
   */
  getRelatedSizes(tv) {
    return TV_DATA.tvs
      .filter(t => t.brand === tv.brand && t.model === tv.model && t.id !== tv.id)
      .sort((a, b) => a.size - b.size);
  },

  /**
   * Get all TVs in a product family (same brand and model)
   */
  getProductFamily(tv) {
    return TV_DATA.tvs
      .filter(t => t.brand === tv.brand && t.model === tv.model)
      .sort((a, b) => a.size - b.size);
  }
};
