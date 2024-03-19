/*
** EPITECH PROJECT, 2024
** fles
** File description:
** files
*/

#include <unistd.h>
#include <stdio.h>
#include <signal.h>
#include <stdlib.h>
#include <stdio.h>

int kill_it(int i)
{
    kill(i, SIGQUIT);
    return 0;
}

int processor_info(void)
{
    int a = getpid();
    int b = getpid();
    int d = getppid();
    int c = getpgid(0);
    printf("%d\n %d\n %d\n", a, b);
    return 0;
}

int who_sig_me(int i)
{
    printf("");
}

int main(int ac, char **av)
{
    kill_it(atoi(av[1]));
    processor_info();
    return 0;
}
