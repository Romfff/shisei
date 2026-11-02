from PIL import Image
import os

os.makedirs('d:/Shesei/public/images', exist_ok=True)

# 1. Uniforms from media_1793580741606_96f7c802.jpg
# Size: (1024, 853)
im_uniform = Image.open('C:/Users/vyln2/.gemini/antigravity/brain/bea457f1-5495-4607-8397-97588dc28f48/.user_uploaded/media_1793580741606_96f7c802.jpg')
uw, uh = im_uniform.size

# Café staff pair (top left box): x: 0 to ~415, y: ~35 to ~440
cafe_staff = im_uniform.crop((0, 35, int(uw * 0.41), int(uh * 0.515)))
cafe_staff.save('d:/Shesei/public/images/shinsei-staff-coffee.jpg', quality=95)
print("Saved shinsei-staff-coffee.jpg")

# Kitchen chefs pair (bottom left box): x: 0 to ~415, y: ~480 to ~840
kitchen_chefs = im_uniform.crop((0, int(uh * 0.53), int(uw * 0.415), int(uh * 0.845)))
kitchen_chefs.save('d:/Shesei/public/images/shinsei-staff-kitchen.jpg', quality=95)
print("Saved shinsei-staff-kitchen.jpg")

# 2. Brochure from media_1793580754660_a2778aa7.jpg
# Size: (1024, 682) - 8 pages
im_brochure = Image.open('C:/Users/vyln2/.gemini/antigravity/brain/bea457f1-5495-4607-8397-97588dc28f48/.user_uploaded/media_1793580754660_a2778aa7.jpg')
bw, bh = im_brochure.size
pw = bw / 4.0
ph = bh / 2.0

# CEO Portrait (Page 02 - top row, 2nd column)
# Page 02 is x: 256 to 512, y: 0 to 341
# CEO circle photo is roughly at x: 275 to 390, y: 65 to 250
ceo = im_brochure.crop((int(pw * 1.05), int(ph * 0.18), int(pw * 1.55), int(ph * 0.73)))
ceo.save('d:/Shesei/public/images/shinsei-ceo.jpg', quality=95)
print("Saved shinsei-ceo.jpg")

# Page 01: Modern dining hall + bento
dining_cover = im_brochure.crop((0, 0, int(pw), int(ph)))
dining_cover.save('d:/Shesei/public/images/shinsei-dining-cover.jpg', quality=95)
print("Saved shinsei-dining-cover.jpg")

# Page 01 bento tray close up: x: 80 to 245, y: 190 to 330
bento_hero_crop = im_brochure.crop((int(pw * 0.3), int(ph * 0.58), int(pw * 0.98), int(ph * 0.97)))
bento_hero_crop.save('d:/Shesei/public/images/shinsei-bento-hero.jpg', quality=95)
print("Saved shinsei-bento-hero.jpg")

# Page 04: Suất ăn tập thể: x: 3*pw to 4*pw, y: 40 to 115
suat_tapthe = im_brochure.crop((int(pw * 3.05), int(ph * 0.18), int(pw * 3.52), int(ph * 0.38)))
suat_tapthe.save('d:/Shesei/public/images/shinsei-suat-tapthe.jpg', quality=95)
print("Saved shinsei-suat-tapthe.jpg")

# Page 04: Suất ăn cao cấp: x: 3*pw to 4*pw, y: 130 to 205
suat_caocap = im_brochure.crop((int(pw * 3.05), int(ph * 0.43), int(pw * 3.52), int(ph * 0.63)))
suat_caocap.save('d:/Shesei/public/images/shinsei-suat-caocap.jpg', quality=95)
print("Saved shinsei-suat-caocap.jpg")

# Page 04: Cơm hộp mang đi: x: 3*pw to 4*pw, y: 220 to 295
com_hop = im_brochure.crop((int(pw * 3.05), int(ph * 0.68), int(pw * 3.52), int(ph * 0.88)))
com_hop.save('d:/Shesei/public/images/shinsei-com-hop.jpg', quality=95)
print("Saved shinsei-com-hop.jpg")

# Page 06: Xe vận chuyển Shinsei (trucks with drivers)
# Bottom row, 2nd column: x: pw to 2*pw, y: ph to 2*ph
truck = im_brochure.crop((int(pw * 1.55), int(ph * 1.74), int(pw * 1.98), int(ph * 1.94)))
truck.save('d:/Shesei/public/images/shinsei-truck.jpg', quality=95)
print("Saved shinsei-truck.jpg")

# Page 06: Mẫu lưu thức ăn 24h
mau_luu = im_brochure.crop((int(pw * 1.05), int(ph * 1.74), int(pw * 1.50), int(ph * 1.94)))
mau_luu.save('d:/Shesei/public/images/shinsei-mau-luu.jpg', quality=95)
print("Saved shinsei-mau-luu.jpg")
