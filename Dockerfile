FROM node:16-alpine

WORKDIR /monorepo

COPY package.json yarn.lock lerna.json tsconfig.json .

RUN set -x \
	&& apk update \
	&& apk upgrade \
	&& apk add chromium python3 make g++
