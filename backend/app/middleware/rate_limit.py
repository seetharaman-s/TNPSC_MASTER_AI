import time

from fastapi import HTTPException, Request, status
from starlette.middleware.base import BaseHTTPMiddleware


RATE_LIMIT = 100

WINDOW_SECONDS = 60


class RateLimitMiddleware(BaseHTTPMiddleware):

    requests = {}

    async def dispatch(self, request: Request, call_next):

        ip = request.client.host

        now = time.time()

        history = self.requests.get(ip, [])

        history = [
            timestamp
            for timestamp in history
            if now - timestamp < WINDOW_SECONDS
        ]

        if len(history) >= RATE_LIMIT:

            raise HTTPException(
                status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                detail="Too many requests. Please try again later.",
            )

        history.append(now)

        self.requests[ip] = history

        response = await call_next(request)

        return response