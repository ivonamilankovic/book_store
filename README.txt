
docker compose build
docker compose up -d

ako nema vendor i var foldera:
u compose.json se instalira composer.phar i onda se instalira sa: 
php composer.phar install


treba postaviti var da je pristupacan:
sudo chmod -R 777 var/cache var/log