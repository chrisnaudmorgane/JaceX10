from utils.data import save_data_to_csv, load_data_from_csv

def scrape_site(url):
    data = [
        {'equipe_1': 'Équipe A', 'equipe_2': 'Équipe B', 'cote_1': 2.5, 'cote_2': 3.0, 'date': '2023-04-12'},
        {'equipe_1': 'Équipe C', 'equipe_2': 'Équipe D', 'cote_1': 1.8, 'cote_2': 4.2, 'date': '2023-04-13'}
    ]
    save_data_to_csv(data, 'donnees_paris.csv')
    return data

def analyse_opportunites():
    data = load_data_from_csv('donnees_paris.csv')
    return data

