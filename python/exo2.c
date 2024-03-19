#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX_POKEMON 100
#define MAX_LINE 256

typedef struct {
    char name[MAX_LINE];
    int attack;
    int defense;
    int speed;
    int health;
} Pokemon;

void load_pokemon_data(Pokemon pokemon_list[], int *count, const char *filename);
int compare_pokemon_names(const void *a, const void *b);
void display_pokemon(const Pokemon *pokemon);
void simulate_fight(const Pokemon *p1, const Pokemon *p2);

int main(int argc, char *argv[]) {
    if (argc != 3)
        return 84;

    Pokemon pokemon_list[MAX_POKEMON];
    int pokemon_count = 0;

    load_pokemon_data(pokemon_list, &pokemon_count, "pokecfg/pikachu");
    load_pokemon_data(pokemon_list, &pokemon_count, "pokecfg/pidgeotto");
    qsort(pokemon_list, pokemon_count, sizeof(Pokemon), compare_pokemon_names);

    for (int i = 0; i < pokemon_count; i++) {
        display_pokemon(&pokemon_list[i]);
    }

    const Pokemon *p1 = NULL;
    const Pokemon *p2 = NULL;

    for (int i = 0; i < pokemon_count; i++) {
        if (strcmp(pokemon_list[i].name, argv[1]) == 0) {
            p1 = &pokemon_list[i];
        } else if (strcmp(pokemon_list[i].name, argv[2]) == 0) {
            p2 = &pokemon_list[i];
        }
    }

    if (p1 == NULL || p2 == NULL) {
        fprintf(stderr, "Error: Invalid Pokemon name(s)\n");
        return 84;
    }

    simulate_fight(p1, p2);

    return 0;
}

void load_pokemon_data(Pokemon pokemon_list[], int *count, const char *filename) {
    FILE *file = fopen(filename, "r");
    if (file == NULL) {
        fprintf(stderr, "Error: Failed to open file %s\n", filename);
        return;
    }

    char line[MAX_LINE];
    while (fgets(line, MAX_LINE, file) != NULL) {
        if (line[0] == '#' || *count >= MAX_POKEMON) {
            continue;
        }

        char name[MAX_LINE];
        int attack, defense, speed, health;
        if (sscanf(line, "%[^;];%d;%d;%d;%d", name, &attack, &defense, &speed, &health) == 5) {
            strncpy(pokemon_list[*count].name, name, MAX_LINE);
            pokemon_list[*count].attack = attack;
            pokemon_list[*count].defense = defense;
            pokemon_list[*count].speed = speed;
            pokemon_list[*count].health = health;
            (*count)++;
        }
    }

    fclose(file);
}

int compare_pokemon_names(const void *a, const void *b) {
    const Pokemon *p1 = (const Pokemon *)a;
    const Pokemon *p2 = (const Pokemon *)b;
    return strcasecmp(p1->name, p2->name);
}

void display_pokemon(const Pokemon *pokemon) {
    printf("Pokemon %s has %d attack, %d defense, %d speed and %d health\n",
        pokemon->name, pokemon->attack, pokemon->defense, pokemon->speed, pokemon->health);
}

void simulate_fight(const Pokemon *p1, const Pokemon *p2) {
    const Pokemon *attacker, *defender;
    if (p1->speed >= p2->speed) {
        attacker = p1;
        defender = p2;
    } else {
        attacker = p2;
        defender = p1;
    }

    int p1_health = p1->health;
    int p2_health = p2->health;

    while (p1_health > 0 && p2_health > 0) {
        int damage = rand() % (attacker->attack + 1);
        int blocked_damage = defender->defense;
        int remaining_damage = damage - blocked_damage;
        if (remaining_damage < 0) {
            remaining_damage = 0;
        }

        printf("%s attacks for %d damage\n", attacker->name, damage);
        printf("%s blocks %d damage\n", defender->name, blocked_damage);
        if (remaining_damage > 0) {
            printf("%s loses %d health (%d left)\n", defender->name, remaining_damage,
                (attacker == p1) ? (p2_health -= remaining_damage) : (p1_health -= remaining_damage));
        }
        if (attacker == p1) {
            attacker = p2;
            defender = p1;
        } else {
            attacker = p1;
            defender = p2;
        }
    }
    if (p1_health <= 0) {
        printf("%s is KO\n", p1->name);
        printf("%s wins the fight!\n", p2->name);
    } else {
        printf("%s is KO\n", p2->name);
        printf("%s wins the fight!\n", p1->name);
    }
}
