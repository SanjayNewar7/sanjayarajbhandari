# Asset Upload Guide for Graphics Designer Portfolio

## Directory Structure

The following directory structure has been created for organizing your design assets:

```
public/
└── assets/
    └── images/
        ├── profile/
        ├── graphics/
        ├── social-media/
        ├── logo/
        ├── brochures/
        ├── banners/
        ├── menu/
        ├── branding/
        └── packaging/
```

## Asset Categories

### 1. Profile Images
- **Directory**: `public/assets/images/profile/`
- **Purpose**: Store profile pictures and headshots
- **File naming**: `profile-main.jpg`, `profile-cropped.jpg`, `profile-square.jpg`

### 2. Graphics
- **Directory**: `public/assets/images/graphics/`
- **Purpose**: Posters, flyers, visual communications, illustrations
- **File naming**: `graphics-[description]-[number].jpg`
- **Examples**: `graphics-modern-poster-1.jpg`, `graphics-creative-flyer-2.jpg`

### 3. Social Media
- **Directory**: `public/assets/images/social-media/`
- **Purpose**: Instagram posts, Facebook covers, LinkedIn content, story templates
- **File naming**: `social-media-[platform]-[description]-[number].jpg`
- **Examples**: `social-media-instagram-campaign-1.jpg`, `social-media-facebook-cover-1.jpg`

### 4. Logo
- **Directory**: `public/assets/images/logo/`
- **Purpose**: Logo designs, brand marks, wordmarks
- **File naming**: `logo-[type]-[description]-[number].jpg`
- **Examples**: `logo-corporate-identity-1.jpg`, `logo-minimalist-mark-2.jpg`

### 5. Brochures
- **Directory**: `public/assets/images/brochures/`
- **Purpose**: Business brochures, product catalogs, promotional materials
- **File naming**: `brochures-[type]-[description]-[number].jpg`
- **Examples**: `brochures-business-layout-1.jpg`, `brochures-travel-promo-2.jpg`

### 6. Banners
- **Directory**: `public/assets/images/banners/`
- **Purpose**: Web banners, event banners, retail signage
- **File naming**: `banners-[type]-[description]-[number].jpg`
- **Examples**: `banners-web-banner-1.jpg`, `banners-event-display-2.jpg`

### 7. Menu
- **Directory**: `public/assets/images/menu/`
- **Purpose**: Restaurant menus, cafe boards, wine lists
- **File naming**: `menu-[type]-[description]-[number].jpg`
- **Examples**: `menu-restaurant-layout-1.jpg`, `menu-cafe-board-2.jpg`

### 8. Branding
- **Directory**: `public/assets/images/branding/`
- **Purpose**: Brand identity systems, guidelines, stationery
- **File naming**: `branding-[type]-[description]-[number].jpg`
- **Examples**: `branding-brand-identity-1.jpg`, `branding-guidelines-2.jpg`

### 9. Packaging
- **Directory**: `public/assets/images/packaging/`
- **Purpose**: Product packaging, food packaging, labels
- **File naming**: `packaging-[type]-[description]-[number].jpg`
- **Examples**: `packaging-product-1.jpg`, `packaging-food-2.jpg`

## File Format Recommendations

- **Images**: JPG (preferred for photos), PNG (for transparency), WebP (for optimized web delivery)
- **Vector files**: SVG (for logos and simple graphics)
- **Maximum file size**: 2MB per image
- **Recommended dimensions**: 1080px width (for portfolio items)

## How to Add New Assets

1. **Upload the image file** to the appropriate category directory
2. **Update the portfolio data** in `src/app/components/Portfolio.tsx` and `src/app/pages/CategoryPage.tsx` with the new file path
3. **Use the correct naming convention** to maintain consistency

## Portfolio Data Structure

When adding new items to your portfolio, use the following structure:

```javascript
{
  id: [unique_number],
  title: 'Your Design Title',
  category: '[Category Name]',
  image: '/assets/images/[category-directory]/[filename].jpg',
  description: 'Brief description of the design'
}
```

## Best Practices

1. **Consistent naming**: Use descriptive names that reflect the content
2. **Organization**: Place files in the correct category directory
3. **Optimization**: Compress images before uploading to reduce load time
4. **Backup**: Keep original high-resolution files separately
5. **File formats**: Use appropriate formats for different types of content