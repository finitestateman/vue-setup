# Nginx 최신 버전 기반 이미지 사용
FROM nginx:latest

COPY dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]