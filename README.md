# Personal portfolio website 

www.joshzhu.live

yes

# Steps on how to update website from terminal (git bash) - this is lwk a reminder for myself
1: 
open terminal

2: (make sure ssh key is in same local directory)

ssh -i ~/.ssh/ssh-key-2025-08-07.key ubuntu@129.80.144.77

3: (once inside)

cd /var/www/html

git pull origin main

4:

npm install

npm run build

4.5: IF it creates a new build folder:

sudo mv /var/www/html/build/* /var/www/html/

sudo mv /var/www/html/build/.* /var/www/html/ 2>/dev/null || true

5:

sudo chown -R www-data:www-data /var/www/html

sudo chmod -R 755 /var/www/html

6:

sudo systemctl restart nginx
