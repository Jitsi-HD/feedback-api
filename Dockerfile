FROM node:15-slim

# Create app directory
WORKDIR /home/node/webapp

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Use non-root permissions
USER node

# Create volume for results
RUN mkdir /home/node/data

# Bundle app source and fix file permissions
COPY --chown=node:node bin routes views app.js ./

ENV FEEDBACK_RESULT_FILE /home/node/data/feedbacks.txt
ENV NODE_ENV production
ENV PORT 3000

EXPOSE ${PORT}

VOLUME /home/node/data

CMD [ "node", "./bin/www" ]
