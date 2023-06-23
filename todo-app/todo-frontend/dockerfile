FROM node:16 AS build-stage
WORKDIR /usr/src/app

COPY . .

ENV REACT_APP_BACKEND_URL=http://localhost:8080/api
ENV WATCHPACK_POLLING=true

RUN npm ci --only=production

# Add a new build stage for testing
FROM build-stage AS test-stage
RUN CI=true npm test

RUN npm run build


FROM nginx

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html