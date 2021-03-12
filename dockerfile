FROM mysql:5
ENV MYSQL_DATABASE DB
ENV MYSQL_ROOT_PASSWORD root
COPY ./pr-inpt-database.sql /docker-entrypoint-initdb.d/
EXPOSE 3306
