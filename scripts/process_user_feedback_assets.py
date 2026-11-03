import os
import shutil
from PIL import Image, ImageDraw

src_dir = 'C:/Users/vyln2/.gemini/antigravity/brain/bea457f1-5495-4607-8397-97588dc28f48/.user_uploaded'
dest_dir = 'd:/Shesei/public/images'

# 1. Chairman Trang photo (1024x1024)
trang_src = os.path.join(src_dir, 'media_1793727109560_2db66fd9.png')
im_trang = Image.open(trang_src)
im_trang.convert('RGB').save(os.path.join(dest_dir, 'shinsei-chairman-trang.jpg'), 'JPEG', quality=95)
im_trang.convert('RGB').save(os.path.join(dest_dir, 'shinsei-ceo.jpg'), 'JPEG', quality=95)

# Also create a circular-ready crop focusing on Ms. Trang's head & upper body
# Center is x: ~550, y: ~480
w, h = im_trang.size
crop_size = 680
left = int(w * 0.22)
top = int(h * 0.16)
right = left + crop_size
bottom = top + crop_size
trang_head_crop = im_trang.crop((left, top, right, bottom))
trang_head_crop.convert('RGB').save(os.path.join(dest_dir, 'shinsei-chairman-portrait.jpg'), 'JPEG', quality=95)

# Create a circle PNG with alpha mask
circle_mask = Image.new('L', (crop_size, crop_size), 0)
draw = ImageDraw.Draw(circle_mask)
draw.ellipse((0, 0, crop_size, crop_size), fill=255)
circle_portrait = Image.new('RGBA', (crop_size, crop_size), (0, 0, 0, 0))
circle_portrait.paste(trang_head_crop.convert('RGBA'), (0, 0), mask=circle_mask)
circle_portrait.save(os.path.join(dest_dir, 'shinsei-chairman-circle.png'), 'PNG')
print("Saved Chairman Trang portraits (full, crop, circle)")

# 2. Chef uniform full image (showing front, back, hat details)
chef_src = os.path.join(src_dir, 'media_1793726021661_6b92e844.jpg')
im_chef = Image.open(chef_src)
im_chef.save(os.path.join(dest_dir, 'shinsei-uniform-chef-full.jpg'), 'JPEG', quality=95)
print("Saved shinsei-uniform-chef-full.jpg")

# 3. High-definition Logistics & Transport Truck
# truck_test_0 is a super crisp 1200x800 modern white delivery truck
truck_dest = os.path.join(dest_dir, 'shinsei-truck.jpg')
shutil.copyfile('d:/Shesei/public/images/truck_test_0.jpg', truck_dest)
shutil.copyfile('d:/Shesei/public/images/truck_test_0.jpg', os.path.join(dest_dir, 'shinsei-logistics-truck.jpg'))
print("Updated shinsei-truck.jpg with high-definition modern delivery truck")
