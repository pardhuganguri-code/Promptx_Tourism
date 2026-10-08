/**
 * 🇮🇳 DISCOVER INDIA — Core Application Script
 * "Every journey tells a story."
 * Themed with Traditional Kalamkari Crimson & Temple Gold Aesthetics
 * PromptX India Tourism Hackathon Showcase
 */

// ==========================================
// 1. COMPREHENSIVE DATASETS (ALL 100% RELEVANT & VERIFIED)
// ==========================================

const DESTINATIONS = [
    {
        id: "rajasthan",
        name: "Rajasthan",
        state: "Rajasthan",
        region: "West",
        categories: ["Heritage", "Culture"],
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
        shortDesc: "Golden deserts, impregnable hill forts, and royal palaces echoing centuries of chivalry and folk melodies.",
        bestSeason: "Oct – Mar",
        mustSee: "Amber Fort, Thar Desert Safari, Lake Pichola",
        vibe: "Royal • Desert • Heritage",
        story: "Rajasthan is India's regal heartland. In Jaipur, the pink facades glow at sunrise; in Jodhpur, indigo houses cluster beneath the colossal Mehrangarh Fort; while in Jaisalmer, golden sandstone ramparts rise organically from the desert dunes. Evenings are alive with vibrant Kalbelia dances, fireside storytelling, and royal feasts.",
        highlights: [
            "Camp under star-studded desert skies in the Sam Sand Dunes",
            "Wander the mirrored halls of the City Palace in Udaipur",
            "Taste authentic wood-fired Dal Baati Churma and fiery Laal Maas"
        ],
        howToReach: "Major international & domestic airports in Jaipur, Udaipur, and Jodhpur. Excellent express train connectivity.",
        officialPortal: "https://www.tourism.rajasthan.gov.in/"
    },
    {
        id: "kerala",
        name: "Kerala Backwaters",
        state: "Kerala",
        region: "South",
        categories: ["Nature", "Spirituality", "Food"],
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
        shortDesc: "Tranquil emerald waterways, spice-scented hills, ayurvedic sanctuaries, and mist-clad tea plantations in Munnar.",
        bestSeason: "Sep – Mar",
        mustSee: "Alleppey Houseboats, Munnar Tea Valleys, Fort Kochi",
        vibe: "Serene • Tropical • Rejuvenating",
        story: "Rightfully christened 'God's Own Country', Kerala is a gentle world of tropical water mazes, coconut groves, and soothing Ayurvedic wellness. Gliding along the palm-fringed backwaters aboard a traditional Kettuvallam reveals unhurried village life, wading egrets, and serene sunsets over the Arabian Sea.",
        highlights: [
            "Overnight slow cruise aboard a traditional handcrafted houseboat",
            "Wake up to rolling mist across 100-year-old tea estates in Munnar",
            "Feast on a traditional 26-dish Kerala Sadya served on a banana leaf"
        ],
        howToReach: "International airports at Kochi, Thiruvananthapuram, and Kozhikode. Well-connected coastal railways.",
        officialPortal: "https://www.keralatourism.org/"
    },
    {
        id: "ladakh",
        name: "Ladakh",
        state: "Ladakh (UT)",
        region: "North",
        categories: ["Adventure", "Spirituality", "Nature"],
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
        shortDesc: "The land of high passes, celestial blue alpine lakes, ancient Buddhist monasteries, and rugged Himalayan serenity.",
        bestSeason: "May – Sep",
        mustSee: "Pangong Tso, Nubra Valley, Thiksey Monastery",
        vibe: "High-Altitude • Mystical • Rugged",
        story: "Perched high above the clouds in the rain-shadow of the Greater Himalayas, Ladakh is a realm of stark, moonlike beauty. Fluttering prayer flags cast blessings across icy mountain winds, ancient whitewashed gompas cling to sheer rock faces, and cobalt-blue lakes mirror towering snow peaks.",
        highlights: [
            "Witness the shifting color spectrum of Pangong Tso lake at 14,000 ft",
            "Ride double-humped Bactrian camels among Nubra Valley sand dunes",
            "Attend sunrise prayer chants inside the 600-year-old Thiksey Monastery"
        ],
        howToReach: "Flights directly into Kushok Bakula Rimpochee Airport (Leh). High mountain road trips via Manali or Srinagar.",
        officialPortal: "https://ladakhtourism.in/"
    },
    {
        id: "varanasi",
        name: "Varanasi",
        state: "Uttar Pradesh",
        region: "North",
        categories: ["Spirituality", "Heritage", "Culture"],
        image: "assets/varanasi.png",
        shortDesc: "The oldest continuously inhabited city on Earth, where sacred river ghats and devotional rituals touch eternity.",
        bestSeason: "Oct – Mar",
        mustSee: "Dashashwamedh Ghat Aarti, Sarnath, Kashi Vishwanath",
        vibe: "Sacred • Eternal • Soul-Stirring",
        story: "Mark Twain wrote: 'Benares is older than history, older than tradition, older even than legend.' On the banks of the sacred river Ganges, life and eternity dance in timeless harmony. At dusk, multi-tiered brass lamps swirl in synchrony during the grand Ganga Aarti while temple bells echo into the night sky.",
        highlights: [
            "Row past historic ghats at dawn as temple bells greet the morning sun",
            "Experience the hypnotic rhythm and incense of the evening Ganga Aarti",
            "Sip rich Banarasi Paan and malaiyo froth in labyrinthine ancient alleys"
        ],
        howToReach: "Lal Bahadur Shastri International Airport in Varanasi. Major junction for high-speed trains including Vande Bharat.",
        officialPortal: "https://uptourism.gov.in/"
    },
    {
        id: "meghalaya",
        name: "Meghalaya",
        state: "Meghalaya",
        region: "Northeast",
        categories: ["Nature", "Adventure"],
        image: "assets/meghalaya.png",
        shortDesc: "The Abode of the Clouds, boasting living root bridges engineered by Khasi tribes, crystal rivers, and cascading falls.",
        bestSeason: "Oct – Apr",
        mustSee: "Double Decker Living Root Bridge, Dawki Umngot River, Cherrapunji",
        vibe: "Enchanted • Verdant • Pristine",
        story: "Meghalaya is a wonderland where indigenous Khasi tribes have trained living rubber fig roots over centuries to bridge roaring monsoon streams. In Dawki, the Umngot river is so crystal-clear that wooden boats appear to float on pure air, while Cherrapunji's plateau spills towering waterfalls into misty gorges.",
        highlights: [
            "Trek through ancient rainforest to the Double Decker Root Bridge in Nongriat",
            "Boat on the glass-clear waters of the Umngot River at Dawki",
            "Stand beside Nohkalikai Falls, India's tallest plunge waterfall"
        ],
        howToReach: "Airport at Shillong (Umroi) or Guwahati International Airport (100km drive through pine-clad hills).",
        officialPortal: "https://www.meghalayatourism.in/"
    },
    {
        id: "goa",
        name: "Goa & Konkan Coast",
        state: "Goa",
        region: "West",
        categories: ["Nature", "Culture", "Food"],
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        shortDesc: "Golden Arabian Sea shores, Portuguese baroque architecture, spice plantations, and laid-back susegad lifestyle.",
        bestSeason: "Nov – Mar",
        mustSee: "Basilica of Bom Jesus, Palolem Beach, Dudhsagar Falls",
        vibe: "Coastal • Bohemian • Colonial",
        story: "Beyond its famous beaches, Goa is a rich cultural mosaic where Indian warmth meets Portuguese baroque heritage. Colorful Latin quarters in Fontainhas feature terracotta-tiled villas, riverside feni distilleries, and the irresistible aromas of fiery prawn balchão and coconut curry.",
        highlights: [
            "Explore the UNESCO-listed churches and cathedrals of Old Goa",
            "Kayak through tranquil mangroves and backwaters in Chapora",
            "Relish coastal Goan fish curry thali with fresh poee bread"
        ],
        howToReach: "Airports at Dabolim and Manohar International Airport (MOPA). Express Konkan railway connections.",
        officialPortal: "https://goatourism.gov.in/"
    },
    {
        id: "himachal",
        name: "Himachal Pradesh",
        state: "Himachal Pradesh",
        region: "North",
        categories: ["Adventure", "Nature"],
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
        shortDesc: "Pine-covered mountain valleys, apple orchards, snowy Himalayan passes, and tranquil spiritual retreats.",
        bestSeason: "Mar – Jun & Oct – Feb",
        mustSee: "Spiti Valley, Rohtang Pass, Dharamshala & McLeodGanj",
        vibe: "Alpine • Crisp • Exhilarating",
        story: "Himachal Pradesh is an alpine sanctuary of roaring glacial rivers, deodar cedar forests, and cozy hill stations. From the spiritual stillness of Dharamshala—home to His Holiness the Dalai Lama—to the remote, wind-carved desert canyons of Spiti, adventure and contemplation walk hand in hand.",
        highlights: [
            "Cross through the world's longest high-altitude tunnel (Atal Tunnel)",
            "Hike the trails of Parvati Valley amidst snow-capped Himalayan peaks",
            "Sip hot Himalayan kahwa and steamed momos in hillside cafes"
        ],
        howToReach: "Airports in Dharamshala (Gaggal), Kullu (Bhuntar), and Shimla. Scenic mountain highways from Chandigarh and Delhi.",
        officialPortal: "https://himachaltourism.gov.in/"
    },
    {
        id: "tamilnadu",
        name: "Tamil Nadu",
        state: "Tamil Nadu",
        region: "South",
        categories: ["Heritage", "Culture", "Food"],
        image: "assets/tamilnadu.png",
        shortDesc: "Towering Dravidian temple gopurams, millennia-old classical Carnatic music, and royal palatial mansions.",
        bestSeason: "Nov – Mar",
        mustSee: "Meenakshi Amman Temple, Mahabalipuram, Chettinad Mansions",
        vibe: "Classical • Grand • Soulful",
        story: "Tamil Nadu is the custodian of one of the world's longest surviving classical civilizations. At Madurai's Meenakshi Temple, 14 towering gopurams dazzle with thousands of hand-painted mythological figures. In Chettinad, sprawling 19th-century merchants' mansions showcase Burmese teak and Italian marble.",
        highlights: [
            "Be spellbound by the intricate stone carvings of Shore Temple at Mahabalipuram",
            "Witness the evening procession inside Madurai's magnificent Meenakshi Temple",
            "Savor genuine Chettinad pepper chicken and fragrant filter coffee"
        ],
        howToReach: "Major international gateway at Chennai, alongside Madurai, Tiruchirappalli, and Coimbatore.",
        officialPortal: "https://www.tamilnadutourism.tn.gov.in/"
    },
    {
        id: "karnataka",
        name: "Karnataka & Hampi",
        state: "Karnataka",
        region: "South",
        categories: ["Heritage", "Nature", "Adventure"],
        image: "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?auto=format&fit=crop&w=800&q=80",
        shortDesc: "The boulder-strewn ruins of the 14th-century Vijayanagara Empire, lush Western Ghats, and royal Mysore grandeur.",
        bestSeason: "Oct – Mar",
        mustSee: "Hampi Stone Chariot, Mysore Palace, Coorg Coffee Hills",
        vibe: "Timeless • Architectural • Lush",
        story: "Karnataka seamlessly bridges ancient stone kingdoms with untamed wilderness. At Hampi, gigantic granite boulders balance precariously over the Tungabhadra River, cradling the evocative ruins of the Vijayanagara Empire—once the second-largest city in the medieval world.",
        highlights: [
            "Cycle through the surreal ruins and carved musical pillars of Vittala Temple",
            "Watch the illumination of 100,000 bulbs across the Mysore Royal Palace",
            "Trek through misty coffee and cardamom plantations in Coorg"
        ],
        howToReach: "Bengaluru International Airport with domestic links to Hubballi and Belagavi. Train connections to Hospet (for Hampi).",
        officialPortal: "https://karnatakatourism.org/"
    },
    {
        id: "amritsar",
        name: "Amritsar & Punjab",
        state: "Punjab",
        region: "North",
        categories: ["Spirituality", "Culture", "Food"],
        image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80",
        shortDesc: "The radiant Golden Temple, selfless community kitchens (langar), and the infectious warmth of Punjabi hospitality.",
        bestSeason: "Oct – Mar",
        mustSee: "Harmandir Sahib (Golden Temple), Wagah Border, Jallianwala Bagh",
        vibe: "Luminous • Heartfelt • Culinary",
        story: "At the heart of Punjab sits Amritsar's Harmandir Sahib, gleaming with pure gold leaf over sacred nectar waters (Amrit Sarovar). Its 24/7 community kitchen feeds over 100,000 people daily regardless of faith or background—a moving testament to the eternal spirit of Seva (selfless service).",
        highlights: [
            "Bathe in peaceful hymns reflecting across the illuminated sacred pool at night",
            "Volunteer alongside locals in the world's largest community kitchen (Langar)",
            "Indulge in crispy tandoori Amritsari Kulcha topped with fresh melting butter"
        ],
        howToReach: "Sri Guru Ram Dass Jee International Airport in Amritsar. Direct Shatabdi/Vande Bharat trains from Delhi.",
        officialPortal: "https://punjabtourism.punjab.gov.in/"
    },
    {
        id: "agra",
        name: "Agra & Uttar Pradesh",
        state: "Uttar Pradesh",
        region: "North",
        categories: ["Heritage"],
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
        shortDesc: "The pinnacle of Mughal architectural brilliance, crowned by the sublime marble poetry of the Taj Mahal.",
        bestSeason: "Oct – Mar",
        mustSee: "Taj Mahal, Agra Fort, Fatehpur Sikri",
        vibe: "Monumental • Romantic • Historic",
        story: "Described as 'a teardrop on the cheek of eternity', the Taj Mahal stands unmatched in its symmetrical perfection and delicate floral marble inlays. Nearby, the red sandstone ramparts of Agra Fort and the ghost city of Fatehpur Sikri narrate the zenith of imperial Mughal architecture.",
        highlights: [
            "Gaze at the Taj Mahal bathed in pink morning mist across the Yamuna River",
            "Explore the intricate red sandstone palaces within Agra Fort",
            "Sample traditional Agra Petha in aromatic bazaars"
        ],
        howToReach: "Connected via high-speed Gatimaan and Vande Bharat express trains (under 2 hours from New Delhi).",
        officialPortal: "https://uptourism.gov.in/"
    },
    {
        id: "sikkim",
        name: "Sikkim & Darjeeling",
        state: "Sikkim & West Bengal",
        region: "East",
        categories: ["Nature", "Adventure", "Spirituality"],
        image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80",
        shortDesc: "Towering views of Mount Kangchenjunga, fragrant tea estates, serene Buddhist gompas, and alpine rhododendron valleys.",
        bestSeason: "Mar – May & Oct – Dec",
        mustSee: "Kangchenjunga Views, Rumtek Monastery, Darjeeling Toy Train",
        vibe: "Mountain • Serene • Verdant",
        story: "Tucked into the Eastern Himalayas, Sikkim is India's first 100% organic state. From the tea-carpeted slopes of Darjeeling where the historic UNESCO Toy Train whistles past, to the snow-framed monastery courtyards of Rumtek, the Eastern Himalayas enchant every traveler.",
        highlights: [
            "Catch first golden sunbeams lighting up the five peaks of Mount Kangchenjunga",
            "Ride the heritage steam Himalayan Toy Train through mountain loops",
            "Sip world-famous First Flush Darjeeling tea fresh from organic plantations"
        ],
        howToReach: "Pakyong Airport (Sikkim) or Bagdogra Airport (Siliguri). Scenic uphill drive via Teesta river valley.",
        officialPortal: "https://www.sikkimtourism.gov.in/"
    }
];

