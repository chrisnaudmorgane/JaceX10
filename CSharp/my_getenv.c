/*
** EPITECH PROJECT, 2024
** files
** File description:
** files
*/

#include "include/my.h"

char *CutVariableOfEnvironnement(char *env)
{
    int i= 0;
    int j = 0;
    char *str;

    str = malloc(sizeof(char) * my_strlen(env));
    while (env[i] != '='){
        i++;
        i++;
    }
    while(env[i] != '\0'){
        str[j] = env[i];
        i++;
        j++;
    }
    str[j] = '\0';
    free(str);
    return str;
}

char *my_getenv(char **env, char *str)
{
    int i = 0;
    char *b;

    if (env == NULL){
        write(1, "No environment\n", 15);
        return NULL;
    }
    while(env[i] != NULL){
        if (env[i][0] == str[0] && env[i][1] == str[1] &&
            env[i][2] == str[2]) {
                b = CutVariableOfEnvironnement(env[i]);
                return b;
            }
        i++;
    }
}
