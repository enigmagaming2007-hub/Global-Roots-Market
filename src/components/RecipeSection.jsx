import React, { useState } from 'react';
import { RECIPES, PRODUCTS } from '../data/marketData';
import { Clock, Users, Utensils, Plus, CheckCircle, ChevronRight } from 'lucide-react';

export default function RecipeSection({ onAddMultipleToCart }) {
  const [selectedRecipe, setSelectedRecipe] = useState(RECIPES[0]);

  const handleAddIngredients = (recipe) => {
    const itemsToAdd = recipe.ingredients
      .map(ing => PRODUCTS.find(p => p.id === ing.productId))
      .filter(Boolean);

    if (itemsToAdd.length > 0) {
      onAddMultipleToCart(itemsToAdd);
    }
  };

  return (
    <section style={{
      padding: '4rem 0',
      background: 'var(--bg-primary)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            <Utensils size={14} /> Culinary Pairings & Recipes
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '1rem' }}>
            Bring Global Heritage into Your Kitchen
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
            Discover how master chefs and home cooks utilize our rare saffron, single-origin coffee, and cold-pressed extra virgin olive oil.
          </p>
        </div>

        {/* Recipe Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {RECIPES.map((recipe) => (
            <div
              key={recipe.id}
              className="glass-panel"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    fontSize: '0.8rem',
                    color: 'var(--color-gold)',
                    marginBottom: '0.75rem'
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={14} /> {recipe.prepTime}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Users size={14} /> {recipe.servings} Servings
                    </span>
                    <span className="badge badge-gold" style={{ fontSize: '0.65rem' }}>
                      {recipe.difficulty}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                    {recipe.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                    {recipe.description}
                  </p>

                  <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: '700', marginBottom: '0.5rem' }}>
                    Featured Market Ingredients:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {recipe.ingredients.map((ing, idx) => (
                      <li key={idx} style={{ fontSize: '0.85rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle size={14} color="var(--color-gold)" />
                        <span>{ing.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ padding: '1.5rem', paddingTop: 0 }}>
                <button
                  onClick={() => handleAddIngredients(recipe)}
                  className="btn btn-terracotta"
                  style={{ width: '100%', padding: '0.75rem' }}
                >
                  <Plus size={18} />
                  <span>Add All Ingredients to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
