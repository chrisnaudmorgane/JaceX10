/*
** EPITECH PROJECT, 2024
** segfault
** File description:
** segfault
*/

#include "include/my.h"

int error_exec(char *cmd)
{
    if (access(cmd, X_OK) == -1) {
        write(1, cmd, my_strlen(cmd));
        write(1, ": Command not found.\n", 22);
        return 2;
    }
    return 1;
}

int sig_handler(int signo)
{
    if (signo == SIGSEGV) {
        write(1, "Segmentation fault\n", 19);
    } else {
        if (signo == SIGFPE) {
            write(1, "Floating point exception (core dumped)\n", 39);
            return 1;
        }
    }
}

int exec_bin(char *command, char **parameters, char **env)
{
    int status;

    if (strncmp(command, "./", 2) == 0) {
        if (error_exec(command) == 2) return 0;
        if (fork() == 0)
            execve(command, parameters, env);
        wait(&status);
        if (sig_handler(status) == 1) return 1;
    }
    return 0;
}

char **norme_stock(char **env, char **copy_env)
{
    int i, j;
    i = 0;
    while (env[i] != NULL) {
        j = 0;
        while (env[i][j] != '\0')
            j++;
        if ((copy_env[i] = malloc(sizeof(char) * (j + 1))) == NULL)
            exit(1);
        j = 0;
        while (env[i][j] != '\0') {
            copy_env[i][j] = env[i][j];
            j++;
        }
        copy_env[i][j] = '\0';
        i++;
    }
    return (copy_env);
}

char **copy_line(char **copy_env, int i, char *str, char *path)
{
    int j, k;
    j = 0, k = 0;
    while (str != NULL && str[j] != '\0') {
        copy_env[i][k] = str[j];
        k++; j++;
    }
    j = 0;
    copy_env[i][k] = '='; k++;
    while (path != NULL && path[j] != '\0') {
        copy_env[i][k] = path[j];
        k++; j++;
    }
    copy_env[i][k] = '\0';
    return (copy_env);
}

char **new_line(char *str, char **copy_env, char *path, int i)
{
    int j, k;
    j = 0, k = 0;
    while (str != NULL && str[j] != '\0')
        j++;
    while (path != NULL && path[k] != '\0')
        k++;
    if ((copy_env[i] = malloc(sizeof(char) * (j + k + 2))) == NULL)
        exit(1);
    copy_env = copy_line(copy_env, i, str, path);
    j = 0, k = 0;
    return (copy_env);
}

char **stock_env(char **env, int size, char *str, char *path)
{
    char **copy_env;
    int i = 0;
    while (env[i] != NULL)
        i++;
    if ((copy_env = malloc(sizeof(char *) * (i + size + 1))) == NULL)
        exit(1);
    copy_env[i + size] = NULL;
    copy_env = norme_stock(env, copy_env);
    if (str != NULL)
        copy_env = new_line(str, copy_env, path, i + size - 1);
    return (copy_env);
}

char **my_setenv(char **opt, char **env)
{
    char *path, *str; int j = 0;
    if (opt[3]) {
        write(1, "setenv: Too many arguments.\n", 28);
    } else if (opt[1] != NULL) {
        str = opt[1];
        path = opt[2];
        env = can_i_replace(path, env, str);
    } else
        while (env[j] != NULL) {
            write(1, env[j], my_strlen(env[j]));
            write(1, "\n", 1);
            j++;
        }
    return (env);
}

char *copy_str(char *str, char *copy, int *j)
{
    int k;
    k = 0;
    while (copy != NULL && copy[k] != '\0') {
        str[*j] = copy[k];
        *j++; k++;
    }
    return (str);
}

char **replace_this(char **env, char *path, char *replace, int *i)
{
    int j;
    if ((env[*i] = malloc(sizeof(char) * (my_strlen(path) + 1 +
    my_strlen(replace) + 1))) == NULL)
        exit(1);
    j = 0;
    env[*i] = copy_str(env[*i], path, &j); env[*i][j] = '=';
    j++;
    env[*i] = copy_str(env[*i], replace, &j); env[*i][j] = '\0';
    return (env);
}

int my_strcmp_equal(char *s1, char *s2)
{
    int i = 0;
    while (s1[i] == s2[i] && s1[i] != '\0' && s2[i] != '=' && s2[i] != '\0')
        i ++;
    if (s1[i] == '\0' && s2[i] == '=') return (1);
    return (0);
}

char **can_i_replace(char *path, char **env, char *replace)
{
    int i;
    i = 0;
    while (env[i] != NULL && my_strcmp_equal(replace, env[i]) != 1)
        i = i + 1;
    if (env[i] != NULL) {
        env = replace_this(env, replace, path, &i);
        return (env);
    } else {
        env = stock_env(env, 1, replace, path);
        return (env);
    }
    return (0);
}
