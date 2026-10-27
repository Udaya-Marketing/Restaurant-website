import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "public", "images");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// 1. Plated South Indian Dish SVG Generator
function generateSouthIndianDish({
  title,
  sub,
  plateStyle = "banana-leaf", // "banana-leaf" | "brass" | "clay-pot"
  primaryColor = "#D46213",
  secondaryColor = "#C5A059",
  leafGreen = "#1E4A32",
  gheeGlow = true,
}) {
  const isLeaf = plateStyle === "banana-leaf";
  const isBrass = plateStyle === "brass";
  const isClay = plateStyle === "clay-pot";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600" fill="none">
    <defs>
      <radialGradient id="shadowGlow" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stop-color="#000000" stop-opacity="0.45"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#347854"/>
        <stop offset="50%" stop-color="${leafGreen}"/>
        <stop offset="100%" stop-color="#143622"/>
      </linearGradient>
      <radialGradient id="brassGrad" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stop-color="#F3DC9B"/>
        <stop offset="45%" stop-color="#C5A059"/>
        <stop offset="85%" stop-color="#805C22"/>
        <stop offset="100%" stop-color="#462E0E"/>
      </radialGradient>
      <radialGradient id="clayGrad" cx="45%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#A75438"/>
        <stop offset="60%" stop-color="#73321F"/>
        <stop offset="100%" stop-color="#3C160B"/>
      </radialGradient>
      <radialGradient id="gheeSheen" cx="50%" cy="45%" r="40%">
        <stop offset="0%" stop-color="#FFDD78" stop-opacity="0.9"/>
        <stop offset="60%" stop-color="${primaryColor}" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </radialGradient>
      <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>

    <!-- Outer shadow -->
    <ellipse cx="300" cy="325" rx="260" ry="240" fill="url(#shadowGlow)"/>

    ${
      isLeaf
        ? `<!-- Fresh Tender Banana Leaf Base Cut -->
    <path d="M 90 280 C 100 140, 220 70, 390 80 C 500 85, 530 190, 520 330 C 510 460, 390 520, 230 515 C 120 510, 80 410, 90 280 Z" 
          fill="url(#leafGrad)" stroke="#529B72" stroke-width="2"/>
    <!-- Central leaf midrib -->
    <path d="M 120 290 Q 300 295 500 300" stroke="#7DC49A" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
    <!-- Leaf veins -->
    <path d="M 180 292 Q 220 220 270 170 M 260 294 Q 310 210 370 160 M 340 296 Q 400 220 460 170" stroke="#7DC49A" stroke-width="1.2" opacity="0.4"/>
    <path d="M 190 292 Q 230 370 280 430 M 270 294 Q 320 380 380 440 M 350 296 Q 410 380 470 430" stroke="#7DC49A" stroke-width="1.2" opacity="0.4"/>`
        : isBrass
        ? `<!-- Polished Brass Thali Plate -->
    <circle cx="300" cy="300" r="240" fill="url(#brassGrad)" stroke="#FCECC2" stroke-width="3"/>
    <circle cx="300" cy="300" r="236" fill="none" stroke="#6C4A16" stroke-width="1" stroke-dasharray="4 6"/>
    <circle cx="300" cy="300" r="185" fill="#2E1B09" stroke="#9E7635" stroke-width="2"/>`
        : `<!-- Traditional Clay Pot (Mann Paanai) -->
    <circle cx="300" cy="300" r="230" fill="url(#clayGrad)" stroke="#B8664B" stroke-width="3"/>
    <circle cx="300" cy="300" r="180" fill="#200B05" stroke="#501F10" stroke-width="2"/>`
    }

    <!-- Food Content / Dish Center -->
    ${
      gheeGlow
        ? `<ellipse cx="300" cy="300" rx="140" ry="120" fill="url(#gheeSheen)"/>`
        : ``
    }

    <!-- Dish Graphic Elements -->
    <g transform="translate(160, 160)">
      <!-- Central Specialty Artwork -->
      <circle cx="140" cy="140" r="105" fill="${primaryColor}" fill-opacity="0.25"/>
      
      <!-- Steaming Food Shapes -->
      <ellipse cx="140" cy="140" rx="85" ry="70" fill="${primaryColor}" stroke="${secondaryColor}" stroke-width="2.5" filter="url(#softGlow)"/>
      <ellipse cx="120" cy="125" rx="40" ry="32" fill="#FFFFFF" fill-opacity="0.15"/>

      <!-- Fresh Curry Leaves & Podi Tempered Dots -->
      <circle cx="105" cy="115" r="4" fill="#1C3826"/>
      <circle cx="170" cy="130" r="3.5" fill="#1C3826"/>
      <circle cx="145" cy="165" r="4" fill="#1C3826"/>
      <circle cx="125" cy="155" r="3" fill="#D46213"/>
      <circle cx="160" cy="105" r="3" fill="#D46213"/>
      <circle cx="180" cy="150" r="2.5" fill="#D46213"/>
      <circle cx="110" cy="140" r="2.5" fill="#FCECC2"/>
      <circle cx="140" cy="120" r="2.5" fill="#FCECC2"/>

      <!-- Curry Leaf Sprig -->
      <path d="M 125 150 C 135 130, 155 125, 170 120 C 160 135, 145 145, 125 150 Z" fill="#245A3A" stroke="#488862" stroke-width="1"/>
      <path d="M 140 160 C 150 145, 170 140, 185 142 C 172 155, 155 160, 140 160 Z" fill="#1E4D31" stroke="#3D7553" stroke-width="1"/>
    </g>

    <!-- Dish Title Plaque -->
    <g transform="translate(300, 520)">
      <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#18110B" fill-opacity="0.88" stroke="#C5A059" stroke-width="1.2"/>
      <text x="0" y="-1" text-anchor="middle" font-family="Georgia, serif" font-size="13" font-weight="bold" fill="#FAF7F2" letter-spacing="1">
        ${title.toUpperCase()}
      </text>
      <text x="0" y="12" text-anchor="middle" font-family="'Noto Serif Tamil', Georgia, serif" font-size="10" fill="#C5A059">
        ${sub}
      </text>
    </g>
  </svg>`;
}

// 2. Generate all individual dishes
const dishesToGenerate = [
  { file: "dish-ghee-podi-idli.svg", title: "Ghee Podi Idli", sub: "நெய் பொடி மினி இட்லி", plateStyle: "banana-leaf", primaryColor: "#D46213" },
  { file: "dish-chettinad-pepper-chicken.svg", title: "Chettinad Pepper Chicken", sub: "செட்டிநாடு மிளகு கோழி", plateStyle: "clay-pot", primaryColor: "#7A2E12" },
  { file: "dish-banana-leaf-sappadu.svg", title: "Banana Leaf Sappadu", sub: "பாரம்பரிய வாழை இலை விருந்து", plateStyle: "banana-leaf", primaryColor: "#2F5D3E" },
  { file: "dish-madurai-kari-dosai.svg", title: "Madurai Kari Dosai", sub: "மதுரை மட்டன் கறி தோசை", plateStyle: "banana-leaf", primaryColor: "#B85418" },
  { file: "dish-ven-pongal.svg", title: "Ven Pongal & Vada", sub: "வெண் பொங்கல் & மேது வடை", plateStyle: "banana-leaf", primaryColor: "#E09E38" },
  { file: "dish-kuzhi-paniyaram.svg", title: "Kuzhi Paniyaram", sub: "கார குழி பணியாரம்", plateStyle: "banana-leaf", primaryColor: "#C96D29" },
  { file: "dish-podi-dosai.svg", title: "Crispy Podi Dosai", sub: "நெய் பொடி தோசை", plateStyle: "banana-leaf", primaryColor: "#D46213" },
  { file: "dish-set-dosa-vada-curry.svg", title: "Set Dosa & Vada Curry", sub: "செட் தோசை & வடகறி", plateStyle: "banana-leaf", primaryColor: "#C2621C" },
  { file: "dish-chettinad-nonveg-meals.svg", title: "Chettinad Non-Veg Sappadu", sub: "அசைவ வாழை இலை விருந்து", plateStyle: "banana-leaf", primaryColor: "#8E3615" },
  { file: "dish-curd-rice.svg", title: "Curd Rice & Pickle", sub: "தயிர் சாதம் & வடு மாங்காய்", plateStyle: "clay-pot", primaryColor: "#ECE8DD" },
  { file: "dish-chettinad-kozhi-kuzhambu.svg", title: "Chettinad Kozhi Kuzhambu", sub: "நாட்டுக் கோழி குழம்பு", plateStyle: "clay-pot", primaryColor: "#933816" },
  { file: "dish-mutton-chukka.svg", title: "Mutton Chukka", sub: "மட்டன் சுக்கா வறுவல்", plateStyle: "clay-pot", primaryColor: "#672510" },
  { file: "dish-meen-varuval.svg", title: "Karaikudi Meen Varuval", sub: "காரைக்குடி மீன் வறுவல்", plateStyle: "banana-leaf", primaryColor: "#A6471E" },
  { file: "dish-nandu-masala.svg", title: "Chettinad Nandu Masala", sub: "செட்டிநாடு நண்டு மசாலா", plateStyle: "clay-pot", primaryColor: "#993618" },
  { file: "dish-kothu-parotta.svg", title: "Chicken Kothu Parotta", sub: "கோழி கொத்து பரோட்டா", plateStyle: "banana-leaf", primaryColor: "#B5561E" },
  { file: "dish-kothu-mutton.svg", title: "Mutton Kothu Parotta", sub: "மட்டன் கொத்து பரோட்டா", plateStyle: "banana-leaf", primaryColor: "#863314" },
  { file: "dish-veechu-parotta.svg", title: "Veechu Parotta & Salna", sub: "வீச்சு பரோட்டா & சால்னா", plateStyle: "banana-leaf", primaryColor: "#C8762F" },
  { file: "dish-bun-parotta.svg", title: "Madurai Bun Parotta", sub: "மதுரை பன் பரோட்டா", plateStyle: "banana-leaf", primaryColor: "#D68E3D" },
  { file: "dish-egg-kalakki.svg", title: "Madurai Egg Kalakki", sub: "முட்டை கலக்கி", plateStyle: "banana-leaf", primaryColor: "#DF9329" },
  { file: "dish-ambur-biryani.svg", title: "Ambur Mutton Biryani", sub: "ஆம்பூர் மட்டன் பிரியாணி", plateStyle: "brass", primaryColor: "#A6541D" },
  { file: "dish-dindigul-biryani.svg", title: "Dindigul Chicken Biryani", sub: "திண்டுக்கல் கோழி பிரியாணி", plateStyle: "brass", primaryColor: "#8C4318" },
  { file: "dish-kathirikai-kothsu.svg", title: "Kathirikai Kothsu", sub: "எண்ணெய் கத்தரிக்காய் கொத்சு", plateStyle: "clay-pot", primaryColor: "#592128" },
  { file: "dish-elaneer-payasam.svg", title: "Elaneer Payasam", sub: "இளநீர் பாயாசம்", plateStyle: "brass", primaryColor: "#F5EFE4" },
  { file: "dish-kesari.svg", title: "Ghee Rava Kesari", sub: "நெய் ரவா கேசரி", plateStyle: "brass", primaryColor: "#EAA024" },
  { file: "dish-mysore-pak.svg", title: "Ghee Mysore Pak", sub: "நெய் மைசூர் பாக்", plateStyle: "brass", primaryColor: "#DE9928" },
  { file: "dish-jigarthanda.svg", title: "Madurai Jigarthanda", sub: "ஸ்பெஷல் ஜிகர்தண்டா", plateStyle: "brass", primaryColor: "#C76F32" },
  { file: "dish-filter-kaapi.svg", title: "Degree Filter Kaapi", sub: "கும்பகோணம் டிகிரி காபி", plateStyle: "brass", primaryColor: "#61381B" },
  { file: "dish-paneer-soda.svg", title: "Rose Paneer Soda", sub: "பன்னீர் சோடா", plateStyle: "brass", primaryColor: "#C9456B" },
  { file: "dish-nannari-sarbath.svg", title: "Madurai Nannari Sarbath", sub: "நன்னாரி சர்பத்", plateStyle: "brass", primaryColor: "#BD571F" },
  { file: "dish-sukku-malli.svg", title: "Sukku Malli Coffee", sub: "சுக்கு மல்லி காபி", plateStyle: "clay-pot", primaryColor: "#6B3B18" },
  // Hero & CTA assets
  { file: "hero-dish.svg", title: "Grand Banana Leaf Feast", sub: "அன்னம் அரச வாழை இலை விருந்து", plateStyle: "banana-leaf", primaryColor: "#D46213" },
  { file: "cta-dish-left.svg", title: "Ghee Podi Dosa", sub: "காரசார நெய் பொடி தோசை", plateStyle: "banana-leaf", primaryColor: "#D46213" },
  { file: "cta-dish-right.svg", title: "Kumbakonam Filter Kaapi", sub: "டிகிரி பில்டர் காபி", plateStyle: "brass", primaryColor: "#C5A059" },
  { file: "reservation-dish.svg", title: "Chettinad Special Roast", sub: "செட்டிநாடு வறுவல்", plateStyle: "clay-pot", primaryColor: "#9E3C18" },
];

for (const d of dishesToGenerate) {
  const content = generateSouthIndianDish(d);
  fs.writeFileSync(path.join(dir, d.file), content, "utf8");
}

// 3. Generate Inline Small Icons
function generateInlineSvg(symbolType) {
  if (symbolType === "stone-grinder") {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="48" fill="#18110B"/>
      <ellipse cx="50" cy="52" rx="36" ry="24" fill="#3D3228" stroke="#8E7860" stroke-width="2"/>
      <ellipse cx="50" cy="46" rx="22" ry="12" fill="#6A5A4A"/>
      <circle cx="50" cy="46" r="6" fill="#D46213"/>
    </svg>`;
  }
  if (symbolType === "banana-leaf") {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="48" fill="#122B1E"/>
      <path d="M 20 50 C 25 30, 45 20, 75 22 C 85 45, 80 75, 45 78 C 25 76, 20 60, 20 50 Z" fill="#2E6B45" stroke="#5DAA79" stroke-width="2"/>
      <path d="M 24 50 Q 50 50 72 50" stroke="#8BD1A4" stroke-width="2"/>
    </svg>`;
  }
  if (symbolType === "filter-kaapi") {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="48" fill="#18110B"/>
      <!-- Davarah -->
      <ellipse cx="50" cy="65" rx="34" ry="14" fill="#C5A059" stroke="#EAD498" stroke-width="2"/>
      <!-- Tumbler -->
      <path d="M 38 32 L 42 62 L 58 62 L 62 32 Z" fill="#DDB66B" stroke="#FCECC2" stroke-width="2"/>
      <ellipse cx="50" cy="32" rx="12" ry="4" fill="#5A3215"/>
      <!-- Foam -->
      <ellipse cx="50" cy="31" rx="10" ry="3" fill="#FFF2DC"/>
    </svg>`;
  }
  return "";
}

