def find_opprtunity_data(data):
    opportunity = []
    for pari in data:
        cote_equipe1_site_1 = pari['cote_equipe1_site_1']
        cote_equipe2_site_1 = pari['cote_equie2_site_1']
        cote_equipe1_site_2 = pari['cote_equipe1_site_1']
        cote_equipe2_site_2 = pari['cote_equipe_site_2']

        gains_equipe1_site1 = 1 / cote_equipe1_site_1
        gains_equipe2_site1 = 1 / cote_equipe2_site_1
        gains_equipe1_site2 = 1 / cote_equipe1_site_2
        gains_equipe2_site2 = 1 / cote_equipe2_site_2

        if gains_equipe1_site1 + gains_equipe2_site2 > 1:
            opportunity.append({
        "pari": pari,
        "gain_equipe1_site1": gains_equipe1_site1,
        "gain_equipe2_site1": gains_equipe2_site1,
        "gain_equipe1_site2": gains_equipe1_site2,
        "gain_equipe2_site2": gains_equipe2_site2,
        })