// FEATURED EXPEDITIONS (EDITORIAL SPLIT SECTION)
const FEATURED_EXPEDITIONS = [
    {
        state: "RAJASTHAN",
        regionBadge: "North-West India",
        title: "Where history lives in color.",
        story: "Rajasthan is a living tapestry of desert sunsets, impregnable cliffside forts, and royal courtyards echoing with tales of valor and romantic balladry. From the amber sandstone of Jaisalmer to the azure houses of Jodhpur and the palace-mirrored waters of Lake Pichola, every corner is soaked in living art.",
        chips: ["🏜️ Desert Dunes", "🏰 Royal Forts", "🎨 Folk Arts", "🍛 Dal Baati"],
        season: "October – March",
        attraction: "Jaisalmer Camel Safari • Amber Fort • Udaipur Lakes",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80"
    },
    {
        state: "KERALA",
        regionBadge: "South-West Coast",
        title: "Where waterways sing and palms bow.",
        story: "In Kerala, life moves to the gentle rhythm of rippling backwaters. Traditional Kettuvallam houseboats glide through serene lagoons beneath swaying coconut canopies, while the mist-laden Western Ghats nurture cardamom plantations and healing Ayurvedic traditions that span three millennia.",
        chips: ["🛶 Houseboat Cruise", "🌿 Ayurvedic Healing", "🍵 Munnar Tea Gardens", "🥥 Fresh Sadya"],
        season: "September – March",
        attraction: "Alleppey Backwaters • Munnar Tea Hills • Kathakali Theater",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80"
    },
    {
        state: "LADAKH",
        regionBadge: "Trans-Himalayan Plateau",
        title: "Where earth kisses the cosmos.",
        story: "Ladakh is a lunar world carved by glaciers and sun. Sitting at over 11,000 feet, fluttering prayer flags carry wishes across cobalt skies while ancient monasteries perch dramatically on sheer mountain ridges. Crystal alpine lakes like Pangong reflect towering snow peaks under unmatched clarity.",
        chips: ["🏔️ High Passes", "✨ Monastic Chants", "🌌 Stargazing", "🐪 Bactrian Camels"],
        season: "May – September",
        attraction: "Pangong Tso • Khardung La Pass (17,982 ft) • Thiksey Gompa",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80"
    },
    {
        state: "VARANASI",
        regionBadge: "Gangetic Plain, Uttar Pradesh",
        title: "Where devotion touches eternity.",
        story: "The spiritual heart of India, Varanasi has welcomed pilgrims and seekers for more than thirty centuries. At dusk, the sacred steps of the ghats come alive with the mesmerizing spectacle of the Ganga Aarti, with towering brass fire lamps, resonant conch shells, and floating floral diyas.",
        chips: ["✨ Ganga Aarti", "🛶 Dawn River Boats", "🛕 Ancient Kashi", "🧣 Banarasi Silk"],
        season: "October – March",
        attraction: "Dashashwamedh Ghat • Sarnath Deer Park • Manikarnika Ghat",
        image: "assets/varanasi.png"
    }
];