fs.writeFileSync(path.join(dir, "inline-stone-grinder.svg"), generateInlineSvg("stone-grinder"));
fs.writeFileSync(path.join(dir, "inline-forage.svg"), generateInlineSvg("banana-leaf"));
fs.writeFileSync(path.join(dir, "inline-filter-kaapi.svg"), generateInlineSvg("filter-kaapi"));

// 4. Generate Floating Ingredients (Curry Leaf, Star Anise, Cardamom, Red Chilli, Pepper, Coconut)
function generateIngredient(type) {
  if (type === "curry-leaf") {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
      <path d="M 40 100 C 60 40, 140 40, 160 100 C 140 160, 60 160, 40 100 Z" fill="#245A38" stroke="#4DA36E" stroke-width="3"/>
      <path d="M 45 100 Q 100 100 155 100" stroke="#7DC49A" stroke-width="2.5"/>
      <path d="M 70 100 Q 90 70 115 55 M 100 100 Q 120 70 145 60" stroke="#7DC49A" stroke-width="1.5"/>
      <path d="M 70 100 Q 90 130 115 145 M 100 100 Q 120 130 145 140" stroke="#7DC49A" stroke-width="1.5"/>
    </svg>`;
  }
  if (type === "star-anise") {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
      <g transform="translate(100, 100)">
        ${[0, 45, 90, 135, 180, 225, 270, 315].map(deg => `
          <g transform="rotate(${deg})">
            <ellipse cx="0" cy="-45" rx="14" ry="26" fill="#693B1F" stroke="#9E6138" stroke-width="2"/>
            <circle cx="0" cy="-45" r="5" fill="#C5A059"/>
          </g>
        `).join("")}
        <circle cx="0" cy="0" r="16" fill="#4B2813"/>
      </g>
    </svg>`;
  }
  if (type === "red-chilli") {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
      <!-- Curved Chilli Body -->
      <path d="M 50 60 C 90 60, 150 90, 160 150 C 140 140, 80 120, 45 75 Z" fill="#B91C1C" stroke="#DC2626" stroke-width="2.5"/>
      <!-- Chilli Stem -->
      <path d="M 45 75 C 35 60, 30 40, 40 30 C 45 35, 48 50, 50 60 Z" fill="#2E6B45"/>
    </svg>`;
  }
  if (type === "cardamom") {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
      <ellipse cx="100" cy="100" rx="35" ry="55" fill="#4C783D" stroke="#71A85E" stroke-width="3"/>
      <path d="M 100 50 L 100 150" stroke="#2B4E20" stroke-width="2"/>
      <path d="M 85 65 Q 100 100 85 135 M 115 65 Q 100 100 115 135" stroke="#71A85E" stroke-width="1.5"/>
    </svg>`;
  }
  return "";
}

