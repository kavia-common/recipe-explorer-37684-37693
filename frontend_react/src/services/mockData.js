const mockRecipes = [
  {
    id: '1',
    title: 'Lemon Garlic Salmon',
    description: 'Juicy salmon with a zingy lemon garlic butter.',
    time: 25,
    tag: 'Seafood',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    ingredients: [
      '2 salmon fillets',
      '2 cloves garlic, minced',
      '2 tbsp butter',
      '1 lemon (zest and juice)',
      'Salt & pepper',
      'Parsley'
    ],
    instructions: [
      'Preheat oven to 400°F (200°C).',
      'Mix butter, garlic, lemon zest and juice.',
      'Season salmon, top with mixture.',
      'Bake 12–15 min until flaky. Garnish and serve.'
    ]
  },
  {
    id: '2',
    title: 'Creamy Mushroom Pasta',
    description: 'Al dente pasta tossed in a creamy mushroom sauce.',
    time: 30,
    tag: 'Vegetarian',
    image: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1200&auto=format&fit=crop',
    ingredients: [
      '200g pasta',
      '2 cups mushrooms, sliced',
      '1 small onion, diced',
      '2 cloves garlic, minced',
      '1 cup cream',
      'Parmesan, salt & pepper'
    ],
    instructions: [
      'Cook pasta to package instructions.',
      'Sauté onion, garlic, and mushrooms.',
      'Add cream; simmer to thicken.',
      'Toss with pasta; top with parmesan.'
    ]
  },
  {
    id: '3',
    title: 'Spicy Chicken Tacos',
    description: 'Quick weeknight tacos with a spicy kick.',
    time: 20,
    tag: 'Quick',
    image: 'https://images.unsplash.com/photo-1604908176997-431002e4c9f6?q=80&w=1200&auto=format&fit=crop',
    ingredients: [
      '2 chicken breasts, sliced',
      'Taco seasoning',
      'Corn tortillas',
      'Salsa, lime, cilantro'
    ],
    instructions: [
      'Season chicken and sauté until cooked.',
      'Warm tortillas.',
      'Assemble with salsa and toppings.'
    ]
  }
];

// PUBLIC_INTERFACE
export async function mockFetchRecipes(query = '') {
  /** Returns mock recipes filtered by title or ingredients containing query. */
  const q = query.trim().toLowerCase();
  if (!q) return mockRecipes;
  return mockRecipes.filter(r => {
    const inTitle = r.title.toLowerCase().includes(q);
    const inDesc = r.description.toLowerCase().includes(q);
    const inIngr = (r.ingredients || []).some(i => i.toLowerCase().includes(q));
    return inTitle || inDesc || inIngr;
  });
}

// PUBLIC_INTERFACE
export async function mockFetchRecipeById(id) {
  /** Returns a single mock recipe by id. */
  return mockRecipes.find(r => r.id === String(id));
}