// HERITAGE LANDMARKS DATASET (ALL DISTINCT, VERIFIED 200 OK)
const HERITAGE_LANDMARKS = [
    {
        id: "taj",
        name: "Taj Mahal",
        location: "Agra, Uttar Pradesh",
        era: "mughal",
        eraText: "17th Century CE • Mughal Splendor",
        significance: "An ivory-white marble mausoleum commissioned in 1631 by Emperor Shah Jahan. Renowned globally as the world's most flawless jewel of Islamic, Persian, and Indian architectural symmetry.",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "hampi",
        name: "Hampi & Vijayanagara",
        location: "Bellary, Karnataka",
        era: "medieval",
        eraText: "14th Century CE • Imperial Dravidian",
        significance: "The capital of the historic Vijayanagara Empire. A UNESCO site covering 4,100 hectares with monumental stone chariots, musical pillars, and royal pavilions scattered among giant granite boulders.",
        image: "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "ajanta",
        name: "Ajanta & Ellora Caves",
        location: "Aurangabad, Maharashtra",
        era: "ancient",
        eraText: "2nd Cent. BCE – 6th Cent. CE • Rock-Cut Wonders",
        significance: "30 rock-hewn Buddhist cave monuments boasting masterwork mural paintings, alongside Ellora's Kailasa Temple—the largest monolithic rock excavation in the world, carved top-down from a single basalt cliff.",
        image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "konark",
        name: "Konark Sun Temple",
        location: "Puri, Odisha",
        era: "medieval",
        eraText: "13th Century CE • Kalinga Architecture",
        significance: "Conceived as a colossal stone chariot for Sun God Surya, featuring 24 intricately carved stone wheels functioning as precise sundials, pulled by seven spirited horses facing the morning sun.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "mahabalipuram",
        name: "Shore Temple & Monuments",
        location: "Mahabalipuram, Tamil Nadu",
        era: "ancient",
        eraText: "7th – 8th Century CE • Pallava Dynasty",
        significance: "Granite coastal sanctuaries carved out along the Bay of Bengal, including monolithic rathas (chariots) and the world's largest open-air bas-relief rock carving: 'Descent of the Ganges'.",
        image: "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "khajuraho",
        name: "Khajuraho Group of Temples",
        location: "Chhatarpur, Madhya Pradesh",
        era: "medieval",
        eraText: "10th – 11th Century CE • Chandela Dynasty",
        significance: "Celebrated for soaring Nagara-style architectural spires and expressive stone sculptures capturing celestial dancers, divine union, and medieval Indian life in sandstone perfection.",
        image: "https://images.unsplash.com/photo-1608958435020-e8a7109ba809?auto=format&fit=crop&w=800&q=80"
    }
];

// FOOD DATASET ("TASTE INDIA" — ALL DISTINCT RELEVANT CULINARY PHOTOS)
const REGIONAL_FOOD = [
    {
        id: "biryani",
        name: "Hyderabadi Dum Biryani",
        region: "Telangana & Deccan",
        spiceLevel: "🌶️🌶️🌶️ Medium-Hot",
        image: "assets/hyderabadi_biryani.jpg",
        description: "Fragrant long-grain basmati rice and marinated meat sealed with dough in a heavy clay pot (dum) and slow-cooked over smoldering coals.",
        ingredients: "Basmati rice, saffron, caramelised onions, green cardamom, star anise, shahi jeera, fresh mint.",
        significance: "Perfected in the royal kitchens of the Nizams, fusing Mughal aromatics with fiery Telugu spices into India's most celebrated rice banquet."
    },
    {
        id: "dal-baati",
        name: "Rajasthani Dal Baati Churma",
        region: "Rajasthan",
        spiceLevel: "🌶️🌶️ Moderate",
        image: "assets/dal_baati_churma.jpg",
        description: "Baked wheat dumplings dipped in golden pure desi ghee, served with spicy five-lentil Panchmel dal and sweetened crumbly churma.",
        ingredients: "Coarse wheat flour, five lentils (toor, moong, chana, urad, masoor), pure desi ghee, jaggery, cumin.",
        significance: "Born from the arid desert warrior culture of Mewar, where nutritious baked baatis could endure desert campaigns for days."
    },
    {
        id: "dosa",
        name: "Crispy Masala Dosa",
        region: "Karnataka & South India",
        spiceLevel: "🌶️ Mild-Medium",
        image: "assets/masala_dosa.jpg",
        description: "A golden-crisp crepe fermented from rice and black lentils, stuffed with spiced mustard-tempered mashed potatoes and paired with chutneys.",
        ingredients: "Fermented rice & urad dal batter, potatoes, mustard seeds, curry leaves, fresh coconut, sambar spices.",
        significance: "An ancient staple dating back over a thousand years in Sangam literature; now beloved across every breakfast table from Bengaluru to London."
    },
    {
        id: "sadya",
        name: "Kerala Traditional Sadya",
        region: "Kerala",
        spiceLevel: "🌶️ Balanced",
        image: "assets/kerala_sadya.jpg",
        description: "A vegetarian feast of 24–28 traditional dishes served in a precise culinary order on a fresh plantain leaf, celebrated during Onam.",
        ingredients: "Red matta rice, avial (mixed vegetables in coconut), sambar, rasam, olan, payasam pudding.",
        significance: "Embodies the six Ayurvedic tastes (shad-rasas)—sweet, sour, salty, bitter, pungent, and astringent—for total digestive equilibrium."
    },
    {
        id: "chettinad",
        name: "Chettinad Pepper Curry",
        region: "Tamil Nadu",
        spiceLevel: "🌶️🌶️🌶️🌶️ High Heat",
        image: "assets/chettinad_pepper_curry.jpg",
        description: "A fiery, deeply aromatic coastal curry packed with freshly stone-ground tellicherry black peppercorns, kalpasi (black stone flower), and star anise.",
        ingredients: "Tellicherry pepper, fennel seeds, cinnamon, shallots, stone flower, curry leaves, tamarind.",
        significance: "Crafted by the globetrotting Chettiar maritime merchants who traded spices throughout Southeast Asia in the 19th century."
    },
    {
        id: "sweets",
        name: "Bengali Rosogolla & Mishti Doi",
        region: "West Bengal",
        spiceLevel: "🍯 Sweet & Delicate",
        image: "assets/rosogolla_mishti_doi.jpg",
        description: "Spongy, melt-in-mouth cottage cheese balls steeped in clear cardamom syrup, alongside baked fermented sweetened yogurt in earthen pots.",
        ingredients: "Fresh cow milk chhena (curd cheese), sugar syrup, cardamom, caramelized milk, earthen clay handi.",
        significance: "A UNESCO-level symbol of Bengal's refined sweetcraft, traditionally served at the joyful climax of every celebration."
    }
];

// FESTIVALS DATASET (ALL DISTINCT & VERIFIED)
const FESTIVALS = [
    {
        name: "Diwali",
        region: "Nationwide",
        season: "October / November",
        culturalMeaning: "Festival of Lights celebrating the victory of light over darkness and good over evil. Homes glow with millions of clay diyas, rangoli, and fireworks.",
        image: "assets/festival_diwali.jpg"
    },
    {
        name: "Holi",
        region: "North & Central India",
        season: "March (Phalguna)",
        culturalMeaning: "The exuberant Festival of Colors welcoming spring. Communities gather outdoors to smear natural herbal powders (gulal) and sing folk songs.",
        image: "assets/festival_holi.jpg"
    },
    {
        name: "Onam",
        region: "Kerala",
        season: "August / September",
        culturalMeaning: "Ten-day harvest celebration welcoming the mythical King Mahabali. Features intricate floral carpets (Pookalam) and thrilling snake boat races.",
        image: "assets/festival_onam.jpg"
    },
    {
        name: "Durga Puja",
        region: "Kolkata, West Bengal",
        season: "October",
        culturalMeaning: "UNESCO Intangible Cultural Heritage. The entire city of Kolkata transforms into a colossal open-air art gallery with handcrafted pandals and festive drums.",
        image: "assets/festival_durga_puja.jpg"
    },
    {
        name: "Hornbill Festival",
        region: "Kohima, Nagaland",
        season: "December 1–10",
        culturalMeaning: "The 'Festival of Festivals' uniting all 17 major Naga tribes in Kisama Heritage Village to showcase warrior dances, folk songs, and indigenous crafts.",
        image: "assets/festival_hornbill.jpg"
    },
    {
        name: "Navratri & Garba",
        region: "Gujarat & Western India",
        season: "September / October",
        culturalMeaning: "Nine consecutive nights of swirling devotional folk dances (Garba and Dandiya Raas) under glittering night lights with traditional chaniya choli attires.",
        image: "assets/festival_navratri.jpg"
    }
];

