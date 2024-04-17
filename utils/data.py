from config import DATA_DIR
import csv
from pathlib import Path

def save_data_to_csv(data, filename):
    file_path = Path(DATA_DIR) / filename
    with open(file_path, 'w', newline='') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=data[0].keys())
        writer.writeheader()
        writer.writerows(data)

def load_data_from_csv(filename):
    file_path = Path(DATA_DIR) / filename
    data = []
    with open(file_path, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            data.append(row)
    return data

