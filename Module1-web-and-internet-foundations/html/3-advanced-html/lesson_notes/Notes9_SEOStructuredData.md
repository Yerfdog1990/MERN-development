# SEO Structured Data

---

## What is Structured Data?

**Structured data** is a system of pairing a name with a value that helps search engines categorise and index your content. It is a method of adding "tags" to your website content so Google understands it better — making your pages eligible for **rich snippets** in search results.

> Think of it like labelling items in a storage room. Unstructured = everything in a pile. Structured = everything labelled and sorted on shelves. Search engines work much faster with labelled, organised content.

---

## Why it Matters for SEO

| Benefit | Description |
|---|---|
| Better understanding | Helps Google understand the meaning and context of your content |
| Rich snippets | Enables star ratings, prices, images, and reviews to show in search results |
| Higher CTR | Rich snippets get on average **17% higher click-through rates** than standard results |
| FAQ snippets | FAQ schema gets the highest CTR of all — up to **87%** (Milestone Research) |
| More search queries | Tagged content can appear in more varied search queries |
| Knowledge panels | Improves chances of appearing in Google's knowledge panels and answer boxes |

> **Important:** Structured data does not directly improve your ranking position — Google has confirmed it is not a direct ranking factor. It improves your **visibility and CTR**, which indirectly benefits SEO performance.

---

## The Three Structured Data Formats

| Format | Method | Recommended by Google |
|---|---|---|
| JSON-LD | Separate `<script>` block in `<head>` | Yes — preferred |
| RDFa | Attributes embedded in HTML tags | No |
| Microdata | Attributes embedded in HTML tags | No |

---

## What is Schema.org?

**Schema.org** is a shared vocabulary of tags (types and properties) maintained collaboratively by **Google, Bing, Yahoo!, and Yandex**. It defines what terms like `Product`, `Recipe`, `Event`, and `Person` mean so all search engines interpret them the same way.

- Schema.org houses almost **800 types** of schema
- Google supports **31 types** for rich results
- Every structured data implementation uses schema.org as its vocabulary

---

## The Relationship Between These Terms

```
Structured Data  →  the concept of tagging content with name-value pairs
Schema.org       →  the vocabulary / dictionary of agreed tag definitions
Schema Markup    →  the actual code that implements structured data
JSON-LD / RDFa / Microdata  →  the three formats used to write that code
```

---

## Format 1 — JSON-LD (Recommended)

**JSON-LD (JavaScript Object Notation for Linked Data)** is a lightweight data format that uses JSON to serialise Linked Data. It provides a way to structure and link data using a schema, making it easier for search engines to understand the context and meaning of information on a webpage.

### Key Features
- Completely **separate** from HTML — sits in its own `<script>` block
- Invisible to users — browser never executes it
- Easiest to read, write, and maintain
- Can be injected dynamically by JavaScript
- Google's officially recommended format

### Basic Structure

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type":    "Person",
  "name":     "John Doe",
  "jobTitle": "Software Engineer",
  "worksFor": {
    "@type": "Organization",
    "name":  "Acme Inc."
  }
}
</script>
```

| Key | Purpose |
|---|---|
| `@context` | Specifies the vocabulary — always `"https://schema.org"` |
| `@type` | The category of entity being described (Person, Product, Event, etc.) |
| Other keys | Properties that describe the entity in detail |

---

## Format 2 — RDFa

**RDFa (Resource Description Framework in Attributes)** is an HTML5 extension that embeds structured data directly within HTML tags using special attributes. It annotates content with machine-readable metadata without a separate data block.

### Key Features
- Structured data is attached directly to visible HTML elements
- Uses `vocab`, `typeof`, and `property` attributes
- More powerful and flexible than Microdata
- Originated from the Semantic Web / linked data community
- Not recommended by Google over JSON-LD

### Basic Structure

```html
<div vocab="http://schema.org/" typeof="Person">
    <span property="name">John Doe</span>
    <span property="jobTitle">Software Engineer</span>
    <span property="worksFor" typeof="Organization">
        <span property="name">ABC Company</span>
    </span>
