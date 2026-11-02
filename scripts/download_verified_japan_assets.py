import urllib.request
import os

images = {
    # 1. Authentic Japanese Teishoku with Grilled Saba fish, Rice & Miso Soup (Industrial / Canteen set meal)
    'japan-industrial-meal.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bento_box_from_a_grocery_store.jpg/1280px-Bento_box_from_a_grocery_store.jpg',
    
    # 2. Authentic Japanese Makunouchi Bento (Popular meal - schools, offices)
    'japan-popular-meal.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Makunouchi_bento_of_Origin_Bento.jpg/1280px-Makunouchi_bento_of_Origin_Bento.jpg',
    
    # 3. Authentic Kaiseki Dining at Tsukiji Jisaku (Luxury VIP meal)
    'japan-premium-meal.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Jisaku_Kaiseki_Ryori_01.jpg/1280px-Jisaku_Kaiseki_Ryori_01.jpg',
    
    # 4. Authentic Japanese Sukiyaki Banquet Table (Banquet for 6-10 people)
    'japan-banquet-table.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Sukiyaki_01.jpg/1280px-Sukiyaki_01.jpg',
    
    # 5. Authentic Japanese Ekiben Takeaway Bento (Cơm hộp mang đi tiện lợi)
    'japan-takeaway-bento.jpg': 'https://upload.wikimedia.org/wikipedia/commons/5/54/Japan_Pic_1_Bento.jpg',
    
    # 6. Japan Medical Tourism: St. Luke's International Hospital Tokyo
    'japan-medical-travel.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/St_lukes_tokyo_front.jpg/1280px-St_lukes_tokyo_front.jpg',
    
    # 7. Japan Experience: Traditional Outdoor Onsen Hot Spring in Japan
    'japan-experience-travel.jpg': 'https://upload.wikimedia.org/wikipedia/commons/4/41/Onsen_in_Nachikatsuura%2C_Japan.jpg',
    
    # 8. Hero Center Bento: High resolution Japanese bento tray
    'japan-bento-hero.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Makunouchi_bento_of_Origin_Bento.jpg/1280px-Makunouchi_bento_of_Origin_Bento.jpg',
    
    # 9. Japan Golf: Majestic golf course under Mount Fuji
    'japan-golf-travel.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg/1280px-View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg'
}

for filename, url in images.items():
    dest = os.path.join('d:/Shesei/public/images', filename)
    print(f"Downloading {filename}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'ShinseiApp/1.0 (https://shinsei.vn; info@shinsei.vn)'})
        with urllib.request.urlopen(req) as resp, open(dest, 'wb') as f:
            f.write(resp.read())
        print(f"Saved {filename} ({os.path.getsize(dest)} bytes)")
    except Exception as e:
        print(f"Failed {filename}: {e}")
