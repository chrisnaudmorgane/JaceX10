
def find_opprtunity_data(data, cote_equipe1_field, cote_equipe2_field, min_profit=0.01, min_date=None, min_volume=None):
    opportunities = []
    for pari in data:
        cote_equipe1_site1 = pari[cote_equipe1_field[0]]
        cote_equipe2_site1 = pari[cote_equipe2_field[0]]
        cote_equipe1_site2 = pari[cote_equipe1_field[1]]
        cote_equipe2_site2 = pari[cote_equipe2_field[1]]

        gain_equipe1_site1 = 1 / cote_equipe1_site1
        gain_equipe2_site1 = 1 / cote_equipe2_site1
        gain_equipe1_site2 = 1 / cote_equipe1_site2
        gain_equipe2_site2 = 1 / cote_equipe2_site2

        if gain_equipe1_site1 + gain_equipe2_site2 > 1:
            opportunity = {
                "pari": pari,
                "gain_equipe1_site1": gain_equipe1_site1,
                "gain_equipe2_site1": gain_equipe2_site1,
                "gain_equipe1_site2": gain_equipe1_site2,
                "gain_equipe2_site2": gain_equipe2_site2,
            }
            if _verify_opportunity(opportunity, min_profit, min_date, min_volume):
                opportunities.append(opportunity)
    return opportunities

def _verify_opportunity(opportunity, min_profit, min_date, min_volume):
    gains = (opportunity["gain_equipe1_site1"] + opportunity["gain_equipe2_site2"]) - 1
    if gains < min_profit:
        return False
    return True
