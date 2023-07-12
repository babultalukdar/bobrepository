FROM tomcat:8.0-alpine
LABEL maintainer="talukdar.mca@gmail.com"

ADD target/springsection9-0.0.1-SNAPSHOTS.war /usr/local/tomcat/webapps/

EXPOSE 8083
CMD ["catalina.sh","run"]