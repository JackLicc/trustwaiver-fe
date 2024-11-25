FROM node:20.2.0-alpine3.18 AS base

FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install


FROM deps AS builder
WORKDIR /app
COPY . .
RUN npm run build


FROM deps AS prod-deps
WORKDIR /app
RUN npm install --production


FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 remix
RUN adduser --system --uid 1001 remix
USER remix

COPY --from=builder --chown=remix:remix /app/server.js ./
COPY --from=prod-deps --chown=remix:remix /app/package*.json ./
COPY --from=prod-deps --chown=remix:remix /app/node_modules ./node_modules
COPY --from=builder --chown=remix:remix /app/build ./build
COPY --from=builder --chown=remix:remix /app/public ./public

ENV NODE_ENV=production

USER remix

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]