fs.writeFileSync(path.join(dir, "ingredient-rosemary.svg"), generateIngredient("curry-leaf"));
fs.writeFileSync(path.join(dir, "ingredient-chanterelle.svg"), generateIngredient("star-anise"));
fs.writeFileSync(path.join(dir, "ingredient-fig.svg"), generateIngredient("red-chilli"));
fs.writeFileSync(path.join(dir, "ingredient-citrus.svg"), generateIngredient("cardamom"));

// 5. Dark Heritage Ambience Background
const darkAmbiance = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080" fill="none">
  <rect width="1920" height="1080" fill="#100B07"/>
  <!-- Ambient glows of brass vilakku lamps -->
  <radialGradient id="lampGlow1" cx="30%" cy="40%" r="40%">
    <stop offset="0%" stop-color="#D46213" stop-opacity="0.35"/>
    <stop offset="60%" stop-color="#C5A059" stop-opacity="0.12"/>
    <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="lampGlow2" cx="75%" cy="50%" r="45%">
    <stop offset="0%" stop-color="#D46213" stop-opacity="0.30"/>
    <stop offset="60%" stop-color="#122B1E" stop-opacity="0.2"/>
    <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
  </radialGradient>
  <rect width="1920" height="1080" fill="url(#lampGlow1)"/>
  <rect width="1920" height="1080" fill="url(#lampGlow2)"/>
  
  <!-- Subtle Kolam Dot Grid Background -->
  <g opacity="0.08" stroke="#C5A059" stroke-width="1.5">
    ${Array.from({ length: 16 }).map((_, i) => 
      `<circle cx="${100 + i * 115}" cy="540" r="2" fill="#C5A059"/>
       <circle cx="${100 + i * 115}" cy="480" r="2" fill="#C5A059"/>
       <circle cx="${100 + i * 115}" cy="600" r="2" fill="#C5A059"/>`
    ).join("")}
  </g>

  <!-- Brass Lamp Silhouettes -->
  <g transform="translate(450, 420)" opacity="0.45">
    <ellipse cx="0" cy="180" rx="45" ry="12" fill="#C5A059"/>
    <rect x="-6" y="20" width="12" height="160" fill="#C5A059"/>
    <ellipse cx="0" cy="20" rx="30" ry="8" fill="#C5A059"/>
    <!-- Flame -->
    <path d="M 0 -10 C 10 5, 6 15, 0 20 C -6 15, -10 5, 0 -10 Z" fill="#FCECC2"/>
  </g>
  <g transform="translate(1450, 460)" opacity="0.4">
    <ellipse cx="0" cy="180" rx="45" ry="12" fill="#C5A059"/>
    <rect x="-6" y="20" width="12" height="160" fill="#C5A059"/>
    <ellipse cx="0" cy="20" rx="30" ry="8" fill="#C5A059"/>
    <!-- Flame -->
    <path d="M 0 -10 C 10 5, 6 15, 0 20 C -6 15, -10 5, 0 -10 Z" fill="#FCECC2"/>
  </g>