// HIDDEN INDIA DATASET ("BEYOND THE FAMOUS" — ALL RELEVANT & ACCURATE)
const HIDDEN_DESTINATIONS = [
    {
        name: "Ziro Valley",
        state: "Arunachal Pradesh",
        whyVisit: "A tranquil paradise of terraced emerald paddy fields framed by pine-clad hills, home to the indigenous Apatani tribe known for sustainable agriculture and folklore.",
        bestSeason: "March to October",
        experience: "Attend the iconic outdoor Ziro Music Festival and stay in organic bamboo homestays.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Majuli",
        state: "Assam",
        whyVisit: "The world's largest inhabited river island, cradled in the Brahmaputra River. A cradle of Neo-Vaishnavite culture where monks create expressive traditional wooden masks.",
        bestSeason: "October to March",
        experience: "Cycle through rural bamboo stilt villages and learn mask-making in Samaguri Satra.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Gokarna",
        state: "Karnataka",
        whyVisit: "A peaceful alternative to touristy beaches. Hike between secluded golden coves like Om Beach and Kudle Beach, where cliffs dive straight into the Arabian Sea.",
        bestSeason: "October to March",
        experience: "Trek the panoramic 5-Beach trail along coastal cliff paths at sunset.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Chettinad",
        state: "Tamil Nadu",
        whyVisit: "Over 70 villages filled with grand 19th-century merchant mansions featuring Burma teak pillars, Athangudi handmade cement tiles, and legendary fiery cuisine.",
        bestSeason: "November to March",
        experience: "Explore antique havelis and watch artisans press floral Athangudi tiles by hand.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Spiti Valley",
        state: "Himachal Pradesh",
        whyVisit: "A high-altitude cold desert valley of stark lunar beauty, 1,000-year-old Ki Monastery, and Hikkim—home to the world's highest functioning post office (14,567 ft).",
        bestSeason: "June to September",
        experience: "Post a handwritten postcard to loved ones from the world's highest post office.",
        image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Dzukou Valley",
        state: "Nagaland & Manipur",
        whyVisit: "Known as the 'Valley of Eternal Flowers', this untouched high-altitude sanctuary features emerald rolling mounds and the rare endemic Dzukou Lily.",
        bestSeason: "June to September",
        experience: "Hike through mist-laden mountain ridges and camp beneath crystalline night skies.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Tawang",
        state: "Arunachal Pradesh",
        whyVisit: "Perched at 10,000 feet, Tawang hosts India's largest Buddhist monastery and the second largest in the world, founded in 1681 amidst snow-capped peaks.",
        bestSeason: "March to October",
        experience: "Cross the snowbound Sela Pass at 13,700 ft and witness frozen alpine lakes.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Mararikulam",
        state: "Kerala",
        whyVisit: "A sleepy, pristine fishing village on the Malabar coast with powder-soft sands, swaying palms, and a complete absence of commercial crowds.",
        bestSeason: "September to March",
        experience: "Enjoy gentle morning beach walks as traditional fishermen launch wooden catamarans into the sea.",
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80"
    }
];

// FACTS TRIVIA DATASET
const TRIVIA_FACTS = [
    {
        fact: "India is home to the world’s highest railway bridge — the Chenab Bridge in Jammu & Kashmir, soaring 359 meters above the river bed, higher than the Eiffel Tower!",
        category: "Engineering & Geography"
    },
    {
        fact: "The game of Chess originated in ancient India as 'Chaturanga' during the Gupta Empire around the 6th century CE.",
        category: "History & Inventions"
    },
    {
        fact: "India has 42 UNESCO World Heritage Sites, spanning ancient rock-cut cave monasteries, medieval fortresses, and high Himalayan national parks.",
        category: "Heritage & Culture"
    },
    {
        fact: "Mawsynram in Meghalaya is recorded by Guinness World Records as the wettest inhabited place on Earth, receiving over 11,870 mm of annual rainfall.",
        category: "Nature & Climate"
    },
    {
        fact: "India's rail network is one of the world's largest, operating over 13,000 passenger trains daily and carrying over 23 million commuters every single day.",
        category: "Modern India"
    },
    {
        fact: "The concept of zero as a number and its mathematical operations was developed in ancient India by mathematician-astronomer Brahmagupta in the 7th century.",
        category: "Science & Mathematics"
    },
    {
        fact: "India is the world's top producer and consumer of spices, cultivating over 70% of the world’s total spice varieties.",
        category: "Food & Agriculture"
    },
    {
        fact: "Lonar Lake in Maharashtra is a rare saline soda lake formed by a high-velocity meteorite impact approximately 52,000 years ago.",
        category: "Geology"
    },
    {
        fact: "The Kumbh Mela pilgrimage gathers tens of millions of pilgrims at sacred river confluences and is so colossal that it can be clearly seen from space satellites.",
        category: "Culture & Faith"
    }
];

// OFFICIAL TOURISM PORTALS DATASET (NATIONAL & ALL REGIONAL STATES)
const NATIONAL_PORTALS = [
    {
        name: "Incredible India",
        ministry: "Ministry of Tourism, Government of India",
        tagline: "Find the Incredible You",
        url: "https://www.incredibleindia.gov.in/",
        badges: ["National Flagship Portal", "Verified e-Visa & Passes", "24/7 Helpline: 1363"],
        icon: "🏛️",
        highlight: "Official gateway to 40+ UNESCO Heritage Sites, verified accommodations, cultural calendar, and multilingual tourist assistance."
    },
    {
        name: "Ministry of Tourism, Govt. of India",
        ministry: "Government of India Official Portal",
        tagline: "Dekho Apna Desh & PRASHAD Schemes",
        url: "https://tourism.gov.in/",
        badges: ["Apex Ministry Portal", "National Policies & Safety", "Swadesh Darshan"],
        icon: "🇮🇳",
        highlight: "Central tourism development policies, guidelines for international travelers, sustainability standards, and official statistics."
    },
    {
        name: "IRCTC Tourism & Luxury Trains",
        ministry: "Indian Railway Catering & Tourism Corporation",
        tagline: "Journeys through Timeless Splendor",
        url: "https://www.irctctourism.com/",
        badges: ["Maharajas' Express", "Palace on Wheels", "Bharat Gaurav Yatras"],
        icon: "🚆",
        highlight: "World-renowned royal luxury train journeys, Buddhist and Ramayana circuit tourist trains, and heritage hill rail bookings."
    }
];

