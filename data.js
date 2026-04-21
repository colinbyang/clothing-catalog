// Clothing Catalog Data
// Each item has: id, name, type, color, size, brand, price, imageURL

const clothingData = [

  // ── TOPS ──────────────────────────────────────────────────────────────────

  {
    id: 1,
    name: "Classic White Oxford Shirt",
    type: "Top",
    color: "White",
    size: "M",
    brand: "Ralph Lauren",
    price: 89.99,
    imageURL: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400"
  },
  {
    id: 2,
    name: "Striped Breton Tee",
    type: "Top",
    color: "Navy",
    size: "S",
    brand: "Uniqlo",
    price: 19.99,
    imageURL: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400"
  },
  {
    id: 3,
    name: "Graphic Print Tee",
    type: "Top",
    color: "Black",
    size: "L",
    brand: "H&M",
    price: 14.99,
    imageURL: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
  },
  {
    id: 4,
    name: "Linen Relaxed Shirt",
    type: "Top",
    color: "Beige",
    size: "M",
    brand: "Zara",
    price: 49.99,
    imageURL: "https://images.unsplash.com/photo-1594938298603-c8148c4b4357?w=400"
  },
  {
    id: 5,
    name: "Ribbed Turtleneck Sweater",
    type: "Top",
    color: "Cream",
    size: "XS",
    brand: "COS",
    price: 79.99,
    imageURL: "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?w=400"
  },
  {
    id: 6,
    name: "Flannel Plaid Shirt",
    type: "Top",
    color: "Red",
    size: "XL",
    brand: "Carhartt",
    price: 64.99,
    imageURL: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=400"
  },
  {
    id: 7,
    name: "Oversized Hoodie",
    type: "Top",
    color: "Grey",
    size: "L",
    brand: "Champion",
    price: 54.99,
    imageURL: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400"
  },
  {
    id: 8,
    name: "Silk Blouse",
    type: "Top",
    color: "Blush",
    size: "S",
    brand: "Everlane",
    price: 98.00,
    imageURL: "https://images.unsplash.com/photo-1564257577886-d234f02cff14?w=400"
  },
  {
    id: 9,
    name: "Cropped Sweatshirt",
    type: "Top",
    color: "White",
    size: "M",
    brand: "Nike",
    price: 44.99,
    imageURL: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400"
  },
  {
    id: 10,
    name: "Denim Shirt",
    type: "Top",
    color: "Blue",
    size: "L",
    brand: "Levi's",
    price: 59.99,
    imageURL: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400"
  },

  // ── BOTTOMS ───────────────────────────────────────────────────────────────

  {
    id: 11,
    name: "Slim Fit Chinos",
    type: "Bottom",
    color: "Khaki",
    size: "32",
    brand: "Gap",
    price: 59.95,
    imageURL: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400"
  },
  {
    id: 12,
    name: "High-Rise Skinny Jeans",
    type: "Bottom",
    color: "Blue",
    size: "28",
    brand: "Levi's",
    price: 69.50,
    imageURL: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400"
  },
  {
    id: 13,
    name: "Wide-Leg Trousers",
    type: "Bottom",
    color: "Black",
    size: "M",
    brand: "Zara",
    price: 55.99,
    imageURL: "https://images.unsplash.com/photo-1594938374182-a55e90c6ff25?w=400"
  },
  {
    id: 14,
    name: "Cargo Pants",
    type: "Bottom",
    color: "Olive",
    size: "34",
    brand: "Carhartt",
    price: 74.99,
    imageURL: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=400"
  },
  {
    id: 15,
    name: "Pleated Midi Skirt",
    type: "Bottom",
    color: "Beige",
    size: "S",
    brand: "& Other Stories",
    price: 65.00,
    imageURL: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400"
  },
  {
    id: 16,
    name: "Athletic Shorts",
    type: "Bottom",
    color: "Grey",
    size: "L",
    brand: "Nike",
    price: 34.99,
    imageURL: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400"
  },
  {
    id: 17,
    name: "Linen Drawstring Pants",
    type: "Bottom",
    color: "White",
    size: "M",
    brand: "Uniqlo",
    price: 39.99,
    imageURL: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400"
  },
  {
    id: 18,
    name: "Distressed Straight Jeans",
    type: "Bottom",
    color: "Blue",
    size: "30",
    brand: "Levi's",
    price: 79.50,
    imageURL: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400"
  },
  {
    id: 19,
    name: "Mini Denim Skirt",
    type: "Bottom",
    color: "Blue",
    size: "XS",
    brand: "H&M",
    price: 24.99,
    imageURL: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=400"
  },
  {
    id: 20,
    name: "Tailored Dress Pants",
    type: "Bottom",
    color: "Charcoal",
    size: "32",
    brand: "Calvin Klein",
    price: 89.99,
    imageURL: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400"
  },

  // ── OUTERWEAR ─────────────────────────────────────────────────────────────

  {
    id: 21,
    name: "Classic Trench Coat",
    type: "Outerwear",
    color: "Beige",
    size: "M",
    brand: "Burberry",
    price: 1890.00,
    imageURL: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400"
  },
  {
    id: 22,
    name: "Puffer Jacket",
    type: "Outerwear",
    color: "Black",
    size: "L",
    brand: "The North Face",
    price: 249.99,
    imageURL: "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?w=400"
  },
  {
    id: 23,
    name: "Denim Jacket",
    type: "Outerwear",
    color: "Blue",
    size: "S",
    brand: "Levi's",
    price: 89.50,
    imageURL: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400"
  },
  {
    id: 24,
    name: "Wool Overcoat",
    type: "Outerwear",
    color: "Camel",
    size: "M",
    brand: "COS",
    price: 295.00,
    imageURL: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400"
  },
  {
    id: 25,
    name: "Bomber Jacket",
    type: "Outerwear",
    color: "Olive",
    size: "XL",
    brand: "Alpha Industries",
    price: 150.00,
    imageURL: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400"
  },
  {
    id: 26,
    name: "Fleece Zip-Up",
    type: "Outerwear",
    color: "Navy",
    size: "M",
    brand: "Patagonia",
    price: 119.00,
    imageURL: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=400"
  },
  {
    id: 27,
    name: "Leather Moto Jacket",
    type: "Outerwear",
    color: "Black",
    size: "S",
    brand: "AllSaints",
    price: 398.00,
    imageURL: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=400"
  },
  {
    id: 28,
    name: "Rain Jacket",
    type: "Outerwear",
    color: "Yellow",
    size: "L",
    brand: "Columbia",
    price: 99.99,
    imageURL: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400"
  },

  // ── DRESSES ───────────────────────────────────────────────────────────────

  {
    id: 29,
    name: "Floral Wrap Dress",
    type: "Dress",
    color: "Floral",
    size: "S",
    brand: "Anthropologie",
    price: 128.00,
    imageURL: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400"
  },
  {
    id: 30,
    name: "Little Black Dress",
    type: "Dress",
    color: "Black",
    size: "M",
    brand: "Calvin Klein",
    price: 139.00,
    imageURL: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400"
  },
  {
    id: 31,
    name: "Linen Sundress",
    type: "Dress",
    color: "White",
    size: "XS",
    brand: "Mango",
    price: 59.99,
    imageURL: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400"
  },
  {
    id: 32,
    name: "Slip Midi Dress",
    type: "Dress",
    color: "Blush",
    size: "M",
    brand: "& Other Stories",
    price: 95.00,
    imageURL: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400"
  },
  {
    id: 33,
    name: "Knit Sweater Dress",
    type: "Dress",
    color: "Cream",
    size: "L",
    brand: "Everlane",
    price: 110.00,
    imageURL: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=400"
  },

  // ── FOOTWEAR ──────────────────────────────────────────────────────────────

  {
    id: 34,
    name: "Classic White Sneakers",
    type: "Footwear",
    color: "White",
    size: "10",
    brand: "Adidas",
    price: 90.00,
    imageURL: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
  },
  {
    id: 35,
    name: "Chelsea Ankle Boots",
    type: "Footwear",
    color: "Black",
    size: "8",
    brand: "Dr. Martens",
    price: 179.99,
    imageURL: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400"
  },
  {
    id: 36,
    name: "Suede Loafers",
    type: "Footwear",
    color: "Tan",
    size: "9",
    brand: "Cole Haan",
    price: 149.99,
    imageURL: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400"
  },
  {
    id: 37,
    name: "Running Shoes",
    type: "Footwear",
    color: "Grey",
    size: "11",
    brand: "Nike",
    price: 129.99,
    imageURL: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
  },
  {
    id: 38,
    name: "Strappy Sandals",
    type: "Footwear",
    color: "Tan",
    size: "7",
    brand: "Steve Madden",
    price: 69.99,
    imageURL: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400"
  },

  // ── ACCESSORIES ───────────────────────────────────────────────────────────

  {
    id: 39,
    name: "Leather Belt",
    type: "Accessory",
    color: "Brown",
    size: "M",
    brand: "Fossil",
    price: 44.99,
    imageURL: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400"
  },
  {
    id: 40,
    name: "Wool Beanie",
    type: "Accessory",
    color: "Navy",
    size: "One Size",
    brand: "Patagonia",
    price: 29.00,
    imageURL: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400"
  },
  {
    id: 41,
    name: "Canvas Tote Bag",
    type: "Accessory",
    color: "Beige",
    size: "One Size",
    brand: "Everlane",
    price: 35.00,
    imageURL: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"
  },
  {
    id: 42,
    name: "Silk Scarf",
    type: "Accessory",
    color: "Floral",
    size: "One Size",
    brand: "Zara",
    price: 25.99,
    imageURL: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400"
  },
  {
    id: 43,
    name: "Baseball Cap",
    type: "Accessory",
    color: "Black",
    size: "One Size",
    brand: "Nike",
    price: 27.99,
    imageURL: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400"
  },
  {
    id: 44,
    name: "Leather Gloves",
    type: "Accessory",
    color: "Brown",
    size: "L",
    brand: "Fossil",
    price: 55.00,
    imageURL: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?w=400"
  },
];
