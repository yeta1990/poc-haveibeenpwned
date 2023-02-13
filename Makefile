
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
	@docker system prune -af

fclean:	clean
	@docker volume rm cs_srcs

space:
	@docker system df

re: fclean build

.PHONY:		all build up down logs clean fclean re
