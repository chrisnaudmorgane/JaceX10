import webbrowser
import requests
from bs4 import BeautifulSoup

url = 'https://my.epitech.eu/index.html#y/2023'

response = requests.get(url)

if response.ok:
    soup = BeautifulSoup(response.text)
    title = soup.find('title')
    print(title.text)