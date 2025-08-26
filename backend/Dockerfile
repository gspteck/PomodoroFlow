# BUILD => sudo docker compose build
# RUN => sudo docker compose up -d

FROM php:8.3-fpm

#  Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    git

#  Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install gd pdo_mysql

#  Set working directory
WORKDIR /var/www

#  Copy application code into Docker container
COPY . /var/www

#  Install composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

#  Install composer dependencies
RUN composer install #--no-dev --optimize-autoloader

#  Set permissions for web server access
RUN chown -R www-data:www-data /var/www