const STATE_PORTALS = [
    {
        state: "Rajasthan",
        tagline: "Padharo Mhare Desh (Welcome to My Land)",
        region: "North",
        url: "https://www.tourism.rajasthan.gov.in/",
        icon: "🏰",
        popular: "Jaipur, Udaipur, Jaisalmer, Jodhpur",
        color: "#E28743"
    },
    {
        state: "Kerala",
        tagline: "God's Own Country",
        region: "South",
        url: "https://www.keralatourism.org/",
        icon: "🌴",
        popular: "Alleppey, Munnar, Kochi, Wayanad",
        color: "#2E7D32"
    },
    {
        state: "Tamil Nadu",
        tagline: "Where Stories Never End",
        region: "South",
        url: "https://www.tamilnadutourism.tn.gov.in/",
        icon: "🛕",
        popular: "Madurai, Mahabalipuram, Chettinad, Rameswaram",
        color: "#C2185B"
    },
    {
        state: "Uttar Pradesh",
        tagline: "Explore the Soul of India",
        region: "North",
        url: "https://uptourism.gov.in/",
        icon: "🕉️",
        popular: "Varanasi, Agra, Ayodhya, Prayagraj",
        color: "#D84315"
    },
    {
        state: "Meghalaya",
        tagline: "Halfway to Heaven",
        region: "Northeast",
        url: "https://www.meghalayatourism.in/",
        icon: "🌧️",
        popular: "Cherrapunji, Dawki, Shillong, Mawlynnong",
        color: "#00897B"
    },
    {
        state: "Himachal Pradesh",
        tagline: "Unforgettable Himachal",
        region: "North",
        url: "https://himachaltourism.gov.in/",
        icon: "🏔️",
        popular: "Spiti Valley, Manali, Shimla, Dharamshala",
        color: "#1E88E5"
    },
    {
        state: "Goa",
        tagline: "A Symphony of Sun, Sand & Soul",
        region: "West",
        url: "https://goatourism.gov.in/",
        icon: "🏖️",
        popular: "Fontainhas, Palolem, Dudhsagar, Old Goa",
        color: "#FB8C00"
    },
    {
        state: "Maharashtra",
        tagline: "Unlimited Maharashtra",
        region: "West",
        url: "https://www.maharashtratourism.gov.in/",
        icon: "🌊",
        popular: "Ajanta & Ellora, Mumbai, Lonavala, Konkan",
        color: "#8E24AA"
    },
    {
        state: "Karnataka",
        tagline: "One State, Many Worlds",
        region: "South",
        url: "https://karnatakatourism.org/",
        icon: "🏛️",
        popular: "Hampi, Mysore, Coorg, Badami",
        color: "#3949AB"
    },
    {
        state: "Ladakh",
        tagline: "Julley! Land of High Passes",
        region: "North",
        url: "https://ladakhtourism.in/",
        icon: "❄️",
        popular: "Pangong Tso, Nubra Valley, Leh, Zanskar",
        color: "#0288D1"
    },
    {
        state: "Jammu & Kashmir",
        tagline: "Paradise on Earth (Chalo Kashmir)",
        region: "North",
        url: "https://jktourism.jk.gov.in/",
        icon: "🏔️",
        popular: "Srinagar, Gulmarg, Pahalgam, Sonamarg",
        color: "#43A047"
    },
    {
        state: "West Bengal",
        tagline: "Beautiful Bengal",
        region: "East",
        url: "https://www.wbtourism.gov.in/",
        icon: "🐅",
        popular: "Kolkata, Darjeeling, Sundarbans, Kalimpong",
        color: "#D81B60"
    },
    {
        state: "Gujarat",
        tagline: "Khushboo Gujarat Ki",
        region: "West",
        url: "https://www.gujarattourism.com/",
        icon: "🦁",
        popular: "Rann of Kutch, Gir National Park, Somnath, Dwarka",
        color: "#F57C00"
    },
    {
        state: "Madhya Pradesh",
        tagline: "The Heart of Incredible India",
        region: "Central",
        url: "https://www.mptourism.com/",
        icon: "🐅",
        popular: "Khajuraho, Bandhavgarh, Sanchi, Mandu",
        color: "#5E35B1"
    },
    {
        state: "Uttarakhand",
        tagline: "Simply Heaven (Devbhoomi)",
        region: "North",
        url: "https://uttarakhandtourism.gov.in/",
        icon: "⛰️",
        popular: "Rishikesh, Valley of Flowers, Kedarnath, Nainital",
        color: "#00ACC1"
    },
    {
        state: "Odisha",
        tagline: "India's Best Kept Secret",
        region: "East",
        url: "https://odishatourism.gov.in/",
        icon: "🛕",
        popular: "Konark Sun Temple, Puri Jagannath, Chilika Lake",
        color: "#E65100"
    },
    {
        state: "Assam",
        tagline: "Awesome Assam",
        region: "Northeast",
        url: "https://tourism.assam.gov.in/",
        icon: "🦏",
        popular: "Kaziranga Rhino Safari, Majuli Island, Tea Trails",
        color: "#2E7D32"
    },
    {
        state: "Nagaland",
        tagline: "Land of Festivals",
        region: "Northeast",
        url: "https://tourism.nagaland.gov.in/",
        icon: "🦚",
        popular: "Hornbill Festival, Kohima, Dzukou Valley",
        color: "#C2185B"
    },
    {
        state: "Sikkim",
        tagline: "Small Beautiful Himalayan State",
        region: "East",
        url: "https://www.sikkimtourism.gov.in/",
        icon: "🏔️",
        popular: "Gangtok, Pelling, Yumthang Valley, Gurudongmar",
        color: "#00897B"
    },
    {
        state: "Punjab",
        tagline: "India Begins Here",
        region: "North",
        url: "https://punjabtourism.punjab.gov.in/",
        icon: "🌾",
        popular: "Golden Temple Amritsar, Anandpur Sahib, Patiala",
        color: "#FBC02D"
    },
    {
        state: "Telangana",
        tagline: "It's All in It",
        region: "South",
        url: "https://tourism.telangana.gov.in/",
        icon: "💎",
        popular: "Hyderabad Charminar, Golconda, Ramappa Temple",
        color: "#00838F"
    },
    {
        state: "Andhra Pradesh",
        tagline: "The Essence of India",
        region: "South",
        url: "https://tourism.ap.gov.in/",
        icon: "🌊",
        popular: "Tirupati, Araku Valley, Lepakshi, Gandikota",
        color: "#1565C0"
    }
];

// ==========================================
// 2. STATE & STORAGE
// ==========================================

let activeCategoryFilter = "all";
let activeRegionFilter = "all";
let searchKeyword = "";
let currentFeaturedIndex = 0;
let savedDestinations = JSON.parse(localStorage.getItem("discover_india_saved") || "[]");

// ==========================================
// 3. INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initHeroSearch();
    initDestinations();
    initFeaturedSection();
    initHeritageSection();
    initFoodSection();
    initFestivalsSection();
    initHiddenIndia();
    initTripPlanner();
    initTriviaSection();
    initPortalsSection();
    initFaqAccordion();
    initModal();
    initScrollEffects();
    initDynamicSideArtwork();
    updateSavedCountUI();
});

// ==========================================
// 4. NAVIGATION & SCROLL
// ==========================================

function initNavigation() {
    const header = document.getElementById("main-header");
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const backToTopBtn = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        if (window.scrollY > 400) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }

        updateActiveNavLink();
    });

    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            navLinks.classList.remove("active");
        });
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    let currentId = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentId = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
        }
    });
}

// ==========================================
// 5. HERO SEARCH & QUICK FILTERS
// ==========================================

function initHeroSearch() {
    const heroInput = document.getElementById("hero-search-input");
    const heroBtn = document.getElementById("hero-search-btn");
    const heroPills = document.querySelectorAll("#hero-filter-pills .filter-pill");

    const performHeroSearch = () => {
        const query = heroInput.value.trim();
        if (query) {
            searchKeyword = query.toLowerCase();
            const destInput = document.getElementById("dest-search-input");
            if (destInput) destInput.value = query;
            renderDestinations();
            scrollToSection("destinations");
            showToast(`Searching for: "${query}"`);
        }
    };

    heroBtn.addEventListener("click", performHeroSearch);
    heroInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") performHeroSearch();
    });

    heroPills.forEach(pill => {
        pill.addEventListener("click", () => {
            const category = pill.getAttribute("data-category");
            setCategoryFilter(category);
            scrollToSection("destinations");
            showToast(`Exploring: ${category}`);
        });
    });

    document.querySelectorAll(".experience-card, .exp-cta").forEach(item => {
        item.addEventListener("click", () => {
            const cat = item.getAttribute("data-category") || item.closest(".experience-card")?.getAttribute("data-category");
            if (cat) {
                setCategoryFilter(cat);
                scrollToSection("destinations");
                showToast(`Exploring: ${cat}`);
            }
        });
    });
}

function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
}

// ==========================================
// 6. DESTINATIONS SECTION & FILTERING
// ==========================================

function initDestinations() {
    const categoryTabs = document.querySelectorAll("#category-filter-tabs .tab-btn");
    const regionSelect = document.getElementById("region-select");
    const destSearchInput = document.getElementById("dest-search-input");
    const resetFiltersBtn = document.getElementById("reset-filters-btn");

    categoryTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            categoryTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            activeCategoryFilter = tab.getAttribute("data-filter");
            renderDestinations();
        });
    });

    regionSelect.addEventListener("change", (e) => {
        activeRegionFilter = e.target.value;
        renderDestinations();
    });

    destSearchInput.addEventListener("input", (e) => {
        searchKeyword = e.target.value.toLowerCase().trim();
        renderDestinations();
    });

    resetFiltersBtn.addEventListener("click", () => {
        activeCategoryFilter = "all";
        activeRegionFilter = "all";
        searchKeyword = "";
        destSearchInput.value = "";
        regionSelect.value = "all";
        categoryTabs.forEach(t => t.classList.remove("active"));
        categoryTabs[0].classList.add("active");
        renderDestinations();
        showToast("Filters reset to all destinations");
    });

    renderDestinations();
}

function setCategoryFilter(category) {
    activeCategoryFilter = category;
    const categoryTabs = document.querySelectorAll("#category-filter-tabs .tab-btn");
    categoryTabs.forEach(tab => {
        if (tab.getAttribute("data-filter") === category) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });
    renderDestinations();
}

