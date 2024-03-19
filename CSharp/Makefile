##
## EPITECH PROJECT, 2023
## Makefile
## File description:
## 101pong
##

NAME = mysh

SRC = my_putchar.c \
		my_strlen.c \
		my_strcmp.c \
		my_strcpy.c \
		my_putstr.c \
		my_strdup.c \
		mini.c \
		segfault.c \
		my_strcat.c \
		my_strncmp.c \
		my_getenv.c \
		CaseOfError.c

OBJ = $(SRC:.c=.o)

autre  =  *~ \
		*.log \
		a.out \
		*.gcov \
		*.gcno \
		*.gcda \

all: $(NAME)

$(NAME):	$(OBJ)
		gcc -o $(NAME) main.c $(OBJ)

clean:
	rm -f $(OBJ)
fclean: clean
	rm -f $(NAME) $(autre) unit_tests

re: fclean all

unit_tests: 	fclean $(NAME)
			gcc $(SRC) tests/test/*.c -o unit_tests\
			-coverage -lcriterion -lgcov

tests_run:	unit_tests
	./unit_tests
	gcovr
	gcovr --exclude tests/test
	gcovr --exclude tests/test/ --branches