</div>
```

| Attribute | Equivalent in Microdata | Purpose |
|---|---|---|
| `vocab` | `itemtype` | Sets the schema vocabulary namespace |
| `typeof` | `itemscope` | Declares the type of entity |
| `property` | `itemprop` | Labels a piece of content as a property |

---

## Format 3 — Microdata

**Microdata** is an HTML5 specification that also embeds structured data directly into HTML tags using `itemscope`, `itemtype`, and `itemprop` attributes.

### Basic Structure

```html
<div itemscope itemtype="https://schema.org/Person">
    <span itemprop="name">John Doe</span>
    <span itemprop="jobTitle">Software Engineer</span>
    <div itemprop="worksFor" itemscope itemtype="https://schema.org/Organization">
        <span itemprop="name">Acme Inc.</span>
    </div>
</div>
```

---

## E-Commerce Use Cases with Code Examples

Below are the most valuable structured data types for an e-commerce website, each with a JSON-LD example (recommended format), an RDFa example, and a Microdata example.

---

### 1. Product Schema — Core product listing

**Why use it:** Shows product name, price, availability, and brand directly in Google search results.

**JSON-LD (recommended):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Men's Running Shoes — Nike Air Max",
  "brand": {
    "@type": "Brand",
    "name": "Nike"
  },
  "sku": "NIKE-AM-001",
  "description": "Lightweight running shoes with responsive cushioning.",
  "image": "https://www.example.com/images/nike-air-max.jpg",
  "offers": {
    "@type": "Offer",
    "price": "129.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://www.example.com/products/nike-air-max"
  }
}
</script>
```

**RDFa:**
```html
<div vocab="https://schema.org/" typeof="Product">
    <span property="name">Men's Running Shoes — Nike Air Max</span>
    <span property="sku">NIKE-AM-001</span>
    <div property="brand" typeof="Brand">
        <span property="name">Nike</span>
    </div>
    <div property="offers" typeof="Offer">
        <span property="price">129.99</span>
        <span property="priceCurrency">USD</span>
        <span property="availability">https://schema.org/InStock</span>
    </div>
</div>
```

**Microdata:**
```html
<div itemscope itemtype="https://schema.org/Product">
    <span itemprop="name">Men's Running Shoes — Nike Air Max</span>
    <span itemprop="sku">NIKE-AM-001</span>
    <div itemprop="brand" itemscope itemtype="https://schema.org/Brand">
        <span itemprop="name">Nike</span>
    </div>
    <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
        <span itemprop="price">129.99</span>
        <span itemprop="priceCurrency">USD</span>
        <link itemprop="availability" href="https://schema.org/InStock">In Stock
    </div>
</div>
```

**Rich result:** Shows product name, price ($129.99), and "In Stock" badge in search results.

---

### 2. AggregateRating Schema — Star ratings

**Why use it:** Displays star ratings and review counts under your product listing — proven to dramatically increase CTR.

**JSON-LD (recommended):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Men's Running Shoes — Nike Air Max",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "583",
    "bestRating": "5",
    "worstRating": "1"
  }
}
</script>
```

**RDFa:**
```html
<div vocab="https://schema.org/" typeof="Product">
    <span property="name">Men's Running Shoes — Nike Air Max</span>
    <div property="aggregateRating" typeof="AggregateRating">
        <span property="ratingValue">4.7</span> out of
        <span property="bestRating">5</span> —
        <span property="reviewCount">583</span> reviews
    </div>
</div>
```

**Microdata:**
```html
<div itemscope itemtype="https://schema.org/Product">
    <span itemprop="name">Men's Running Shoes — Nike Air Max</span>
    <div itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
        <span itemprop="ratingValue">4.7</span> out of
        <span itemprop="bestRating">5</span> —
        <span itemprop="reviewCount">583</span> reviews
    </div>
</div>
```

**Rich result:** ★★★★★ 4.7 (583 reviews) shown under the product title in search results.

---

### 3. BreadcrumbList Schema — Navigation trail

**Why use it:** Shows the page's position in your site hierarchy in the search result URL — improves navigability and CTR.

**JSON-LD (recommended):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.example.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Shoes",
      "item": "https://www.example.com/shoes"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Nike Air Max",
      "item": "https://www.example.com/shoes/nike-air-max"
    }
  ]
}
</script>
```