</svg>`;
fs.writeFileSync(path.join(dir, "dark-ambiance.svg"), darkAmbiance);

// 6. Chef and Reviewer Avatars
function generatePortrait(name, initial, bgColor = "#1E4A32", accentColor = "#D46213") {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="98" fill="${bgColor}" stroke="${accentColor}" stroke-width="4"/>
    <circle cx="100" cy="80" r="38" fill="#E8D1B5"/>
    <path d="M 45 175 C 55 130, 80 120, 100 120 C 120 120, 145 130, 155 175 Z" fill="${accentColor}"/>
    <!-- Monogram / Initial Badge -->
    <circle cx="145" cy="145" r="22" fill="#18110B" stroke="#C5A059" stroke-width="2"/>
    <text x="145" y="152" text-anchor="middle" font-family="Georgia, serif" font-size="16" font-weight="bold" fill="#FAF7F2">
      ${initial}
    </text>
  </svg>`;
}

fs.writeFileSync(path.join(dir, "chef-muthuvel.svg"), generatePortrait("Muthuvel", "M", "#122B1E", "#D46213"));
fs.writeFileSync(path.join(dir, "chef-meenakshi.svg"), generatePortrait("Meenakshi", "M", "#1E3A2B", "#C5A059"));
fs.writeFileSync(path.join(dir, "chef-kannan.svg"), generatePortrait("Kannan", "K", "#18110B", "#D46213"));
// Avatars
fs.writeFileSync(path.join(dir, "avatar-1.svg"), generatePortrait("Meenakshi", "M", "#244C38", "#D46213"));
fs.writeFileSync(path.join(dir, "avatar-2.svg"), generatePortrait("Karthik", "K", "#1E3326", "#C5A059"));
fs.writeFileSync(path.join(dir, "avatar-3.svg"), generatePortrait("Lakshmi", "L", "#2B1A12", "#D46213"));
fs.writeFileSync(path.join(dir, "avatar-4.svg"), generatePortrait("Senthil", "S", "#16281E", "#C5A059"));

console.log("Successfully generated all South Indian dish artworks, icons, and ambient assets!");
