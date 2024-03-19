#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_SIZE 10

void displayGrid(char grid[][MAX_SIZE], int size)
{
    printf("\n");
    for (int i = 0; i < size; i++)
        printf("+ - ");
    printf("+\n");
    for (int i = 0; i < size; i++) {
        printf("|");
        for (int j = 0; j < size; j++)
            printf(" %c |", grid[i][j]);
        printf("\n");
        for (int j = 0; j < size; j++) {
            printf("+ - ");
        }
        printf("+\n");
    }
}

int checkWin(char grid[][MAX_SIZE], int size, char player) {
    // Check rows
    for (int i = 0; i < size; i++) {
        int count = 0;
        for (int j = 0; j < size; j++) {
            if (grid[i][j] == player) {
                count++;
            }
        }
        if (count == size) {
            return 1;
        }
    }

    // Check columns
    for (int j = 0; j < size; j++) {
        int count = 0;
        for (int i = 0; i < size; i++) {
            if (grid[i][j] == player) {
                count++;
            }
        }
        if (count == size) {
            return 1;
        }
    }

    // Check diagonals
    int count = 0;
    for (int i = 0; i < size; i++) {
        if (grid[i][i] == player) {
            count++;
        }
    }
    if (count == size) {
        return 1;
    }

    count = 0;
    for (int i = 0; i < size; i++) {
        if (grid[i][size - i - 1] == player) {
            count++;
        }
    }
    if (count == size) {
        return 1;
    }

    return 0;
}

int main(int argc, char *argv[]) {
    char player1 = 'X';
    char player2 = 'O';
    int size = 3;

    // Parse command line arguments
    for (int i = 1; i < argc; i++) {
        if (strcmp(argv[i], "-p1") == 0 && i + 1 < argc)
            player1 = argv[++i][0];
        else if (strcmp(argv[i], "-p2") == 0 && i + 1 < argc)
            player2 = argv[++i][0];
        else if (strcmp(argv[i], "-s") == 0 && i + 1 < argc) {
            size = atoi(argv[++i]);
            if (size < 3 || size > MAX_SIZE)
                return 84;
        }
    }

    if (player1 == player2)
        return 84;

    char grid[MAX_SIZE][MAX_SIZE];
    memset(grid, ' ', sizeof(grid));

    int turn = 0;
    int movesMade = 0;
    while (1) {
        displayGrid(grid, size);
        char player = turn % 2 == 0 ? player1 : player2;
        printf("Player %d> ", turn % 2 + 1);
        int row, col;
        if (scanf("%d,%d", &row, &col) != 2 || row < 0 || row >= size || col < 0 || col >= size || grid[row][col] != ' ') {
            while (getchar() != '\n');
            continue;
        }
        grid[row][col] = player;
        movesMade++;
        if (checkWin(grid, size, player)) {
            displayGrid(grid, size);
            printf("Player %d won!\n", turn % 2 + 1);
            break;
        }
        if (movesMade == size * size) {
            displayGrid(grid, size);
            printf("It's a tie!\n");
            break;
        }
        turn++;
    }

    return 0;
}