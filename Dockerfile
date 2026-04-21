# backend/Dockerfile

# ---------- Build stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma

RUN npm install

COPY . .

# generate prisma + build TS
RUN npx prisma generate
RUN npm run build


# ---------- Production stage ----------
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

# copy built output
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# prisma client runtime
RUN npx prisma generate

EXPOSE 5000

CMD ["npm", "start"]