# Install dependencies
FROM node:18 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build the Next.js app
RUN npm run build

# Serve the app
FROM node:18 as runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
RUN npm install --production
EXPOSE 3000
CMD ["npm", "start"]

