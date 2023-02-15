
all:
	@docker-compose build && docker-compose up -d

build:
	@docker-compose build --no-cache

up:
	@docker-compose up -d

down:
	@docker-compose down

logs:
	@docker-compose logs -f

clean: down
	@rm -rf srcs/node_modules && rm -rf srcs/.next

fclean:	clean
	@docker system prune -af

space:
	@docker system df

re: fclean build

.PHONY:		all build up down logs clean fclean re
