export default [
    {
      id: "1",
      name: "Smart Home Hub",
      description: "Central hub to control all your smart home devices with voice or app.",
      image: "https://m.media-amazon.com/images/I/21Ojpuhkl2L._SX300_SY300_QL70_FMwebp_.jpg",
      attributes: {
        warranty: "2 years",
        connectivity: "Wi-Fi, Bluetooth",
        compatibility: "Alexa, Google Assistant",
        maintenance: [
          { time: 1, note: "Warranty expires", compatibility: "Alexa" },
          { time: 2, note: "Compatibility issues", connectivity: "Wi-Fi only" },
        ],
      },
    },
    {
      id: "2",
      name: "Portable Power Bank",
      description: "High-capacity power bank to keep your devices charged while traveling.",
      image: "https://m.media-amazon.com/images/I/71lVwl3q-kL._SX425_.jpg",
      attributes: {
        warranty: "1 year",
        capacity: "10000mAh",
        ports: "USB-A, USB-C",
        maintenance: [
          { time: 1, note: "Warranty expires", capacity: "9500mAh" },
          { time: 2, note: "Battery efficiency decreases", capacity: "9000mAh" },
        ],
      },
    },
    {
      id: "3",
      name: "Compact Smart Speaker",
      description: "Smart speaker with voice assistant capabilities and high-quality sound.",
      image: "https://m.media-amazon.com/images/I/81lGxS2ZisL._SY355_.jpg",
      attributes: {
        warranty: "1 year",
        connectivity: "Wi-Fi, Bluetooth",
        sound_quality: "High",
        maintenance: [
          { time: 1, note: "Warranty expires", sound_quality: "Medium" },
          { time: 2, note: "Connectivity issues", connectivity: "Bluetooth only" },
        ],
      },
    },
    {
      id: "4",
      name: "Smart Plugs",
      description: "Control your home appliances remotely with these smart plugs.",
      image: "https://m.media-amazon.com/images/I/61dmUuNa3fL._SX425_.jpg",
      attributes: {
        warranty: "1 year",
        connectivity: "Wi-Fi",
        compatibility: "Alexa, Google Assistant",
        maintenance: [
          { time: 1, note: "Warranty expires", compatibility: "Alexa" },
          { time: 2, note: "Connectivity issues", connectivity: "Wi-Fi only" },
        ],
      },
    },
    {
      id: "5",
      name: "Wireless Earbuds",
      description: "Compact wireless earbuds with charging case and up to 24 hours of battery life.",
      image: "https://m.media-amazon.com/images/I/31uQjRuF5LL._SX300_SY300_QL70_FMwebp_.jpg",
      attributes: {
        warranty: "1 year",
        battery_life: "24 hours",
        connectivity: "Bluetooth",
        maintenance: [
          { time: 1, note: "Warranty expires", battery_life: "20 hours" },
          { time: 2, note: "Battery life decreases", battery_life: "18 hours" },
        ],
      },
    },
    {
      id: "6",
      name: "Smart Doorbell",
      description: "Smart doorbell with HD video, motion detection, and two-way audio.",
      image: "https://m.media-amazon.com/images/I/41yIPJvIMAL._SX425_.jpg",
      attributes: {
        warranty: "2 years",
        resolution: "HD",
        connectivity: "Wi-Fi",
        maintenance: [
          { time: 1, note: "Warranty expires", resolution: "720p" },
          { time: 2, note: "Connectivity issues", connectivity: "Wi-Fi only" },
        ],
      },
    },
    {
      id: "7",
      name: "Smart Thermostat",
      description: "Smart thermostat with app control and energy-saving features.",
      image: "https://m.media-amazon.com/images/I/71mQb+Qg6iL._SX425_.jpg",
      attributes: {
        warranty: "2 years",
        connectivity: "Wi-Fi",
        compatibility: "Alexa, Google Assistant",
        maintenance: [
          { time: 1, note: "Warranty expires", compatibility: "Alexa" },
          { time: 2, note: "Energy-saving features decrease", connectivity: "Wi-Fi only" },
        ],
      },
    },
    {
      id: "8",
      name: "Automatic Vacuum Cleaner",
      description: "Robotic vacuum cleaner with automatic scheduling and smart navigation.",
      image: "https://m.media-amazon.com/images/I/51jGpFlBfiL._SX425_.jpg",
      attributes: {
        warranty: "2 years",
        battery_life: "90 minutes",
        connectivity: "Wi-Fi",
        maintenance: [
          { time: 1, note: "Warranty expires", battery_life: "80 minutes" },
          { time: 2, note: "Battery life decreases", battery_life: "70 minutes" },
        ],
      },
    },
    {
      id: "9",
      name: "Electric Kettle",
      description: "Fast-boiling electric kettle with temperature control settings.",
      image: "https://m.media-amazon.com/images/I/61DXNDN5MFL._SX425_.jpg",
      attributes: {
        warranty: "1 year",
        capacity: "1.7L",
        power: "1500W",
        maintenance: [
          { time: 1, note: "Warranty expires", capacity: "1.6L" },
          { time: 2, note: "Power efficiency decreases", power: "1400W" },
        ],
      },
    },
    {
      id: "10",
      name: "Air Fryer",
      description: "Healthy cooking air fryer with adjustable temperature and timer.",
      image: "https://m.media-amazon.com/images/I/414ly0wsjYL._SX425_.jpg",
      attributes: {
        warranty: "2 years",
        capacity: "3.5L",
        power: "1400W",
        maintenance: [
          { time: 1, note: "Warranty expires", capacity: "3.3L" },
          { time: 2, note: "Power efficiency decreases", power: "1300W" },
        ],
      },
    },
    {
      id: "11",
      name: "Fitness Tracker",
      description: "Wearable fitness tracker with heart rate monitoring and step counter.",
      image: "https://m.media-amazon.com/images/I/61Xd5KSAbaL._SX425_.jpg",
      attributes: {
        warranty: "1 year",
        battery_life: "7 days",
        connectivity: "Bluetooth",
        maintenance: [
          { time: 1, note: "Warranty expires", battery_life: "6 days" },
          { time: 2, note: "Battery life decreases", battery_life: "5 days" },
        ],
      },
    },
    {
      id: "12",
      name: "Wireless Charging Pad",
      description: "Fast wireless charging pad compatible with multiple devices.",
      image: "https://m.media-amazon.com/images/I/51sH32iCy4L._SX425_.jpg",
      attributes: {
        warranty: "1 year",
        output: "10W",
        compatibility: "iPhone, Samsung",
        maintenance: [
          { time: 1, note: "Warranty expires", output: "9W" },
          { time: 2, note: "Charging speed decreases", output: "8W" },
        ],
      },
    },
    {
      id: "13",
      name: "Bluetooth Headphones",
      description: "Over-ear Bluetooth headphones with noise cancellation.",
      image: "https://m.media-amazon.com/images/I/61FUX7QmifS._SY355_.jpg",
      attributes: {
        warranty: "2 years",
        battery_life: "20 hours",
        connectivity: "Bluetooth",
        maintenance: [
          { time: 1, note: "Warranty expires", battery_life: "18 hours" },
          { time: 2, note: "Battery life decreases", battery_life: "16 hours" },
        ],
      },
    },
    {
      id: "14",
      name: "Smart Light Bulbs",
      description: "Set of smart light bulbs with adjustable brightness and color.",
      image: "https://m.media-amazon.com/images/I/41CVeqmeJpL._SX425_.jpg",
      attributes: {
        warranty: "1 year",
        connectivity: "Wi-Fi",
        compatibility: "Alexa, Google Assistant",
        maintenance: [
          { time: 1, note: "Warranty expires", brightness: "90%" },
          { time: 2, note: "Brightness decreases", brightness: "80%" },
        ],
      },
    },
    {
      id: "15",
      name: "Electric Toothbrush",
      description: "Rechargeable electric toothbrush with multiple brushing modes.",
      image: "https://m.media-amazon.com/images/I/71VM1KCiYFL._SY606_.jpg",
      attributes: {
        warranty: "1 year",
        battery_life: "2 weeks",
        brushing_modes: "3",
        maintenance: [
          { time: 1, note: "Warranty expires", battery_life: "10 days" },
          { time: 2, note: "Battery life decreases", battery_life: "7 days" },
        ],
      },
    },
    {
      id: "16",
      name: "4K Action Camera",
      description: "Waterproof action camera with 4K resolution and Wi-Fi connectivity.",
      image: "https://m.media-amazon.com/images/I/61h14q8wCKL._SX425_.jpg",
      attributes: {
        warranty: "2 years",
        resolution: "4K",
        connectivity: "Wi-Fi",
        maintenance: [
          { time: 1, note: "Warranty expires", resolution: "1080p" },
          { time: 2, note: "Resolution decreases", resolution: "720p" },
        ],
      },
    },
    {
      id: "17",
      name: "Portable Bluetooth Speaker",
      description: "Compact and waterproof Bluetooth speaker with high-quality sound.",
      image: "https://m.media-amazon.com/images/I/51waOv47fqL._SX425_.jpg",
      attributes: {
        warranty: "1 year",
        battery_life: "10 hours",
        connectivity: "Bluetooth",
        maintenance: [
          { time: 1, note: "Warranty expires", battery_life: "9 hours" },
          { time: 2, note: "Battery life decreases", battery_life: "8 hours" },
        ],
      },
    },
    {
      id: "18",
      name: "Smart Watch",
      description: "Smart watch with fitness tracking, heart rate monitoring, and GPS.",
      image: "https://m.media-amazon.com/images/I/61TapeOXotL._SY450_.jpg",
      attributes: {
        warranty: "2 years",
        battery_life: "5 days",
        connectivity: "Bluetooth, Wi-Fi",
        maintenance: [
          { time: 1, note: "Warranty expires", battery_life: "4 days" },
          { time: 2, note: "Battery life decreases", battery_life: "3 days" },
        ],
      },
    },
    {
      id: "19",
      name: "Robot Vacuum Cleaner",
      description: "Automatic vacuum cleaner with smart navigation and app control.",
      image: "https://m.media-amazon.com/images/I/51pFXvZ7eWL._SX425_.jpg",
      attributes: {
        warranty: "2 years",
        battery_life: "120 minutes",
        connectivity: "Wi-Fi",
        maintenance: [
          { time: 1, note: "Warranty expires", battery_life: "110 minutes" },
          { time: 2, note: "Battery life decreases", battery_life: "100 minutes" },
        ],
      },
    },
    {
      id: "20",
      name: "Smart Security Camera",
      description: "Indoor security camera with HD video, motion detection, and night vision.",
      image: "https://m.media-amazon.com/images/I/51Rvl7DuOUL._SX425_.jpg",
      attributes: {
        warranty: "2 years",
        resolution: "HD",
        connectivity: "Wi-Fi",
        maintenance: [
          { time: 1, note: "Warranty expires", resolution: "720p" },
          { time: 2, note: "Resolution decreases", resolution: "480p" },
        ],
      },
    }
  ];
  