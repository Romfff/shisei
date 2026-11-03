import os
import shutil
from PIL import Image

src_dir = 'C:/Users/vyln2/.gemini/antigravity/brain/bea457f1-5495-4607-8397-97588dc28f48/.user_uploaded'
dest_dir = 'd:/Shesei/public/images'

# 1. Cups & Beverages
cups_src = os.path.join(src_dir, 'media_1793725962803_293d304e.png')
cups_im = Image.open(cups_src)
cups_im.save(os.path.join(dest_dir, 'shinsei-cups-beverages.png'), 'PNG')
cups_im.convert('RGB').save(os.path.join(dest_dir, 'shinsei-cups-beverages.jpg'), 'JPEG', quality=95)
print("Saved shinsei-cups-beverages.png/.jpg")

# 2. Packaging & Bags & Boxes
pack_src = os.path.join(src_dir, 'media_1793725924171_fe5260c9.png')
pack_im = Image.open(pack_src)
pack_im.save(os.path.join(dest_dir, 'shinsei-packaging.png'), 'PNG')
pack_im.convert('RGB').save(os.path.join(dest_dir, 'shinsei-packaging.jpg'), 'JPEG', quality=95)
print("Saved shinsei-packaging.png/.jpg")

# 3. Service & Cafe Polo Uniform
polo_src = os.path.join(src_dir, 'media_1793725907056_8ab1a652.png')
polo_im = Image.open(polo_src)
polo_im.save(os.path.join(dest_dir, 'shinsei-staff-polo.png'), 'PNG')
polo_im.convert('RGB').save(os.path.join(dest_dir, 'shinsei-staff-polo.jpg'), 'JPEG', quality=95)
# Also update the legacy reference shinsei-staff-coffee.jpg with this clearer image
polo_im.convert('RGB').save(os.path.join(dest_dir, 'shinsei-staff-coffee.jpg'), 'JPEG', quality=95)
print("Saved shinsei-staff-polo.png/.jpg and updated shinsei-staff-coffee.jpg")

# 4. Chef Kitchen Uniform
chef_src = os.path.join(src_dir, 'media_1793726021661_6b92e844.jpg')
chef_im = Image.open(chef_src)
chef_im.save(os.path.join(dest_dir, 'shinsei-uniform-chef-guide.jpg'), 'JPEG', quality=95)

# Also crop just the two chefs for clean display
# In 1024x759, the two chefs are on the left: x: 0 to ~720, y: 0 to 759
w, h = chef_im.size
chef_pair = chef_im.crop((0, 0, int(w * 0.72), h))
chef_pair.save(os.path.join(dest_dir, 'shinsei-staff-chef.jpg'), 'JPEG', quality=95)
chef_pair.save(os.path.join(dest_dir, 'shinsei-staff-kitchen.jpg'), 'JPEG', quality=95)
print("Saved shinsei-staff-chef.jpg and updated shinsei-staff-kitchen.jpg")