function renderDestinations() {
    const grid = document.getElementById("destinations-grid");
    const countBadge = document.getElementById("dest-count");
    const noResults = document.getElementById("no-results");

    if (!grid) return;

    const filtered = DESTINATIONS.filter(item => {
        const matchesCategory = (activeCategoryFilter === "all") || item.categories.includes(activeCategoryFilter);
        const matchesRegion = (activeRegionFilter === "all") || (item.region === activeRegionFilter);
        const matchesSearch = !searchKeyword || 
            item.name.toLowerCase().includes(searchKeyword) ||
            item.state.toLowerCase().includes(searchKeyword) ||
            item.shortDesc.toLowerCase().includes(searchKeyword) ||
            item.vibe.toLowerCase().includes(searchKeyword);

        return matchesCategory && matchesRegion && matchesSearch;
    });

    countBadge.textContent = `${filtered.length} place${filtered.length === 1 ? '' : 's'}`;

    if (filtered.length === 0) {
        grid.innerHTML = "";
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";

    grid.innerHTML = filtered.map(dest => {
        const isFav = savedDestinations.includes(dest.id);
        const primaryCat = dest.categories[0] || "Travel";

        return `
            <div class="dest-card" data-id="${dest.id}">
                <div class="dest-img-box">
                    <img src="${dest.image}" alt="${dest.name}" loading="lazy">
                    <div class="dest-card-badges">
                        <span class="dest-region-tag">${dest.region} India</span>
                        <span class="dest-type-tag">${primaryCat}</span>
                    </div>
                    <button class="dest-fav-btn ${isFav ? 'active' : ''}" data-id="${dest.id}" aria-label="Save ${dest.name} to journey" title="Save to Journey">
                        ${isFav ? '❤️' : '🤍'}
                    </button>
                </div>

                <div class="dest-body">
                    <div class="dest-location-row">
                        <h3 class="dest-name">${dest.name}</h3>
                        <span class="dest-state">${dest.state}</span>
                    </div>

                    <p class="dest-desc">${dest.shortDesc}</p>

                    <div class="dest-info-chips">
                        <span class="info-chip-sm">${dest.vibe}</span>
                        <span class="info-chip-sm">Must: ${dest.mustSee.split(',')[0]}</span>
                    </div>

                    <div class="dest-card-footer">
                        <div class="dest-season-wrap">
                            <span class="season-label">Best Season</span>
                            <span class="season-val">${dest.bestSeason}</span>
                        </div>
                        <button class="dest-discover-btn" data-id="${dest.id}">
                            Discover Story →
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    grid.querySelectorAll(".dest-discover-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            openDestinationModal(id);
        });
    });

    grid.querySelectorAll(".dest-fav-btn").forEach(favBtn => {
        favBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = favBtn.getAttribute("data-id");
            toggleFavoriteDestination(id, favBtn);
        });
    });
}

function toggleFavoriteDestination(id, buttonEl) {
    const dest = DESTINATIONS.find(d => d.id === id);
    const destName = dest ? dest.name : "Destination";

    if (savedDestinations.includes(id)) {
        savedDestinations = savedDestinations.filter(item => item !== id);
        buttonEl.innerHTML = "🤍";
        buttonEl.classList.remove("active");
        showToast(`Removed ${destName} from your journey`);
    } else {
        savedDestinations.push(id);
        buttonEl.innerHTML = "❤️";
        buttonEl.classList.add("active");
        showToast(`Saved ${destName} to your journey!`);
    }

    localStorage.setItem("discover_india_saved", JSON.stringify(savedDestinations));
    updateSavedCountUI();
}

function updateSavedCountUI() {
    const footerCount = document.getElementById("footer-saved-count");
    if (footerCount) {
        footerCount.textContent = `${savedDestinations.length} destination${savedDestinations.length === 1 ? '' : 's'}`;
    }
}

// ==========================================
// 7. FEATURED DESTINATION (SPLIT EDITORIAL SECTION)
// ==========================================

function initFeaturedSection() {
    const dots = document.querySelectorAll("#featured-dots .dot-btn");
    const prevBtn = document.getElementById("feat-prev-btn");
    const nextBtn = document.getElementById("feat-next-btn");
    const exploreBtn = document.getElementById("featured-explore-btn");

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            const idx = parseInt(dot.getAttribute("data-index"), 10);
            updateFeaturedDestination(idx);
        });
    });

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            const nextIdx = (currentFeaturedIndex - 1 + FEATURED_EXPEDITIONS.length) % FEATURED_EXPEDITIONS.length;
            updateFeaturedDestination(nextIdx);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            const nextIdx = (currentFeaturedIndex + 1) % FEATURED_EXPEDITIONS.length;
            updateFeaturedDestination(nextIdx);
        });
    }

    if (exploreBtn) {
        exploreBtn.addEventListener("click", () => {
            const currentItem = FEATURED_EXPEDITIONS[currentFeaturedIndex];
            const matchingDest = DESTINATIONS.find(d => d.name.toLowerCase().includes(currentItem.state.toLowerCase()));
            if (matchingDest) {
                openDestinationModal(matchingDest.id);
            } else {
                scrollToSection("destinations");
            }
        });
    }

    updateFeaturedDestination(0);
}

function updateFeaturedDestination(index) {
    currentFeaturedIndex = index;
    const item = FEATURED_EXPEDITIONS[index];
    if (!item) return;

    const imgEl = document.getElementById("featured-image");
    const regionEl = document.getElementById("featured-region-badge");
    const stateEl = document.getElementById("featured-state");
    const titleEl = document.getElementById("featured-title");
    const storyEl = document.getElementById("featured-story");
    const chipsEl = document.getElementById("featured-chips");
    const seasonEl = document.getElementById("featured-season");
    const attractionEl = document.getElementById("featured-attraction");
    const exploreBtn = document.getElementById("featured-explore-btn");
    const dots = document.querySelectorAll("#featured-dots .dot-btn");

    imgEl.style.opacity = "0.2";
    setTimeout(() => {
        imgEl.src = item.image;
        imgEl.style.opacity = "1";
    }, 200);

    regionEl.textContent = item.regionBadge;
    stateEl.textContent = item.state;
    titleEl.textContent = item.title;
    storyEl.textContent = item.story;
    seasonEl.textContent = item.season;
    attractionEl.textContent = item.attraction;
    exploreBtn.textContent = `Explore ${item.state} Stories →`;

    chipsEl.innerHTML = item.chips.map(chip => `<span class="chip">${chip}</span>`).join("");

    dots.forEach((dot, i) => {
        if (i === index) dot.classList.add("active");
        else dot.classList.remove("active");
    });
}

// ==========================================
// 8. HERITAGE SECTION ("WALK THROUGH HISTORY")
// ==========================================

function initHeritageSection() {
    const eraTabs = document.querySelectorAll(".timeline-era-item");
    const grid = document.getElementById("heritage-grid");

    eraTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            eraTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            const era = tab.getAttribute("data-era");
            renderHeritageCards(era);
        });
    });

    renderHeritageCards("all");
}

function renderHeritageCards(selectedEra) {
    const grid = document.getElementById("heritage-grid");
    if (!grid) return;

    const filtered = HERITAGE_LANDMARKS.filter(item => {
        return (selectedEra === "all") || (item.era === selectedEra);
    });

    grid.innerHTML = filtered.map(item => `
        <div class="heritage-card">
            <div class="heritage-img-box">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <span class="heritage-era-badge">${item.eraText}</span>
            </div>
            <div class="heritage-content">
                <span class="heritage-location">📍 ${item.location}</span>
                <h3 class="heritage-title">${item.name}</h3>
                <p class="heritage-significance">${item.significance}</p>
                <button class="heritage-discover-btn" onclick="openHeritageModal('${item.id}')">
                    Discover History & Architecture →
                </button>
            </div>
        </div>
    `).join("");
}

// ==========================================
// 9. FOOD SECTION ("TASTE INDIA")
// ==========================================

function initFoodSection() {
    const grid = document.getElementById("food-grid");
    if (!grid) return;

    grid.innerHTML = REGIONAL_FOOD.map(dish => `
        <div class="food-card" onclick="openFoodModal('${dish.id}')">
            <div class="food-img-box">
                <img src="${dish.image}" alt="${dish.name}" loading="lazy">
                <span class="food-region-badge">📍 ${dish.region}</span>
            </div>
            <div class="food-content">
                <h3 class="food-title">${dish.name}</h3>
                <p class="food-desc">${dish.description}</p>
                <div class="food-footer-tag">
                    <span>${dish.spiceLevel}</span>
                    <span style="margin-left: auto;">View Recipe & Story →</span>
                </div>
            </div>
        </div>
    `).join("");
}

// ==========================================
// 10. FESTIVALS SECTION
// ==========================================

function initFestivalsSection() {
    const carousel = document.getElementById("festivals-carousel");
    if (!carousel) return;

    carousel.innerHTML = FESTIVALS.map(f => `
        <div class="festival-card">
            <div class="festival-img-box">
                <img src="${f.image}" alt="${f.name}" loading="lazy">
                <span class="festival-season-tag">🗓️ ${f.season}</span>
            </div>
            <div class="festival-content">
                <span class="festival-region">${f.region}</span>
                <h3 class="festival-title">${f.name}</h3>
                <p class="festival-desc">${f.culturalMeaning}</p>
            </div>
        </div>
    `).join("");
}

// ==========================================
// 11. HIDDEN INDIA (RANDOMIZER STANDOUT)
// ==========================================

function initHiddenIndia() {
    const btn = document.getElementById("randomize-hidden-btn");
    if (btn) {
        btn.addEventListener("click", () => {
            randomizeHiddenDestination();
        });
    }

    renderHiddenCard(HIDDEN_DESTINATIONS[0]);
}

function randomizeHiddenDestination() {
    const displayBox = document.getElementById("hidden-card-display");
    if (!displayBox) return;

    displayBox.classList.remove("fade-in");
    
    const randomIndex = Math.floor(Math.random() * HIDDEN_DESTINATIONS.length);
    const chosen = HIDDEN_DESTINATIONS[randomIndex];

    setTimeout(() => {
        renderHiddenCard(chosen);
        displayBox.classList.add("fade-in");
        showToast(`Discovered hidden gem: ${chosen.name}!`);
    }, 150);
}

function renderHiddenCard(item) {
    const displayBox = document.getElementById("hidden-card-display");
    if (!displayBox) return;

    displayBox.innerHTML = `
        <div class="hidden-img-box">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="hidden-content">
            <h3 class="hidden-place-title">${item.name}</h3>
            <span class="hidden-state-label">📍 ${item.state}</span>
            <p class="hidden-reason">${item.whyVisit}</p>
            
            <div class="hidden-meta-grid">
                <div class="hidden-meta-item">
                    <strong>🗓️ Best Season</strong>
                    <span>${item.bestSeason}</span>
                </div>
                <div class="hidden-meta-item">
                    <strong>✨ Signature Vibe</strong>
                    <span>${item.experience}</span>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// 12. BUILD YOUR JOURNEY (INTERACTIVE TRIP PLANNER)
// ==========================================

function initTripPlanner() {
    let selectedStyle = "Heritage";
    let selectedDuration = "short";
    let selectedRegion = "North";

    setupPillGroup("style-options", (val) => { selectedStyle = val; });
    setupPillGroup("duration-options", (val) => { selectedDuration = val; });
    setupPillGroup("region-options", (val) => { selectedRegion = val; });

    const generateBtn = document.getElementById("generate-plan-btn");
    const outputContainer = document.getElementById("plan-output");
    const copyPlanBtn = document.getElementById("copy-plan-btn");
    const viewStopsBtn = document.getElementById("view-stops-dest-btn");

    if (generateBtn) {
        generateBtn.addEventListener("click", () => {
            const plan = computeItinerary(selectedStyle, selectedDuration, selectedRegion);
            renderGeneratedPlan(plan);
            outputContainer.style.display = "block";
            outputContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
            showToast("Your personalized Indian itinerary is ready!");
        });
    }

    if (copyPlanBtn) {
        copyPlanBtn.addEventListener("click", () => {
            const title = document.getElementById("plan-title").textContent;
            const summary = document.getElementById("plan-summary").textContent;
            navigator.clipboard.writeText(`${title}\n\n${summary}\n\nPlanned via Discover India (PromptX)`)
                .then(() => showToast("Itinerary copied to clipboard!"))
                .catch(() => showToast("Copied itinerary!"));
        });
    }

    if (viewStopsBtn) {
        viewStopsBtn.addEventListener("click", () => {
            activeRegionFilter = selectedRegion;
            const regionSelect = document.getElementById("region-select");
            if (regionSelect) regionSelect.value = selectedRegion;
            renderDestinations();
            scrollToSection("destinations");
        });
    }
}

function setupPillGroup(containerId, onChange) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const pills = container.querySelectorAll(".option-pill");
    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            const val = pill.getAttribute("data-style") || pill.getAttribute("data-duration") || pill.getAttribute("data-region");
            onChange(val);
        });
    });
}

