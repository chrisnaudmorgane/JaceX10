from utils.config import TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
from telegram import Bot

def send_alert(message, recipient=None):
    bot = Bot(token=TELEGRAM_BOT_TOKEN)
    if not recipient:
        recipient = TELEGRAM_CHAT_ID
    try:
        bot.send_message(chat_id=recipient, text=message)
        print(f"Alerte envoyée à {recipient}: {message}")
    except Exception as e:
        print(f"Erreur lors de l'envoi de l'alerte : {e}")