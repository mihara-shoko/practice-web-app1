# 
FROM python:3.9

ARG PORT_FASTAPI=${PORT_FASTAPI}
ARG UID=${UID}

# ENV PORT_FASTAPI=${PORT_FASTAPI}

# 
WORKDIR /workspace

# 
COPY ./requirements.txt /workspace/requirements.txt

# 
RUN pip install --no-cache-dir --upgrade -r /workspace/requirements.txt

# 
COPY ./app /workspace/app

RUN echo "PORT_FASTAPI : ${PORT_FASTAPI}, UID: ${UID}"

# 
# CMD ["uvicorn", "app.main:app", "--reload", "--host", "0.0.0.0", "--port", ${PORT_FASTAPI}]
ENTRYPOINT ["sh", "-c", "uvicorn app.main:app --reload --host 0.0.0.0 --port ${PORT_FASTAPI}"]
