/*
** EPITECH PROJECT, 2024
** files
** File description:
** files
*/

#include "include/my.h"

int ChangeDirectory(char *str, char **env)
{
    if (my_strcmp(str, "--") == 0 || my_strcmp(str, "~") == 0 ) {
        chdir(my_getenv(env, "HOME"));
        return 0;
    }
    if (my_strcmp(str, "-") == 0) {
        chdir(my_getenv(env, "OLDPWD"));
        return 0;
    }
    if (error_arg_cd(str) == 2)
        return 0;
    if (chdir(str) != 0) {
        write(1, str, my_strlen(str));
        write(1, ": Not a directory.\n", 20);
    }
}

int Tapping(char *str, char *Command, char **env, char *path[])
{
    if(fork() == 0){
        my_strcpy(str, "/bin/");
        my_strcat(str, Command);
        verify(str, Command, env, path);
        exit(0);
    }
    wait(NULL);
}
