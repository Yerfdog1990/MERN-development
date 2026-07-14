#!/usr/bin/env bash
# One-time asset download from Figma (URLs valid ~7 days from 2026-07-11).
# Run from the tour-travel-ui folder:  bash download-assets.sh
set -e
mkdir -p public/assets
cd public/assets

dl() { curl -sL -o "$1" "https://www.figma.com/api/mcp/asset/$2" && echo "ok  $1"; }

dl hero-bg.png             4e5382f2-c3c3-4c28-bc45-666659673654
dl dest-thailand.png       f322c60f-20e4-4038-b88c-da45541c8f7f
dl dest-dubai.png          81e547ac-953b-4716-9625-b87181c9bf5c
dl dest-turkey.png         71ea6e37-6bfb-486f-b815-40f45f537ed9
dl hotel-1.png             1aa6f6d0-28fd-4536-acd1-b13e69442cf0
dl hotel-2.png             c07d0822-bc1e-43b2-a5c5-c026ff0a206d
dl hotel-3.png             98219877-16ba-4faa-a8a4-5c49fca4541c
dl hotel-4.png             49aab81f-08c8-4574-8c92-2aedb9271552
dl hero-ellipse-big.png    b70a7656-c7c5-4828-9d98-2e0485c69a4f
dl hero-ellipse-mid.png    04e12212-79d0-4146-827c-62842dae100c
dl hero-ellipse-top.png    77107177-4516-437e-8da1-288fac0415f6
dl hero-ellipse-bottom.png 1d1910b9-3604-4dcc-ab47-30d37bd27cf9
dl icon-avatar.png         86aff3b6-84c2-4ed9-9faf-b07cf454916e
dl icon-earth.png          d929110a-1fc4-4186-a91a-22f02981b070
dl icon-facebook.png       2f8dcdfb-f191-4a06-b047-95abbae42297
dl icon-instagram.png      91da11ae-3f33-4c10-a198-3a44de478810
dl icon-x.png              b3db4150-7c1e-4585-b1ee-6258d51dee7e
dl icon-linkedin.png       d45a13af-9eea-4909-b18e-6a9d5039be01
dl icon-email.png          a8fdc0d4-a6f3-4249-b7b5-9e46e2265df2

echo "Done — assets saved to public/assets/"