**RDFa:**
```html
<ol vocab="https://schema.org/" typeof="BreadcrumbList">
    <li property="itemListElement" typeof="ListItem">
        <a property="item" typeof="WebPage" href="https://www.example.com">
            <span property="name">Home</span>
        </a>
        <meta property="position" content="1">
    </li>
    <li property="itemListElement" typeof="ListItem">
        <a property="item" typeof="WebPage" href="https://www.example.com/shoes">
            <span property="name">Shoes</span>
        </a>
        <meta property="position" content="2">
    </li>
    <li property="itemListElement" typeof="ListItem">
        <span property="name">Nike Air Max</span>
        <meta property="position" content="3">
    </li>
</ol>
```

**Microdata:**
```html
<ol itemscope itemtype="https://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a itemprop="item" href="https://www.example.com">
            <span itemprop="name">Home</span>
        </a>
        <meta itemprop="position" content="1">
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a itemprop="item" href="https://www.example.com/shoes">
            <span itemprop="name">Shoes</span>
        </a>
        <meta itemprop="position" content="2">
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <span itemprop="name">Nike Air Max</span>
        <meta itemprop="position" content="3">
    </li>
</ol>
```

**Rich result:** URL shown as `example.com › Shoes › Nike Air Max` instead of a raw URL.

---

### 4. FAQPage Schema — Frequently asked questions

**Why use it:** FAQ schema gets the highest CTR of all schema types (up to 87%). Expandable questions appear directly under your listing in search results.

**JSON-LD (recommended):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is your return policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer free returns within 30 days of purchase for all unused items in original packaging."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer free shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, free standard shipping on all orders over $50 within the US."
      }
    }
  ]
}
</script>
```

**Rich result:** Two expandable FAQ dropdowns appear directly under your search listing — no click needed to see answers.

---

### 5. Organization Schema — Business identity

**Why use it:** Powers Google's knowledge panel showing your brand logo, contact details, and social profiles alongside search results.

**JSON-LD (recommended):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ShopZone",
  "url": "https://www.shopzone.com",
  "logo": "https://www.shopzone.com/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-555-0199",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/shopzone",
    "https://www.instagram.com/shopzone",
    "https://twitter.com/shopzone"
  ]
}
</script>
```

**Rich result:** Brand knowledge panel with logo, phone number, and social links shown in search results.

---

## Comparison Summary

| Format | Visibility | Tied to HTML | Recommended | Hide data from users |
|---|---|---|---|---|
| JSON-LD | Nothing visible | No — fully separate | Yes (Google) | Naturally |
| RDFa | Content visible, attributes not | Yes | No | Awkward |
| Microdata | Content visible, attributes not | Yes | No | Awkward |

---

## Schema Types Available for E-Commerce

| Schema Type | E-Commerce Use |
|---|---|
| Product | Individual product pages |
| AggregateRating | Star ratings and review counts |
| Offer | Pricing, availability, currency |
| BreadcrumbList | Navigation trail in search URLs |
| FAQPage | FAQ sections — highest CTR |
| Organization | Brand identity and knowledge panel |
| WebSite | Sitelinks search box in Google |
| Review | Individual customer reviews |
| Event | Sales events, product launches |
| VideoObject | Product demo videos |

---

## Best Practices

1. **Always use JSON-LD** — it is Google's recommended format and the easiest to maintain.
2. **Place it in `<head>`** — Google also accepts it in `<body>` but recommends `<head>`.
3. **Use Google's Rich Results Test** — free tool to verify your structured data is parsed correctly and preview the rich snippet.
4. **Never mark up content that isn't on the page** — Google can penalise misleading structured data.
5. **Combine multiple schema types** — a product page can have Product + AggregateRating + BreadcrumbList + FAQPage all at once.
6. **Measure with Google Search Console** — compare marked-up pages vs plain pages to track CTR improvements.
7. **Keep data accurate** — outdated prices or stock availability in schema can mislead users and harm trust.

---

## Important Notes

- Structured data is **not a direct ranking factor** — no conclusive evidence it improves rankings, but it significantly improves CTR and visibility.
- **Schema.org** is maintained by Google, Bing, Yahoo!, and Yandex — it is the universal vocabulary used by all search engines.
- Schema does **not replace Open Graph** — Open Graph is used by Facebook/social platforms for sharing previews. They serve different purposes and can be used together.
- Google does **not guarantee** rich snippet display — its algorithm decides on a case-by-case basis.
- JSON-LD can also power **knowledge graphs** and **data integration** beyond just SEO — it is a broader linked data standard.

---