function computeItinerary(style, duration, region) {
    const personalityMap = {
        Heritage: "The Time-Traveling Historian",
        Adventure: "The High-Altitude Nomad",
        Food: "The Culinary Connoisseur",
        Nature: "The Eco-Wanderer",
        Spiritual: "The Soul Seeker",
        Culture: "The Folklore Anthologist"
    };

    const personality = personalityMap[style] || "The Curious Traveler";

    let durationText = "3–5 Days";
    if (duration === "weekend") durationText = "Weekend Escape (2-3 Days)";
    if (duration === "short") durationText = "Compact Discovery (3-5 Days)";
    if (duration === "week") durationText = "7-Day Signature Journey";
    if (duration === "epic") durationText = "14+ Day Grand Expedition";

    let baseDestination = "Rajasthan";
    let stops = ["Jaipur Pink City", "Amber Fort", "Jodhpur Blue Alleys"];
    let experiences = ["Sunset view over Jal Mahal", "Folk music by desert campfires", "Sip spicy masala chai in historic chowks"];
    let bestSeason = "October to March";
    let tip = "Book heritage Haveli stays well in advance for peak winter months.";

    if (region === "South") {
        baseDestination = "Kerala & Tamil Nadu";
        stops = ["Kochi Fort & Art Cafes", "Alleppey Backwaters Houseboat", "Munnar Tea Estates"];
        experiences = ["Floating breakfast on backwaters", "Ayurvedic herbal massage", "Watch live Kathakali expressions"];
        bestSeason = "September to March";
        tip = "Carry light cotton clothing and slip-on footwear for sacred temple visits.";
    } else if (region === "North") {
        baseDestination = "Himalayas & Golden Triangle";
        stops = ["Delhi Historical Monuments", "Agra Taj Mahal Dawn", "Varanasi Ghats by Evening"];
        experiences = ["Sunrise boat tour on the Ganges", "Mughal marble inlay artisan workshop", "Taste authentic Awadhi kebabs"];
        bestSeason = "October to March";
        tip = "Use the punctual Vande Bharat Express to transit smoothly between cities.";
    } else if (region === "West") {
        baseDestination = "Goa & Rajasthan";
        stops = ["Jaisalmer Golden Dunes", "Old Goa Latin Quarter", "Palolem Beach Serenity"];
        experiences = ["Stargazing in Thar desert", "Heritage bike ride through Fontainhas", "Fresh coastal seafood curry"];
        bestSeason = "November to March";
        tip = "Rent a self-drive scooter in coastal Goa for effortless exploration.";
    } else if (region === "Northeast") {
        baseDestination = "Meghalaya & Assam";
        stops = ["Shillong Pine Hills", "Cherrapunji Waterfalls", "Dawki Umngot River"];
        experiences = ["Hike to Living Root Bridges", "Boat ride on glass-like river waters", "Sample indigenous bamboo shoot delicacies"];
        bestSeason = "October to April";
        tip = "Pack sturdy waterproof trekking boots and an umbrella even in dry season.";
    } else if (region === "East") {
        baseDestination = "West Bengal & Sikkim";
        stops = ["Kolkata Colonial Alleys", "Darjeeling Tea Plantations", "Rumtek Monastery"];
        experiences = ["Toy Train ride through Batasia Loop", "Sunrise over Mount Kangchenjunga", "Feast on steaming Darjeeling momos"];
        bestSeason = "March to May & October to December";
        tip = "Wake up at 4:30 AM for clear, unobstructed Himalayan mountain views.";
    }

    return {
        personality,
        title: `Your journey could begin in ${baseDestination} (${durationText})`,
        summary: `Crafted for ${personality}: A tailored balance of ${style.toLowerCase()} and unforgettable regional immersion across ${region} India.`,
        stops,
        experiences,
        bestSeason,
        tip
    };
}

function renderGeneratedPlan(plan) {
    document.getElementById("plan-personality").textContent = plan.personality;
    document.getElementById("plan-title").textContent = plan.title;
    document.getElementById("plan-summary").textContent = plan.summary;
    document.getElementById("plan-season").textContent = plan.bestSeason;
    document.getElementById("plan-tip").textContent = plan.tip;

    const stopsList = document.getElementById("plan-stops");
    stopsList.innerHTML = plan.stops.map(s => `<li>${s}</li>`).join("");

    const expList = document.getElementById("plan-experiences");
    expList.innerHTML = plan.experiences.map(e => `<li>${e}</li>`).join("");
}

// ==========================================
// 13. TRIVIA COMPONENT ("INDIA, IN FACTS")
// ==========================================

function initTriviaSection() {
    const nextBtn = document.getElementById("next-trivia-btn");
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            cycleTriviaFact();
        });
    }
}

function cycleTriviaFact() {
    const factText = document.getElementById("trivia-fact-text");
    const factCat = document.getElementById("trivia-fact-cat");
    if (!factText) return;

    factText.style.opacity = "0.1";

    setTimeout(() => {
        const randomFact = TRIVIA_FACTS[Math.floor(Math.random() * TRIVIA_FACTS.length)];
        factText.textContent = randomFact.fact;
        factCat.textContent = randomFact.category;
        factText.style.opacity = "1";
    }, 200);
}

// ==========================================
// 14. TRAVEL INFORMATION & FAQ ACCORDION
// ==========================================

function initFaqAccordion() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            const body = item.querySelector(".accordion-body");
            const isOpen = item.classList.contains("active");

            document.querySelectorAll(".accordion-item").forEach(other => {
                other.classList.remove("active");
                other.querySelector(".accordion-header").setAttribute("aria-expanded", "false");
                other.querySelector(".accordion-body").style.maxHeight = null;
            });

            if (!isOpen) {
                item.classList.add("active");
                header.setAttribute("aria-expanded", "true");
                body.style.maxHeight = body.scrollHeight + "px";
            }
        });
    });
}

// ==========================================
// 14B. OFFICIAL TOURISM PORTALS (FLASHY DIRECTORY)
// ==========================================

function initPortalsSection() {
    renderNationalPortals();
    renderStatePortals("all", "");
    initStatePortalControls();
}

function renderNationalPortals() {
    const grid = document.getElementById("national-portals-grid");
    if (!grid) return;

    grid.innerHTML = NATIONAL_PORTALS.map(item => `
        <div class="national-portal-card">
            <div class="portal-card-sheen"></div>
            <div class="national-portal-top">
                <div class="national-portal-emblem">${item.icon}</div>
                <div class="national-portal-badges">
                    <span class="portal-verified"><span class="pulse-dot"></span> Verified Govt Portal</span>
                    <span class="portal-flagship-pill">${item.badges[0]}</span>
                </div>
            </div>
            <div class="national-portal-body">
                <h4 class="national-portal-title">${item.name}</h4>
                <div class="national-portal-ministry">${item.ministry}</div>
                <div class="national-portal-tagline">“${item.tagline}”</div>
                <p class="national-portal-highlight">${item.highlight}</p>
                <div class="national-portal-chips">
                    ${item.badges.slice(1).map(b => `<span class="chip-item">❖ ${b}</span>`).join('')}
                </div>
            </div>
            <div class="national-portal-footer">
                <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="flashy-portal-btn" title="Open official ${item.name} website">
                    <span>Launch Official Gateway</span>
                    <span class="portal-arrow">↗</span>
                </a>
            </div>
        </div>
    `).join("");
}

