FROM tomcat:8.0-alpine
LABEL maintainer="talukdar.mca@gmail.com"

ADD **/target/springsection9-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/

EXPOSE 8080
CMD ["catalina.sh","run"]