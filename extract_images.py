
import requests
import re
import os

url = 'https://basquiat-capital.ueniweb.com/'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

try:
    print(f"Fetching {url}...")
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    
    content = response.text
    print(f"Content length: {len(content)}")
    
    # Regex for various image sources
    patterns = [
        r'src="([^"]+)"',
        r'data-src="([^"]+)"',
        r'data-bg="([^"]+)"',
        r'background-image:\s*url\([\'"]?([^\'"\)]+)[\'"]?\)',
        r'srcset="([^"]+)"'
    ]
    
    all_urls = []
    
    # scan html
    for pattern in patterns:
        found = re.findall(pattern, content)
        all_urls.extend(found)

    # scan css
    css_links = re.findall(r'<link[^>]+href="([^"]+\.css)"', content)
    print(f"Found {len(css_links)} CSS files.")
    
    for css_href in css_links:
        if not css_href.startswith('http'):
             if css_href.startswith('//'):
                css_url = 'https:' + css_href
             elif css_href.startswith('/'):
                css_url = 'https://basquiat-capital.ueniweb.com' + css_href
             else:
                css_url = 'https://basquiat-capital.ueniweb.com/' + css_href
        else:
            css_url = css_href
            
        try:
            print(f"Scanning CSS: {css_url}")
            css_resp = requests.get(css_url, headers=headers)
            if css_resp.status_code == 200:
                css_images = re.findall(r'url\([\'"]?([^\'"\)]+)[\'"]?\)', css_resp.text)
                all_urls.extend(css_images)
        except Exception as e:
            print(f"Failed to fetch CSS {css_url}: {e}")

    unique_urls = list(set(all_urls))
    
    print(f"Found {len(unique_urls)} unique image URLs:")
    for img_url in unique_urls:
        if not img_url.startswith('http'):
            # Handle relative URLs if any (though ueniweb usually uses absolute CDN links)
            if img_url.startswith('//'):
                img_url = 'https:' + img_url
            elif img_url.startswith('/'):
                img_url = 'https://basquiat-capital.ueniweb.com' + img_url
        print(img_url)

except Exception as e:
    print(f"Error: {e}")
