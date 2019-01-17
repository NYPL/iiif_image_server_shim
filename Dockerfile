FROM nginx:1.15.8

ADD ./provisioning/nginx_conf_local.conf /etc/nginx/nginx.conf
ADD ./provisioning/images_proxy_local.conf /etc/nginx/conf.d/
ADD ./provisioning/image_server_to_iiif.js /etc/nginx/conf.d/
RUN rm /etc/nginx/conf.d/default.conf
