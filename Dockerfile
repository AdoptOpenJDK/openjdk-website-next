FROM node

# Also exposing VSCode debug ports
EXPOSE 8000 9929 9230

WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
CMD ["npm", "start", "--", "-H", "0.0.0.0" ]
