import os
import shutil
from PIL import Image

src_dir = 'C:/Users/vyln2/.gemini/antigravity/brain/bea457f1-5495-4607-8397-97588dc28f48/.user_uploaded'
dest_dir = 'd:/Shesei/public/images'

# 1. Hero Left Card: Shinsei Cups (media_1793728245121_deb27ce3.png)
cups_src = os.path.join(src_dir, 'media_1793728245121_deb27ce3.png')
im_cups = Image.open(cups_src)
im_cups.save(os.path.join(dest_dir, 'shinsei-hero-cups.png'), 'PNG')
im_cups.convert('RGB').save(os.path.join(dest_dir, 'shinsei-hero-cups.jpg'), 'JPEG', quality=95)
print("Saved shinsei-hero-cups.png/.jpg")

# 2. Hero Center Card: Shinsei Bento & Kitchen (media_1793728211542_8c2a6ac4.png)
bento_src = os.path.join(src_dir, 'media_1793728211542_8c2a6ac4.png')
im_bento = Image.open(bento_src)
im_bento.save(os.path.join(dest_dir, 'shinsei-hero-bento-kitchen.png'), 'PNG')
im_bento.convert('RGB').save(os.path.join(dest_dir, 'shinsei-hero-bento-kitchen.jpg'), 'JPEG', quality=95)
print("Saved shinsei-hero-bento-kitchen.png/.jpg")

# 3. Hero Right Card: Shinsei Packaging & Pastry Boxes (media_1793728231759_8c510d1c.png)
pack_src = os.path.join(src_dir, 'media_1793728231759_8c510d1c.png')
im_pack = Image.open(pack_src)
im_pack.save(os.path.join(dest_dir, 'shinsei-hero-packaging.png'), 'PNG')
im_pack.convert('RGB').save(os.path.join(dest_dir, 'shinsei-hero-packaging.jpg'), 'JPEG', quality=95)
print("Saved shinsei-hero-packaging.png/.jpg")

# 4. Zoomed Ms. Trang portrait
trang_src = os.path.join(src_dir, 'media_1793727109560_2db66fd9.png')
im_trang = Image.open(trang_src).convert('RGB')
box = (325, 220, 765, 660) # 440x440
head_crop = im_trang.crop(box)
head_crop.save(os.path.join(dest_dir, 'shinsei-trang-zoomed.jpg'), 'JPEG', quality=95)
print("Saved shinsei-trang-zoomed.jpg")
