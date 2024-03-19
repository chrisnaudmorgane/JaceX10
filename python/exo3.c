#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <time.h>

#define MAX_WORDS 100
#define MAX_WORD_LEN 20
#define MAX_GRID_SIZE 20
#define MIN_GRID_SIZE 4

int load_words(const char *filename, char words[][MAX_WORD_LEN + 1], int *num_words);
void fill_grid(char grid[][MAX_GRID_SIZE], int size, char words[][MAX_WORD_LEN + 1], int num_words, int *num_inserted);
void print_grid(char grid[][MAX_GRID_SIZE], int size);
int is_valid_position(char grid[][MAX_GRID_SIZE], int size, int row, int col, int dx, int dy, const char *word);
void insert_word(char grid[][MAX_GRID_SIZE], int row, int col, int dx, int dy, const char *word);
void randomize_grid(char grid[][MAX_GRID_SIZE], int size, int num_inserted);

int main(int argc, char *argv[]) {
    if (argc < 3 || strcmp(argv[1], "-f") != 0) {
        fprintf(stderr, "Usage: %s -f FILE [-s SIZE]\n", argv[0]);
        return 84;
    }

    char words[MAX_WORDS][MAX_WORD_LEN + 1];
    int num_words = 0;
    if (!load_words(argv[2], words, &num_words)) {
        fprintf(stderr, "Error: Failed to load words from file %s\n", argv[2]);
        return 84;
    }

    int size = 8;
    if (argc > 4 && strcmp(argv[3], "-s") == 0) {
        size = atoi(argv[4]);
        if (size < MIN_GRID_SIZE || size > MAX_GRID_SIZE) {
            fprintf(stderr, "Error: Grid size must be between %d and %d\n", MIN_GRID_SIZE, MAX_GRID_SIZE);
            return 84;
        }
    }

    char grid[MAX_GRID_SIZE][MAX_GRID_SIZE];
    int num_inserted = 0;
    fill_grid(grid, size, words, num_words, &num_inserted);

    printf("%d/%d words inserted in the grid.\n", num_inserted, num_words);
    print_grid(grid, size);

    return 0;
}

int load_words(const char *filename, char words[][MAX_WORD_LEN + 1], int *num_words) {
    FILE *file = fopen(filename, "r");
    if (!file) {
        return 0;
    }

    char word[MAX_WORD_LEN + 1];
    while (fgets(word, MAX_WORD_LEN + 1, file) != NULL && *num_words < MAX_WORDS) {
        word[strcspn(word, "\r\n")] = '\0';  // Remove newline characters
        if (strlen(word) <= MAX_WORD_LEN) {
            strcpy(words[*num_words], word);
            (*num_words)++;
        }
    }

    fclose(file);
    return 1;
}

void fill_grid(char grid[][MAX_GRID_SIZE], int size, char words[][MAX_WORD_LEN + 1], int num_words, int *num_inserted) {
    srand(time(NULL));  // Seed the random number generator

    for (int i = 0; i < num_words; i++) {
        int row, col, dx, dy;
        do {
            row = rand() % size;
            col = rand() % size;
            dx = rand() % 3 - 1;  // -1, 0, or 1
            dy = rand() % 3 - 1;  // -1, 0, or 1
            if (dx == 0 && dy == 0) {
                continue;  // Skip (0, 0) direction
            }
        } while (!is_valid_position(grid, size, row, col, dx, dy, words[i]));

        insert_word(grid, row, col, dx, dy, words[i]);
        (*num_inserted)++;
    }

    randomize_grid(grid, size, *num_inserted);
}

void print_grid(char grid[][MAX_GRID_SIZE], int size) {
    printf("+");
    for (int i = 0; i < size; i++) {
        printf("+");
    }
    printf("+\n");

    for (int row = 0; row < size; row++) {
        printf("|");
        for (int col = 0; col < size; col++) {
            printf("%c", grid[row][col]);
        }
        printf("|\n");
    }

    printf("+");
    for (int i = 0; i < size; i++) {
        printf("+");
    }
    printf("+\n");
}

int is_valid_position(char grid[][MAX_GRID_SIZE], int size, int row, int col, int dx, int dy, const char *word) {
    int len = strlen(word);
    for (int i = 0; i < len; i++) {
        int r = row + i * dy;
        int c = col + i * dx;
        if (r < 0 || r >= size || c < 0 || c >= size || (grid[r][c] != '\0' && grid[r][c] != word[i])) {
            return 0;
        }
    }
    return 1;
}

void insert_word(char grid[][MAX_GRID_SIZE], int row, int col, int dx, int dy, const char *word) {
    int len = strlen(word);
    for (int i = 0; i < len; i++) {
        int r = row + i * dy;
        int c = col + i * dx;
        grid[r][c] = word[i];
    }
}

void randomize_grid(char grid[][MAX_GRID_SIZE], int size, int num_inserted) {
    for (int row = 0; row < size; row++) {
        for (int col = 0; col < size; col++) {
            if (grid[row][col] == '\0') {
                grid[row][col] = 'a' + rand() % 26;
            }
        }
    }
}