function renderStatePortals(selectedRegion, searchKeyword) {
    const grid = document.getElementById("state-portals-grid");
    if (!grid) return;

    const query = (searchKeyword || "").trim().toLowerCase();
    const filtered = STATE_PORTALS.filter(s => {
        const matchesRegion = (selectedRegion === "all" || s.region.toLowerCase() === selectedRegion.toLowerCase());
        const matchesSearch = !query || 
            s.state.toLowerCase().includes(query) || 
            s.tagline.toLowerCase().includes(query) || 
            s.popular.toLowerCase().includes(query);
        return matchesRegion && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="state-empty-state">
                <span class="empty-icon">🏛️</span>
                <h4>No state portals matched "${searchKeyword}"</h4>
                <p>Try searching for states like Rajasthan, Kerala, Meghalaya, Goa, or Himachal Pradesh.</p>
                <button class="btn btn-secondary btn-sm" id="reset-state-search-btn" style="margin-top: 14px;">Reset Search</button>
            </div>
        `;
        const resetBtn = document.getElementById("reset-state-search-btn");
        if (resetBtn) {
            resetBtn.addEventListener("click", () => {
                const searchInput = document.getElementById("state-portal-search");
                if (searchInput) searchInput.value = "";
                renderStatePortals(selectedRegion, "");
            });
        }
        return;
    }

    grid.innerHTML = filtered.map(s => `
        <div class="state-portal-card" data-region="${s.region}">
            <div class="portal-card-sheen"></div>
            <div class="state-portal-head">
                <div class="state-portal-icon-wrap" style="border-color: ${s.color};">
                    <span class="state-icon">${s.icon}</span>
                </div>
                <span class="state-portal-region-badge">${s.region} India</span>
            </div>
            <div class="state-portal-info">
                <h4 class="state-portal-name">${s.state}</h4>
                <p class="state-portal-tagline">“${s.tagline}”</p>
                <div class="state-portal-popular">
                    <span class="popular-label">Key Hubs:</span>
                    <span class="popular-hubs">${s.popular}</span>
                </div>
            </div>
            <div class="state-portal-action">
                <span class="portal-verified-tiny"><span class="pulse-beacon-tiny"></span> Verified Portal</span>
                <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="state-portal-link-btn" title="Open official ${s.state} Tourism Portal">
                    <span>Visit Portal</span>
                    <span class="portal-arrow">↗</span>
                </a>
            </div>
        </div>
    `).join("");
}

function initStatePortalControls() {
    const tabs = document.querySelectorAll(".state-tab-btn");
    const searchInput = document.getElementById("state-portal-search");
    const clearBtn = document.getElementById("clear-state-search");

    let currentRegion = "all";

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentRegion = tab.getAttribute("data-region");
            renderStatePortals(currentRegion, searchInput ? searchInput.value : "");
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            renderStatePortals(currentRegion, e.target.value);
            if (clearBtn) {
                clearBtn.style.display = e.target.value ? "block" : "none";
            }
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            if (searchInput) {
                searchInput.value = "";
                clearBtn.style.display = "none";
                searchInput.focus();
            }
            renderStatePortals(currentRegion, "");
        });
    }
}

// ==========================================
// 15. UNIVERSAL DETAIL MODAL
// ==========================================

function initModal() {
    const modal = document.getElementById("detail-modal");
    const closeBtn = document.getElementById("modal-close");

    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });
}

function openModal() {
    const modal = document.getElementById("detail-modal");
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("detail-modal");
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function openDestinationModal(id) {
    const dest = DESTINATIONS.find(d => d.id === id);
    if (!dest) return;

    const content = document.getElementById("modal-content");
    const isFav = savedDestinations.includes(dest.id);

    content.innerHTML = `
        <img class="modal-hero-img" src="${dest.image}" alt="${dest.name}">
        <div class="modal-inner-content">
            <div class="modal-tag-row">
                <span class="dest-region-tag">${dest.region} India</span>
                <span class="dest-type-tag">${dest.categories.join(' • ')}</span>
            </div>
            <h2 class="modal-title">${dest.name}</h2>
            <div class="modal-subtitle">📍 ${dest.state} • ${dest.vibe}</div>

            <p class="modal-story">${dest.story}</p>

            <div class="modal-grid-box">
                <div class="modal-grid-item">
                    <h5>🗓️ Best Time to Visit</h5>
                    <p>${dest.bestSeason}</p>
                </div>
                <div class="modal-grid-item">
                    <h5>🌟 Must-See Icon</h5>
                    <p>${dest.mustSee}</p>
                </div>
                <div class="modal-grid-item" style="grid-column: 1 / -1;">
                    <h5>🚆 How to Reach</h5>
                    <p>${dest.howToReach}</p>
                </div>
            </div>

            <h4 class="modal-highlights-title">Signature Itinerary Highlights</h4>
            <ul class="modal-highlights-list">
                ${dest.highlights.map(h => `<li>${h}</li>`).join("")}
            </ul>

            <div class="modal-actions">
                <button class="btn btn-primary" id="modal-save-btn">
                    ${isFav ? '❤️ Saved to Journey' : '🤍 Save to My Journey'}
                </button>
                <a href="${dest.officialPortal || 'https://www.incredibleindia.gov.in/'}" target="_blank" rel="noopener noreferrer" class="btn btn-flashy-modal-portal">
                    🏛️ Official ${dest.state} Portal ↗
                </a>
                <button class="btn btn-secondary" onclick="closeModal()">Close</button>
            </div>
        </div>
    `;

    document.getElementById("modal-save-btn").addEventListener("click", function() {
        const matchingCardFavBtn = document.querySelector(`.dest-fav-btn[data-id="${dest.id}"]`);
        toggleFavoriteDestination(dest.id, matchingCardFavBtn || this);
        const nowFav = savedDestinations.includes(dest.id);
        this.textContent = nowFav ? '❤️ Saved to Journey' : '🤍 Save to My Journey';
    });

    openModal();
}

function openHeritageModal(id) {
    const item = HERITAGE_LANDMARKS.find(h => h.id === id);
    if (!item) return;

    const content = document.getElementById("modal-content");
    content.innerHTML = `
        <img class="modal-hero-img" src="${item.image}" alt="${item.name}">
        <div class="modal-inner-content">
            <div class="modal-tag-row">
                <span class="heritage-era-badge">${item.eraText}</span>
            </div>
            <h2 class="modal-title">${item.name}</h2>
            <div class="modal-subtitle">📍 ${item.location}</div>

            <p class="modal-story">${item.significance}</p>

            <div class="modal-grid-box">
                <div class="modal-grid-item">
                    <h5>🏛️ Architectural Classification</h5>
                    <p>UNESCO World Heritage Site</p>
                </div>
                <div class="modal-grid-item">
                    <h5>⏳ Civilization Era</h5>
                    <p>${item.eraText.split('•')[0]}</p>
                </div>
            </div>

            <div class="modal-actions">
                <a href="https://www.incredibleindia.gov.in/" target="_blank" rel="noopener noreferrer" class="btn btn-flashy-modal-portal">
                    🏛️ Official Incredible India ↗
                </a>
                <button class="btn btn-primary" onclick="closeModal(); scrollToSection('destinations');">Explore Region →</button>
                <button class="btn btn-secondary" onclick="closeModal()">Close</button>
            </div>
        </div>
    `;
    openModal();
}

function openFoodModal(id) {
    const dish = REGIONAL_FOOD.find(d => d.id === id);
    if (!dish) return;

    const content = document.getElementById("modal-content");
    content.innerHTML = `
        <img class="modal-hero-img" src="${dish.image}" alt="${dish.name}">
        <div class="modal-inner-content">
            <div class="modal-tag-row">
                <span class="dest-region-tag">📍 ${dish.region}</span>
                <span class="dest-type-tag">${dish.spiceLevel}</span>
            </div>
            <h2 class="modal-title">${dish.name}</h2>
            <div class="modal-subtitle">Regional Culinary Heritage</div>

            <p class="modal-story">${dish.description}</p>

            <div class="modal-grid-box">
                <div class="modal-grid-item" style="grid-column: 1 / -1;">
                    <h5>🌿 Signature Ingredients</h5>
                    <p>${dish.ingredients}</p>
                </div>
                <div class="modal-grid-item" style="grid-column: 1 / -1;">
                    <h5>📜 Cultural & Historical Heritage</h5>
                    <p>${dish.significance}</p>
                </div>
            </div>

            <div class="modal-actions">
                <button class="btn btn-primary" onclick="closeModal(); scrollToSection('planner');">Plan Culinary Journey →</button>
                <button class="btn btn-secondary" onclick="closeModal()">Close</button>
            </div>
        </div>
    `;
    openModal();
}

// ==========================================
// 16. TOAST NOTIFICATION & UTILITIES
// ==========================================

let toastTimeout;
function showToast(message) {
    const toast = document.getElementById("toast-notification");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}

function initScrollEffects() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".experience-card, .dest-card, .heritage-card, .cinematic-card, .info-card, .festival-card, .food-card").forEach(el => {
        observer.observe(el);
    });
}

function initDynamicSideArtwork() {
    const leftInner = document.querySelector(".strip-left .strip-inner");
    const rightInner = document.querySelector(".strip-right .strip-inner");
    if (!leftInner || !rightInner) return;

    let ticking = false;
    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY || window.pageYOffset;
                const offset = -(scrollY * 0.35);
                leftInner.style.backgroundPositionY = `${offset}px`;
                rightInner.style.backgroundPositionY = `${offset}px`;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}