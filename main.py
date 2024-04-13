from notifications.alertes import send_alert

def manage_opportunity(opportunity):
    send_alert(f"Nouvelle opportunité d'arbitrage détectée : {opportunity}")