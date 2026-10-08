# 🇮🇳 DISCOVER INDIA — Every Journey Tells a Story
> **PromptX Hackathon Showcase Submission**  
> *A premium, interactive digital journey through India's living heritage, diverse landscapes, royal cuisines, colorful festivals, and hidden sanctuaries.*

---

## 🌟 Executive Summary & Concept

**Discover India** is not a generic travel listing portal. It is an editorial, cinematic, and interactive discovery platform built around the philosophy that **India is not simply a destination — it is a collection of thousands of stories, cultures, landscapes, flavors, traditions, and experiences.**

The experience guides travelers seamlessly through:
$$\text{Explore} \longrightarrow \text{Discover} \longrightarrow \text{Experience} \longrightarrow \text{Plan}$$

Designed to immediately captivate judges within the first 10 seconds through cinematic visuals, elegant Indian color harmonies, glassmorphic interactions, and deeply useful travel intelligence.

---

## 🎨 Design System & Visual Identity

* **Primary Palette**: 
  - **Deep Saffron** (`#E86014`, `#FF7E36`) — Vibrancy, warmth, and vitality
  - **Royal Navy & Indigo** (`#080E21`, `#0E1736`, `#152249`) — Regal heritage and modern sophistication
  - **Warm Ivory & Cream** (`#FBF9F5`, `#FAF6F0`) — Clean editorial readability
* **Supporting Indian Tones**:
  - **Terracotta** (`#C85A32`) — Earthen architecture and temple stone
  - **Forest Green** (`#1E4D2B`) — Western Ghats and tropical backwaters
  - **Antique Gold** (`#D4AF37`) — Celestial brass lamps, royal borders, and accents
* **Typography**:
  - Titles & Brand: **Cinzel** & **Playfair Display** (majestic, timeless, editorial)
  - UI & Body: **Plus Jakarta Sans** (ultra-clean, highly legible, modern)
* **Micro-Details**: Glassmorphic frosted panels (`backdrop-filter: blur(16px)`), subtle card elevation, hover zoom transforms, floating toast notifications, and zero clutter.

---

## 🚀 Key Features & Interactive Innovations

### 1. 🧭 Fullscreen Cinematic Hero & Floating Exploration Panel
- High-resolution atmospheric background with gradient lighting.
- **Floating Glassmorphic Search**: Real-time keyword filter input synced directly with the destination engine.
- **Instant Vibe Pills**: Quick one-click filters (🏛️ Heritage, 🌿 Nature, 🍛 Food, 🎭 Culture, 🏔️ Adventure, ✨ Spirituality) that scroll and apply dynamic filters without page reloads.

### 2. 🏛️ "One Country. A Thousand Experiences." (Section 4)
- 6 curated experience cards representing India's multifaceted identity.
- Hover animations with category badges and instant deep-linking into the destination filter engine.

### 3. 🗺️ Dynamic Destination Explorer (Section 5)
- **12+ Curated Destinations**: Spanning North, South, East, West, Central, and Northeast India.
- **Multi-Dimensional Filters**:
  - Category tabs (`All`, `Heritage`, `Nature`, `Food`, `Adventure`, `Culture`, `Spirituality`)
  - Regional selector (`North`, `South`, `West`, `East`, `Northeast`)
  - Real-time search query matching state, name, vibe, and attractions
  - Dynamic count badge (`X places found`)
- **Interactive Story Modals**: Detailed popups containing signature itinerary highlights, best visiting windows, and transport guidelines.
- **Journey Bookmark System**: Save destinations with local storage persistence (`❤️ Saved in Journey`).

### 4. 📰 Featured Destination Expedition (Editorial Split Section)
- High-fashion magazine layout featuring deep storytelling on **Rajasthan**, **Kerala**, **Ladakh**, and **Varanasi**.
- Dynamic tab switcher (`1`, `2`, `3`, `4`) and next/previous arrows with smooth image and text transitions.
- Key chips, best season, and must-experience recommendations.

