/*
** EPITECH PROJECT, 2024
** maic
** File description:
** main
*/

#include "include/my.h"

int main(int argc, char **argv, char **env)
{
    // if (argc > 1)
    //     return 84;
    char cmd[1000], commands[1000], *parameters[1000];
    env = stock_env(env, 0, NULL, NULL);
    for(;;){
        type_promt();
        int space = read_command(commands, parameters);
        if (space == -1) break;
        if (space == 2) continue;
        if (my_strcmp(commands, "setenv") == 0)
            env = my_setenv(parameters, env);
        exec_bin(commands, parameters, env);
        Tapping(cmd, commands, parameters, env);
        if (my_strcmp(commands, "exit") == 0)
            write(1, "exit\n", 6); break;
    }
    return 0;
}

void type_promt(void)
{
    write(1, NAME, my_strlen(NAME));
}

int read_command(char cmd[], char *par[])
{
    char *line = NULL;
    size_t count = 0, i = 0, j = 0, nread = 0;
    char *array[1000], *pch;
    nread = getline(&line, &count, stdin);
    if (nread == -1) return -1;
    if (line[0] == '\n') return 2;
    pch = strtok(line, " \n\t");
    while (pch != NULL) {
        array[i++] = my_strdup(pch);
        pch = strtok(NULL, " \n\t");
    }
    my_strcpy(cmd, array[0]);
    for (; j < i; j++)
        par[j] = array[j];
    par[i] = NULL;
}
