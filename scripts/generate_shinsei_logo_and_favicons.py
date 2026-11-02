from PIL import Image, ImageDraw
import os

source_path = 'C:/Users/vyln2/.gemini/antigravity/brain/bea457f1-5495-4607-8397-97588dc28f48/.user_uploaded/media_1793583946118_c80accbc.png'
im = Image.open(source_path).convert('RGBA')

# 1. Background color detection
bg_color = im.getpixel((10, 10))  # approx (117, 24, 45, 255) #75182D
print("Detected BG color:", bg_color)

# 2. Extract emblem (x: 395 to 621, y: 175 to 386)
emblem_crop = im.crop((390, 170, 626, 391))

# 3. Create Favicon / Tab Icon
# Square icon with Shinsei wine red background (#75182D) and centered white emblem
sizes = [16, 32, 48, 64, 128, 180, 192, 512]
base_icon = Image.new('RGBA', (512, 512), (117, 24, 45, 255))

# Resize emblem to fit nicely inside 512x512 (e.g. 340x315)
emblem_w, emblem_h = emblem_crop.size
target_h = 320
target_w = int(emblem_w * (target_h / emblem_h))
emblem_resized = emblem_crop.resize((target_w, target_h), Image.Resampling.LANCZOS)

# Isolate white parts of emblem to paste cleanly
emblem_clean = Image.new('RGBA', (target_w, target_h), (0, 0, 0, 0))
for y in range(target_h):
    for x in range(target_w):
        r, g, b, a = emblem_resized.getpixel((x, y))
        # If pixel is whitish
        if r > 160 and g > 160 and b > 160:
            emblem_clean.putpixel((x, y), (255, 255, 255, 255))
        elif r > 130 and g > 90 and b > 90:
            # anti-aliased edge
            alpha = int(((r + g + b) / 3 - 80) / 120 * 255)
            alpha = max(0, min(255, alpha))
            emblem_clean.putpixel((x, y), (255, 255, 255, alpha))

paste_x = (512 - target_w) // 2
paste_y = (512 - target_h) // 2
base_icon.alpha_composite(emblem_clean, (paste_x, paste_y))

# Save icons in multiple sizes
os.makedirs('d:/Shesei/src/app', exist_ok=True)
os.makedirs('d:/Shesei/public', exist_ok=True)
os.makedirs('d:/Shesei/public/images', exist_ok=True)

# Save 512x512 icon
base_icon.save('d:/Shesei/src/app/icon.png', format='PNG')
base_icon.save('d:/Shesei/public/icon.png', format='PNG')
print("Saved icon.png (512x512)")

# Save apple-icon (180x180)
icon_180 = base_icon.resize((180, 180), Image.Resampling.LANCZOS)
icon_180.save('d:/Shesei/src/app/apple-icon.png', format='PNG')
icon_180.save('d:/Shesei/public/apple-icon.png', format='PNG')
print("Saved apple-icon.png (180x180)")

# Save 32x32 icon
icon_32 = base_icon.resize((32, 32), Image.Resampling.LANCZOS)
icon_32.save('d:/Shesei/public/icon-32.png', format='PNG')

# Save multi-size ICO
ico_images = [
    base_icon.resize((16, 16), Image.Resampling.LANCZOS),
    base_icon.resize((32, 32), Image.Resampling.LANCZOS),
    base_icon.resize((48, 48), Image.Resampling.LANCZOS),
    base_icon.resize((64, 64), Image.Resampling.LANCZOS)
]
ico_images[0].save(
    'd:/Shesei/src/app/favicon.ico',
    format='ICO',
    sizes=[(16, 16), (32, 32), (48, 48), (64, 64)],
    append_images=ico_images[1:]
)
ico_images[0].save(
    'd:/Shesei/public/favicon.ico',
    format='ICO',
    sizes=[(16, 16), (32, 32), (48, 48), (64, 64)],
    append_images=ico_images[1:]
)
print("Saved favicon.ico")

# 4. Create transparent full logo and transparent emblem
# Crop full logo: x: 230 to 795, y: 160 to 505
full_logo = im.crop((230, 160, 795, 505))
full_w, full_h = full_logo.size

# Transparent version with Wine Red color (#75182D) on transparent for Navbar
red_logo_trans = Image.new('RGBA', (full_w, full_h), (0, 0, 0, 0))
# Transparent version with White color on transparent for Footer / Dark mode
white_logo_trans = Image.new('RGBA', (full_w, full_h), (0, 0, 0, 0))

for y in range(full_h):
    for x in range(full_w):
        r, g, b, a = full_logo.getpixel((x, y))
        # Distance from background color
        diff = abs(r - bg_color[0]) + abs(g - bg_color[1]) + abs(b - bg_color[2])
        if diff > 100:
            # White pixel
            intensity = min(255, (r + g + b) // 3)
            alpha = 255 if intensity > 190 else int((intensity / 190) * 255)
            red_logo_trans.putpixel((x, y), (117, 24, 45, alpha))
            white_logo_trans.putpixel((x, y), (255, 255, 255, alpha))

red_logo_trans.save('d:/Shesei/public/images/shinsei-logo-red.png', format='PNG')
white_logo_trans.save('d:/Shesei/public/images/shinsei-logo-white.png', format='PNG')
full_logo.save('d:/Shesei/public/images/shinsei-logo-boxed.png', format='PNG')

# Also create just the emblem mark in red (for inline display next to text)
emblem_mark = red_logo_trans.crop((160, 10, 400, 230))
emblem_mark.save('d:/Shesei/public/images/shinsei-mark-red.png', format='PNG')

emblem_mark_white = white_logo_trans.crop((160, 10, 400, 230))
emblem_mark_white.save('d:/Shesei/public/images/shinsei-mark-white.png', format='PNG')

print("All logo variations and favicon generated successfully!")
