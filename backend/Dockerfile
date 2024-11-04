# 
FROM python:3.9

# 
WORKDIR /workspace

# 
COPY ./requirements.txt /workspace/requirements.txt

# 
RUN pip install --no-cache-dir --upgrade -r /workspace/requirements.txt

# 
COPY ./app /workspace/app

# 
CMD ["uvicorn", "app.main:app", "--reload", "--host", "0.0.0.0", "--port", "8080"]