/*
** EPITECH PROJECT, 2024
** files
** File description:
** files
*/

#include "include/my.h"

void CaseOfCd(char *str, char **command, char **env)
{
    int i = 0;

    if (my_strcmp(str, "cd") == 0 && command[1] == NULL)
        chdir(my_getenv(env,"HOME"));
    if (my_strcmp(str, "cd") == 0 && command[1] != NULL) {
        if (command[2])
            write(1, "cd : too many arguments.\n", 25);
        else
            ChangeDirectory(command[1], env);
            
    }
}

int CaseOfError(char *command)
{
    if (my_strcmp(command, "exit") == 0)
        return 0;
    if (my_strcmp(command, "cd") == 0)
        return 0;
    if (my_strcmp(command, "setenv") == 0 ||
        my_strcmp(command, "unsetenv") == 0)
        return 0;
    write(1, command, my_strlen(command));
    write(2, ": Command not found.\n", 21);
    exit(127);
}

int verify(char *cmd, char *command, char **env, char *path[])
{
    if(execve(cmd, path, env) == -1){
        if (CaseOfError(command) == 127)
            return 127;
    }
    return 0;
}

int error_arg_cd(char *cmd)
{
    if (access(cmd, F_OK) == -1) {
        write(1, "cd: ", 4);
        write(1, cmd, my_strlen(cmd));
        write(1, " No such file or directory.\n", 28);
        return 2;
    }
    return 1;
}