### 5. ⏳ "Walk Through History" Heritage Timeline (Section 7)
- Filterable era tabs: *Ancient Civilizations (300 BCE–600 CE)*, *Medieval Dynasties (700–1500 CE)*, and *Mughal Splendor (1500–1800 CE)*.
- Features Taj Mahal, Hampi Vijayanagara, Ajanta & Ellora, Konark Sun Temple, Mahabalipuram Shore Temple, and Khajuraho.

### 6. 🍛 "Taste India" Regional Food Explorer (Section 8)
- *"Your itinerary can be planned around food. We won't judge."*
- Interactive regional dishes: Hyderabadi Dum Biryani, Rajasthani Dal Baati Churma, Masala Dosa, Kerala Traditional Sadya, Chettinad Pepper Curry, Bengali Rosogolla & Mishti Doi.
- Clickable modal deep-dives detailing signature ingredients, spice levels, and cultural significance.

### 7. 🎭 "India Celebrates Differently" Festivals Showcase (Section 9)
- Celebrates Diwali, Holi, Onam, Durga Puja, Nagaland's Hornbill Festival, and Navratri Garba with seasonality and cultural meaning.

### 8. 💎 "Beyond the Famous" Hidden India Randomizer (Section 10)
- Standout hackathon feature: Highlights off-beat destinations (Ziro Valley, Majuli, Gokarna, Chettinad, Spiti Valley, Dzukou Valley, Tawang, Mararikulam).
- **✨ Discover a Hidden Destination Button**: Smooth JavaScript randomizer that shuffles and showcases off-the-beaten-path gems with custom travel recommendations.

### 9. 🎒 "Build Your Indian Journey" Interactive Trip Planner (Section 11)
- Interactive 3-step recommendation engine:
  1. Travel Philosophy (Heritage, Adventure, Food, Nature, Spiritual, Culture)
  2. Duration (Weekend, 3–5 Days, 1 Week, 2+ Weeks)
  3. Region (North, South, West, East, Northeast)
- Outputs custom itinerary title, traveler personality badge (*e.g., "The Time-Traveling Historian"*), recommended route stops, signature highlights, and a **"Copy Itinerary"** button.

### 10. 💡 "India, in Facts" Trivia Component (Section 15)
- Interactive trivia box with a dynamic randomizer cycling through verified facts on engineering, mathematics, heritage, and geography.

### 11. 🛂 "Before You Go" Travel Guide & Expandable FAQ (Section 13)
- Practical advice cards covering seasons, UPI digital payments for foreign travelers, Indian Railways & Vande Bharat transit, authentic stays, and cultural etiquette.
- Accessible, animated FAQ accordion answering top tourist questions.

---

## 🛠️ Technology Stack & Architecture

- **Structure**: Semantic HTML5 with complete ARIA compliance and SEO tags.
- **Styling**: Vanilla CSS3 with CSS Custom Properties, flexbox, CSS grid, glassmorphism (`backdrop-filter`), and responsive media queries.
- **Logic**: Vanilla ES6+ JavaScript, modular architecture, zero heavy external library dependencies.
- **Performance**: Instant load times, image error fallbacks, lightweight memory footprint.

---

## 📱 Responsiveness

Fully tested across all viewport standard breakpoints:
- **Mobile Phones** (360px – 480px)
- **Tablets** (768px – 1024px)
- **Desktops & Laptops** (1200px – 1920px+)
- Features sliding mobile navigation drawer, fluid typography using `clamp()`, and zero horizontal overflow.

---

## 🚀 How to Run Locally

Because this project is built using pure web standards, you can run it with any static web server:

```bash
# Option 1: Python
python -m http.server 5173

# Option 2: Node.js (npx)
npx serve .

# Option 3: Simply open index.html directly in any modern browser!
```

Open your browser at `http://localhost:5173`.

---

**Crafted with ❤️ for Incredible India 🇮🇳 | PromptX 2026**
