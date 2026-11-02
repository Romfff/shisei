import urllib.request
import json
import os

os.makedirs('d:/Shesei/public/images', exist_ok=True)

def search_commons(query):
    url = f'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch={urllib.parse.quote(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url|size&format=json'
    req = urllib.request.Request(url, headers={'User-Agent': 'ShinseiApp/1.0 (contact@shinsei.vn)'})
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        pages = data.get('query', {}).get('pages', {})
        results = []
        for pid, pinfo in pages.items():
            title = pinfo.get('title', '')
            ii = pinfo.get('imageinfo', [{}])[0]
            u = ii.get('url')
            w = ii.get('width', 0)
            h = ii.get('height', 0)
            if u and (u.lower().endswith('.jpg') or u.lower().endswith('.jpeg')) and w >= 1000:
                results.append({'title': title, 'url': u, 'width': w, 'height': h})
        return results

queries = {
    'japan-bento-hero': 'Shaba Shioyaki Teishoku',
    'japan-industrial-meal': 'Teishoku',
    'japan-popular-meal': 'Makunouchi bento',
    'japan-premium-meal': 'Kaiseki',
    'japan-banquet-table': 'Sukiyaki nabe',
    'japan-takeaway-bento': 'Ekiben',
    'japan-cafe-counter': 'Kissaten Tokyo cafe',
    'japan-medical-travel': 'MRI scanner hospital',
    'japan-golf-travel': 'Golf course Mount Fuji',
    'japan-experience-travel': 'Kiyomizudera Kyoto'
}

for key, q in queries.items():
    print(f"Searching for {key} with query '{q}'...")
    items = search_commons(q)
    if not items:
        # fallback broader
        items = search_commons(q.split()[0])
    if items:
        chosen = items[0]
        print(f"  -> Selected: {chosen['title']} ({chosen['width']}x{chosen['height']})")
        try:
            req = urllib.request.Request(chosen['url'], headers={'User-Agent': 'ShinseiApp/1.0 (contact@shinsei.vn)'})
            with urllib.request.urlopen(req) as r, open(f'd:/Shesei/public/images/{key}.jpg', 'wb') as out_f:
                out_f.write(r.read())
            print(f"  -> Saved d:/Shesei/public/images/{key}.jpg")
        except Exception as e:
            print(f"  -> Download failed: {e}")
    else:
        print(f"  -> No image found for {q}")
